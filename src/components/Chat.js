import avatar from '../assets/profile-photo.jpeg'
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


function Chat() {
  return (
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
  );
}

export default Chat;