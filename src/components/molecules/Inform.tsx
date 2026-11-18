import { Message } from "../atom/message/Message.tsx";
import { TotalTime } from "../atom/totalTime/TotalTime.tsx";

export const Inform = (props) => {
  const { message, totalTime } = props;
  // console.log(totalTime);
  return (
    <div>
      <Message message={message}/>
      <TotalTime totalTime={totalTime}/>
    </div>
  );
};