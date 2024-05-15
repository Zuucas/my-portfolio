import {  Image,   Grid, GridItem, Link} from "@chakra-ui/react"
import imgLadingFake from '../assets/images/siteFake.png'
import imgTopFilms from '../assets/images/topFilms.png'
export const ReactProjects = () => {
    return (
        <>
            <Grid
                    h='700px'
                    style={{ scrollbarWidth: "none", overflow: "-webkit-scrollbar" }}
                    overflow='auto'                     
                    p='20px'
                    w='100%'                    
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
                    
                    </Grid>
                    
        </>
    )
}