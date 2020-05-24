import React, { useState } from 'react';
import DashboardStyled from './Dashboard.styled';
import Pack from '../Pack/Pack';

import goblinCover from '../../assets/img/cards/goblins/goblin1.png';
import dinosaurCover from '../../assets/img/cards/dinosaurs/dinosaur1.jpg';

const FIRST_PACK = 'goblins';

const Dashboard = () => {
  const [pack, setPack] = useState(FIRST_PACK);

  return (
    <DashboardStyled>
      <h2>Please select card type:</h2>

      <div className="dashboard__pack">
        <Pack
          title={FIRST_PACK}
          cover={goblinCover}
          imgAlt="Select goblin pack"
          onClick={() => {}}
        />
        <Pack
          title="Dinosaurs"
          cover={dinosaurCover}
          imgAlt="Select dinosaur pack"
          onClick={() => {}}
        />
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
