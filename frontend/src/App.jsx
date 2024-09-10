import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import { Box, useColorModeValue } from "@chakra-ui/react"
import CreatePage from "./pages/CreatePage"


function App() {

  return (
    <Box minHeight={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <Navbar />
        <Routes>
          <Route path="/" element= {<HomePage />} />
          <Route path="/create" element= {<CreatePage/>} />
        </Routes>
    </Box>
  )
}

export default App
