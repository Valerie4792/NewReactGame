import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'


const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  return (
   <HStack>
      <Switch isChecked={colorMode=== 'dark'} onChange={toggleColorMode}/>
      {/* below will be on an assessment */}
     {colorMode === 'dark' ? <Text>Dark Mode</Text>: <Text>Light Mode</Text>}
   </HStack>
  )
}

export default ColorModeSwitch
