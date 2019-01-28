import * as React from 'react';
import { inject, observer } from 'mobx-react'
import { action } from 'mobx'

@inject('Worldstate')
@observer
class Landing extends React.Component {
  render() {
    return (
      <div>
        Worldstate:
        {console.log(this.props.store.pc_worldstate)}
      </div>
    );
  }

}

export default Landing;