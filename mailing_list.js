

function func_1(){
    var empt = document.getElementById("email_address1").value;
if (empt == "")
{
 document.getElementById("label_1").innerHTML="Email Address entry is required";
return false;
}
else 
{
    document.getElementById("label_1").innerHTML="";
return true; 
}
}

function func_2(){
    var empt = document.getElementById("email_address2").value;
if (empt == "")
{
 document.getElementById("label_2").innerHTML="Email Address entry is required";

return false;
}
else 
{
    document.getElementById("label_2").innerHTML="";
return true; 
}
}

function equalEmail(){
    var email1 = document.getElementById("email_address1").value;
    var email2 = document.getElementById("email_address2").value;
   

    if (email1 == email2)
    return true;

    else
    {
        document.getElementById("label_2").innerHTML="Emails are not matched ";
    }
}

function func_3(){
    var empt = document.getElementById("first_name").value;
if (empt == "")
{
 document.getElementById("label_3").innerHTML="First Name entry is required";
//alert("Email Address entry is required ");
return false;
}
else 
{
    document.getElementById("label_3").innerHTML="";
return true; 
}
}

function func_4(){
    var empt = document.getElementById("last_name").value;
    if (empt == "")
    {
     document.getElementById("label_4").innerHTML="Last Name entry is required";
    //alert("Email Address entry is required ");
    return false;
    }
    else 
    {
        document.getElementById("label_4").innerHTML="";
    return true; 
    }
    }




function join(){
    if(func_1())
    if (func_2())
    if(equalEmail())
    if(func_3())
    if(func_4())
    window.open("join.html");   
}


function get_date(){
    var ExactD = new Date();
return " You joined us on: "+ ExactD;
}