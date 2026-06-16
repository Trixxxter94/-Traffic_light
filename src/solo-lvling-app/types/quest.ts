export type Quest = {
	id: string;
	title: string;
	category: "body" | "mind" | "programming" | "discipline" | "health";
	xp: number;
	completed: boolean;
};
export const Quests: Quest[] = [];
