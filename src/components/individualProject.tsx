import {  Image, Flex, Text} from "@chakra-ui/react"
import imgTopfilms from "../assets/images/topfilms.jpeg"


export const IndividualProject = () => {
    return (
        <Flex color='white'
        border='1px solid red'
        align='center'
        direction={'column'}>
            
                <Text fontSize='1.5rem'>Top Films</Text>
                <Image src={imgTopfilms} alt='Top Films Project' w='100%'/>
        </Flex>
    )
}