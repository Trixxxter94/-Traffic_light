"use client";
import { useState } from "react";
import { PlayerPanel } from "./components/PlayerPanel/PlayerPanel";
import { QuestCreationMenu } from "./components/QuestCreationMenu/QuestCreationMenu";
import { StatsPanel } from "./components/StatsPanel/ StatsPanel";
import styles from "./SoloLvlingApp.module.css";
import { type Quest, Quests } from "./types/quest";

export const SoloLvlingApp = () => {
	const [quests, setQuests] = useState();
	useEffect(() => {
		localStorage.setItem("ToDoItems", JSON.stringify(quests));
	}, [quests])

	
	function createQuest(newQuest: Quest) {
		setQuests((prevQuests) => [...prevQuests, newQuest]);
	}
	
	
	function handleCreateQuest(
		title: Quest["title"],
		category: Quest["category"],
		xp: Quest["xp"],
	) {
		const newQuest: Quest = {
			id: crypto.randomUUID(),
			title,
			category,
			xp,
			completed: false,
		};

		createQuest(newQuest);
	}

	return (
		<div className={styles.soloLvlingApp}>
			<QuestCreationMenu onCreateQuest={handleCreateQuest} />
			<PlayerPanel quests={quests} />
			<StatsPanel />
		</div>
	);
};
