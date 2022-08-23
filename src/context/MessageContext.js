import { createContext, useState } from "react";

const MessageContext = createContext()

export const MessageProvider = ({children}) => {

    const [messageHistory, setMessageHistory] = useState([{
        "message": ["Hi there! My name is Samantha. It is nice to meet you"],
        "direction": "incoming"
    }])

    const addOutgoingMessage = (option) => {
        setMessageHistory([...messageHistory, {
            "message": "test",
            "direction": "outgoing",
            "position": "single"
        }])
    }

    return <MessageContext.Provider value={{
        messageHistory,
        setMessageHistory,
        addOutgoingMessage
    }}>
        {children}
    </MessageContext.Provider>
}

export default MessageContext