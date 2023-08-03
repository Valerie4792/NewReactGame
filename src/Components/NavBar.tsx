import { ColorModeScript, HStack, Image, Text, theme } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import React from 'react'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <Text>Nav Bar</Text>
        
    </HStack>
  )
}

export default NavBar
