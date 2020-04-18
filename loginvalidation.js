let logname=document.getElementById ("username");
let logpass=document.getElementById ("password");

function validlogin(){
            
            if (logname.value=="") { 
                alert("Enter a valid Username");
                document.getElementById ("username").style.color="red";
                return false;
                
            } 
            else if (logpass.value=="") { 
                alert("Enter a valid Password");
                document.getElementById ("password").style.color="red";
                return false;
                
            }
            else { 
                alert("login successfully");
                return true;
            }

}