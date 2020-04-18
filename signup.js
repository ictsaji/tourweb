//variable declarations for patternc check
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var eml=document.getElementById("eml");
var phn=document.getElementById("phn");
var city=document.getElementById("city");
var country=document.getElementById("country");
var crpass=document.getElementById("crpass");
var cfpass=document.getElementById("cfpass");

//pattern definitions
let fnameexp=/^([A-Za-z]{1,20}) $/;
let lnameexp=/^([A-Za-z]{1,20}) $/;                          
let emlexp=/^([a-zA-Z0-9_\.\-]+)@([a-z]{1,20})\.([a-z]{1,5})(\.[a-z]{1,2})?$/;
let phnexp=/^([0-9]{10}) $/;
let cityexp=/^([A-Za-z]{1,20})$/;
let countryexp=/^([A-Za-z]{1,20})$/;
let crpassexp=/^([a-zA-Z0-9\*\@\#\$\&\%]+)$/;
let cfpassexp=/^([a-zA-Z0-9\*\@\#\$\&\%]+)$/;

//javascript validation of form

    if (fnameexp.test(fname.value)) { 
        console.log("first name  entered");
        return false; 
    } 
    else if (lnameexp.test(lname.value)) {
             alert ("enter a valid username");
             console.log(" last name entered");
             return false;
    }
    else if (emlexp.test(eml.value)) {
        alert ("enter a valid last name");
        console.log("email entered")
        return false;
    }
    else if (phnexp.test(phn.value)) {
        alert ("enter a valid email address");
        console.log("phone number entered");
        return false;
    }
    else if (cityexp.test(city.value)) {
        alert ("enter a valid phone number");
        console.log("city name entered");
        return false;
    }
    else if (countryexp.test(country.value)) {
        alert ("enter a valid city name");
        console.log("country name entered");
        return false;
    } 
    else if (crpassexp.test(crpass.value)) {
        alert ("enter a valid password");
        console.log("password created");
        return false;
    }  
    else if (cfpassexp.test(cfpass.value)) {
        alert ("repeat the same password");
        console.log("password confirmed");
        return false;
    }
    else if (cfpassexp.value !== crpass.value) {
        alert("check your password entry")
        console.log("submission checked");
        return false;
    }
    
    else { alert ("submission approved");
           console.log ("submission approved");
           return true;
}


    



 
