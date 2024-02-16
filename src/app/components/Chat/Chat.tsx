import { Box, Button, DarkMode, Flex, HStack, Input, Text } from "@chakra-ui/react";
import InputChat from "./InputChat";

export  default function Chat() {
    return (
        <Box>
        <Flex direction={"column"} backgroundColor={'darkgray'} height={564}>
            <Flex backgroundColor={'green'} 
            color={'lightgray'} 
            width={'fit-content'} 
            minW={50} 
            rounded={'md'} 
            minH={5} 
            alignSelf={"flex-start"}>
                <Text>Hello</Text>
            </Flex>
            <Flex backgroundColor={'green'} 
            color={'lightgray'} 
            width={'fit-content'} 
            minW={50} 
            rounded={'md'} 
            minH={5} 
            alignSelf={"flex-end"}>
                <Text>Hello</Text>
            </Flex>

        </Flex>
        <Flex backgroundColor={'darkgreen'} p={6}>
            <Input placeholder="writeanyting" color={'white'}/>
        
        </Flex>
        
        </Box>

    );
}
        //    <Flex backgroundColor={'darkgreen'} p={6}>
        //     <Input placeholder="write anything!" color={'white'}>

        //     </Input>
        //     <Button colorScheme='gray'>
        //         Send
        //     </Button>

        //     </Flex>
            