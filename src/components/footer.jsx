import { Box, Flex, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Footer() {
    return (
        <Flex as="footer" justify="space-around" align="center" w="100%" mt="auto" minH="75px">
          <Link fontSize="xl" color="black" href="https://github.com/thienantran010" isExternal>Github <ExternalLinkIcon mx='2px' /></Link>
          <Link fontSize="xl" color="black" href="https://www.linkedin.com/in/thienan-tran-35176620b/" isExternal>LinkedIn <ExternalLinkIcon mx='2px' /></Link>
        </Flex>
    )
}