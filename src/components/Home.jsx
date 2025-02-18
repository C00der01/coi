import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'
import btc from '../assets/btc.png'

export default function Home() {
  return (
 <Box bgColor={'blackAlpha.900'} w={'full'} h='85vh' >
  <Image w='full' h='full' objectFit='contain' src={btc}
   filter={"grayscale(1)"}
  />
 <Text
  fontSize="6xl"
  textAlign="center"   // Corrected typo here
  fontWeight="thin"
  color="whiteAlpha.700"
  mt="-20"
>
  Xcrypto
</Text>

 </Box>
  )
}
