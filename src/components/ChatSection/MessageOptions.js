import { 
  Button,
  AttachmentButton
} from "@chatscope/chat-ui-kit-react";
import { useContext } from "react";
import MessageContext from "../../context/MessageContext";
import options from '../../data/OptionsData'
import Resume from '../../assets/SamanthaTran-Resume.pdf'


function MessageOptions() {

  const { selectOption } = useContext(MessageContext)

  return (
    <div className="d-flex p-2 overflow-auto">
          {options.map((item) => (
            <Button onClick={() => { selectOption(item.category) }} className="px-5" border>{item.category}</Button>
          ))}
          <a href={Resume} rel="noopener noreferrer" target="_blank"><AttachmentButton/></a>

    </div>
  );
}

export default MessageOptions;