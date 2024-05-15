import {  Flex, Image, Text } from "@chakra-ui/react";
import myPhoto from "../assets/images/eu.jpg";
// import { DownloadIcon, EmailIcon } from "@chakra-ui/icons";

export const Sobre = () => {

    
    return (
        <Flex
        h='100vh'        
        justify='center'
        align='center'
        id="hero"
        >
            <Flex
            justifyContent='center'
            align='center'
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

        
                <Flex 
                direction='column'
                mx={{base:'20px',md:'50px'}}
                >

                    <Text
                    fontWeight='600'
                    fontSize='30px'>Sobre mim</Text>

                    <Text
                    fontSize='20px'>Sou apaixonado por aprender, sempre em busca de desenvolvimento na área da tecnologia, atualmente cursando sistemas para internet pela <b>UNIFATECIE</b>, tenho o objetivo de me especializar ainda mais no mercado Front-end. Atualmente tenho conhecimentos em Frameworks como React.js e Next.js, e linguagens de programação como HTML, Css, JavaScript, Typescript, além de conhecimentos básicos de design e softwares como Photoshop, Canva, Figma. Com esses conceitos posso mesclar ambos conhecimentos para chegar a um resultado harmonioso.</Text>

                </Flex>
            </Flex>
            
        </Flex>
    );
};