import { Flex, Link, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import pdf from "../resume.pdf";

const navObjs = [
    {path:"/", text: "Home"}, 
    {path: "/projects", text: "Projects"}, 
    {text: "Resume"},
    {path: "/funfact", text: "Fun Fact"}
]

const navLinks = navObjs.map((navObj, index) => {
    return (
        navObj.text !== "Resume" ?
            <Link as={NavLink} to={navObj.path} key={index} fontSize="xl">
                {navObj.text}
            </Link>
          :
            <Link href={pdf} target="_blank" fontSize="xl">Resume</Link>
    )
});

export default function Navbar() {
    return (
        <Flex as="nav" pl="10px" pr="10px" pt="20px" pb="20px"
         alignItems="center">
            <Heading as="h1" size="lg">Thienan Tran</Heading>
            <Spacer />

            <HStack>
                {navLinks}
            </HStack>
        </Flex>
    )
}