function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();
    if (message !== "") {
        var messagesDiv = document.getElementById("messages");
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        messagesDiv.appendChild(messageElement);
        messageInput.value = "";
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}
