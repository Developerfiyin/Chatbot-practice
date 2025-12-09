import React from 'react';
import './chatbox.css' ;


const ChatMess = ({message, sender}) => {
    return(
        <>
        <section>
       <div className='py-8 px-4 m-2 border-4'>
        {sender === "bot" && <img src="../src/assets/chatbot.png" alt="The chatbot image" />}
        {message}
        {sender === "user" && <img src="../src/assets/user.png" alt="The user's image" />}
        {sender === "bot" && <img src="../src/assets/chatbot.png" alt="The chatbot image" /> }
        {message}
        {sender === "user" && <img src="../src/assets/user.png" alt="The user's image" /> }
        </div>
        
    )} 

       const Chatbox = () => {
     const [chatMessages, setChatMessages] = React.useState([{
           id : "1",  
           message: "Hello chat",
           sender: "user"}, 
        {    id : "2",
            message: "hello ! may i help you today date ?" ,
            sender : "bot"
    }, 
    {          id : "3",
             message : "can you help you me with today's date." ,
            sender : "user"
    }, 
    {        id : "4",
          message : "Today's date is october 1" ,
          sender : "bot"
    },
     {
          id :  "5",
        message : "oh okay  thank you !" ,
        sender :  "user"
    },
    {    id     :  "6",
        message : "You are welcome, how can i help you further or that will be all for now !" ,
        sender : "bot"
    }
] )
          function  messageChat() {
            setChatMessages( [... chatMessages,{
                message : "okay, i think i have more questions." ,
                sender : "user",
                id : crypto.randomUUID()
            }, {
                 message: "Okay please, go ahead !!",
               sender: "bot",
                id: crypto.randomUUID()
            }] )
 
         }
        return (    
              <div>                  
           <input className='border-2 mr-3 m-3 w-60 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-full '
            type="text" placeholder='send me a message now' size={30} />
            <button className='border-4 bg-blue-600' onClick={messageChat}> click me </button>
           {chatMessages.map((chatMessage) => {
            return ( 
              <ChatMess key={chatMessage.id} sender={chatMessage.sender} message={chatMessage.message}  />
            )
          })}
      </div>
    </ section>
)
}




export default Chatbox