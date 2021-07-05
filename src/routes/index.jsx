import Home from '../pages/home';
import Login from '../pages/login';
var BASEDIR = process.env.REACT_APP_BASEDIR;
//it is use when user is not log in
var indexRoutes = [
    { path: "/", name: "Login", component: Login },
  ];


export default indexRoutes;
