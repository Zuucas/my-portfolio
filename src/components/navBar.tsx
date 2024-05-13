import { Flex, Link } from "@chakra-ui/react"


export const NavBar = () => {
    return (
        <>
            <Flex justify='space-evenly'
            w='100vw'
            h='5vh'
            bg='#ccc'
            align='center'>
                <Link>About</Link>
                <Link>Skills</Link>
                <Link>Projects</Link>
            </Flex>
        </>
    )
}