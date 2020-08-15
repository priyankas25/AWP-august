function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.fname.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function Validatepw(pw) 
{
 if ((pw.length<6 || pw.length>12)+$/.test(myForm.pname.value))
  {
    return (true)
  }
    alert("You have entered an invalid pw!")
    return (false)
}