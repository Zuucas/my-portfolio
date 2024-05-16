import { HamburgerIcon, SunIcon } from "@chakra-ui/icons"
import { Flex, 
    Link, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalBody, useDisclosure,
    VStack, Button, useColorMode,
} from "@chakra-ui/react"


export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Flex            
            h='30px'
            // bg='#181818'
            align='center'
            // fontSize='1.2rem'
            // mb={{base:'40px', md:'0px'}}            
            borderBottom='1px solid white'
            position='relative'
            mt='5px'
            maxW='100vw'
            
            >
                <Button
                variant='unstyled'
                position='fixed'
                ml='20px'
                onClick={toggleColorMode}>
                    <SunIcon/>
                </Button>



                <Flex
                justify='space-evenly'
                w='100vw'
                display={{base:'none',md:'flex'}}
                >
                    <Link href="#hero">About</Link>
                    <Link href="#Sobre">Skills</Link>
                    <Link href="#Projects">Projects</Link>
                </Flex>

                <Flex color={colorMode === "dark" ? "white" : "black"}
                position='absolute'
                right={5}
                fontSize='1.5rem'
                display={{base:'flex',md:'none'}}
                // mr='20px'
                >
                    <HamburgerIcon onClick={onOpen} />
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