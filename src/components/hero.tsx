import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import myPhoto from "../assets/images/eu.jpg";
import { DownloadIcon, EmailIcon } from "@chakra-ui/icons";

export const Hero = () => {
    return (
        <>
            <Flex
            justifyContent='center'
            align='center'
            p='20px'
            gap={4}
            border='1px solid green'
            direction={{ base: 'column', md: 'row' }}
            >
                <Flex>
                <Image 
                src={myPhoto} 
                alt="Minha foto" 
                w='200px'
                borderRadius='50%'
                />
                </Flex>

        
                <Flex 
                border='1px solid red'
                align='center'
                direction='column'>

                    <Text
                    fontSize='50px'>Lucas Melo</Text>

                    <Text
                    fontSize='40px'>I'm a Front end Developer</Text>

                    <Flex gap={8}
                    mt='10px'
                    justify='center'
                    border='1px solid black'
                    >
                        <Button><DownloadIcon/>Download CV</Button>
                        <Button><EmailIcon/>Contact me</Button>
                    </Flex>
                </Flex>
            </Flex>
            
        </>
    );
};