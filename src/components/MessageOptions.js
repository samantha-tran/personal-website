import { 
  Button
} from "@chatscope/chat-ui-kit-react";
import options from '../data/OptionsData'
import { useContext } from "react";
import MessageContext from "../context/MessageContext";

function MessageOptions() {

  const { selectOption } = useContext(MessageContext)

  return (
    <div className="d-flex p-2 overflow-auto w-100 justify-content-evenly">
          {options.map((item) => (
            <Button onClick={() => { selectOption(item.category) }} className="px-5" border>{item.category}</Button>
          ))}
    </div>
  );
}

export default MessageOptions;