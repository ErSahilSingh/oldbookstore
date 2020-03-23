$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

//-----------------------------------login------------------------------------//

function login(){
    var email=$("#emaillog").val();
    var pass=$("#passlog").val();

    var login={
        Email: email,
        Password: pass
    }

console.log(JSON.stringify(login));
$.post ("/user/login",
login,
function (data,status){
    alert("data:"+ data +"\n status:"+status);
    if(status=="success"){
    window.location.href='oldBook.html';
    }
    else
    {
        alert( "data:"+data+"\nData wrong"+status);
    }
}
)


}

//-----------------------------------signup-----------------------------------//
function signup(){
    var fulname=$("#fname").val();
    var email=$("#emailsign").val();
    var passs=$("#passsign").val();

    var signup={
        Name: fulname,
        Email: email,
        Password: passs
    }

console.log(JSON.stringify(signup));
$.post ("/user/signup",
signup,
function (data,status){
    alert("data:"+ data +"\n status:"+status);
}
)
}


/**
 var title=f.title.value;
    $.ajax({
        url: "",
      type: "POST",
        contentType:application/jason
      data:JSON.stringify(signup),
      success: function("error,result")
      {
          if(error){
              console.log("some error");
          }
          else{
              console.log(result);
          }
      }
    });

 */


//----------------------------------forgetpassword----------------------------//
function forgetpass(){
    var email=$("#emailforget").val();
    var forgetpass={
        
        Email: email,
        
    }

console.log(JSON.stringify(forgetpass));
$.post("/user/forget",
    forgetpass,
     function(data, status){
     alert("Data: " + data + "\nStatus: " + status);
    });

}
//----------------------------------otp password----------------------------//

function updatepass(){
    var nopass=$("#noPass").val();
    var otp=$("#otp").val();   
    var updatepass={               
     Otp:otp,
    Password:nopass          
       }
    console.log(JSON.stringify(updatepass));

    $.post("/user/update",
    updatepass,
     function(data, status){
     alert("Data: " + data + "\nStatus: " + status);
    });
     }