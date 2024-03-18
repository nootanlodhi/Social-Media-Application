import { Box } from '@mui/material'
import { muicss } from '../../Utils/muicss'
import HomeSidebar from './HomeSidebar'

const Home = () => {
  return (
    <Box sx={muicss.homeContainer}>
      <HomeSidebar/>
    </Box>
  )
}

export default Home