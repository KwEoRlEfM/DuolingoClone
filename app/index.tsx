import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center gap-6">
      <Text className="typography--h1 text-lingua-purple">Lingua</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/onboarding")}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>View Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6c4ef5",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 28,
  },
  buttonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#ffffff",
  },
});
