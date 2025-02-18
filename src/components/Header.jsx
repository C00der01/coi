import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <HStack p='4' shadow='base' bgColor="blackAlpha.900">
      <Button variant='unstyled' color='#fff'>
        <Link to='/'>Home</Link>
      </Button>
      <Button variant='unstyled' color='#fff'>
        <Link to='/exchanges'>Exchange</Link>
      </Button>
      <Button variant='unstyled' color='#fff'>
        <Link to='/coin'>Coin</Link>
      </Button>
      {/* <Button variant='unstyled' color='#fff'>
        <Link to='/coin/:id'>CoinDetails</Link>
      </Button> */}
    </HStack>
  )
}
