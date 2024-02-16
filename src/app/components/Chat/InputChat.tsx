import { Box, Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";


const [input,setInput] = useState("");
const[output, setOutput] = useState("");

const handleSubmit = async (e) => {
    e.preventDeault();
}

const response = await axios.post('http://127.0.0.1:5000/chat_gpt', {
    "User":"user",
    "message":input
})

export default function InputChat(){
    return (
        <Flex backgroundColor={'darkgreen'} p={6}>
            <Input placeholder="write anything!" color={'white'}>

            </Input>
            <Button colorScheme='gray'>
                Send
            </Button>

        </Flex>
    )
}