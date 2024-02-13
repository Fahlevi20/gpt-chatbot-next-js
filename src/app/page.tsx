'use client'
import styles from "./page.module.css";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import Sidebar from "./components/Navbar/Navbar";
export default function Home() {
  return (
    <ChakraProvider>
    <Sidebar/>
    <main>
      
<Box backgroundColor={"gray"} width={"100%"} height={'800px'} color='white' p={4}>
  <h1>hello  </h1> 

  </Box>  
        

      
    </main>
    </ChakraProvider>
  );
}
