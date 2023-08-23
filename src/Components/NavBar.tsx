import { ColorModeScript, HStack, Image, Text, theme } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import React from 'react'
import SearchInput from './SearchInput'
import ColorModeSwitch from './ColorModeSwitch'

interface Props{
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch}/>
       <ColorModeSwitch/>
    </HStack>
  ) 
}

export default NavBar
