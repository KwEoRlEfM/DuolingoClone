import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Logo row */}
      <View className="flex-row items-center justify-center mt-6 gap-2">
        <Image
          source={images.mascotLogo}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text className="typography--h3 text-foreground">lingua</Text>
      </View>

      {/* Heading */}
      <View className="px-8 mt-10">
        <Text className="typography--h1 text-foreground">Your AI language</Text>
        <Text className="typography--h1 text-lingua-purple">teacher.</Text>
      </View>

      {/* Subtitle */}
      <Text className="typography--body-md text-muted px-8 mt-3">
        Real conversations, personalized lessons, anytime, anywhere.
      </Text>

      {/* Mascot + floating chat bubbles */}
      <View style={styles.mascotContainer}>
        <Image
          source={images.mascotWelcome}
          style={styles.mascot}
          resizeMode="contain"
        />

        <View style={[styles.bubble, styles.bubbleHello]}>
          <Text className="typography--body-lg text-foreground">Hello!</Text>
        </View>

        <View style={[styles.bubble, styles.bubbleHola]}>
          <Text className="typography--body-lg text-foreground">¡Hola!</Text>
        </View>

        <View style={[styles.bubble, styles.bubbleChinese]}>
          <Text className="typography--body-lg" style={styles.chineseText}>
            你好!
          </Text>
        </View>
      </View>

      {/* Get Started button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/")}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons name="chevron-forward" size={22} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  logoImage: {
    width: 36,
    height: 36,
  },
  mascotContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  mascot: {
    width: 270,
    height: 270,
  },
  bubble: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  bubbleHello: {
    bottom: "22%",
    left: "12%",
  },
  bubbleHola: {
    top: "6%",
    right: "12%",
  },
  bubbleChinese: {
    bottom: "34%",
    right: "10%",
  },
  chineseText: {
    color: "#e85d4a",
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 28,
  },
  button: {
    backgroundColor: "#6c4ef5",
    borderRadius: 18,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 17,
    color: "#ffffff",
  },
});
