const express = require('express');
const router = express.Router(); 
const constant = require('../utils/constants');
const API_URL = require('../utils/query');




module.exports = router;




//------------------seller---------------------------------//

/*router.post('/addseller', function(req,res){
    try{
        req.getConnection(function(err,conn){
            conn.query(API_URL.getQuery(['*'],"seller","Phone="+"'"+req.body.Phone+"'" ),function(error, result){
                if(error)
                {
                    res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    
                }
                console.log(result);
                if(result.length > 0)
                {
                        res.status( constant.HTML_STATUS_CODE.SUCCESS).json("THIS PHONE NUMBER ALREADY EXISTS ");
                }
                else{
                    conn.query(API_URL.postQuery("seller",["'"+req.body.Fullname+"'",+req.body.Phone,"'"+req.body.Bookname+"'","'"+req.body.Authorname+"'",+req.body.Price] ),function(error, result){
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
    
});*/


router.post('/addseller', function(req,res){
    try{
        req.getConnection(function(err,conn){
            
            conn.query(API_URL.postQuery("seller",["'"+req.body.Fullname+"'",+req.body.Phone,"'"+req.body.Bookname+"'","'"+req.body.Authorname+"'","'"+req.body.Price+"'"] ),function(error, result){
                            console.log(result);
                            if(error){
                                res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
                                console.log(error);
                
                            }
                            else{
                                res.status(constant.HTML_STATUS_CODE.SUCCESS).json('DATA STORED');
                                console.log("POSTED SUCCESSFULLY");
                            }
                    });
                 }); 
                }
    catch(error){
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    }
});


//-----------------------------------------------------------------------------------------------------//