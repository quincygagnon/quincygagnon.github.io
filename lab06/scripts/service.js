

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(txtEmail){
    var a = document.getElementById(txtEmail).value;
    if (a==""){
        return false;
    }
    var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validatename(txtFname){
    var a = document.getElementById(txtFname).value;
    var filter = /^([a-zA-Z])+$/;
    if (a==""){
        return false;
    }
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCardNum(txtcardnum){
    var a = document.getElementById(txtcardnum).value;
    if (a==""){
        return false;
    }
    var filter = /^([0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4})+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCVV(txtcvv){
    var a = document.getElementById(txtcvv).value;
    if (a==""){
        return false;
    }
    var filter = /^([0-9]{3})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateExp(txtExp){
    var a = document.getElementById(txtExp).value;
    if (a==""){
        return false;
    }
    var filter = /^([0-9]{2}[/][0-9]{2})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function validatePhone(txtphone){
    var a = document.getElementById(txtphone).value;
    if (a==""){
        return false;
    }
    var filter = /^([(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4})+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function validateCardName(txtname){
    var a = document.getElementById(txtname).value;
    if (a==""){
        return false;
    }
    var filter = /^([a-zA-Z]+[ ][a-zA-Z]+)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = [];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    var a = document.getElementById("physelect").value;
    console.log(a);
    if (a == "AC"){
        if (date.getDay() === 1){ //Monday
            return [false];}
        if (date.getDay() === 2){ //Tuesday
        return [false];}
    }
    if (a == "JH"){
        if (date.getDay() === 0){ //Sunday
            return [false];}
        if (date.getDay() === 1){ //Monday
        return [false];}
    }
    if (a == "MG"){
        if (date.getDay() === 0){ //Sunday
            return [false];}
        if (date.getDay() === 6){ //Saturday
        return [false];}
    }
    if (a == "Select a physician"){
        
    }
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){
    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    

    $(document).on("click", ".subinfobtn", function(){        
        if (document.getElementById("location").value=="Select a location"){
            alert("Please select a location.");
            $("#location").addClass("error");
            return;
        }
        else {
            $("#location").removeClass("error");
            
        }
        if (document.getElementById("physelect").value=="Select a physician"){
            alert("Please select a physician.");
            $("#physelect").addClass("error");
            return;
        }
        else {
            $("#physelect").removeClass("error");
            
        }
        if (document.getElementById("service").value=="Select a service"){
            alert("Please select a service.");
            $("#service").addClass("error");
            return;
        }
        else {
            $("#service").removeClass("error"); 
            }
        if (!validatename("fname")){
            alert("Please enter a valid name.");
            $("#fname").addClass("error");
            return;
        }
        else {
            $("#fname").removeClass("error");
        }

        if (!validatename("lname")){
            alert("Please enter a valid last name.");
            $("#lname").addClass("error");
            return;
        }
        else {
            $("#lname").removeClass("error");
        }
        if (!validateEmail("email")){
            alert("Please enter a valid email.");
            $("#email").addClass("error");
            return;
        }
        else {
            $("#email").removeClass("error");
        }
        if(document.getElementById("date").value==""){
            alert("Please select a date.");
            $("#date").addClass("error");
            return;
        }
        else {
            $("#date").removeClass("error"); 
            }
            if (!validateCardName("card-name-input")){
                alert("Please enter a valid cardholder name of the format \"Firstname Lastname\"");
                $("#card-nuame-input").addClass("error");
                return;
            }
            else {
                $("#card-name-input").removeClass("error");
            }
        if (!validateCardNum("card-number-input")){
            alert("Please enter a valid card number of the format \"XXXX XXXX XXXX XXXX\".");
            $("#card-number-input").addClass("error");
            return;
        }
        else {
            $("#card-number-input").removeClass("error");
        }
        if (!validateCVV("card-cvv-input")){
            alert("Please enter a valid CVV.");
            $("#card-cvv-input").addClass("error");
            return;
        }
        else {
            $("#card-cvv-input").removeClass("error");
        }
        if (!validateExp("card-exp-input")){
            alert("Please enter a valid expiration date of the format \"mm/yy\"");
            $("#card-exp-input").addClass("error");
            return;
        }
        else {
            $("#card-exp-input").removeClass("error");
        }
        if (!validatePhone("phone")){
            alert("Please enter a valid phone number of the format (XXX) XXX-XXXX");
            $("#phone").addClass("error");
            return;
        }
        else {
            $("#phone").removeClass("error");
        }

        $("#third").append('<br><div class="alert alert-success alert-dismissible fade" id="success" role="alert"> <p><strong>Success!</strong> Your appointment has been scheduled. You will receive a confirmation email shortly.</p> </div>')

    });
    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    
    $("#date").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2021
            minDate: new Date('06/01/2021'),
            maxDate: '+4M',
            autosize:true,
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates,
        }
    );
    

    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
});