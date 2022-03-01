import { Box, Center, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {

    return (
        <Box width="100%">
            <Center>
                <Text fontSize="sm" color="gray.500" margin="30px" textAlign="center">
                    <p>Made with ❤️ by Aiko </p>
                    <p>Using <Link href="https://nextjs.org/">Next.js</Link>, <Link href="https://chakra-ui.com/">Chakra-UI</Link> and <Link href="https://www.sanity.io/">Sanity</Link></p>
                    <p>Deployed on <Link href="https://vercel.com">Vercel</Link></p>
                </Text>
            </Center>
        </Box>
    )
}