import {  Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
const blackWhite = useColorModeValue("#fff", "#000");

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
            direction={{base:'column', md: 'column', lg:'row'}}           
            mx={{base:'10px',sm:'20px',md:'100px'}}
            >
                <Image 
                src='/eu.jpg'
                alt="Minha foto" 
                w={{base:'200px',sm:'250px',md:'350px'}}
                borderRadius='50%'
                mr={{base:'0',md:'0',lg:'100px'}}
                boxShadow={`0 0 90px ${blackWhite}`} //borda com sombra
                />

        
                <Flex 
                direction='column'
                mx={{base:'20px',md:'50px'}}
                > 

                    <Text
                    fontWeight='600'
                    fontSize='1.6rem'>Sobre mim</Text>

                    <Text
                    fontSize='1.2rem'>Sou apaixonado por aprender, sempre em busca de me aprimorar na área da tecnologia, atualmente cursando sistemas para internet pela UNIFATECIE, 
                    tenho o objetivo de me especializar ainda mais no mercado Front-end. Atualmente tenho conhecimentos em Frameworks como <b>React.js e Next.js,</b> e linguagens de programação
                    como JavaScript, Typescript, além de conhecimentos básicos de design e softwares como Photoshop, Canva, Figma. Com esses conceitos posso mesclar ambos conhecimentos para chegar 
                    a um resultado harmônico.</Text>

                </Flex>
            </Flex>
            
        </Flex>
    );
};