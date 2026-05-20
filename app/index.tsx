import { useAuth, useClerk } from "@clerk/expo";
import { Redirect } from "expo-router";
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
      <TouchableOpacity style={styles.button} onPress={() => signOut()} activeOpacity={0.85}>
        <Text style={styles.buttonText}>Sign Out</Text>
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
});
