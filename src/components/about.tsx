import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons"
import { Text, Flex, Center, Button, Link } from "@chakra-ui/react"
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa"


export const About = () => {
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
            color='white'
            fontSize='2rem'
            mb='40px'
            > 
            <Flex
            direction='column'>             
                <Text textAlign='center'><ChevronLeftIcon color='#0cc0df'/>  Lucas_Melo /<ChevronRightIcon color='#0cc0df'/></Text>
                <Text fontSize={{base:'2rem', md:'3rem'}} color='#0cc0df'>Frontend Developer</Text> 
                </Flex>               
            </Center>

            <Flex direction='column'
             align='center'>
                <Button color='#fff' size='sm' variant='outline'><DownloadIcon/>Download CV</Button>
                <Flex
                fontSize='20px'
                gap={5}
                color='white'
                mt='20px'
                >
                    <Link _hover={{opacity: 0.5}}><FaGithub /></Link>
                    <Link _hover={{opacity: 0.5}}><FaLinkedin /></Link>
                    <Link _hover={{opacity: 0.5}}><FaInstagramSquare /></Link>
                </Flex>
            </Flex>
        </Flex>
    )
}