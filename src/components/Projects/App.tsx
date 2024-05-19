import { Flex, HStack, } from "@chakra-ui/react"
import { ReactProjects } from "../React/reactProjects"
import { Route, Routes, Link  } from "react-router-dom"
import { LandingPage } from "../LadingPage/ladingPages"
import { NextProjects } from "../Next/nextProjects"



export const Projects = () => {
    return (
        <Flex
        // border='1px solid red'
        // h='100vh'
        direction={'column'}
        align='center'
        >
            <Flex
            // w='20%'
            justify={'center'}
            align={'center'}
            // mt='20px'
            >
                <HStack 
                fontSize='1.5rem'
                spacing={18}
                >
                    <Link to='/react'>React</Link>
                    <Link to='/next'>Next</Link>
                    <Link to='/ladingpage'>HTML+CSS</Link>
                </HStack>
            </Flex>
            <Flex            
            w={{base:'100%', sm:'100%', md:'95%', lg:'95%'}}

            
            >
                <Flex
                // // borderRadius='30px' 
                // border='2px solid green'
                w='100%'
                // p='1rem'
                // overflow={"hidden"}
                m='20px auto'
                
                > 
                    <Routes>
                        <Route path="/" element={<ReactProjects/>}/>
                        <Route path="/react" element={<ReactProjects/>}/>
                        <Route path="/next" element={<NextProjects/>}/>
                        <Route path="/ladingpage" element={<LandingPage/>}/>
                    </Routes>
                
                    {/* <ReactProjects/> */}
                    
                </Flex>
            </Flex>
        </Flex>
    )
}