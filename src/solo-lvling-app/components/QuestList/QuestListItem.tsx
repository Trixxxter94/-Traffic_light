import { Trash2 } from "lucide-react";
import { Button } from "@/src/shared/ui/Button";
import { Input } from "@/src/shared/ui/Input";
import type { Quest } from "../../types/quest";
import styles from "./QuestListItem.module.css";

type ToDoLiType = {
	quest: Quest;
	onChange: () => void;
	onClick: () => void;
};

export const QuestListItem = ({ quest, onChange, onClick }: ToDoLiType) => {
	return (
		<li className={styles.QuestListItemStyle}>
			<Input
				className={styles.checkBoxStyle}
				type="checkbox"
				checked={quest.completed}
				onChange={onChange}
			/>
			{quest.completed ? (
				<p className={styles.completedQuestStyle}>
					<span>{quest.title}</span>
					<span style={{ color: "blue" }}>XP: {quest.xp}</span>
				</p>
			) : (
				<p className={styles.notCompletedQuestStyle}>
					{quest.title}
					<span style={{ color: "blue" }}>XP: {quest.xp}</span>
				</p>
			)}
			<Button
				className={styles.deleteButtonStyle}
				type="button"
				onClick={onClick}
			>
				<Trash2 color="red" size={25} />
			</Button>
		</li>
	);
};
