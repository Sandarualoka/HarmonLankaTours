import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { ChatMessage } from '../data/chatbotFAQ';
import { findBestMatch, faqData } from '../data/chatbotFAQ';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      text: 'Hello! I\'m Harmon. How can I help you today? Feel free to ask me anything about our Sri Lankan tours!',
      sender: 'harmon',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate response delay
    setTimeout(() => {
      const bestMatch = findBestMatch(inputValue);
      
      const harmonMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: bestMatch 
          ? bestMatch.answer 
          : "That's a great question! I don't have a specific answer for that, but I'd recommend contacting our team directly through the contact form. We're here to help!",
        sender: 'harmon',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, harmonMessage]);
      setIsLoading(false);
    }, 500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  const getQuickQuestions = () => {
    return faqData.slice(0, 3).map(item => item.question);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Icon and Badge */}
      <div className="relative">
        {!isOpen && (
          <div className="text-right mb-2">
            <p className="text-xs text-gray-600 font-medium mb-1">Ask Harmon</p>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          aria-label="Open chat"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-amber-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4">
            <h3 className="font-semibold text-lg">Chat with Harmon</h3>
            <p className="text-xs text-amber-100">Sri Lankan Tour Guide</p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 max-h-96">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-amber-500 text-white rounded-br-none'
                      : 'bg-white border border-amber-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-amber-200 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions (shown when chat window opens) */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-white border-t border-amber-100">
              <p className="text-xs text-gray-600 font-medium mb-2">Quick Questions:</p>
              <div className="space-y-2">
                {getQuickQuestions().map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left text-xs p-2 bg-amber-50 hover:bg-amber-100 rounded border border-amber-200 transition-colors text-gray-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="border-t border-amber-200 p-3 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white rounded-lg p-2 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
