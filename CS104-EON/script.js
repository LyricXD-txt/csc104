document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.getElementById("messageForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (!confirmationMessage) {
        console.error("Error: confirmationMessage element not found!");
        return; // Stop the script if the element doesn't exist
    }

    messageForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Get user input values
        const messageText = document.getElementById("message").value;
        const unlockDate = document.getElementById("unlockDate").value;
        const visibility = document.getElementById("visibility").value;
        const groupCode = document.getElementById("groupCode").value;

        // Generate a unique confirmation message
        let uniqueMessage = `Your time capsule has been saved!\nMessage: "${messageText}"\nUnlock Date: ${unlockDate}\nVisibility: ${visibility}`;
        if (groupCode) {
            uniqueMessage += `\nFriend Group Code: ${groupCode}`;
        }

        // Show the confirmation message
        confirmationMessage.style.display = "block";
        confirmationMessage.innerText = uniqueMessage;

        // Clear form inputs after submission
        messageForm.reset();

        // Hide the confirmation message after 5 seconds
        setTimeout(() => {
            confirmationMessage.style.display = "none";
        }, 5000);
    });
});

