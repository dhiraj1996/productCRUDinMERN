import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useProductStore } from '../store/product';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800")
    
    const toast = useToast()
    const {deleteProduct, updateProduct} = useProductStore()
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

    const handleUpdatedProduct = async(pid, updatedProduct) => {
        const {success} = await updateProduct(pid, updatedProduct);
        onClose();
        if (!success){
            toast({
                title: "Error",
                description: "Product Not Updated",
                status: "error",
                duration: "3000",
                isClosable: true
            })
            }else{
                toast({
                    title: "Success",
                    description: "Product Updated Successfully",
                    status: "success",
                    duration: "3000",
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
            <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
            {/* <Button>Edit</Button> */}
            <IconButton icon={<DeleteIcon />} onClick={() =>handleDeleteProduct(product._id)} colorScheme='red' />
            {/* <Button>Delete</Button> */}
            </HStack>
        </Box>


        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <Input 
                            placeholder='Product Name'
                            name='name'
                            type="text"
                            value={updatedProduct.name}
                            onChange={(e)=> setUpdatedProduct({...updatedProduct, name: e.target.value})}
                        />
                        <Input 
                            placeholder='Product Price'
                            name='price'
                            type= "number"
                            value={updatedProduct.price}
                            onChange={(e)=> setUpdatedProduct({...updatedProduct, price: e.target.value})}
                        />
                        <Input 
                            placeholder='Image URL'
                            name='image'
                            type='text'
                            value={updatedProduct.image}
                            onChange={(e)=> setUpdatedProduct({...updatedProduct, image: e.target.value})}
                        />
                    </VStack>
                </ModalBody>
            
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={() => handleUpdatedProduct(product._id, updatedProduct)}>
                Update
                </Button>
                <Button variant='ghost' onClick={onClose}>
                    Cancel
                </Button>
            </ModalFooter>
          </ModalContent>

        </Modal>
    </Box>
  )
}

export default ProductCard