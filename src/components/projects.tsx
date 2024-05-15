import { Flex, Link, Grid, GridItem, HStack, Image } from "@chakra-ui/react"
import { IndividualProject } from "./individualProject"
import imgLadingFake from '../assets/images/siteFake.png'
import imgTopFilms from '../assets/images/topFilms.png'



export const Projects = () => {
    return (
        <Flex
        border='1px solid red'
        h='100vh'
        direction={'column'}
        // overflow={'-moz-hidden-unscrollable'}
        // color='white'
        align='center'
        
        >
            <Flex // lista dos tipos de projetos (React - Next - HTML+CSS)
            // bg='#ccc'
            w='20%'
            justify={'center'}
            align={'center'}
            mt='20px'
            >
                <HStack spacing={18}>
                    <Link>React</Link>
                    <Link>Next</Link>
                    <Link>HTML+CSS</Link>
                </HStack>
            </Flex>
            <Flex
            
            w='80%'
            // // bg='red'
            p='1rem'
            >
                <Flex
                borderRadius='30px' 
                border='2px solid white'
                w='100%'
                p='1rem'
                // h='100%'
                overflow={"hidden"}
                > 
                    <Grid
                    h='700px'
                    style={{ scrollbarWidth: "none", overflow: "-webkit-scrollbar" }}
                    overflow='auto'                     
                    p='20px'
                    w='100%'
                    
                    // border='1px solid white'
                    templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)'}} 
                    gap={3}>

<GridItem 
                    w='100%' 
                    _hover={{opacity: 0.5}}
                    h='max-content' 
                    border='1px solid blue'
                    // overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><Image src={imgLadingFake}/></Link></GridItem>

                    <GridItem 
                    w='100%' 
                    _hover={{opacity: 0.5}}
                    h='max-content' 
                    border='1px solid blue'
                    // overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><Image src={imgLadingFake}/></Link></GridItem>

                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><Image src={imgTopFilms}/></Link></GridItem>
                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><IndividualProject/></Link></GridItem>
                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><IndividualProject/></Link></GridItem>
                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><IndividualProject/></Link></GridItem>
                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><IndividualProject/></Link></GridItem>
                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><IndividualProject/></Link></GridItem>
                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><IndividualProject/></Link></GridItem>
                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><IndividualProject/></Link></GridItem>
                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank"><IndividualProject/></Link></GridItem>

                    </Grid>
                    
                </Flex>
            </Flex>
        </Flex>
    )
}