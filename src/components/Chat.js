import {ChatHeader, MessageOptions, Messages} from './ChatSection'
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
    <MessageInput disabled placeholder="Choose an option below" attachButton={false}/>
  </ChatContainer>
  );
}

export default Chat;