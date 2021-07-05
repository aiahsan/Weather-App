import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store,perssistor} from './redux/store'
import Main from './routes/MainApp'

function App() {
  return (
    <Provider store={ store}>
    <PersistGate persistor={perssistor}>
    <div className="App">
    {/* <Location onError={(error) => console.log(error)} ref={innerRef} /> */}
        <Main/>
   </div>
   
    </PersistGate>
    </Provider>  
  );
}

export default App;
