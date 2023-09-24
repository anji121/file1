document.addEventListener("DOMContentLoaded", function () {
    const chatWidgetButton = document.getElementById("chat-widget-button");
    const chatWidget = document.getElementById("chat-widget");

    // Get references to the chat widget and buttons
    const closeChatButton = document.getElementById('close-chat');
    const chatMessages = document.querySelector(".chat-messages");
    const sendButton = document.getElementById("send-button");
    const inputField = document.querySelector(".chat-input input");

    // Function to open the chat
    function openChat() {
        chatWidget.style.display = 'block';
    }

    // Function to close the chat
    function closeChat() {
        chatWidget.style.display = 'none';
    }

    // Toggle chat when the chat button is clicked
    chatWidgetButton.addEventListener("click", () => {
        if (chatWidget.style.display === 'block') {
            closeChat();
        } else {
            openChat();
        }
    });

    // Close chat when the close button is clicked
    closeChatButton.addEventListener('click', () => {
        closeChat();
    });

    // Function to add a new message to the chat widget
    function addMessage(user, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.innerHTML = `<div class="user">${user}:</div><div class="text">${text}</div>`;
        chatMessages.appendChild(messageDiv);
    }

    // Example: Adding a welcome message
    addMessage("Chat Bot", "Welcome! How can I assist you today?");
    
    // Example: Sending a message (you can replace this with actual functionality)
    sendButton.addEventListener("click", () => {
        const message = inputField.value;
        if (message) {
            addMessage("You", message);
            inputField.value = "";
        }
    });
});
