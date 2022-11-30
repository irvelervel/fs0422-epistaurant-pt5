import { Navbar, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
// let's create a React Component for just the Navbar!
// I'm going to choose the simplest way for creating this component,
// since it does not need any special ability!
// --> a function returning JSX

// Link when transformed into HTML creates a special <a>CLICK ME</a> tag

// RULES OF HOOKS
// 1) USE HOOKS JUST IN REACT FUNCTIONAL COMPONENTS
// 2) USE HOOKS AT THE TOP LEVEL OF YOUR COMPONENT

const CustomNavbar = ({ subtitle }) => {
  // use HOOKS here!
  const location = useLocation()
  console.log('LOCATION PATHNAME', location.pathname)
  // location has a pathname property storing the current path in the address bar
  // so, this means EVERY COMPONENT can be aware of the current route!

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Epistaurant - {subtitle}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/menu" className="navbar-links">
            <div
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
            >
              Menu
            </div>
          </Link>
          <Link to="/booking" className="navbar-links">
            <div
              className={
                location.pathname === '/booking'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Book a table
            </div>
          </Link>
          <Link to="/admin" className="navbar-links">
            <div
              className={
                location.pathname === '/admin' ? 'nav-link active' : 'nav-link'
              }
            >
              Admin
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// this is an alternative way: allows you to open the body of the
// functional component to do stuff in it (like a console.log())
// before returning the JSX; REMEMBER TO PUT AN EXPLICIT RETURN!

// const CustomNavbar = (props) => {
//   console.log('Hello, this is CustomNavbar speaking!')
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Navbar.Brand href="#home">
//         Epistaurant - {props.subtitle}
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link href="#menu">Menu</Nav.Link>
//           <Nav.Link href="#reservation">Reservation</Nav.Link>
//           <Nav.Link href="#findus">Find us</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }

export default CustomNavbar
