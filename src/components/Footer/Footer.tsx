import { Button, Flex,FormControl,
  Input,
  Textarea, } from "@chakra-ui/react"
import { useState } from "react"
import emailjs from '@emailjs/browser';


export const Footer = () => {


    const [email, setEmail] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [message, setMessage] = useState<string>('')


    function sendEmail(e: React.FormEvent) {
        e.preventDefault();
        if(nome == "" || email == "" || message == ""){
        alert("Preencha todos os campos")
        return
        }
        alert("Email enviado com sucesso")

       

        emailjs.send('service_e55zvmm', 'template_ed9pyzy', { from_name: nome, from_email: email, message: message }, 'kG0O_cKwCA3qPdb3V')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setEmail('')
            setNome('')
            setMessage('')
        }, (err) => {
            console.log('FAILED...', err);
        })
    }


    return (
       
            <Flex
            h='60vh'
            border='1px solid red'
            fontSize='1.6rem'
            fontWeight={600}
            direction='column'
            align='center'
            >
                <Flex>   
                    <h1>Contato</h1>                
                </Flex>

                <Flex
                // border='1px solid green'
                >
                <form onSubmit={sendEmail}>
                    <FormControl>
                        <Input
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome"
                        type="text"
                        name="nome"
                        value={nome}
                        />

                        <Input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={email}
                        />

                        <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mensagem"
                        size="sm"
                        />

                            <Button mt={4} colorScheme="teal" type="submit">
                            Submit
                        </Button>
                    </FormControl>
                </form>
                </Flex>
            </Flex>
    
    )
}