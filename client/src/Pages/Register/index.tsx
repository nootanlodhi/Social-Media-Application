import { Box, Button, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { muicss } from "../../Utils/muicss"
import { useState } from "react"
import { IRegisterPayload, ValidationErrors } from "../../Interface/interface"
import { register } from "../../Services/services"
import { NavLink, useNavigate } from "react-router-dom"
import { validateValues } from "../../Utils/util"

const Register = () => {
  const [userDetails , setUserDetails] = useState<IRegisterPayload>({
    username: "",
    email: "",
    password: "",
    name: "",
    dob: "",
    gender: "", 
    mobile: "",
    age: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg , setErrorMsg] = useState<ValidationErrors>({});
  const navigate = useNavigate();

  const handleRegister = async() =>{
    const error = validateValues(userDetails);
    
    if(Object.keys(error).length === 0){
      console.log(userDetails,'userDetails', error)
      try {
        const resp = await register(userDetails);
        if(resp.status === 200){
          navigate("/login")
        }
      } catch (error) {
        console.error(error)
      }
    }else{
      console.log(userDetails,'userDetails', error)
      setErrorMsg(error);
    }
    
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setUserDetails({...userDetails, [e.target.name]: e.target.value})
  }

  return (
    <Box sx={muicss.authContainer}>
      <Box sx={muicss.authWrapper} width={"40%"}>
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="h4">Create New Account</Typography>
          </Grid>
          <Grid item md={12} lg={6}>
            <TextField helperText={errorMsg.username || ""} error={errorMsg.username ? true : false} type="text" required id="username" label="Username" variant="outlined" name="username" fullWidth value={userDetails.username} onChange={handleChange} />
          </Grid>
          <Grid item md={12} lg={6}>
          <TextField helperText={errorMsg.password || ""} error={errorMsg.password ? true : false} id="password" required label="Password" variant="outlined" fullWidth name="password" value={userDetails.password} onChange={handleChange} type={showPassword ? "text" : "password"} // Conditional rendering of type attribute
            InputProps={{ // Adding the toggle button
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={()=>setShowPassword(prev => !prev)}>{showPassword ? "Hide" : "Show"}</Button>
                </InputAdornment>
              )
            }}
            />          </Grid>
          <Grid item md={12} lg={6}>
            <TextField helperText={errorMsg.name || ""} error={errorMsg.name ? true : false} type="text" required id="name" label="Full Name" variant="outlined" fullWidth name="name" value={userDetails.name} onChange={handleChange}/>
          </Grid>
          <Grid item md={12} lg={6}>
            <TextField helperText={errorMsg.email || ""} error={errorMsg.email ? true : false} type="email" required id="email" label="E-mail" variant="outlined" fullWidth name="email" value={userDetails.email} onChange={handleChange}/>
          </Grid>
          <Grid item md={12} lg={6}>
            <TextField helperText={errorMsg.mobile || ""} error={errorMsg.mobile ? true : false} type="number" required id="mobile" label="Mobile" variant="outlined" name="mobile" fullWidth value={userDetails.mobile} onChange={handleChange}/>
          </Grid>
          <Grid item md={12} lg={6}>
            <TextField helperText={errorMsg.age || ""} error={errorMsg.age ? true : false} type="number" required id="age" label="Age" variant="outlined" fullWidth name="age" value={userDetails.age} onChange={handleChange}/>
          </Grid>
          <Grid item md={12} lg={6}>
            <TextField helperText={errorMsg.dob || ""} error={errorMsg.dob ? true : false} type="Date" id="dob" label="" variant="outlined" fullWidth name="dob" value={userDetails.dob} onChange={handleChange}/>
          </Grid>
          <Grid item md={12} lg={6}>
            <FormControl fullWidth error={errorMsg.gender ? true : false}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                error={errorMsg.username ? true : false}
                labelId={!errorMsg.gender ? "demo-simple-select-label" : "demo-simple-select-error-label"}
                id={!errorMsg.gender ? "demo-simple-select":"demo-simple-select-error"}
                value={userDetails.gender}
                label="Gender"
                name="gender"
                onChange={(e)=>setUserDetails({...userDetails, [e.target.name]: e.target.value})}
                fullWidth
               >
                 <MenuItem value={"Male"}>Male</MenuItem>
                 <MenuItem value={"Female"}>Female</MenuItem>
                 <MenuItem value={"Custom"}>Custom</MenuItem>
              </Select>
              <FormHelperText>{errorMsg.gender || ""}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="subtitle1">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</Typography>
            <Button variant="contained" sx={muicss.authButton} onClick={handleRegister}>Sign Up</Button>
            <Typography variant="subtitle1">Have an account? <NavLink to="/login">Log in</NavLink></Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Register