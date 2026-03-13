import { View, Text, ScrollView, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Zap, Repeat, Dumbbell, Clock } from "lucide-react-native";
import { DUMMY_WORKOUTS } from "@/data/workouts";
import { DIFFICULTY_STYLES, iconColors } from "@/constants/difficulty";

function formatDuration(seconds: number): string {
	const m = Math.floor(seconds / 60);
	const s = seconds % 60;
	return s > 0 ? `${m}:${s.toString().padStart(2, "0")}` : `${m} min`;
}

export default function WorkoutSummaryScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const router = useRouter();
	const workout = DUMMY_WORKOUTS.find((w) => w.id === id);

	if (!workout) {
		return (
			<View className="flex-1 justify-center items-center p-6" style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
				<Text className="text-stone" style={{ color: "#78716C" }}>
					Workout not found
				</Text>
				<Pressable
					onPress={() => router.back()}
					className="mt-4 py-2 px-4 bg-brand rounded-xl"
					style={{ marginTop: 16, paddingVertical: 8, paddingHorizontal: 16, backgroundColor: "#F97316", borderRadius: 12 }}
				>
					<Text className="text-white font-semibold" style={{ color: "#FFFFFF", fontWeight: "600" }}>
						Go back
					</Text>
				</Pressable>
			</View>
		);
	}

	const diff = DIFFICULTY_STYLES[workout.difficulty];

	return (
		<View className="flex-1" style={{ flex: 1 }}>
			<View
				className="flex-row items-center px-4 py-3 border-b border-border bg-surface"
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: 16,
					paddingVertical: 12,
					borderBottomWidth: 1,
					borderBottomColor: "#E7E5E4",
					backgroundColor: "#FFFFFF",
				}}
			>
				<Pressable onPress={() => router.back()} className="p-2 -ml-2" hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
					<ChevronLeft size={24} color={iconColors.bark} />
				</Pressable>
				<Text
					className="text-bark font-semibold text-lg flex-1 ml-1"
					numberOfLines={1}
					style={{ color: "#57534E", fontWeight: "600", fontSize: 18, flex: 1, marginLeft: 4 }}
				>
					{workout.name}
				</Text>
			</View>

			<ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
				<View className="p-4" style={{ padding: 16 }}>
					<View
						className="flex-row items-center gap-2 mb-3"
						style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 }}
					>
						<View
							className={`rounded-full px-3 py-1.5 flex-row items-center gap-1.5 ${diff.bg}`}
							style={{
								backgroundColor: "#f5f5f4",
								borderRadius: 9999,
								paddingHorizontal: 12,
								paddingVertical: 6,
								flexDirection: "row",
								alignItems: "center",
								gap: 6,
							}}
						>
							<Zap size={14} color={diff.iconColor} />
							<Text className={`text-sm font-semibold ${diff.text}`} style={{ fontSize: 14, fontWeight: "600", color: diff.iconColor }}>
								{workout.difficulty}
							</Text>
						</View>
					</View>
					<Text className="text-stone text-base mb-6" style={{ color: "#78716C", fontSize: 16, marginBottom: 24 }}>
						{workout.description}
					</Text>

					<View className="flex-row flex-wrap gap-6 mb-6" style={{ flexDirection: "row", flexWrap: "wrap", gap: 24, marginBottom: 24 }}>
						<View className="flex-row items-center gap-2" style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
							<Repeat size={20} color={iconColors.stone} />
							<Text className="text-stone" style={{ color: "#78716C" }}>
								{workout.cycles} cycles
							</Text>
						</View>
						<View className="flex-row items-center gap-2" style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
							<Dumbbell size={20} color={iconColors.stone} />
							<Text className="text-stone" style={{ color: "#78716C" }}>
								{workout.exercises.length} exercises
							</Text>
						</View>
						<View className="flex-row items-center gap-2" style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
							<Clock size={20} color={iconColors.stone} />
							<Text className="text-stone" style={{ color: "#78716C" }}>
								{formatDuration(workout.totalDuration)}
							</Text>
						</View>
					</View>

					<Text
						className="text-bark font-semibold text-base mb-2"
						style={{ color: "#57534E", fontWeight: "600", fontSize: 16, marginBottom: 8 }}
					>
						Exercises
					</Text>
					<View
						className="rounded-xl bg-surface border border-border overflow-hidden"
						style={{ borderRadius: 12, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E7E5E4", overflow: "hidden" }}
					>
						{workout.exercises.map((name, i) => (
							<View
								key={name}
								className={`flex-row items-center py-3 px-4 ${i < workout.exercises.length - 1 ? "border-b border-border" : ""}`}
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 12,
									paddingHorizontal: 16,
									borderBottomWidth: i < workout.exercises.length - 1 ? 1 : 0,
									borderBottomColor: "#E7E5E4",
								}}
							>
								<Text className="text-stone w-8" style={{ color: "#78716C", width: 32 }}>
									{i + 1}.
								</Text>
								<Text className="text-bark flex-1" style={{ color: "#57534E", flex: 1 }}>
									{name}
								</Text>
							</View>
						))}
					</View>
				</View>
			</ScrollView>

			<View
				className="px-4 pt-4 pb-6 bg-cream border-t border-border"
				style={{
					paddingHorizontal: 16,
					paddingTop: 16,
					paddingBottom: 24,
					backgroundColor: "#FAFAF9",
					borderTopWidth: 1,
					borderTopColor: "#E7E5E4",
				}}
			>
				<Pressable
					onPress={() => {
						// TODO: start workout session
					}}
					className="bg-brand py-4 rounded-2xl active:opacity-90"
					style={{ backgroundColor: "#F97316", paddingVertical: 16, borderRadius: 16 }}
				>
					<Text
						className="text-white text-center text-lg font-semibold"
						style={{ color: "#FFFFFF", textAlign: "center", fontSize: 18, fontWeight: "600" }}
					>
						Start
					</Text>
				</Pressable>
			</View>
		</View>
	);
}
