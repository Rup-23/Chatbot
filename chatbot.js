// Chatbot logic
document.getElementById('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      let userInput = e.target.value;
      if (userInput.trim() === '') return;
  
      // Add user message to chat
      addMessage(userInput, 'user');
  
      // Clear the input
      e.target.value = '';
  
      // Simulate bot response
      setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        addMessage(botResponse, 'bot');
      }, 1000);
    }
  });
  
  // Function to add messages to the chatbox
  function addMessage(text, sender) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (sender === 'user') messageDiv.classList.add('user');
    messageDiv.textContent = text;
  
    document.getElementById('messages').appendChild(messageDiv);
  
    // Scroll to the bottom
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
  }
  
  // Function to generate bot responses
  function getBotResponse(input) {
    input = input.toLowerCase();
  
    // Simple response logic
    if (input.includes('hello')) {
      return 'Hello! How can I help you today?';
    } else if (input.includes('how are you')) {
      return 'I\'m just a bot, but I\'m doing great!';
    } else if (input.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else {
      return 'Sorry, I didn\'t understand that.';
    }
  }
  