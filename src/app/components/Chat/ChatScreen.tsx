import { Box, DarkMode } from "@chakra-ui/react";

export default function ChatScreen() {
    return(
        <Box backgroundColor={"black"} width='100%' height={800} p={100}>
            this is chatscreen
//input text
            <Box p={5} backgroundColor={"green"} 
            width={"fit-content"} 
            border='2px' borderColor='gray.200' 
            boxShadow={"xs"}
            rounded="lg"
            // borderColor="white.200" 
            // borderRadius={2}
            >
                Hi
            </Box>
            <Box display='flex' p={5} backgroundColor={"darkgreen"} 
            width={"fit-content"} 
            border='2px' borderColor='gray.200' 
            boxShadow={"xs"}
            rounded="lg"
            >
                Hello Bro!
                
            </Box>
        </Box>
    )
}