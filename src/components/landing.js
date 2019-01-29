import * as React from 'react';
import { observer } from 'mobx-react'
import Countdown from 'react-countdown-now';

@observer
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 20 };
  }

  componentDidMount() {
    this.interval = setInterval(() =>  this.props.store.setpersistentenemies(), 22000);
    this.setState({ seconds: 20 })
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const persistentEnemies = this.props.store.get_pc_persistentEnemies
    return (
      <div>
        Worldstate:
        {persistentEnemies[0] && 
            <div>
            {persistentEnemies.map(acolyte => {
              return(
                <div key={acolyte.id}>
                {acolyte.agentType}
                  <div>
                    Status: {acolyte.isDiscovered ? `Found at ${acolyte.lastDiscoveredAt}`: `Missing`}
                  </div>
                </div>
              )
            })}
            <Countdown
              key={Date.now()}
              date={Date.now() + 20 * 1000}
              renderer={({ seconds }) => {
                return <span>{seconds} seconds</span>;
              }}
            />
          </div>
        }
      </div>
    );
  }

}

export default Landing;