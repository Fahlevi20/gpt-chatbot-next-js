'use client'
import ChatScreen from "./components/Chat/ChatScreen";
import NavBar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/Sidebar";
import styles from "./page.module.css";
import { Flex,Box, ChakraProvider, Container, VStack } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
    <NavBar/>
  
    <main>
   
 <VStack>
<Box backgroundColor={"gray"} width={"100%"} height={'800px'} color='white' p={4}>
<Flex> 

<SideBar/>
<ChatScreen/>

</Flex>



  </Box>  
  </VStack> 

  

    </main>

    </ChakraProvider>
  );
}
