// handle submission without backend
const form = document.getElementById("appForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // show feedback to the user
  statusMessage.textContent = "Thank you! You have applied successfully.";
  statusMessage.classList.remove("hidden");

  // reset form fields after a short delay
  setTimeout(() => {
    form.reset();
    statusMessage.classList.add("hidden");
  }, 3000);
});