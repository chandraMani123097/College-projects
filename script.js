const weatherApiKey = "07d7c08e7a497a7cc719b8c66f5e7447";

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Function to add messages to the chat box
function addMessage(content, className) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", className);
  messageDiv.innerText = content;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom after a new message
}

// Function to handle user input
function sendMessage() {
  const userMessage = userInput.value;

  if (userMessage.trim() !== "") {
    // Add user message to chat
    addMessage(userMessage, "user-message");

    // Check if the user is asking for weather information
    const weatherPattern = /weather in (.*)/i;
    const match = userMessage.match(weatherPattern);

    if (match && match[1]) {
      const city = match[1].trim();
      getWeather(city);
    } else {
      getGeneralAnswer(userMessage);
    }

    userInput.value = ""; // Clear the input field after sending
  }
}

// Function to fetch weather data from OpenWeatherMap
async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const weather = data.weather[0].description;
      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;
      const cityName = data.name;

      // Add bot response to chat
      addMessage(
        `The current weather in ${cityName} is ${weather}. The temperature is ${temp}°C and it feels like ${feelsLike}°C.`,
        "bot-message"
      );
    } else {
      addMessage(
        `Sorry, I couldn't find weather information for "${city}".`,
        "bot-message"
      );
    }
  } catch (error) {
    addMessage(
      "Oops! Something went wrong while fetching the weather data.",
      "bot-message"
    );
  }
}

// Function to fetch a general answer (Simulated for now)
async function getGeneralAnswer(query) {
  try {
    // Simulating an API call with a basic response
    const responseMessage =
      "I don't have an answer for that right now. Please ask about the weather.";

    // Add bot response to chat
    addMessage(responseMessage, "bot-message");
  } catch (error) {
    addMessage(
      "Sorry, I could not retrieve an answer for your query.",
      "bot-message"
    );
  }
}
