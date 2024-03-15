import bcrypt from "bcryptjs";
import { db } from "../connect.js";
import jwt from "jsonwebtoken"

export const login = (req , resp) =>{
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err , data) =>{
      if(err) return resp.status(500).json(err)
      if(data.length === 0) return resp.status(404).json("User Not Found")

      const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

      if(!checkPassword) return resp.status(400).json("Wrong password and username")

      const token = jwt.sign({id:data[0].id}, "secretkey")

      const {password , ...others} = data[0];

      resp.cookie("accessToken", token, {
        httpOnly: true
      }).status(200).json(others);
    })
  }

  export const register = (req , resp) =>{
    //CHECK USER IF EXIST
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err,data) =>{
      if(err) return resp.status(500).json(err);
      // if(err) return resp.status(500).send(err);
      if(data.length) return resp.status(409).json("User Already Exists")

      //CREATE NEW USER
      const salt = bcrypt.genSaltSync(10);
      const hashedpassword = bcrypt.hashSync(req.body.password, salt);

      // Parse date of birth
      const dobParts = req.body.dob.split('-');
      const dobFormatted = dobParts[0] + '-' + dobParts[1] + '-' + dobParts[2];


      const q = "INSERT INTO users (`username`, `email`, `password`, `name`, `dob`, `mobile`, `gender`, `age`) VALUE (?)"

      const value = [req.body.username, req.body.email, hashedpassword, req.body.name, dobFormatted, req.body.mobile, req.body.gender, req.body.age]
      db.query(q, [value], (err, data)=>{
        if(err) return resp.status(500).json(err)
        return resp.status(200).json("User has been created")
      })
    })
  
    
  }

  export const logout = (req , resp) =>{
    resp.clearCookie("accessToken",{
       secure: true,
       sameSite: "none"
    }).status(200).json("User has been logged out.")
  }