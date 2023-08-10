function validateForm()
{
    //Get Form Input Values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userID = document.getElementById("userID").value;
    var referenceCode = document.getElementById("referenceCode").value;
    var email = document.getElementById("email").value;
    var dropDown1 = document.getElementById("country").value;
    var dropDown2 = document.getElementById("stateProvince").value;
    var dropDown3 = document.getElementById("dropDown3").value;

    //Validation for First & Last Name, letters only
    var namePattern = /^[A-Za-z]+$/;
    var validFirstName = namePattern.test(firstName);
    var validLastName = namePattern.test(lastName);

    //Validation for Email ID, checks for "@" & "."
    var validEmail = email.includes("@") && email.includes(".");

    //Update Visual Effect for Email ID Validation using an Icon
    var emailIcon = document.getElementById("emailIcon");
    emailIcon.className = validEmail ? "valid-icon" : "invalid-icon";

    //Validation for Dropdowns, minimum 3 valid options
    var validDropdown1 = dropDown1 !== "";
    var validDropdown2 = dropDown2 !== "";
    var validDropdown3 = dropDown3 !== "";

    //Display Invalid Fields with Visual Effects
    var invalidFields = [];
    if(!validFirstName) invalidFields.push("First Name");
    if(!validLastName) invalidFields.push("Last Name");
    if(!validEmail) invalidFields.push("Email ID");
    if(!validDropdown1) invalidFields.push("Country");
    if(!validDropdown2) invalidFields.push("State/Province");
    if(!validDropdown3) invalidFields.push("City");

    //If there are Invalid Fields, show it in the Form and Return
    if(invalidFields.length > 0)
    {
        alert("Invalid Fields : " + invalidFields.join(", "));
        return;
    }

    //If all Fields are Valid, Display the Summary and hide Form
    document.getElementById("firstNameSummary").textContent = "First Name : " + firstName;
    document.getElementById("lastNameSummary").textContent = "Last Name : " + lastName;
    document.getElementById("userIDSummary").textContent = "User ID : " + userID;
    document.getElementById("referenceCodeSummary").textContent = "Reference Code : " + referenceCode;
    document.getElementById("emailSummary").textContent = "Email ID : " + email;
    document.getElementById("dropDown1Summary").textContent = "Country : " + dropDown1;
    document.getElementById("dropDown2Summary").textContent = "State/Province : " + dropDown2;
    document.getElementById("dropDown3Summary").textContent = "City : " + dropDown3;

    //Hides Form
    document.getElementById("WPR271Form").style.display = "none";
    //Shows Summary
    document.getElementById("sectionsResults").style.display = "block";

    //Prevents Form Submission
    return false;
}

function ResetForm()
{
    const Form = document.getElementById("WPR271Form");
    const Summary = document.getElementById("sectionsResults");

    Form.reset();

    const invalidFields = Form.querySelectorAll(".invalid");
    invalidFields.forEach(Fields => Fields.classList.remove("invalid"));

    Form.style.display = "block";
    Summary.style.display = "none";
}
