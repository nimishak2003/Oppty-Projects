
document.getElementById("contactForm").addEventListener("submit", function(event) {
    
    event.preventDefault(); // Prevent page refresh

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    // Email validation pattern
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation
    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.innerHTML = "❌ Please fill all fields";
        return;
    }

    if (!email.match(emailPattern)) {
        formMessage.style.color = "red";
        formMessage.innerHTML = "❌ Please enter a valid email address";
        return;
    }

    // Success message
    formMessage.style.color = "lightgreen";
    formMessage.innerHTML = "✅ Message sent successfully!";

    // Clear form
    document.getElementById("contactForm").reset();
});


//scroll arrow

const scrollBtn = document.getElementById("scrollTop");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//book a table
function goToPage() {
    window.location.href="ReservationsPage.html";
}
