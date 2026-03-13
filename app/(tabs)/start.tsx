import { useCallback } from "react";
import { FlatList, View, Text } from "react-native";
import { useRouter, type Href } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { WorkoutCard } from "../../components/WorkoutCard";
import { DUMMY_WORKOUTS } from "../../data/workouts";

export default function StartScreen() {
	const router = useRouter();
	const handleWorkoutPress = useCallback(
		(id: string) => {
			router.push(`/workout/${id}` as Href);
		},
		[router]
	);

	return (
		<SafeAreaView className="flex-1 bg-cream" edges={["top", "bottom"]} style={{ flex: 1, backgroundColor: "#FAFAF9" }}>
			<View className="px-4 pt-4 pb-2" style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 }}>
				<Text className="text-2xl font-semibold text-bark" style={{ fontSize: 24, fontWeight: "600", color: "#57534E" }}>
					Choose a workout
				</Text>
				<Text className="text-stone text-sm mt-0.5" style={{ color: "#78716C", fontSize: 14, marginTop: 2 }}>
					Tap to start
				</Text>
			</View>
			<FlatList
				data={DUMMY_WORKOUTS}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <WorkoutCard workout={item} onPress={handleWorkoutPress} />}
				contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32, paddingTop: 8 }}
				showsVerticalScrollIndicator={false}
			/>
		</SafeAreaView>
	);
}
