document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Create a new contact element
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    contactDiv.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <button class="dlt-btn">Delete</button>
  `;

    // Append the contact to the contact list
    document.getElementById("contactsList").appendChild(contactDiv);

    // Add event listener to delete button

    contactDiv.querySelector(".dlt-btn").addEventListener("click", function () {
      contactDiv.remove();
    });

    // Clear the input fields
    document.getElementById("contactForm").reset();
  });
