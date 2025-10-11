import './chatbox.css'

const ChatMessage = ({message, sender}) => {
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

    const ChatMessages = [{
           id : 1,
           message: "Hello chat",
           sender: "user"
    
        }, 
        {   id : 2,
            message: "hello ! may i help you today date ?" ,
            sender : "bot"
    }, 
    {       id : 3 ,
             message : "can you help you me with today's date." ,
            bot : "user"
    }, 
    {     id : 4,
          message : "Today's date is october 1" ,
          sender : "bot"
    },
     {
        id : 5,
        message : "oh okay  thank you !" ,
        sender : "user"
    },
    {   id : 6,
        message : "You are welcome, how can i help you further or that will be all for now !" ,
        sender : "bot"
    }
];

return(
    <>
    <input type="text" placeholder='send me a message now' size={30} />
    <button>Send</button>
        
            {ChatMessages.map(ChatMessage => (
                <ChatMessage   key={ChatMessage.id} message={ChatMessage.sender} text={ChatMessage.message}  />
            ))}
            
    </>
)
}




export default Chatbox