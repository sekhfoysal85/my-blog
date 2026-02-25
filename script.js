function login() {
  const id = document.getElementById("userId").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("login-message");

  // User 1
  if (id === "user1" && pass === "1234") {
    window.location.href = "chat-user1.html";
  }
  // User 2
  else if (id === "user2" && pass === "5678") {
    window.location.href = "chat-user2.html";
  }
  else {
    message.innerText = "Invalid ID or Password!";
  }
}