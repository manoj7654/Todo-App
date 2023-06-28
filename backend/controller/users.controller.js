const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {  UserModal} = require("../modals/usersModal");
require("dotenv").config();

const register = async (req, res) => {

const {name,email,password}=req.body
    try {
         // Input validation - check that name, email, and password are present in the request body
    if (!name || !email  || !password) {
      return res.status(400).json({
        message: "Name, email and password are required.",
      });
    }
        const check=await UserModal.find({email})
        if(check.length>0){
            return res.json({"message":"User already exist"})
        }
        bcrypt.hash(password, 5, async(err, secure_password)=> {
           if(err){
            console.log(err)
           }else{
            const user=new UserModal({name,email,password:secure_password});
            await user.save();
            res.json({"message":"Registration successfully"})
           }
        });
    } catch (err) {
        console.log(err);
        console.log({"message":"Something went wrong"})
    }
};

const login = async (req, res) => {

const {email,password}=req.body;
    try {
          // Input validation -/check that email and password are present in  body
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required." });
    }
        const user=await UserModal.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result)=> {
                if(result){
                    
                    const token=jwt.sign({userID:user[0]._id},process.env.key );
                    
                    
                    res.json({"token":token,"name":user[0].name,"message":"Login Successfuly"})
                }else{
                    res.json({"message":"Wrong credential"})
                }
            });
        }else{
            res.json("Wrong credential")
        }
    } catch (err) {
        console.log(err);
         console.log({"err":"Something went wrong"})
    }
};

module.exports = {
  login,
  register,
};