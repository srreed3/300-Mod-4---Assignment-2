$(document).ready(function() {
   //hover effect for submit button
   $('#subBtn').hover(
    function() {
        $(this).css({'color': 'red', 'font-weight': 'bold'});
    },
    function() {
        $(this).css({'color': '', 'font-weight': ''});
    }
);

//submit button click event
$('#subBtn').click(function(event) {
    //create timestamp for submission
    let timestamp = new Date().toLocaleString();
    console.log('Form submitted at: ' + timestamp);

    //determine which DOM element triggered the event
    let triggeringElement = event.target;
    $(triggeringElement).css('opacity', '0.5');

    //call formValidate function
    if (formValidate()) {
        //if validation passes, send form data to server
        alert('Form is valid. Submitting data to server...');

        //reset form
        $('#userForm')[0].reset();
    } else {
        //if validation fails, display error message and clear form 
        alert('Form validation failed. Please check your input.');
        $('#userForm')[0].reset();
    }
});

    function formValidate() {
        //add form validation logic
        return true;
    }
});