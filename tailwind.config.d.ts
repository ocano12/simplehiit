declare const tailwindConfig: import("tailwindcss").Config & {
  difficulty: { easy: string; medium: string; intense: string; extreme: string };
  iconColors: { stone: string; bark: string };
};
export default tailwindConfig;
