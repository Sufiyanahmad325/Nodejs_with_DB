const express = require("express")
const  {home ,createUser,getUser,deleteUser} =require("../controller/userController.js")
const router = express.Router();



router.get('/' ,home)

router.post('/createUser' , createUser)


router.get('/getUser1'  , getUser)

router.delete('/deleteUser/:id' , deleteUser)



module.exports=router






