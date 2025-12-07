import React from 'react';
import './chatbox.css' ;


const ChatMess = ({message, sender}) => {
    return(
        <>
       <div>
<<<<<<< HEAD
        {sender === "bot" && <img src="../src/assets/chatbot.png" alt="The chatbot image" />}
        {message}
        {sender === "user" && <img src="../src/assets/user.png" alt="The user's image" />}
=======
        {sender === "bot" && <img src="../src/assets/chatbot.png" alt="The chatbot image" /> }
        {message}
        {sender === "user" && <img src="../src/assets/user.png" alt="The user's image" /> }
>>>>>>> b397e114b29c692f3e5d4107494cbbe875ec7c6a
        </div>
        </>
    )}

       const Chatbox = () => {
     const [chatMessages, setChatMessages] = React.useState([{
<<<<<<< HEAD
           id : "1",  
           message: "Hello chat",
           sender: "user"}, 

=======
           id : "1",
           message: "Hello chat",
           sender: "user"}, 
>>>>>>> b397e114b29c692f3e5d4107494cbbe875ec7c6a
        {    id : "2",
            message: "hello ! may i help you today date ?" ,
            sender : "bot"
    }, 
<<<<<<< HEAD
    {          id : "3" ,
=======
    {          id : "3",
>>>>>>> b397e114b29c692f3e5d4107494cbbe875ec7c6a
             message : "can you help you me with today's date." ,
            sender : "user"
    }, 
    {        id : "4",
          message : "Today's date is october 1" ,
          sender : "bot"
    },
     {
<<<<<<< HEAD
          id :     "5",
=======
          id :  "5",
>>>>>>> b397e114b29c692f3e5d4107494cbbe875ec7c6a
        message : "oh okay  thank you !" ,
        sender :  "user"
    },
    {    id     :      "6",
        message : "You are welcome, how can i help you further or that will be all for now !" ,
        sender : "bot"
    }
] )

          function  messageChat() {
            setChatMessages( [...chatMessages,{
                message : "okay, i think i have more questions." ,
                sender : "user",
                id : crypto.randomUUID()
            }, {
                      message: "Okay please, go ahead !!",
                      sender: "bot",
                      id: crypto.randomUUID()

            }] )
<<<<<<< HEAD
         nkcnknckenknks }
=======
          }
>>>>>>> b397e114b29c692f3e5d4107494cbbe875ec7c6a

        return (    
              <>                  
           <input type="text" placeholder='send me a message now' size={30} />
            <button onClick={messageChat}> click me </button>
           {chatMessages.map((chatMessage) => {
            return ( 
              <ChatMess key={chatMessage.id} sender={chatMessage.sender} message={chatMessage.message}  />
            )
          })}
    </>
)
}




export default Chatbox