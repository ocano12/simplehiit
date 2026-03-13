import type { Difficulty } from "@/types/workout";
import colors from "@/constants/colors";

const d = colors.difficulty;

/** Hex values for difficulty (Lucide icons). */
export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Easy: d.easy,
  Medium: d.medium,
  Intense: d.intense,
  Extreme: d.extreme,
};

/** Re-export for icon color in screens (stone, bark). */
export const iconColors = colors.iconColors;

export interface DifficultyStyle {
  bg: string;
  text: string;
  label: string;
  iconColor: string;
}

/** Tailwind class names + icon color for each difficulty. Single source for WorkoutCard and workout summary. */
export const DIFFICULTY_STYLES: Record<Difficulty, DifficultyStyle> = {
  Easy: {
    bg: "bg-difficulty-easy/20",
    text: "text-difficulty-easy",
    label: "Easy",
    iconColor: DIFFICULTY_COLORS.Easy,
  },
  Medium: {
    bg: "bg-difficulty-medium/20",
    text: "text-difficulty-medium",
    label: "Medium",
    iconColor: DIFFICULTY_COLORS.Medium,
  },
  Intense: {
    bg: "bg-difficulty-intense/20",
    text: "text-difficulty-intense",
    label: "Intense",
    iconColor: DIFFICULTY_COLORS.Intense,
  },
  Extreme: {
    bg: "bg-difficulty-extreme/20",
    text: "text-difficulty-extreme",
    label: "Extreme",
    iconColor: DIFFICULTY_COLORS.Extreme,
  },
};

