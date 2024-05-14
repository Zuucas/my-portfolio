import { Flex } from "@chakra-ui/react"
import { About } from "../components/about"
import { Hero } from "../components/hero"
import { NavBar } from "../components/navBar"


export const Home = () => {
    return (
        <Flex direction={'column'}
        // h='100vh' 
        bg='#000'
        >
            <NavBar/>
            <About/>
            <Hero/>
        </Flex>
    )
}