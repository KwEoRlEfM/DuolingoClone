import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

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

  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Welcome to Lingua!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/language-selection")}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>Choose a Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlineButton} onPress={() => signOut()} activeOpacity={0.85}>
        <Text style={styles.outlineButtonText}>Sign Out</Text>
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
  button: {
    backgroundColor: "#6c4ef5",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  buttonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#ffffff",
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
});
