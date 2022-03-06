import logo from './logo.svg';
import 'antd/dist/antd.css'
import './App.css';
import { Button} from "antd";
import { connect, Provider } from "react-redux";
import { initStore } from "./store";
import {
    Routes,
    Redirect,
    Route,
    BrowserRouter
} from "react-router-dom";
import CandidateListing from "./Container/CandidateListing";
import  Login  from "./Container/Login";

function App() {
  return (
    <div className="App">
      <Provider store={initStore()}>
          <BrowserRouter>
              <Routes>
                  <Route exact path='/' element={< Login/>}/>
                  <Route exact path='/candidate-listing' element={< CandidateListing/>}/>
              </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
