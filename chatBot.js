document.getElementById("send-btn").addEventListener("click", function () {
  let userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;

  // Add user message to chatbox
  addMessage(userInput, "user-message");

  // Clear input field
  document.getElementById("user-input").value = "";

  // Generate bot reply
  setTimeout(function () {
    let botReply = generateBotReply(userInput);
    addMessage(botReply, "bot-message");
  }, 500);
});

function addMessage(message, className) {
  let chatbox = document.getElementById("chatbox");
  let messageElement = document.createElement("div");
  messageElement.className = `message ${className}`;
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);

  // Auto scroll to the bottom
  chatbox.scrollTop = chatbox.scrollHeight;
}

function generateBotReply(userInput) {
  let inputLower = userInput.toLowerCase();

  if (inputLower.includes("hello") || inputLower.includes("hi")) {
    return "Hello! How can I assist you today?";
  } else if (inputLower.includes("how are you")) {
    return "I'm just a bot, but I'm here to help you!";
  } else if (inputLower.includes("What is AI?")) {
    return "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think, learn, and perform tasks autonomously. AI can process data, recognize patterns, make decisions, and even adapt based on experience. Common examples include virtual assistants (like Siri), recommendation systems, and self-driving cars.";
  } else if (inputLower.includes("do you know about technology")) {
    return "Yes! I can help you with technology realted questions. you can ask freely";
  } else if (inputLower.includes("name")) {
    return "I'm your friendly chatbot!";
  } else if (inputLower.includes("time")) {
    return `The current time is ${new Date().toLocaleTimeString()}.`;
  } else if (inputLower.includes("date")) {
    return `Today's date is ${new Date().toLocaleDateString()}.`;
  } else if (inputLower.includes("do you know about India")) {
    return "Yes, India is a diverse country known for its rich culture, history, technological advancements, and vibrant democracy.";
  } else if (inputLower.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else if (inputLower.includes("help")) {
    return "I can assist with general questions. What do you need help with?";
  } else if (inputLower.includes("Tell me a joke")) {
    return "ISure! Why don’t skeletons fight each other? Because they don’t have the guts!";
  } else {
    const randomFallbacks = [
      "I'm not sure how to respond to that.",
      "Can you ask in a different way?",
      "I'm still learning, please bear with me.",
      "That's an interesting question!",
      "Let me think about that.",
    ];

    const randomIndex = Math.floor(Math.random() * randomFallbacks.length);
    return randomFallbacks[randomIndex];
  }
}
