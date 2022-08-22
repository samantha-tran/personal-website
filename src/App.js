import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import MessageData from './data/MessageData';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import {MainContainer} from '@chatscope/chat-ui-kit-react';


function App() {

  const [message, setMessage] = useState("introduction")
  const [optionData, setOptions] = useState(MessageData["options"])
  const [messageHistory, setMessageHistory] = useState(MessageData["introduction"]["message"])

  return (
    <div className="App">
      <div style={{
        height: "100vh",
      }}>
        <MainContainer 
        responsive
        style={{fontSize: "1.1em"}}> 
            <Chat/>
            <SideBar/>
        </MainContainer>         
      </div>
    </div>
  );
}

export default App;
