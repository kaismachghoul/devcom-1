import React from 'react'
import "./Header.css"
import OldMessages from '../OldMessages.jsx';

const ChatContainer = ({received,oneStack,sentmessage}) => {
    // console.log("===========>",oneStack);
    const roomId = oneStack.room_id
  return (
    <div>
<div className="chat-container">
  <div className='blabla'>
    <div className="chat-wrapper">
      <OldMessages roomId={roomId} />
    {sentmessage.map((mess,idx)=>{
        return (
          <div className="message" key={idx}>
            <div className="message-body">
              <div className="user-info">
                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt={`${mess.name} ${mess.lastname}`} />
                <span className="username">{mess.name} {mess.lastname}:</span>
              </div>
              <p className="text_message">{mess.messages}</p>
            </div>
          </div>
        );
      })} 
      {received.map((mess,idx)=>{
        return (
          <div className="message" key={idx}>
            <div className="message-body">
              <div className="user-info">
                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt={`${mess.name} ${mess.lastname}`} />
                <span className="username">{mess.name} {mess.lastname}:</span>
              </div>
              <p className="text_message">{mess.messages}</p>
            </div>
          </div>
        );
      })} 
    </div>
  </div>
</div>
</div>

  )
}



export default ChatContainer
