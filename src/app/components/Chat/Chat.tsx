import { Box, Button, DarkMode, Flex, HStack, Input, Text } from "@chakra-ui/react";
import InputChat from "./InputChat";
import { useState } from "react";
import axios from "axios";





export  default function Chat() {
    const [input,setInput] = useState("hello"); //untuk menyimpan input
const [output,setOutput] = useState("yes"); //untuk menyimpan output

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://127.0.0.1:5000/chat_gpt", 
    {"user": "user",
    "message":input,
}, {
    headers: {
        'Content-Type':"application/json"
    }
});
    setOutput(response.data);
};
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
                <Text>{input}</Text>
            </Flex>
            
            <Flex backgroundColor={'green'} 
            color={'lightgray'} 
            width={'fit-content'} 
            minW={50} 
            rounded={'md'} 
            minH={5} 
            alignSelf={"flex-end"}>
                <Text>{output}</Text>
            </Flex>

        </Flex>
        <Flex backgroundColor={'darkgreen'} p={6}>
            <Input placeholder="write anything!" color={'white'}/>
            <Button colorScheme="gray">
            Send
        </Button>
        
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
            