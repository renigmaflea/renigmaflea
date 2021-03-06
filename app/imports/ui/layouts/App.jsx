import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListProfile from '../pages/ListProfile';
import ListItemsAdmin from '../pages/ListItemsAdmin';
import ListCategories from '../pages/ListCategories';
import ReportGuide from '../pages/ReportGuide';
import AddItem from '../pages/AddItem';
import AddNewItem from '../pages/AddNewItem';
import EditItem from '../pages/EditItem';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import AboutUs from '../pages/AboutUs';
import Profile from '../pages/Profile';
import ReportItem from '../pages/ReportItem';
import AdminReports from '../pages/AdminReports';
import TestReport from '../pages/TestReport';
import ListItem from '../pages/ListItem';
import ListHHA from '../pages/ListHHA';
import ListTC from '../pages/ListTC';
import ListTS from '../pages/ListTS';
import ListMISC from '../pages/ListMISC';
import PrivateMessage from '../pages/PrivateMessage';
import Lucky from '../pages/Lucky';


/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/about" component={AboutUs}/>
              <ProtectedRoute path="/listprof" component={ListProfile}/>
              <ProtectedRoute path="/list" component={ListItem}/>
              <ProtectedRoute path="/listcat" component={ListCategories}/>
              <ProtectedRoute path="/listhha" component={ListHHA}/>
              <ProtectedRoute path="/listtc" component={ListTC}/>
              <ProtectedRoute path="/listts" component={ListTS}/>
              <ProtectedRoute path="/listmisc" component={ListMISC}/>
              <ProtectedRoute path="/add" component={AddItem}/>
              {/*<ProtectedRoute path="/lucky" component={Lucky}/>*/}
              <ProtectedRoute path="/edit/:_id" component={EditItem}/>
              <ProtectedRoute path="/reportguide" component={ReportGuide}/>
              <ProtectedRoute path="/report/:_id" component={ReportItem}/>
              <ProtectedRoute path="/message/:_id" component={PrivateMessage}/>
              <AdminProtectedRoute path="/admin" component={ListItemsAdmin}/>
              <ProtectedRoute path="/adminreports" component={AdminReports}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <ProtectedRoute path="/testreport" component={TestReport}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          return isLogged ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
