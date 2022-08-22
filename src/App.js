import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { useState } from 'react';
import {ChatContainer, 
        MessageList, 
        Message, 
        MessageInput,
        ConversationHeader,
        Avatar,
        VoiceCallButton,
        VideoCallButton,
        InfoButton,
        MessageGroup,
        MessageSeparator,
         } from '@chatscope/chat-ui-kit-react';
import MessageData from './data/MessageData';
import avatar from './assets/profile-photo.jpeg'

function App() {

  const [message, setMessage] = useState("introduction")
  const [optionData, setOptions] = useState(MessageData["options"])
  const [messageHistory, setMessageHistory] = useState(MessageData["introduction"]["message"])

  return (
    <div className="App">
      <div style={{
        height: "500px"
      }}>
        <ChatContainer>
          <ConversationHeader>
            <Avatar src={avatar} name="Samantha Tran" status="available"/>
            <ConversationHeader.Content userName="Samantha Tran" info="Active Now" />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>          
          </ConversationHeader>
            <MessageList>
            <MessageSeparator content="Saturday, 30 November 2019" />
            <MessageGroup direction="incoming" sender="Lilly" sentTime="just now" avatarPosition="tl">
              <Avatar src={avatar} name="Lilly" />      
              <MessageGroup.Messages>
                <Message model={{
                  message: "Hello my friend"
                }} />
                <Message model={{
                  message: "Hello my friend"
                }} />
                <Message model={{
                  message: "Hello my friend"
                }} />
                <Message model={{
                  message: "Hello my friend"
                }} />
              </MessageGroup.Messages>
            </MessageGroup>
            <Message model={{
              message: "Hello my friend",
              direction: "outgoing",
              position: "single"
            }} />
          </MessageList>
          <MessageInput placeholder="Type message here" />        
        </ChatContainer>
      </div>
    </div>
  );
}

export default App;
