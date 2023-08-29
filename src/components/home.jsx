import { Container, Heading, Text, List, ListItem} from "@chakra-ui/react";

export default function Home() {
    return (
            <Container>
                <Heading mt="10px" mb="10px">Hi, I'm Thienan</Heading>
                <Text fontSize="xl" mb="10px">I am a student at Boston University studying computer science and data science. Graduating in 2024.</Text>
                <Text fontSize="xl" mb="10px">I have cooked 👨‍🍳</Text>
                <Text fontSize="xl" mb="10px">I have cleaned 🧹</Text>
                <Text fontSize="xl" mb="10px">And now I'm coding 🐱‍💻</Text>
                <Text fontSize="xl" mb="10px">
                    I ported one of my favorite games to the web. Check it out on my github!
                </Text>
                <List>
                    <ListItem fontSize="xl">Tech I'm familiar with:</ListItem>
                    <ListItem fontSize="xl">✅React</ListItem>
                    <ListItem fontSize="xl">✅Express</ListItem>
                    <ListItem fontSize="xl">✅Node</ListItem>
                    <ListItem fontSize="xl">✅MongoDB</ListItem>
                    <ListItem fontSize="xl">✅MySQL</ListItem>
                    <ListItem fontSize="xl">✅Typescript</ListItem>
                    <ListItem fontSize="xl">✅Python</ListItem>
                </List>
            </Container>

    )
}