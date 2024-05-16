import {  Flex, Grid, GridItem, Link} from "@chakra-ui/react"
export const NextProjects = () => {
    return (
        
            <Grid
                    h='700px'
                    style={{ scrollbarWidth: "none", overflow: "-webkit-scrollbar" }}
                    overflow='auto'
                    p='20px'
                    w='100%'                    
                    templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)'}} 
                    gap={3}
                    border='1px solid blue'>
                        <Flex>
                        


                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank">In progress</Link></GridItem>


                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank">In progress</Link></GridItem>
                    <GridItem 
                    w='100%' 
                    h='300px' 
                    // border='1px solid #fff' 
                    // borderRadius='30px' 
                    // p='10px'
                    overflow='hidden'
                    ><Link href="https://top-films-beta.vercel.app/" target="_blank">In progress</Link></GridItem>
                    </Flex>
                    </Grid>
                    
       
    )
}