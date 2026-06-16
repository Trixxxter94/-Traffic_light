"use client";
import { PlayerRank } from "../PlayerRank/PlayerRank";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { QuestList } from "../QuestList/QuestList";
import styles from "./PlayerPanel.module.css";
import type { PlayerPanelType } from "./PlayrPanelType";

export const PlayerPanel = ({ quests }: PlayerPanelType) => {
	return (
		<div className={styles.playerPanel}>
			<PlayerRank />
			<ProgressBar />
			<QuestList quests={quests} />
		</div>
	);
};
