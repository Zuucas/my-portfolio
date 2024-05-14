import { HamburgerIcon } from "@chakra-ui/icons"
import { Flex, Link } from "@chakra-ui/react"


export const NavBar = () => {
    return (
        <>
            <Flex            
            h='5vh'
            bg='#181818'
            align='center'
            // fontSize='1.2rem'
            mb={{base:'40px', md:'0px'}}            
            borderBottom='1px solid white'
            position='relative'
            mt='5px'
            
            >
                <Flex
                color='#fff'
                justify='space-evenly'
                w='100vw'
                display={{base:'none',md:'flex'}}
                >
                    <Link>About</Link>
                    <Link>Skills</Link>
                    <Link>Projects</Link>
                </Flex>

                <Flex color='white'
                position='absolute'
                right={5}
                fontSize='1.5rem'
                display={{base:'flex',md:'none'}}
                // mr='20px'
                >
                    <HamburgerIcon color='white'/>
                </Flex>
            </Flex>
            
        </>
    )
}