import React, { Component } from 'react';
import Pack from '../Pack/Pack';

class Dashboard extends Component {

  render() {

    return (
      <section>
        <h2>Please select card type:</h2> 
        <Pack title='Goblins' />
      </section>
    );
  }
 
}

export default Dashboard;