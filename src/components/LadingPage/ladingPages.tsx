import { Grid } from "@chakra-ui/react"
import { photoList } from "../../data/photoList"
import { PhotosLa } from "../photoItens/ladingPagePhotos"
// import Card from '../../assets/imageProjects/card-css.png'
// import Toms from '../../assets/imageProjects/page-toms.png'
// import Fake from '../../assets/imageProjects/site-fake.png'
// import Phone from '../../assets/imageProjects/iphone.png'



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
                      {photoList.map( item => (
                        <PhotosLa
                        key={item.id}
                        photo={item}/>
                          
                      ))}  
                    

                    

                    
                    </Grid>
                    
        </>
    )
}