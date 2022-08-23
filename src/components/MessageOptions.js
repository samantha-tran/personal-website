import { 
  Button
} from "@chatscope/chat-ui-kit-react";
import options from '../data/OptionsData'

function MessageOptions() {

  return (
    <div className="d-flex p-2 overflow-auto w-100 justify-content-evenly">
          {options.map((item) => (
            <Button className="px-5" border>{item.category}</Button>
          ))}
    </div>
  );
}

export default MessageOptions;