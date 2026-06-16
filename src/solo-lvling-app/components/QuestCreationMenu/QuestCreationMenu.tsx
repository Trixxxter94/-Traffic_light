import { useState } from "react";
import { Button } from "@/src/shared/ui/Button";
import { Input } from "@/src/shared/ui/Input";
import type { Quest } from "../../types/quest";
import style from "./QuestCreationMenu.module.css";

type QuestCreationMenuProps = {
	onCreateQuest: (
		title: Quest["title"],
		category: Quest["category"],
		xp: Quest["xp"],
	) => void;
};

export const QuestCreationMenu = ({
	onCreateQuest,
}: QuestCreationMenuProps) => {
	const [title, setTitle] = useState<Quest["title"]>("");
	const [category, setCategory] = useState<Quest["category"]>("body");
	const [xp, setXp] = useState<Quest["xp"]>(50);
	function handleSubmit() {
		onCreateQuest(title, category, xp);
	}
	return (
		<div className={style.QuestCreationMenu}>
			<Input onChange={(event) => setTitle(event.target.value)} type="text" />

			<select
				name="Category"
				onChange={(event) =>
					setCategory(event.target.value as Quest["category"])
				}
			>
				<option value={"discipline"}>discipline</option>
				<option value={"health"}>health</option>
				<option value={"mind"}>mind</option>
			</select>

			<select onChange={(event) => setXp(Number(event.target.value))} name="XP">
				<option value={"50"}>50</option>
				<option value={"100"}>100</option>
				<option value={"150"}>150</option>
			</select>

			<Button type="submit" onClick={handleSubmit}>
				Submit
			</Button>
		</div>
	);
};
