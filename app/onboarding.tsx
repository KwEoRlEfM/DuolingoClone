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
          className="w-9 h-9"
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
      <View className="flex-1 items-center justify-center relative">
        <Image
          source={images.mascotWelcome}
          className="w-[270px] h-[270px]"
          resizeMode="contain"
        />

        <View
          className="absolute bg-white rounded-[20px] px-4 py-[10px] bottom-[22%] left-[12%]"
          style={styles.shadow}
        >
          <Text className="typography--body-lg text-foreground">Hello!</Text>
        </View>

        <View
          className="absolute bg-white rounded-[20px] px-4 py-[10px] top-[6%] right-[12%]"
          style={styles.shadow}
        >
          <Text className="typography--body-lg text-foreground">¡Hola!</Text>
        </View>

        <View
          className="absolute bg-white rounded-[20px] px-4 py-[10px] bottom-[34%] right-[10%]"
          style={styles.shadow}
        >
          <Text className="typography--body-lg" style={{ color: "#e85d4a" }}>
            你好!
          </Text>
        </View>
      </View>

      {/* Get Started button */}
      <View className="px-6 pb-7">
        <TouchableOpacity
          className="bg-lingua-purple rounded-[18px] py-5 flex-row items-center justify-center gap-2"
          onPress={() => router.push("/")}
          activeOpacity={0.85}
        >
          <Text
            className="text-white text-[17px]"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Get Started
          </Text>
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
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
});
