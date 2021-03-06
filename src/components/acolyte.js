import * as React from 'react';
import { observer ,inject} from 'mobx-react'
import Countdown from 'react-countdown-now';



@inject("store")
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
    const ready = this.props.store.ready
    return (
      <div>
        {ready ? 
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
          </div>:
          <div>
          </div>
        }
      </div>
    );
  }

}

export default Landing;