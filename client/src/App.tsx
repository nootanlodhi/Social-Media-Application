import './App.css'
import { ThemeProvider, responsiveFontSizes } from '@mui/material'
import { theme } from './Utils/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';

const theme2 = responsiveFontSizes(theme);

function App() {

  return (
    <>
      <ThemeProvider theme={theme2}>
        <BrowserRouter>
          <Routes>
            <Route path='/register' Component={Register}/>
            <Route path='/login' Component={Login}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
