const express = require('express');
const router = express.Router(); 
const constant = require('../utils/constants');
const API_URL = require('../utils/query');




module.exports = router;


router.post('/buys', function(req,res){
    try{
        console.log(req.body.Bookname);
        console.log(req.body.Authorname);
        req.getConnection(function(err,conn){   
            conn.query(`select * from seller where Bookname='${req.body.Bookname}' AND Authorname='${req.body.Authorname}'`,function(error, result){
             console.log(result);
             if(error){
                res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);

            }
                // if (result.length == 0)
                // {
                //         res.status( constant.HTML_STATUS_CODE.SUCCESS).json("No books Present");
                // }
                else
                {
                        res.jsonp({status:"sent",message:"data sent",data:result});
                }
             
            });
         });// getConnection close
        }
    catch(error){
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
    }
    
});