import { Box, Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaAddressCard } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";




const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Container maxWidth={"100vw"} px={44}>
        <Flex
          h={16} 
          alignItems={'center'} 
          justifyContent={'space-between'}
        >
            <Text
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontSize={{base:'22', sm: '28'}}
              fontWeight='bold'
              textAlign={"center"} 
            >
                <Link to="/">Products 🛒</Link> 
            </Text>
            <HStack spacing='4' alignItems={'center'}>
              <Link to={"/create"}>
                <Button>
                  <FaAddressCard fontSize={'20'} />
                </Button>
              </Link>
              <Button onClick={toggleColorMode}>
                  {colorMode === 'light'? <IoMoon /> : <IoSunny />}
              </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar