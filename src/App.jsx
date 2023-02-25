import './App.css'
import FilterBox from './components/FilterBox'
import Header from './components/Header'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'
import { chakra, Box } from '@chakra-ui/react'
function App() {


  return (
    <chakra.div className="App" display={{ base: 'block', md: 'flex' }} >
      <NavBar />
      <Box w={{ base: '100vw', md: '85vw' }} padding={{ base: '0', md: '2' }}>
        <Header />
        <FilterBox />
        <MainContent />
      </Box>
    </chakra.div >
  )
}

export default App
