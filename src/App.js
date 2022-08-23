import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import {MainContainer} from '@chatscope/chat-ui-kit-react';
import { MessageProvider } from './context/MessageContext';


function App() {
  return (
      <MessageProvider>
        <MainContainer
        className="vh-100" 
        responsive> 
            <Chat/>
            <SideBar/>
        </MainContainer>   
      </MessageProvider>      
  );
}

export default App;
