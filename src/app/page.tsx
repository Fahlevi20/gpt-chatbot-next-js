'use client'
import ChatScreen from "./components/Chat/ChatScreen";
import InputChat from "./components/Chat/InputChat";
import NavBar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/Sidebar";
import styles from "./page.module.css";
import { Flex,Box, ChakraProvider, Container, VStack } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
    <NavBar/>
  
    <main>
      <Box backgroundColor={'darkgray'} height={612}>
<ChatScreen/>
  </Box>
  <InputChat/>

    </main>

    </ChakraProvider>
  );
}
