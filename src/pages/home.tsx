import { Flex, useColorModeValue } from "@chakra-ui/react"
import {  Hero } from "../components/Hero/App"
import { Sobre } from "../components/About/App"
import { NavBar } from "../components/NavBar/Header"
import { Projects } from "../components/Projects/App"


export const Home = () => {

    const bgColor = useColorModeValue("#fff", "#000");


    return (
        <Flex direction={'column'}
        bg={bgColor}
        >
            <NavBar/>
            <Hero/>
            <Sobre/>
            <Projects/>
            
        </Flex>
    )
}