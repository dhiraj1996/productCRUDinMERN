import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'
import { useProductStore } from '../store/product';

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800")
    
    const toast = useToast()
    const {deleteProduct} = useProductStore()
    const handleDeleteProduct = async(pid) => {
        const {success, message} = await deleteProduct(pid)
        if (!success){
            toast({
                title: "Error",
                description: message,
                status: "Error",
                duration: 1000,
                isClosable: true,
            })
        }else {
           toast({
            title: "success",
            description: message,
            status: "success",
            duration: 1000,
            isClosable: true,
           })
        }
    }

    
  return (
    <Box 
    bg={bg}
    shadow={"lg"}
    rounded={"lg"}
    overflow={"hidden"}
    transition={"all 0.3s"}
    _hover={{transform: "translateY(-5px)", shadow: "xl"}}    
    >
        <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={'cover'} />
        <Box p={4}>
            <Heading as={"h3"} mb={2} size={"md"}>
                {product.name}
            </Heading>

            <Text color={textColor} fontSize={"xl"} fontWeight={"bold"} mb={4}>
                ₹{product.price}
            </Text>

            <HStack>
            <IconButton icon={<EditIcon />} colorScheme='blue' />
            {/* <Button>Edit</Button> */}
            <IconButton icon={<DeleteIcon />} onClick={() =>handleDeleteProduct(product._id)} colorScheme='red' />
            {/* <Button>Delete</Button> */}
            </HStack>
        </Box>
        
    </Box>
  )
}

export default ProductCard