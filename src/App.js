import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useVH from 'react-viewport-height';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import {MainContainer} from '@chatscope/chat-ui-kit-react';
import { MessageProvider } from './context/MessageContext';



function App() {

  // mobile vh adjustments
  const vh = useVH();

  return (
      <MessageProvider>
        <MainContainer
        style={{ height: `${100 * vh}px` }}
        responsive> 
            <Chat/>
            <SideBar/>
        </MainContainer>   
      </MessageProvider>      
  );
}

export default App;
