import { HamburgerIcon } from "@chakra-ui/icons"
import { Flex, Link, Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    VStack,
} from "@chakra-ui/react"


export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex            
            h='5vh'
            bg='#181818'
            align='center'
            // fontSize='1.2rem'
            // mb={{base:'40px', md:'0px'}}            
            borderBottom='1px solid white'
            position='relative'
            mt='5px'
            maxW='100vw'
            
            >
                <Flex
                color='#fff'
                justify='space-evenly'
                w='100vw'
                display={{base:'none',md:'flex'}}
                >
                    <Link href="#hero">About</Link>
                    <Link>Skills</Link>
                    <Link>Projects</Link>
                </Flex>

                <Flex color='white'
                position='absolute'
                right={5}
                fontSize='1.5rem'
                display={{base:'flex',md:'none'}}
                // mr='20px'
                >
                    <HamburgerIcon onClick={onOpen} color='white'/>
                </Flex>
            </Flex>
            
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent 
        ml='auto' 
        w='120px'
        bg='#181818'
        color='#fff'
        >        
          
          <ModalBody>
            <VStack>
                <Link href="#hero" onClick={onClose}>About</Link>
                <Link>Skills</Link>
                <Link>Projects</Link>
            </VStack>
          </ModalBody>

          
        </ModalContent>
      </Modal>
        </>
    )
}