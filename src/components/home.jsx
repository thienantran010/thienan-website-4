import { Container, Heading, Text} from "@chakra-ui/react";

export default function Home() {
    return (
            <Container>
                <Heading mt="10px" mb="10px">Hi, I'm Thienan</Heading>
                <Text fontSize="xl" mb="10px">I am a student at Boston University studying computer science and data science. Graduating in 2024.</Text>
                <Text fontSize="xl" mb="10px">I've held a variety of jobs in my 21 years of life. I've livestreamed religious ceremonies, maintained
                lawns and streets, cleaned schools, cooked food, served food, answered emails, picked up phone calls, helped alumni, and more. But what I really want to do is be a software engineer.</Text>
                <Text fontSize="xl" mb="10px">Right now I'm interested in web development. It's easy to get into and you can make anything you want.
                    My current project uses the MERN stack to make a web version of the mobile game called Mafia Mystery, which is based on 
                    secret role games like Werewolf or Mafia. You can read more about it under my Projects page.
                </Text>
                <Text fontSize="xl" mb="10px">
                    Unfortunately, when it comes to web development, my fatal flaw is website design. I haven't found an article
                    or video I liked on it yet. Luckily, there's millions of websites to draw inspiration from. Plus, it's
                    hard to mess up a plain website like this. Hopefully.
                </Text>
                <Text fontSize="xl" mb="10px">
                    Coding is fun, but I'm interested in other things too. I like to play volleyball, but because the first time I touched a volleyball was January 2023,
                    I'm relegated to playing with the 10-year-olds. I like to go shopping at UNIQLO too, and crank out some reps at the gym. Feel free
                    to connect with me if you're interested in the same things.
                </Text>
            </Container>

    )
}