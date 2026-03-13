import type { Workout } from "@/types/workout";

function computeTotalDuration(w: {
  warmupDuration: number;
  cycles: number;
  workDuration: number;
  restDuration: number;
}): number {
  return w.warmupDuration + w.cycles * (w.workDuration + w.restDuration);
}

export const DUMMY_WORKOUTS: Workout[] = [
  {
    id: "1",
    name: "Quick Fire",
    difficulty: "Easy",
    warmupDuration: 60,
    cycles: 4,
    workDuration: 20,
    restDuration: 40,
    exercises: ["Jumping jacks", "High knees", "Mountain climbers", "Butt kicks"],
    description: "A short intro HIIT session to get your heart rate up. Perfect for beginners or a light morning burn.",
    totalDuration: computeTotalDuration({
      warmupDuration: 60,
      cycles: 4,
      workDuration: 20,
      restDuration: 40,
    }),
  },
  {
    id: "2",
    name: "Full Body Blast",
    difficulty: "Medium",
    warmupDuration: 90,
    cycles: 5,
    workDuration: 45,
    restDuration: 15,
    exercises: ["Burpees", "Squat jumps", "Push-ups", "Lunges", "Plank hold"],
    description: "Classic HIIT targeting legs, core, and upper body. Five rounds of work and short rest.",
    totalDuration: computeTotalDuration({
      warmupDuration: 90,
      cycles: 5,
      workDuration: 45,
      restDuration: 15,
    }),
  },
  {
    id: "3",
    name: "Tabata Inferno",
    difficulty: "Intense",
    warmupDuration: 120,
    cycles: 8,
    workDuration: 20,
    restDuration: 10,
    exercises: ["Sprint in place", "Burpees", "Jump squats", "Mountain climbers"],
    description: "True Tabata protocol: 20s all-out, 10s rest, 8 rounds. Not for the faint of heart.",
    totalDuration: computeTotalDuration({
      warmupDuration: 120,
      cycles: 8,
      workDuration: 20,
      restDuration: 10,
    }),
  },
  {
    id: "4",
    name: "Extreme 20",
    difficulty: "Extreme",
    warmupDuration: 90,
    cycles: 10,
    workDuration: 60,
    restDuration: 20,
    exercises: ["Burpees", "Box jumps", "Battle ropes", "Kettlebell swings", "Sprints"],
    description: "Max effort workout. Long work intervals and minimal rest. Only when you're ready to go all in.",
    totalDuration: computeTotalDuration({
      warmupDuration: 90,
      cycles: 10,
      workDuration: 60,
      restDuration: 20,
    }),
  },
];
