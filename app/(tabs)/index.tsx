import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cream" edges={["top", "bottom"]}>
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-[28px] font-semibold mb-2 text-bark">Simple Hiit</Text>
        <Text className="text-base text-stone">Ready to build.</Text>
      </View>
    </SafeAreaView>
  );
}
