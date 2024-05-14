import { Flex, VStack,Link, Grid, GridItem } from "@chakra-ui/react"
import { IndividualProject } from "./individualProject"



export const Projects = () => {
    return (
        <Flex
        h='100vh'
        color='white'
        >
            <Flex // lista dos tipos de projetos (React - Next - HTML+CSS)
            // bg='#ccc'
            w='20%'
            justify={'center'}
            align={'center'}
            >
                <VStack spacing={18}>
                    <Link>React</Link>
                    <Link>Next</Link>
                    <Link>HTML+CSS</Link>
                </VStack>
            </Flex>
            <Flex
            
            w='75%'
            // // bg='red'
            p='2rem'
            >
                <Flex
                borderRadius='30px' 
                border='2px solid white'
                w='100%'
                p='1rem'
                >
                    <Grid
                    style={{ scrollbarWidth: "none", overflow: "-webkit-scrollbar" }}
                    overflow='auto'                     
                    p='20px'
                    w='100%'
                    border='1px solid white'
                    templateColumns='repeat(3, 1fr)' 
                    gap={6}>
                    <GridItem w='100%' h='300px' border='1px solid #fff' borderRadius='30px' ><IndividualProject/></GridItem>
                    <GridItem w='100%' h='300px' border='1px solid #fff' borderRadius='30px' />
                    <GridItem w='100%' h='300px' border='1px solid #fff' borderRadius='30px' />
                    <GridItem w='100%' h='300px' border='1px solid #fff' borderRadius='30px' />
                    <GridItem w='100%' h='300px' border='1px solid #fff' borderRadius='30px' />
                    <GridItem w='100%' h='300px' border='1px solid #fff' borderRadius='30px' />
                    <GridItem w='100%' h='300px' border='1px solid #fff' borderRadius='30px' />
                    <GridItem w='100%' h='300px' border='1px solid #fff' borderRadius='30px' />
                    <GridItem w='100%' h='300px' border='1px solid #fff' borderRadius='30px' />
                    
                    </Grid>
                    
                </Flex>
            </Flex>
        </Flex>
    )
}