import { Grid } from "@chakra-ui/react"
import { photoList2 } from "../../data/photoList"
import { PhotosRe } from "../photoItens/reactPagePhoto"



export const ReactProjects = () => {
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
                      {photoList2.map( item => (
                        <PhotosRe
                        key={item.id}
                        photo={item}/>
                          
                      ))}  
                    

                    

                    
                    </Grid>
                    
        </>
    )
}