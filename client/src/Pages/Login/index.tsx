import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import { muicss } from "../../Utils/muicss"
import { useState } from "react"
import { ILoginPayload } from "../../Interface/interface"
import { NavLink, useNavigate } from "react-router-dom"
import { login } from "../../Services/services"

const Login = () => {
  const [userDetails , setUserDetails] = useState<ILoginPayload>({
    username: "",
    password: "",
    
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg , setErrorMsg] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async() =>{
    try {
        const resp = await login(userDetails);
        console.log(resp)
        if(resp.status === 200){
          navigate("/")
          localStorage.setItem("userItem", JSON.stringify(resp.data))
        }
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        // If error has response object, it might be an AxiosError
        setErrorMsg(error.response?.data || "An error occurred"); // Set error message from response data
      } else {
        setErrorMsg("Something went wrong !");
      }
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setUserDetails({...userDetails, [e.target.name]: e.target.value})
  }

  return (
    <Box sx={muicss.authContainer}>
      <Box sx={muicss.authWrapper} width={"20%"}>
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="h4">Log In</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField type="text" required id="username" label="Username" variant="outlined" name="username" fullWidth value={userDetails.username} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="password" required label="Password" variant="outlined" fullWidth name="password" value={userDetails.password} onChange={handleChange} type={showPassword ? "text" : "password"} // Conditional rendering of type attribute
              InputProps={{ // Adding the toggle button
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={()=>setShowPassword(prev => !prev)}>{showPassword ? "Hide" : "Show"}</Button>
                  </InputAdornment>
                )
              }}
            />          
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color={"red"}>{errorMsg}</Typography>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="subtitle1">Forgot Password</Typography>
            <Button disabled={userDetails.username === "" || userDetails.password === ""} sx={{margin:"2rem 0"}} variant="contained" fullWidth onClick={handleRegister}>Log In</Button>
            <Typography variant="subtitle1">don't have account? <NavLink to="/register">Create New Account</NavLink></Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Login