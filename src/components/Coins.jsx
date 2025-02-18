// import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import {server} from '../index'
import {  Button, Container, HStack,RadioGroup,Radio} from '@chakra-ui/react';
import Loding from './Loding';
import CoinCard from './CoinCard';


export default function Coins() {
  const [coin,setCoin]=useState([]);
  const [isloading,setLoading]=useState(true)
  const [currency,setCurrency]=useState('inr');
  const [page,setPage]=useState(1);
 
  // console.log(currency);
const currencySym=currency==='inr'? '₹': currency==='usd'?'$':'€'
  const pageno = new Array(130).fill(0);
  function handleChange(num){
    setLoading(true)
    setPage(num)
    // console.log(num);
    
  }

  useEffect(()=>{
    async function fetchData() {
      try {
         // const {data}=await axios.get(`${server}/exchanges`)
      const response=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}&per_page=100`);
      const data=await response.json();
      // console.log(data);
      setCoin(data)
      setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[page,currency])
  return (
   <Container maxW='container.xl'>
       <RadioGroup  onChange={setCurrency} defaultValue="inr" value={currency}>
    <HStack p='8' spacing={3}>
        <Radio value="inr">INR</Radio>
        <Radio value="usd">USD</Radio>
        <Radio value="eur">EUR</Radio>
    </HStack>
    </RadioGroup>
    {isloading?<Loding/>:(<>
    <HStack wrap='wrap' justifyContent={"space-evenly"} >

      {coin.map((items,i)=>
        // console.log(items)
       <CoinCard name={items.name} img={items.image} price={items.ath} id={items.id} key={i} symbol={items.symbol} currency={currency} currencySymbol={currencySym}/>
      )}
      </HStack>
    </>)}
    <HStack overflowX="auto" p='8'>{pageno.map((ii,i)=>
        <Button bgColor={'blackAlpha.900'} color='white' onClick={()=>handleChange(i+1)} key={i}>{i+1}</Button> 
    )}</HStack>
   </Container>
  )
}

