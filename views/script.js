// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  //-----------------------------------seller---------------------------------//

  function seller(){
    var Name=$("#funame").val();
    var phone=$("#pnumber").val();
    var book=$("#bookname").val();
    var author=$("#aname").val();
    var price=$("#Pprice").val();

    var seller={
      Fullname:Name,
      Phone:phone,
      Bookname:book,
      Authorname:author,
      Price:price

    }
    
    console.log(JSON.stringify(seller));
$.post ("/seller/addseller",
seller,
function (data,status){
    alert("data:"+ data +"\n status:"+status);
    $("#funame").val('');
    $("#pnumber").val('');
    $("#bookname").val('');
    $("#aname").val('');
    $("#Pprice").val('');
}

)
  }

//--------------------------------buy----------------------------//



//--------------------------------------contact-------------------------//

function contact(){
  var name=$("#fullN").val();
  var phone=$("#phonumber").val();
  var email=$("#contactemail").val();
  var mess=$("#comment").val();

  var contact={
    Fullname:name,
    Phone:phone,
    Email:email,
    Message:mess

  }
  console.log(JSON.stringify(contact));
  $.post ("/contact/addcontact",
contact,
function (data,status){
    alert("data:"+ data +"\n status:"+status);
}
)
  
}



//------------------------------complanit----------------------------------------//

function complaint(){
  var name=$("#fname").val();
  var Com=$("#Complaint").val();
  

  var complaint={
    Fullname:name,
    Complaint:Com
    

  }
 console.log(JSON.stringify(complaint));
  $.post ("/complaint/addcomplaint",
complaint,
function (data,status){
    alert("data:"+ data +"\n status:"+status);
}
)
  
}

//------------------------------tips----------------------------------------//

function tip(){
  var name=$("#lname").val();
  var tip=$("#tp").val();
  

  var tip={
    Fullname:name,
    tips:tip
    

  }
 console.log(JSON.stringify(tip));
  $.post ("/Tips/addtips",
tip,
function (data,status){
    alert("data:"+ data +"\n status:"+status);
}
)
  
}
