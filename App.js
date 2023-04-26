import React, { useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./src/components/NativeBaseIcon";
import Home from './src/home/HomePage';
import Header from './src/components/header/Header';
import { Platform } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [ queryFilter, setQueryFilter ] = useState('apple');
  const [ locale, setLocale ] = useState('English');
  const changeNewsFeed = (value) => {
    setQueryFilter(value);
  }

  const localeChange = (lang) => {
    setLocale(lang)
  }

  return (
    <NativeBaseProvider>
      <Box
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        flex={1}
      >
        <Header changeNewsFeed={changeNewsFeed} localeChange={localeChange} />
        <Box w='100%' display='flex' flexDirection='row'>
          <Heading w='60%' padding='5' display='flex' justifyContent='end'>
            {locale === 'English' ? 'World News' : 'Noticias del mundo'}
          </Heading> 
          <ToggleDarkMode />
        </Box>
        <Home feedData = {queryFilter}/>
      </Box>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w='40%' flex='1' display='flex' justifyContent='center' padding='10'>
      <HStack space={2} justifyContent='flex-end'>
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "switch to dark mode" : "switch to light mode"
          }
        />
        <Text>Light</Text>
      </HStack>
    </Box>
  );
}
