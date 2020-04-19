import React, { Component } from 'react';
import DashboardStyled from './Dashboard.styled';
import Pack from '../Pack/Pack';

import goblinCover from '../../assets/img/cards/goblins/goblin1.png';
import dinosaurCover from '../../assets/img/cards/dinosaurs/dinosaur1.jpg';

class Dashboard extends Component {
  render() {
    return (
      <DashboardStyled>
        <h2>Please select card type:</h2>

        <div className="dashboard__pack">
          <Pack
            title="Goblins"
            cover={goblinCover}
            imgAlt="Select goblin pack"
          />
          <Pack
            title="Dinosaurs"
            cover={dinosaurCover}
            imgAlt="Select dinosaur pack"
          />
        </div>
      </DashboardStyled>
    );
  }
}

export default Dashboard;
