import { Flex, useColorModeValue } from "@chakra-ui/react"
import {  Hero } from "../components/Hero/App"
import { Sobre } from "../components/About/App"
import { NavBar } from "../components/NavBar/Header"
import { Projects } from "../components/Projects/App"
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