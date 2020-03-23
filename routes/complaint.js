const express = require('express');
const router = express.Router(); 
const constant = require('../utils/constants');
const API_URL = require('../utils/query');




module.exports = router;
router.post('/addcomplaint', function(req,res){
    try{
        req.getConnection(function(err,conn){
            
            conn.query(API_URL.postQuery("complaint",["'"+req.body.Fullname+"'","'"+req.body.Complaint+"'"] ),function(error, result){
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
