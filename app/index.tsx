import { useAuth, useClerk } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();
  const { selectedLanguage, clearSelectedLanguage } = useLanguageStore();

  if (!isLoaded) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguage) {
    return <Redirect href="/language-selection" />;
  }

  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Welcome to Lingua!</Text>
      <Text style={styles.subtitle}>Learning: {selectedLanguage.name}</Text>
      <TouchableOpacity
        style={styles.outlineButton}
        onPress={() => signOut()}
        activeOpacity={0.85}
      >
        <Text style={styles.outlineButtonText}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resetButton}
        onPress={clearSelectedLanguage}
        activeOpacity={0.85}
      >
        <Text style={styles.resetButtonText}>Reset Language (Test)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    gap: 20,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#001132",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#6b7280",
  },
  outlineButton: {
    borderWidth: 1.5,
    borderColor: "#6c4ef5",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  outlineButtonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#6c4ef5",
  },
  resetButton: {
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  resetButtonText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#9ca3af",
  },
});
