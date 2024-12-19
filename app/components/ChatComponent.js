'use client'; // This is a client component

import React, { useState } from 'react';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const userMessage = { id: messages.length + 1, sender: 'User', text: newMessage };
      setMessages([...messages, userMessage]);
      setNewMessage('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = { id: messages.length + 2, sender: 'AI', text: `You said: ${newMessage}` }; // Mock AI response
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000); // Simulate a delay for the AI response
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Chat with AI</h3>
      <div className="h-64 overflow-y-auto border border-gray-300 rounded-lg p-2 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-2 rounded-lg mb-2 ${
              message.sender === 'User' ? 'bg-blue-200 self-end' : 'bg-gray-200 self-start'
            }`}
          >
            <p className="font-medium">{message.sender}</p>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
