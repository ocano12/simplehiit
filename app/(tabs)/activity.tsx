import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ActivityScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cream" edges={["top", "bottom"]}>
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-[28px] font-semibold text-bark mb-2">Activity</Text>
        <Text className="text-base text-stone">History of your workouts</Text>
      </View>
    </SafeAreaView>
  );
}
