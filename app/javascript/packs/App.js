import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact Page</h2>
  </div>
)

const CustomLink = ({ children, to, exact }) => (
  <Route path={to} exact={exact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}
      <Link to={to}>
        {children}
      </Link>
    </div>
  )}/>
);


class App extends React.Component {
  render() {
    debugger
    return (
      <Router>
        <div>
            <CustomLink exact={true} to="/">
              Home
            </CustomLink>
            <CustomLink to="/contact">
              Contact
            </CustomLink>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    )
  }
}


export default App;
