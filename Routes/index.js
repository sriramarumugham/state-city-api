const express=require('express');
const router=express.Router();
const stateController=require('../controllers/stateController')

router.get('/' , function (req, res){
    console.log(req.url);
    res.send("states API")
})
router.post('/create' , stateController.create);
router.get('/get' , stateController.get)

module.exports=router;