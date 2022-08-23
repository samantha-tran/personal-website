import { createContext, useState } from "react";
import messageData from "../data/MessageData"
import optionsData from "../data/OptionsData"

const MessageContext = createContext()

export const MessageProvider = ({children}) => {

    const [messageHistory, setMessageHistory] = useState([{
        "message": ["Hi there! My name is Samantha. It is nice to meet you"],
        "direction": "incoming"
    }])

    const selectOption = (option) => {
        setMessageHistory([...messageHistory, {
            "message": optionsData.find(op => op.category === option).message,
            "direction": "outgoing"
        }, {
            "message": messageData[option.toLowerCase()],
            "direction": "incoming"
        }])
    }

    return <MessageContext.Provider value={{
        messageHistory,
        setMessageHistory,
        selectOption
    }}>
        {children}
    </MessageContext.Provider>
}

export default MessageContext