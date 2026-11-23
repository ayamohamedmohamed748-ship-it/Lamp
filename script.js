let bulb = document.getElementById("bulb");
let buttons = document.querySelectorAll(".light-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let action = button.dataset.action;

        if (action === "on") {
            bulb.classList.add("action");
        } else if (action === "off") {
            bulb.classList.remove("action");
        }
    });
});