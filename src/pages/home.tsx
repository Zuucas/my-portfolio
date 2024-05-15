import { Flex, useColorModeValue } from "@chakra-ui/react"
import {  Hero } from "../components/hero"
import { Sobre } from "../components/sobre"
import { NavBar } from "../components/navBar"
import { Projects } from "../components/projects"
// import { ThemeProvider } from "styled-components"
// import { useState } from "react"


export const Home = () => {

    const bgColor = useColorModeValue("#fff", "#000");

    // const [theme, setThemesetTheme] = useState('dark')

    // const themeToggler = () => {
    //     theme === 'dark' ? setThemesetTheme('light') : setThemesetTheme('dark')
    // }

    return (
        <Flex direction={'column'}
        // h='100vh' 
        bg={bgColor}
        >
            <NavBar/>
            <Hero/>
            <Sobre/>
            <Projects/>
            
        </Flex>
    )
}