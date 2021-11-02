import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup'
var BASEDIR = process.env.REACT_APP_BASEDIR;
//it is use when user is not log in
var indexRoutes = [
    { path: "/", name: "Login", component: Login },
    { path: "/register", name: "register", component: Signup },
  ];


export default indexRoutes;
