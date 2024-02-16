'use client'
import Chat from "./components/Chat/Chat";
import ChatScreen from "./components/Chat/Chat";
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
      {/* <Box backgroundColor={'darkgray'} height={564}>
  </Box> */}
  {/* <InputChat/> */}
  <Chat/>

    </main>

    </ChakraProvider>
  );
}
