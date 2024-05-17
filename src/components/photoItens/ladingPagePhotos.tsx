

import { Flex, GridItem, Image, Link, Text } from "@chakra-ui/react";
import { Photo } from "../../types/Photo";


type Props = {
    photo: Photo
}

export const PhotosLa = ({photo}: Props) => {
    return (
        <GridItem 
                    
                    p='10px'
                    w='100%' 
                   
                    h='max-content'                     
                    >
                        <Flex
                        direction='column'
                        align='center'                         
                        >
                        <Link href={photo.linkVercel} target="_blank">
                            <Image cursor='pointer'  _hover={{opacity: 0.5}} src={photo.url} 
                            alt='page1'></Image>
                        </Link>
                        <Text
                        fontSize='1.5rem'
                        > {photo.info} </Text>
                        <Link href={photo.linkGithub}
                        target='_blank'
                        >  Repositório GIT</Link>
                        </Flex> 
                        
                    </GridItem>
    )
}