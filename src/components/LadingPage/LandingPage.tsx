import { Grid } from "@chakra-ui/react"
import { photoList } from "../../data/photoList"
import { PhotosLa } from "../photoItens/ladingPagePhotos"



export const LandingPage = () => {
    return (
        <>
            <Grid
                    // h='700px'
                    // style={{ scrollbarWidth: "none", overflow: "-webkit-scrollbar" }}
                    // overflow='auto'                     
                    
                    w='100%'                    
                    templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)'}} 
                    gap={3}
                    >
                      {photoList.map( item => (
                        <PhotosLa
                        key={item.id}
                        photo={item}/>
                          
                      ))}  
                    

                    

                    
                    </Grid>
                    
        </>
    )
}