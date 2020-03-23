const express = require('express');
const router = express.Router(); 
const constant = require('../utils/constants');
const API_URL = require('../utils/query');




module.exports = router;


//------------------contact--------------------------------//


router.post('/addcontact', function(req,res){
    try{
        req.getConnection(function(err,conn){
            conn.query(API_URL.getQuery(['*'],"contact","Email="+"'"+req.body.Email+"'" ),function(error, result){
                if(error)
                {
                    res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    
                }
                console.log(result);
                if(result.length > 0)
                {
                        res.status( constant.HTML_STATUS_CODE.SUCCESS).json("EMAIL Already exist");
                }
                else{
                    conn.query(API_URL.postQuery("contact",["'"+req.body.Fullname+"'","'"+req.body.Phone+"'","'"+req.body.Email+"'","'"+req.body.Message+"'"] ),function(error, result){
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


//---------------------------------------------------------------------------------------------------------//