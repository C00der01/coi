import React from 'react'
import { VStack, Spinner, Box} from '@chakra-ui/react';
export default function Loding() {
  return (
    <VStack  display="flex" justifyContent="center"  h='80vh'>
         <Box transform="scale(3)">  <Spinner size="xl" /></Box>
    </VStack>
  )
}
