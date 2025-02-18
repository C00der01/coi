import { Box, Container,RadioGroup,Radio,HStack, VStack ,Text,Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress, Button} from '@chakra-ui/react';

import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Loding from './Loding';
import Chart from './Chart';
// import axios from 'axios';
// import {server} from '../index'


export default function CoinDetails() {
  const [currency,setCurrency]=useState('inr');
  const [isloading,setLoading]=useState(true);
  const [coin,setCoin]=useState([]);
  const [days,setDays]=useState('1d');
  const [chartArray,setChartArray]=useState([]);
  const btns=['24h','7d','14d','30d','60d','200d','1y','max']
  console.log(days);
  
  const currencySym=currency==='inr'? '₹': currency==='usd'?'$':'€'
    const {id}=  useParams();
    // console.log(id);
  function handleTimeperiod(val){
    // console.log(val);
switch (val) {
  case '24':  
   
    setDays(1);
    break;  

  case '7d':  
   
    setDays('7');
    break;

  case '14d':
    setDays('14');
    break;

  case '30d':
    setDays('30');
    break;

  case '60d':
    setDays('60');
    break;

  case '200d':
    setDays('200');
    break;

  case '1y':
    setDays('365'); 
    break;

  case 'max':
    setDays('max');
    break;

  default:
    setDays(val);
    break;
}

} 
    useEffect(()=>{
      async function fetchData() {
        try {
           // const {data}=await axios.get(`${server}/exchanges`)
        const response=await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data=await response.json();
       const responseChart = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
       const chartData=await responseChart.json();
      // console.log(chartData.prices);
      
        setCoin(data)
        setChartArray(chartData.prices)
        setLoading(false)
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[id,currency,days])
  //  console.log(pr.id);
   
  return (
    <Container maxW={'container.xl'}>
   {isloading?(<Loding/>):<>
   <Box w='full' borderWidth={1}>
    <Chart currency={currencySym}  arr={chartArray} days={days}/>
   </Box>
   <HStack py='8' overflowX='auto'>{btns.map((i)=>(
  <Button key={i} onClick={()=>handleTimeperiod(i)}>{i}</Button>
    
   ))}</HStack>
      <RadioGroup  onChange={setCurrency} defaultValue="inr" value={currency}>
       <HStack p='8' spacing={3}>
           <Radio value="inr">INR</Radio>
           <Radio value="usd">USD</Radio>
           <Radio value="eur">EUR</Radio>
       </HStack>
       </RadioGroup>
    <VStack spacing="4" p="16" alignItems="flex-start">
  <Text fontSize="small" alignSelf="center" opacity={0.7}>
          Last Update on {Date(coin.market_data.last_updated).split('G')[0]}
        </Text>
        <Image src={coin.image.large} w='16' h='16' objectFit='contain'/>
        <Stat>
          <StatLabel>{coin.name}</StatLabel>
          <StatNumber>{currencySym} {coin.market_data.current_price[currency]}</StatNumber>
          <StatHelpText>
            <StatArrow type={coin.market_data.price_change_percentage_24h>0?"increase":"decrease"} />
              {coin.market_data.price_change_percentage_24h}%
            </StatHelpText>

        </Stat>
        <Badge fontSize="2xl" bgColor="blackAlpha.800" color='#fff'>{`#${coin.market_cap_rank}`}</Badge>
          <CustomBar high={`${currencySym }${ coin.market_data.high_24h[currency]}`} low={`${currencySym}${coin.market_data.low_24h[currency]}`}/>

          <Box w='full' p='0' >
            <Items title={'Max Supply'} value={coin.market_data.max_supply}/>
            <Items title={'Circulating Supply'} value={coin.market_data.circulating_supply}/>
            <Items title={'Market Cap'} value={`${currencySym}${coin.market_data.market_cap[currency]}`}/>
           <Items title={'All Time Low'} value={`${currencySym}${coin.market_data.atl[currency]}`}/>
             <Items title={'All Time High'} value={`${currencySym}${coin.market_data.ath[currency]}`}/>
          </Box>
       </VStack>

   </>}
    </Container>
  )
}
function Items({title,value}){
  return(
    <HStack justifyContent='space-between' w='full' my='4'>
      <Text fontFamily={'Bebas Neue' } letterSpacing='widest'>{title}</Text>
      <Text>{value}</Text>
    </HStack>
  )
}
function CustomBar({high,low}){
  return (
    <VStack w='full'>
      <Progress value={50} colorScheme={'teal'} w='full'/>
      <HStack justifyContent={'space-between'} w='full'>
        <Badge children={low} colorScheme='red'/>
        <Text>24H Rating</Text>
        <Badge children={high} colorScheme='green'/>
      </HStack>
    </VStack>
  )
}

