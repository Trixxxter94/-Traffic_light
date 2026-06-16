import { mockedPlayerStats } from "../../types/player";
export const StatsPanel = () => {
	return (
		<div>
			<ul>
				{Object.entries(mockedPlayerStats).map(([statName, StatValue]) => (
					<li key={statName}>
						{statName} : {StatValue}
					</li>
				))}
			</ul>
		</div>
	);
};
