import { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSignIn } from "@clerk/expo";
import { useSSO } from "@clerk/expo";
import * as WebBrowser from "expo-web-browser";
import { images } from "@/constants/images";
import VerificationModal from "@/components/VerificationModal";
import type { Href } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const router = useRouter();
  const { signIn, fetchStatus } = useSignIn();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOAuthLoading, setIsOAuthLoading] = useState(false);

  const handleSignIn = async () => {
    if (!signIn) return;
    setErrorMessage("");
    const { error } = await signIn.emailCode.sendCode({ emailAddress: email });
    if (error) {
      setErrorMessage(error.message ?? "Failed to send code. Please try again.");
      return;
    }
    setShowVerification(true);
  };

  const handleVerify = async (code: string) => {
    if (!signIn) return;
    setVerifyLoading(true);
    setErrorMessage("");
    const { error } = await signIn.emailCode.verifyCode({ code });
    if (error) {
      setVerifyLoading(false);
      setErrorMessage(error.message ?? "Invalid code. Please try again.");
      return;
    }
    if (signIn.status === "complete") {
      await signIn.finalize({
        navigate: ({ decorateUrl }) => {
          const url = decorateUrl("/");
          router.replace(url as Href);
        },
      });
    }
    setVerifyLoading(false);
  };

  const handleResend = async () => {
    if (!signIn) return;
    await signIn.emailCode.sendCode({ emailAddress: email });
  };

  const handleOAuth = useCallback(
    async (strategy: "oauth_google" | "oauth_facebook" | "oauth_apple") => {
      if (isOAuthLoading) return;
      setIsOAuthLoading(true);
      try {
        const { createdSessionId, setActive } = await startSSOFlow({ strategy });
        if (createdSessionId && setActive) {
          await setActive({ session: createdSessionId });
          router.replace("/");
        }
      } finally {
        setIsOAuthLoading(false);
      }
    },
    [isOAuthLoading, startSSOFlow, router]
  );

  const isSubmitting = fetchStatus === "fetching";

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back button */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={26} color="#001132" />
          </TouchableOpacity>

          {/* Heading */}
          <View className="px-6 mt-3">
            <Text className="typography--h2 text-foreground">Welcome back!</Text>
            <Text className="typography--body-md text-muted mt-1">
              Sign in to continue your journey ✨
            </Text>
          </View>

          {/* Mascot */}
          <View className="items-center mt-5">
            <Image
              source={images.mascotAuth}
              style={styles.mascot}
              resizeMode="contain"
            />
          </View>

          {/* Form */}
          <View className="px-6 mt-5">
            {/* Email input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="alex@gmail.com"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
            </View>

            {!!errorMessage && !showVerification && (
              <Text style={styles.inlineError}>{errorMessage}</Text>
            )}

            {/* Sign In button */}
            <TouchableOpacity
              className="bg-lingua-purple rounded-[18px] py-5 items-center"
              style={{ marginTop: 16, opacity: isSubmitting ? 0.6 : 1 }}
              onPress={handleSignIn}
              activeOpacity={0.85}
              disabled={isSubmitting || !email}
            >
              <Text style={styles.buttonText}>
                {isSubmitting ? "Please wait…" : "Sign In"}
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View
              style={[
                styles.row,
                { marginVertical: 20, alignItems: "center" },
              ]}
            >
              <View style={styles.dividerLine} />
              <Text
                className="typography--body-sm text-muted"
                style={{ marginHorizontal: 12 }}
              >
                or continue with
              </Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Social buttons */}
            <SocialButton
              icon="logo-google"
              label="Continue with Google"
              onPress={() => handleOAuth("oauth_google")}
              iconColor="#EA4335"
              disabled={isOAuthLoading}
            />
            <SocialButton
              icon="logo-facebook"
              label="Continue with Facebook"
              onPress={() => handleOAuth("oauth_facebook")}
              iconColor="#1877F2"
              disabled={isOAuthLoading}
            />
            <SocialButton
              icon="logo-apple"
              label="Continue with Apple"
              onPress={() => handleOAuth("oauth_apple")}
              iconColor="#000000"
              disabled={isOAuthLoading}
            />
          </View>

          {/* Sign up link */}
          <View
            className="flex-row justify-center"
            style={{ marginTop: 28, paddingBottom: 16 }}
          >
            <Text className="typography--body-sm text-muted">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => router.replace("/(auth)/sign-up")}
              activeOpacity={0.7}
            >
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showVerification}
        email={email}
        onClose={() => setShowVerification(false)}
        onVerified={handleVerify}
        onResend={handleResend}
        isLoading={verifyLoading}
        errorMessage={showVerification ? errorMessage : ""}
      />
    </SafeAreaView>
  );
}

function SocialButton({
  icon,
  label,
  onPress,
  iconColor,
  disabled,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  onPress: () => void;
  iconColor: string;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled}
      style={[styles.socialButton, { marginBottom: 12, opacity: disabled ? 0.5 : 1 }]}
    >
      <Ionicons name={icon} size={22} color={iconColor} />
      <Text style={styles.socialText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    flexGrow: 1,
  },
  backBtn: {
    marginLeft: 16,
    marginTop: 8,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  mascot: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: "#ffffff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputLabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    color: "#6b7280",
    marginBottom: 2,
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#001132",
    padding: 0,
  },
  buttonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#ffffff",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e5e7eb",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    gap: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  socialText: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#001132",
  },
  linkText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
    color: "#6c4ef5",
  },
  inlineError: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#d32f2f",
    marginTop: 8,
  },
});
