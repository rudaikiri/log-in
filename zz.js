function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Keisha Louisse Pabuaya"&& password=="deleon")
{
    alert("Login Successful");
    window.open("https://rudaikiri.github.io/terms-and-conditions/")
    return false;

}
else
{
    alert("Login Failed");
}


}