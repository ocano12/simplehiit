import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cream" edges={["top", "bottom"]}>
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-[28px] font-semibold text-bark">Profile</Text>
      </View>
    </SafeAreaView>
  );
}
