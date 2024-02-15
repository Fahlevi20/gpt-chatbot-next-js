import { Box, DarkMode, Flex, HStack, Text } from "@chakra-ui/react";
import InputChat from "./InputChat";

export default function ChatScreen() {
    return(
        
        // <HStack alignSelf={'flex-end'} rounded={'lg'} borderRadius={'base'} width={"auto"} border={1} bg={'green'} p={2} color={"white"}>
            <Flex direction={'column'}>
            <Flex backgroundColor={'green'} color={'lightgray'} width={'fit-content'} minWidth={50} rounded={'md'} minH={5} alignSelf={'flex-start'}>
                <Text>Hello</Text>
            </Flex>
            <Flex backgroundColor={'green'} color={'lightgray'} width={'fit-content'} minWidth={50} rounded={'md'} minH={5} alignSelf={'flex-end'}>
                <Text>Hello</Text>
            </Flex>
            <Flex backgroundColor={'green'} color={'lightgray'} width={'fit-content'} minWidth={50} rounded={'md'} minH={5}alignSelf={'flex-start'}>
                <Text>Hello</Text>
            </Flex>
            </Flex>
            
    )
}