import { Grid, GridItem, Link, Image, Flex, Text} from "@chakra-ui/react"
import Card from '../../assets/imageProjects/card-css.png'
import Toms from '../../assets/imageProjects/ladingpage-toms.png'
import Fake from '../../assets/imageProjects/site-fake.png'
import Phone from '../../assets/imageProjects/iphone.png'



export const LandingPage = () => {
    return (
        <>
            <Grid
                    h='700px'
                    style={{ scrollbarWidth: "none", overflow: "-webkit-scrollbar" }}
                    overflow='auto'                     
                    
                    w='100%'                    
                    templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)'}} 
                    gap={3}
                    >

                    <GridItem 
                    cursor='pointer'
                    p='10px'
                    w='100%' 
                    _hover={{opacity: 0.5}}
                    h='max-content'
                     
                    >
                        <Flex
                        direction='column'
                        align='center'
                         
                        >
                        <Link href="https://card-zuucas.vercel.app/" target="_blank">
                            <Image src={Card} alt='page1'></Image>
                        </Link>
                        <Text
                        fontSize='1.5rem'
                        > CSS - HTML Card </Text>
                        <Text
                        >  Animação com CSS</Text>
                        </Flex> 
                        
                    </GridItem>

                    <GridItem 
                    cursor='pointer'
                    p='10px'
                    w='100%' 
                    _hover={{opacity: 0.5}}
                    h='max-content'
                    >
                        <Flex
                         
                        direction='column'
                        align='center'
                        >
                        <Link href="https://site-fake-zuucas.vercel.app/" target="_blank">
                            <Image src={Fake} alt='page1'></Image>
                        </Link>
                        <Text
                        fontSize='1.5rem'
                        > CSS - HTML LandingPage </Text>
                        <Text
                        >  Estudo de Flebox</Text>
                        </Flex>                        
                    </GridItem>

                    <GridItem 
                    cursor='pointer'
                    p='10px'
                    w='100%' 
                    _hover={{opacity: 0.5}}
                    h='max-content' 
                    >
                        <Flex
                         
                        direction='column'
                        align='center'
                        >
                        <Link href="https://lading-page-site-toms.vercel.app/" target="_blank">
                            <Image src={Toms} alt='page1'></Image>
                        </Link>
                        <Text
                        fontSize='1.5rem'
                        > CSS - HTML LandingPage </Text>
                        <Text
                        >  Estudo com FIGMA</Text>
                        </Flex>                        
                    </GridItem>

                    <GridItem 
                    cursor='pointer'
                    p='10px'
                    w='100%' 
                    _hover={{opacity: 0.5}}
                    h='max-content' 
                    >
                        <Flex
                         
                        direction='column'
                        align='center'
                        >
                        <Link href="https://apple-market-test-zuucas.vercel.app/" target="_blank">
                            <Image src={Phone} alt='page1'></Image>
                        </Link>
                        <Text
                        fontSize='1.5rem'
                        > CSS - HTML - JavaScript LandingPage </Text>
                        <Text
                        > Implementação de Lógica </Text>
                        </Flex>                        
                    </GridItem>

                    

                    
                    </Grid>
                    
        </>
    )
}