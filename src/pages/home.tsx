import { Flex, useColorModeValue } from "@chakra-ui/react"
import {  Hero } from "../components/Hero/Hero"
import { Sobre } from "../components/About/Sobre"
import { NavBar } from "../components/NavBar/Header"
import { Projects } from "../components/Projects/Projects"
import { Footer } from "../components/Footer/Footer"


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
            <Footer/>
            
        </Flex>
    )
}