import { memo } from "react";
import { View, Text, Pressable } from "react-native";
import { Zap, Repeat, Dumbbell, Clock } from "lucide-react-native";
import type { Workout } from "@/types/workout";
import { DIFFICULTY_STYLES, iconColors } from "@/constants/difficulty";

function formatDuration(seconds: number): string {
	const m = Math.floor(seconds / 60);
	const s = seconds % 60;
	return s > 0 ? `${m}:${s.toString().padStart(2, "0")}` : `${m} min`;
}

interface WorkoutCardProps {
	workout: Workout;
	onPress?: (id: string) => void;
}

function WorkoutCardComponent({ workout, onPress }: WorkoutCardProps) {
	const diff = DIFFICULTY_STYLES[workout.difficulty];

	return (
		<Pressable
			onPress={() => onPress?.(workout.id)}
			className="rounded-2xl bg-surface border border-border overflow-hidden mb-4 shadow-sm active:opacity-90"
			style={{ backgroundColor: "#FFFFFF", borderRadius: 16, borderWidth: 1, borderColor: "#E7E5E4", marginBottom: 16, overflow: "hidden" }}
		>
			<View className="p-4" style={{ padding: 16 }}>
				<View className="flex-row items-center justify-between mb-2" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
					<Text className="text-xl font-semibold text-bark flex-1" numberOfLines={1} style={{ fontSize: 20, fontWeight: "600", color: "#57534E", flex: 1 }}>
						{workout.name}
					</Text>
					<View className={`rounded-full px-3 py-1 flex-row items-center gap-1 ${diff.bg}`} style={{ backgroundColor: "#f5f5f4", borderRadius: 9999, paddingHorizontal: 12, paddingVertical: 4, flexDirection: "row", alignItems: "center", gap: 4 }}>
						<Zap size={12} color={diff.iconColor} />
						<Text className={`text-xs font-semibold ${diff.text}`} style={{ fontSize: 12, fontWeight: "600", color: diff.iconColor }}>{diff.label}</Text>
					</View>
				</View>
				<Text className="text-stone text-sm mb-4" numberOfLines={2} style={{ color: "#78716C", fontSize: 14, marginBottom: 16 }}>
					{workout.description}
				</Text>
				<View className="flex-row flex-wrap gap-4" style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
					<View className="flex-row items-center gap-1.5" style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
						<Repeat size={16} color={iconColors.stone} />
						<Text className="text-stone text-sm" style={{ color: "#78716C", fontSize: 14 }}>{workout.cycles} cycles</Text>
					</View>
					<View className="flex-row items-center gap-1.5" style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
						<Dumbbell size={16} color={iconColors.stone} />
						<Text className="text-stone text-sm" style={{ color: "#78716C", fontSize: 14 }}>{workout.exercises.length} exercises</Text>
					</View>
					<View className="flex-row items-center gap-1.5" style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
						<Clock size={16} color={iconColors.stone} />
						<Text className="text-stone text-sm" style={{ color: "#78716C", fontSize: 14 }}>{formatDuration(workout.totalDuration)}</Text>
					</View>
				</View>
			</View>
		</Pressable>
	);
}

export const WorkoutCard = memo(WorkoutCardComponent);
