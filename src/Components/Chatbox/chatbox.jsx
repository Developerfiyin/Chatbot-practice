import './chatbox.css'

const ChatMess = ({message, sender}) => {
    return(
        <>
       <div>
        {sender === "bot" && <img src="../src/assets/chatbot.png" alt="The chatbot image" /> }
        {message}
        {sender === "user" && <img src="../src/assets/user.png" alt="The user's image" /> }
        </div>
        </>
    );
}

       const Chatbox = () => {
        const butto = () => {
            alert("what is going on ?")
        }

      const chatMessages = [{
           id : "1",
           message: "Hello chat",
           sender: "user"
    
        }, 
        {    id : "2",
            message: "hello ! may i help you today date ?" ,
            sender : "bot"
    }, 
    {          id : "3" ,
             message : "can you help you me with today's date." ,
            sender : "user"
    }, 
    {        id : "4",
          message : "Today's date is october 1" ,
          sender : "bot"
    },
     {
          id :     "5",
        message : "oh okay  thank you !" ,
        sender :  "user"
    },
    {    id     :      "6",
        message : "You are welcome, how can i help you further or that will be all for now !" ,
        sender : "bot"
    }
];
    
        return (
              <>
           <input type="text" placeholder='send me a message now' size={30} />
            <button oncli={butto}>Send gini</button>
           {chatMessages.map((chatMessage) => {
            return ( 
              <ChatMess key={chatMessage.id} sender={chatMessage.sender} message={chatMessage.message}  />
            )
          })}
    </>
)
}




export default Chatbox