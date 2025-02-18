import { Avatar, Box, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} color='#fff' minH='48' py={['16', '8']} px={'16'}>
      <Stack direction={['column', 'row']} h="full" alignItems="center" justifyContent="space-between">
        <VStack w='full' alignItems={['center', 'flex-start']}>
          <Text fontWeight="bold">About Us</Text>
          <Text fontSize='sm' letterSpacinf='widest' textAlign={['center','left']}>We are best crypto trading app in India ,we provide at very affortable price</Text>
        </VStack>
        <VStack alignItems="center">
          <Avatar boxSize={['20','28']} mt={['4', '0']} />
          <Text mt={2}>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
}
