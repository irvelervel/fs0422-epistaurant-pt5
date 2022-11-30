import { useLocation, useNavigate, useParams } from 'react-router-dom'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

export default withRouter

// withRouter returns a HOC (Higher Order Component)
// it is useful for enriching a class component with router props!
