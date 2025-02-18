import React from 'react'
import { VStack,Image, Heading ,Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function CoinCard({name,symbol,price,id,img ,currencySymbol}) {
    // console.log(symbol);
    
  return (
    <Link to={`/coin/${id}`}  target="blank">

      <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius="lg" m={'4'} transition='all 1s ease-out' css={{'&:hover':{transform:"scale(1.2)"}}}>
        <Image 
        src={img}
        w='10'
        h='10'
        objectFit='contain'
     
        alt={name}
        />
      <Heading size='md' noOfLines={1}>{symbol}</Heading>
      <Text noOfLines={1}>{name}</Text>
       <Text noOfLines={1}>{price?`${currencySymbol}${ price}`:"NA"}</Text>
      </VStack>
    </Link>
  )
}
