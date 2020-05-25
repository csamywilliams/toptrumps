import React, { useState } from 'react';
import DashboardStyled from './Dashboard.styled';
import Pack from '../Pack/Pack';
import Game from '../Game/Game';

import goblinCover from '../../assets/img/cards/goblins/goblin1.png';
import dinosaurCover from '../../assets/img/cards/dinosaurs/dinosaur1.jpg';

const FIRST_PACK = 'goblins';
const SECOND_PACK = 'dinosaurs';

const Dashboard = () => {
	const [isShown, setIsShown] = useState(false); //TODO: set back to true
	const [pack, setPack] = useState(FIRST_PACK);

	const onClick = (pack) => {
		setPack(pack);
		setIsShown(false);
	};

	return (
		<DashboardStyled>
			{isShown && (
				<div>
					<h2>Select pack of trumps:</h2>
					<div className="dashboard__pack">
						<Pack
							title={FIRST_PACK}
							cover={goblinCover}
							imgAlt="Select goblin pack"
							onClick={(pack) => onClick(pack)}
						/>
						<Pack
							title={SECOND_PACK}
							cover={dinosaurCover}
							imgAlt="Select dinosaur pack"
							onClick={(pack) => onClick(pack)}
						/>
					</div>
				</div>
			)}
			{!isShown && (
				<div>
					<h2>Let's Begin: {pack}</h2>

					<Game pack={pack} />
				</div>
			)}
		</DashboardStyled>
	);
};

export default Dashboard;
