import { Flex, Link, Grid, GridItem, HStack, Image } from "@chakra-ui/react"
import { ReactProjects } from "./reactProjects"
import imgLadingFake from '../assets/images/siteFake.png'
import imgTopFilms from '../assets/images/topFilms.png'



export const Projects = () => {
    return (
        <Flex
        border='1px solid red'
        h='100vh'
        direction={'column'}
        align='center'
        
        >
            <Flex
            w='20%'
            justify={'center'}
            align={'center'}
            mt='20px'
            >
                <HStack spacing={18}>
                    <Link>React</Link>
                    <Link>Next</Link>
                    <Link>HTML+CSS</Link>
                </HStack>
            </Flex>
            <Flex
            
            w='80%'
            p='1rem'
            >
                <Flex
                // borderRadius='30px' 
                // border='2px solid white'
                w='100%'
                p='1rem'
                overflow={"hidden"}
                > 
                    <ReactProjects/>
                    
                </Flex>
            </Flex>
        </Flex>
    )
}