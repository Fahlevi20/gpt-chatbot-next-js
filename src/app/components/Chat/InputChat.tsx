import { Box, Button, Flex, Input } from "@chakra-ui/react";

export default function InputChat(){
    return (
        <Flex backgroundColor={'darkgreen'} p={6}>
            <Input placeholder="write anything!" color={'white'}>

            </Input>

        </Flex>
    )
}