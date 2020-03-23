const express = require('express');
const router = express.Router(); 
const constant = require('../utils/constants');
const API_URL = require('../utils/query');
var nodemailer = require('nodemailer');


var Transport = nodemailer.createTransport("SMTP",{
    service: "gmail",
    
    auth: {
        user: "9917singhsahilss1234@gmail.com",
        pass: "sahilsingh9917"
    }
  });
  

  module.exports = router;
///----------------signup--------------------------//
router.post('/signup', function(req,res){
    try{
        req.getConnection(function(err,conn){
            conn.query(API_URL.getQuery(['*'],"user","Email="+"'"+req.body.Email+"'" ),function(error, result){
                if(error)
                {
                    res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    
                }
                console.log(result);
                if(result.length > 0)
                {
                        res.status( constant.HTML_STATUS_CODE.SUCCESS).json("Data Already exist");
                }
                else{
                    conn.query(API_URL.postQuery("user",["'"+req.body.Name+"'","'"+req.body.Email+"'","'"+req.body.Password+"'","'"+req.body.Otp+"'"] ),function(error, result){
                            if(error){
                                res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
                
                            }
                            else{
                                res.status(constant.HTML_STATUS_CODE.SUCCESS).json('Data Stored Successfully');
                                console.log("posted sucessfully");
                            }
                    });
                 }

                });
         });// getCOnnection close
        }
    catch(error){
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    }
    
});

//----------------------------------login-----------------------------------------//

router.post('/login', function(req,res){
    try{
        req.getConnection(function(err,conn){
            conn.query(API_URL.getQuery(['*'],"user","Email="+"'"+req.body.Email+"'" ),function(error, result){
                if(error)
                {
                    res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    
                }
                //console.log(result);
               // console.log(result[0].password);
                if (result.length == 0)
                {
                        res.status( constant.HTML_STATUS_CODE.INVALID_DATA).json("Account doesn't exist");
                }
                else
                {
                   
                        if(req.body.Password == result[0].Password)
                        {
                            res.status( constant.HTML_STATUS_CODE.SUCCESS).json(" login successFull ");
            
                        }
                       
                        else 
                        {
                            res.status( constant.HTML_STATUS_CODE.INVALID_DATA).json(" wrong password");

                        }
                   
                    }

                });
         });// getConnection close
        }
    catch(error){
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    }
    
});

//---------------------------------------------forget-----------------------------------------------//

router.post('/forget', function(req,res){
    try{
        req.getConnection(function(err,conn){
            conn.query(API_URL.getQuery(['*'],"user","Email="+"'"+req.body.Email+"'" ),function(error, result){
                if(error)
                {
                    res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    
                }
               let Otp = Math.floor(Math.random() * 10000);
               // console.log(otp);
               conn.query(API_URL.updateQuery("user","Otp","'"+Otp+"'","'"+req.body.Email+"'"),function(error,result){
                   if(error){
                       res.status(error.status ||  constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
                   }
                   else{
                       console.log("otp update");
                   }
               });
               
                if(result.length == 0)
                {
                 res.status( constant.HTML_STATUS_CODE.SUCCESS).json("Enter valid email ");
                }
                
                else{

                    var mailOptions={
                        
                        from:'9917singhsahilss1234@gmail.com',
                        to : req.body.Email,
                        subject:'Otp',
                        text : Otp,
                        html: `<h1 style= "color:red">${Otp}</h1>`
                     };
                     console.log(mailOptions);
                     Transport.sendMail(mailOptions, function(error, response){

                     if(error){
                     console.log(error);
                     res.end("error");
                     }else{
                     console.log("Message sent: " + response.message);
                     res.end("sent");
                     }
                     });
                   
                }

                });
         });// getCOnnection close
        }
    catch(error){
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    }
    
});
//-------------------------------------------------update-------------------------------------------------------//

router.post('/update', function(req,res){
    try{
        req.getConnection(function(err,conn){
            conn.query(API_URL.getQuery(['*'],"user","Otp="+"'"+req.body.Otp+"'" ),function(error, result){
                console.log(result);

                
                if (result.length == 0)
                {
                        res.status( constant.HTML_STATUS_CODE.SUCCESS).json(" wrong otp ");
                }
                else
                {
                     if(req.body.Otp == result[0].Otp)
                        {
                            conn.query(API_URL.updateQuery("user","Password","'"+req.body.Password+"'","'"+result[0].Email+"'"),function(error, result){
                                if(error){
                                    res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
                    
                                }
                                else{
                                     console.log("password changed");
                                     res.end("password changed"); 
                                }
                        });
            
                        }
                       
                        else 
                        {
                            res.status( constant.HTML_STATUS_CODE.SUCCESS).json(" wrong password");

                        }
                    }
             
                });
         });// getConnection close
        }
    catch(error){
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    }
    
});

//--------------------------------------------------------------------------------------------------------//


