import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LearnScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 items-center justify-center">
        <Text className="font-poppins-semibold text-xl text-gray-800">Learn</Text>
      </View>
    </SafeAreaView>
  );
}
