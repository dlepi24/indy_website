import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './ChatBox.css';

const MAX_CONVERSATION_PAIRS = 1;

const ChatBox = () => {
  const [conversation, setConversation] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      try {
        setLoading(true);

        const response = await axios.post(
          'https://indy-specialist.openai.azure.com/openai/deployments/Indy-Specialist/chat/completions?api-version=2023-07-01-preview',
          {
            messages: [
              { role: 'system', content: 'Your name is HoosierHelper and you are an AI Assistant. Your responses will be viewed within a chat bubble format. You are an expert in all things related to Indianapolis. Please format all responses in markdown.' },
              { role: 'user', content: inputValue },
            ],
            temperature: 0.7,
            max_tokens: 350,
            top_p: 0.95,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: null,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'api-key': '5b196d222c9a4a3c9655a25c6680b2ec',
            },
          }
        );

        const botResponse = response.data.choices[0].message.content;

        const newConversation = [...conversation, { user: inputValue, bot: botResponse }];
        setConversation(newConversation.slice(-MAX_CONVERSATION_PAIRS));
        setInputValue('');
        setLoading(false);
        window.scrollTo(0, document.body.scrollHeight);
      } catch (error) {
        console.error('Error making API request:', error);
        setLoading(false);
        // Handle error as needed
      }
    }
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

  const renderBotMessage = (botResponse) => {
    return (
      <div className={`message bot-message ${loading && conversation.length === 0 ? 'loading' : ''}`}>
        <ReactMarkdown>{botResponse}</ReactMarkdown>
      </div>
    );
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Still not convinced?!</h2>
        <p>Ask our Hoosier expert anything else you'd like to know.</p>
      </div>
      <div className="chat-box" ref={chatBoxRef}>
        {conversation.map((pair, index) => (
          <React.Fragment key={index}>
            <div className={`message user-message ${loading && index === conversation.length - 1 ? 'loading' : ''}`}>
              {loading && index === conversation.length - 1 ? '...' : pair.user}
            </div>
            {renderBotMessage(loading && index === conversation.length - 1 ? '...' : pair.bot)}
          </React.Fragment>
        ))}
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Please enter your question..."
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
