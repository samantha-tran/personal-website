import avatar from '../assets/profile-photo.jpeg'

import {
    ConversationHeader,
    Avatar,
    VoiceCallButton,
    VideoCallButton,
    InfoButton,
     } from '@chatscope/chat-ui-kit-react';

function ChatHeader() {

  return (
    <ConversationHeader>
      <Avatar src={avatar} name="Samantha Tran" status="available"/>
      <ConversationHeader.Content userName="Samantha Tran" info="Active Now" />
      <ConversationHeader.Actions>
        <VoiceCallButton />
        <VideoCallButton />
        <InfoButton />
      </ConversationHeader.Actions>          
    </ConversationHeader>
  );
}

export default ChatHeader;