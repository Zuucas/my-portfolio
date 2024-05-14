import {  Flex, Image, Text } from "@chakra-ui/react";
import myPhoto from "../assets/images/eu.jpg";
// import { DownloadIcon, EmailIcon } from "@chakra-ui/icons";

export const Hero = () => {
    return (
        <Flex
        h='100vh'        
        // border='10px solid red'
        justify='center'
        align='center'
        id="hero"
        >
            <Flex
            justifyContent='center'
            align='center'
            // border='1px solid green'
            direction={{base:'column', md: 'row',}}           
            mx={{base:'0',md:'100px'}}
            >
                <Image 
                src={myPhoto} 
                alt="Minha foto" 
                w='350px'
                borderRadius='50%'
                mr={{base:'0',md:'150px'}}
                boxShadow='0 0 5px #fff' //borda com sombra
                />

        
                <Flex //flex com nome e botoes
                // border='1px solid red'
                direction='column'
                color='#fff'
                mx={{base:'20px',md:'50px'}}
                >

                    <Text
                    fontSize='30px'>Sobre mim</Text>

                    <Text
                    wordBreak='break-all'
                    fontSize='20px'>Meu nome é Lucas Melo, tenho 25 anos. Com interesse profundo por resolver problemas através de linhas de código, sempre estou buscando aprender novas formas de lidar com problemas, explorar novas tecnologias e desenvolver soluções criativas.
                    Além da programação, tenho um grande amor pelos animais.</Text>

                </Flex>
            </Flex>
            
        </Flex>
    );
};