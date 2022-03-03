import logo from './logo.svg';
import 'antd/dist/antd.css'
import './App.css';
import { Button} from "antd";
import { connect, Provider } from "react-redux";
import { initStore } from "./store";
import CandidateListing from "./Container/CandidateListing";

function App() {
  return (
    <div className="App">
      <Provider store={initStore()}>
         <CandidateListing/>
      </Provider>
    </div>
  );
}

export default App;
