import { Container, Heading, Box, VStack, useColorModeValue, Input, Button, Toast } from '@chakra-ui/react'
import { useState } from 'react'
import { useProductStore } from '../store/product'
import { useToast } from '@chakra-ui/react'

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name:'',
    price:'',
    image:'',  
  })

  const toast = useToast()

  const { createProduct }= useProductStore()
  const handleProductData = async () => {
    const {success, message} = await createProduct(newProduct)
    // console.log("Success", success)
    // console.log("Message", message)
    if (!success){
      Toast({
        title: "Error",
        description: message,
        status: "Error",
        duration: 1000,
        isClosable: true,
      })
    }else{
      toast({
        title: "success",
        description: message,
        status: "success",
        duration: 1000,
        isClosable: true,
      })
        
    }
    setNewProduct({name:"", price:"",image:""})
  }


  return (
    <Container maxWidth={'container.sm'}>
      <VStack spacing={'8'}>
        <Heading as={'h1'} size={'2xl'} mb={'8'} textAlign={'center'}>
          Create Product
        </Heading>
        <Box w={'full'} bg={useColorModeValue("white", "gray.800")} p={'6'} border={'lg'} shadow={'md'}>
          <VStack spacing={'4'} alignItems={'center'}>
            <Input
              placeholder='Product name'
              type='text'
              name='name'
              value={newProduct.name}
              onChange={(e)=> setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e)=> setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e)=> setNewProduct({...newProduct, image: e.target.value})}
            />
            <Button w={'full'} colorScheme='blue' onClick={handleProductData} >Add Product</Button>
          </VStack>
          
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage