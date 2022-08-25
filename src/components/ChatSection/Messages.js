import moment from 'moment';
import avatar from '../../assets/profile-photo.jpeg'
import MessageContext from '../../context/MessageContext';
import { useContext } from 'react';


import {
    MessageList, 
    Message, 
    Avatar,
    MessageGroup,
    MessageSeparator,
     } from '@chatscope/chat-ui-kit-react';



function Messages() {
    const {messageHistory} = useContext(MessageContext)
    const currentDate = moment().format('dddd, DD MMMM YYYY');

    return (
        <MessageList>
        <MessageSeparator content={currentDate} />
        {
            messageHistory.map((item) => (

                // Single Message
                ((item.message.length === 1) &&
                    <Message model={{
                        message: item.message[0],
                        direction: item.direction,
                        position: "single"
                        }} 
                    >
                        {item.direction === "incoming" && <Avatar src={avatar}/>}
                    </Message>) ||

                // Grouped Message
                ((item.message.length > 1) &&
                    <MessageGroup direction={item.direction} sentTime="just now" avatarPosition="tl">
                        {item.direction === "incoming" && <Avatar src={avatar} name="Lilly" />}
                        <MessageGroup.Messages>
                            {
                                item.message.map((m) => (
                                    <Message model={{message: m}}/>
                                ))
                            }
                        </MessageGroup.Messages>
                    </MessageGroup>
                )
            ))
        }
        
        </MessageList>
    );
}

export default Messages;