import React, { useState, useRef, useEffect } from 'react';
import './ChatBox.css';

const MAX_CONVERSATION_PAIRS = 2; // Set your desired maximum number of conversation pairs

const ChatBox = () => {
  const [conversation, setConversation] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatBoxRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newConversation = [...conversation, { user: inputValue, bot: 'Bot response' }];
      setConversation(newConversation.slice(-MAX_CONVERSATION_PAIRS));
      setInputValue('');
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  const handleRefresh = () => {
    setConversation([]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat box when conversation changes
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [conversation]);

  return (
    <div className="chat-box-container">
      <div className="chat-header">
        <h2>Still not convinced?</h2>
        <p>Ask our resident Hoosier specialist anything you want to know about Indy.</p>
      </div>
      <div className="chat-box" ref={chatBoxRef}>
        {conversation.map((pair, index) => (
          <React.Fragment key={index}>
            <div className="message user-message">{pair.user}</div>
            <div className="message bot-message">{pair.bot}</div>
          </React.Fragment>
        ))}
      </div>
      <div className="input-container">
        <button onClick={handleRefresh}>Refresh</button>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
