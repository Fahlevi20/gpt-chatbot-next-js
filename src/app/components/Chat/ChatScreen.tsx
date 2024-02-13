import { Box, DarkMode, HStack } from "@chakra-ui/react";

export default function ChatScreen() {
    return(
        <HStack alignSelf={'flex-end'} rounded={'lg'} borderRadius={'base'} width={"auto"} border={1} bg={'green'} p={2} color={"white"}>
            <text>
                hello how are you
            </text>
        </HStack>

    //     <Box backgroundColor={"black"} width='100%' height={800} p={100}>
    //         this is chatscreen

    //         <Box p={5} backgroundColor={"green"} 
    //         width={"fit-content"} 
    //         border='2px' borderColor='gray.200' 
    //         boxShadow={"xs"}
    //         rounded="lg"
    //         // borderColor="white.200" 
    //         // borderRadius={2}
    //         >
    //             Hi
    //         </Box>
    //         <Box  p={5} backgroundColor={"darkgreen"} 
    //         width={"fit-content"} 
    //         border='2px' borderColor='gray.200' 
    //         boxShadow={"xs"}
    //         rounded="lg"
    //         alignSelf={'flex-end'}
    //         >
    //             Hello Bro
                
    //         </Box>
    //  <HStack alignSelf={'flex-end'}>
    //         <text>
    //             Hello
    //         </text>
    //  </HStack>
    //     </Box>
    )
}