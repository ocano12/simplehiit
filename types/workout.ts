export type Difficulty = "Easy" | "Medium" | "Intense" | "Extreme";

export interface Workout {
  id: string;
  name: string;
  difficulty: Difficulty;
  warmupDuration: number; // seconds
  cycles: number;
  workDuration: number; // seconds
  restDuration: number; // seconds
  exercises: string[];
  description: string;
  totalDuration: number; // seconds (computed: warmup + cycles * (work + rest))
}
