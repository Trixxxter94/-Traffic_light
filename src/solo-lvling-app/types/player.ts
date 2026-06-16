export type PlayerStats = {
	level: number;
	rank: "S" | "A" | "B" | "C" | "E" | "F";
	TotalXP: number;
	CompleteQuest: number;
	Health: number;
	Mind: number;
	Strength: number;
};

export const mockedPlayerStats: PlayerStats = {
	level: 1,
	rank: "F",
	TotalXP: 0,
	CompleteQuest: 0,
	Health: 10,
	Mind: 10,
	Strength: 10,
};
