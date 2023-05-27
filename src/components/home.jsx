import { Container, Heading, Text} from "@chakra-ui/react";

export default function Home() {
    return (
            <Container>
                <Heading mt="10px" mb="10px">Hi, I'm Thienan</Heading>
                <Text fontSize="xl" mb="10px">I am a student at Boston University studying computer science and data science. Graduating in 2024.</Text>
                <Text fontSize="xl" mb="10px">I've held a variety of jobs in my 21 years of life. I've livestreamed religious ceremonies, maintained
                church premises, cleaned schools, cooked food, served food, assisted alumni, and probably more. But what I really want to do is be
                a software engineer.</Text>
                <Text fontSize="xl" mb="10px">Right now I'm interested in web development. It's easy to get into and you can make anything you want.
                    I've had the pleasure of using MongoDB, Express, React, and Node to make this and other websites. I also
                    like Python and MySQL/SQLite too. But right now I'm going through a React phase so expect a lot of JSX.
                </Text>
                <Text fontSize="xl" mb="10px">
                    Unfortunately, when it comes to web development, my fatal flaw is website design. I haven't found an article
                    or video I liked on it yet. Luckily, there's millions of websites to draw inspiration from. Plus, it's
                    hard to mess up a plain website like this. Hopefully.
                </Text>
                <Text fontSize="xl" mb="10px">
                    Coding is fun, but I'm interested in other things too. Catch me going to UNIQLO or at the gym. 
                </Text>
            </Container>

    )
}