function validateForm(){
    var firstName = document.forms["myForm"]["firstName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    var message = document.forms["myForm"]["message"].value;

    if(firstName == null || firstName == ""){
        alert('First name is required');
        return false;

    }

    if(firstName.length < 2){
        alert('First name must be at least 2 characters');
        return false;

    }

    if(lastName == null || lastName == ""){
        alert('Last name is required');
        return false;

    }

    if(lastName.length < 2){
        alert('Last name must be at least 2 characters');
        return false;

    }

    if(message == null || message == ""){
        alert('Message is required');
        return false;

    }

    if(message.length < 20){
        alert('Message must be at least 20 characters');
        return false;

    }
}