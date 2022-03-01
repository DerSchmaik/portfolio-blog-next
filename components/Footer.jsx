import { Box, Center, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {

    return (
        <Box width="100%">
            <Center>
                <Text fontSize="sm" color="gray.500" marginTop="60px" marginBottom="30px" textAlign="center">
                    <p>Made with ❤️ by Aiko using <Link href="https://nextjs.org/">Next.js</Link> and <Link href="https://chakra-ui.com/">Chakra-UI</Link></p>
                </Text>
            </Center>
        </Box>
    )
}