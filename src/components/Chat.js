import { useContext } from 'react';
import MessageOptions from './MessageOptions';
import MessageContext from '../context/MessageContext';
import Messages from './Messages';
import ChatHeader from './ChatHeader';

import {ChatContainer, 
    MessageList, 
    MessageInput,
    InputToolbox,
    ConversationHeader,
     } from '@chatscope/chat-ui-kit-react';

function Chat() {

  return (
    <ChatContainer>
    <ChatHeader as={ConversationHeader}/>
    <Messages as={MessageList}/>
    <InputToolbox>
          <MessageOptions/>
    </InputToolbox>
    <MessageInput disabled placeholder="Choose an option below" />
  </ChatContainer>
  );
}

export default Chat;