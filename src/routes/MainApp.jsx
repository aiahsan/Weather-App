import { createBrowserHistory } from 'history';
import indexRoutes from './index';
import loginRoutes from './loginRoutes';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  const hist = createBrowserHistory();

const MainApp= ()=>{
    const user=useSelector(x=>x.User)
    useEffect(()=>{
        console.log(user,"usefd");
    },[])

return   <Router history={hist} basename={process.env.REACT_APP_BASEDIR}>
    <Switch>
        {user!=null?loginRoutes.map((prop,key) => {
                //console.log(prop.path + prop.key);
                return ( 
                    <Route
                        path={prop.path}
                        key={key}
                        component={prop.component}
                        exact={true}
                    />
                );
            }):
            indexRoutes.map((prop,key) => {
                //console.log(prop.path + prop.key);
                return ( 
                    <Route
                        path={prop.path}
                        key={key}
                        component={prop.component}
                        exact={true}
                    />
                );
            })
        }
    </Switch>
</Router>

}
export default MainApp;