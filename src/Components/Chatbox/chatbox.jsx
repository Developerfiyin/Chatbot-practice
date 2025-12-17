import React from 'react';
import './chatbox.css' ;

const ChatMess = ({message, sender}) => {
    return(
        <>
        <section className='py-6 px-4 m-4 font-medium text-gray-600 text-center rounded-lg bg-green-200'> 
       <div className=' text-teal-600'>
        {sender === "bot" && <img src="../src/assets/chatbot.png" alt="The chatbot image" /> }
        {message}
        {sender === "user" && <img src="../src/assets/user.png" alt="The user image" /> }
        </div>
        </section>
        </>
    )}

       const Chatbox = () => {
     const [chatMessages, setChatMessages] = React.useState([{
           id : "1",
           message: "Hello chat!",
           sender: "user"}, 
        {    id : "2",
            message: "hello! how may i help you today?" ,
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
        message : "oh okay thank you!" ,
        sender :  "user"
    },
    {    id  : "6",
        message : "You are welcome! how can i help you further? or that will be all for now!" ,
        sender : "bot"
    } 
] )

          function  messageChat() {
            setChatMessages([...chatMessages,{
                message : "okay, i think i have more questions." ,
                sender : "user",
                id : crypto.randomUUID()
            }, {
                      message: "Okay please, go
                      sender: "bot",
                      id: crypto.randomUUID()
            }, {
              message:  "What month is a 3 letter word",
              sender : "user",
              id : crypto.randomUUID()
            }, {
              id: crypto.randomUUID(),
              sender: "bot",
              message: "The only month that has 3 letters is the month of May."

            }])
          }

        return (   
              <>                  
           <input type="text"
            className='m-4 py-2 rounded-full outline-2 px-6 outline-green-200 focus:outline-none focus:ring-2 focus:ring-green-600'
            placeholder='send me a message now' size={30} />
            <button className='py-2 px-4 bg-green-300 ease-in-out duration-300 rounded-md m-4 hover:bg-green-400 hover:text-gray-300 font-semibold text-base text-gray-400' 
             onClick={messageChat}>Click me</button>
           {chatMessages.map((chatMessage) => {
            return ( 
              <ChatMess key={chatMessage.id} sender={chatMessage.sender} message={chatMessage.message}/>
            )
          })}

    </>
) 
}




export default Chatbox