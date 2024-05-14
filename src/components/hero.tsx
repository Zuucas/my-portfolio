import { Button, Flex, Image, Text } from "@chakra-ui/react";
import myPhoto from "../assets/images/eu.jpg";
import { DownloadIcon, EmailIcon } from "@chakra-ui/icons";

export const Hero = () => {
    return (
        <>
            <Flex
            justifyContent='center'
            align='center'
            p='20px'
            gap={15}
            border='1px solid green'
            direction={{base:'column', sm:'column',md: 'row',lg: 'row'}}
            >
                <Image 
                src={myPhoto} 
                alt="Minha foto" 
                w='250px'
                borderRadius='50%'
                mr={{base:'0',md:'150px'}}
                // border='2px solid white'
                boxShadow='0 0 5px #fff' //borda com sombra
                />

        
                <Flex //flex com nome e botoes
                border='1px solid red'
                direction='column'
                color='#fff'
                
                >

                    <Text
                    fontSize='50px'>Lucas Melo</Text>

                    <Text
                    fontSize='40px'>Frontend Developer</Text>

                    <Flex
                    h='100px'
                    p='20px'
                    gap={5}
                    mt='10px'
                    align='center'
                    justify='center'
                    direction={{base:'column',sm:'column',md:'row'}}
                    >
                        <Button color='#fff' size='md' variant='outline'><DownloadIcon/>Download CV</Button>
                        <Button color='#fff' size='md' variant='outline'><EmailIcon/>Contact me</Button>
                    </Flex>
                </Flex>
            </Flex>
            
        </>
    );
};