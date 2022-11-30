import { Component } from 'react'
import withRouter from '../helpers/withRouter'

class ClassComponent extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>CLASS COMPONENT!</h1>
        <p>My location is: {this.props.router.location.pathname}</p>
      </div>
    )
  }
}

export default withRouter(ClassComponent)

// let's use withRouter on ClassComponent
