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
        message: "Hello chat",
         sender: "user"
    }, { message: "hello ! may i help you today date ?" ,
        sender : "bot"
    }, {
        message : "can you help you me with today's date." ,
        bot : "user"
    }, {
          message : "Today's date is october 1" ,
          sender : "bot"
    }, {
        message : "oh okay  thank you !" ,
        sender : "user"
    } , {
        message : "You are welcome, how can i help you further or that will be all for now !" ,
        sender : "bot"
    }
];

return(
    <>
    <input type="text" placeholder='send me a message now' size={30} />
    <button>Send</button>

    <ChatMessage 
    message="Hello chat"
     sender="user"/>
    <ChatMessage 
    message="hello! How may i help you today?"
     sender="bot"/>
    <ChatMessage 
     message="can you help me with today's date?" 
     sender="user"/>
    <ChatMessage 
    message="Today's date is october 1"
     sender="bot"/>
    <ChatMessage 
    message="Oh okay very well, thank you!" 
    sender="user" />
    <ChatMessage
     message="You are welcome! how can i help you more!" 
     sender="bot"/>    
    </>
)
}




export default Chatbox