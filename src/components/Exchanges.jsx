// import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import {server} from '../index'
import {  Container, HStack, VStack,Image, Heading ,Text} from '@chakra-ui/react';
import Loding from './Loding';


export default function Exchanges() {
  const [exchanges,setExchanges]=useState([]);
  const [isloading,setLoading]=useState(true)
  useEffect(()=>{
    async function fetchData() {
      try {
         // const {data}=await axios.get(`${server}/exchanges`)
      const response=await fetch('https://api.coingecko.com/api/v3/exchanges');
      const data=await response.json();
      // console.log(data);
      setExchanges(data)
      setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[])
  return (
   <Container maxW='container.xl'>
    {isloading?<Loding/>:(<>
    <HStack wrap='wrap' justifyContent={"space-evenly"} >

      {exchanges.map((items,i)=>
        // console.log(items)
       <ExchangeCard name={items.name} img={items.image} rank={items.trust_score_rank
} url={items.url} key={i}/>
      )}
      </HStack>
    </>)}
   </Container>
  )
}
function ExchangeCard({name,url,rank,img}){
  return(
    <a href={url}  target="_blank">

      <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius="lg" m={'4'} transition='all 1s ease-out' css={{'&:hover':{transform:"scale(1.2)"}}}>
        <Image 
        src={img}
        w='10'
        h='10'
        objectFit='contain'
     
        alt={name}
        />
      <Heading size='md' noOfLines={1}>{rank}</Heading>
      <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  )
}