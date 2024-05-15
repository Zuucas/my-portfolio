import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons"
import { Text, Flex, Center, Button, Link, useColorModeValue  } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaWhatsappSquare  } from "react-icons/fa"


export const Hero = () => {
    const simbolColor = useColorModeValue("#df0026", "#0cc0df");

    return (
        <Flex
        justify='center'
        align='center'
        direction='column'
        h='100vh'
        // border='1px solid white'
        borderBottom='1px solid #fff'
        >
            <Center
            
            fontSize='2rem'
            mb='40px'
            > 
            <Flex
            direction='column'>             
                <Text textAlign='center'><ChevronLeftIcon color={simbolColor} />  Lucas_Melo /<ChevronRightIcon color={simbolColor} /></Text>
                <Text fontSize={{base:'2rem', md:'3rem'}} color={simbolColor}  >Frontend Developer</Text> 
                </Flex>               
            </Center>

            <Flex direction='column'
             align='center'>
                <Button
                cursor='pointer'
                size='sm' 
                variant='outline'
                as='a'
                href='./Curriculo.pdf'
                download='Curriculo.pdf'
                ><DownloadIcon/>Download CV</Button>
                <Flex
                fontSize='20px'
                gap={5}
                
                mt='20px'
                >
                    <Link _hover={{opacity: 0.5}}
                    href="https://github.com/Zuucas"
                    target="_blank"
                    ><FaGithub /></Link>
                    <Link _hover={{opacity: 0.5}}
                    href="https://www.linkedin.com/in/lucas-melo-85a16b164/"
                    target="_blank"
                    ><FaLinkedin /></Link>
                    <Link _hover={{opacity: 0.5}}
                    href="https://wa.link/mzjfoz"
                    target="_blank"
                    ><FaWhatsappSquare  /></Link>
                </Flex>
            </Flex>
        </Flex>
    )
}