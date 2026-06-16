import styles from "./QuestList.module.css";
import { QuestListItem } from "./QuestListItem";
import type { QuestListType } from "./QuestListType";

export const QuestList = ({ quests }: QuestListType) => {
	return (
		<div className={styles.questList}>
			<ul className={styles.questListUl}>
				{quests.map((quest) => (
					<QuestListItem key={quest.id} quest={quest} />
				))}
			</ul>
		</div>
	);
};
