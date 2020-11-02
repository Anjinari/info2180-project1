/* Add your JavaScript to this file */

window.onload=response;

function response(){
    var subscribe = document.getElementsByTagName("button")[0];
    subscribe.addEventListener("click", function(e){
        var check  = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var email = document.getElementById("email").value;
        if(email.match(check)){
            document.getElementsByClassName("message")[0].innerHTML = `Thank you! Your email address ${email} has been added to our mailing list!`;
         }
        else{
            document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address";
        }
        e.preventDefault();
    }); 
}