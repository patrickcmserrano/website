import {
  Box,
  Button,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";



const Page = () => {
  return (
    <Container maxW="container.lg">
      <Box borderRadius="md" bg=""  p={3} mb={6} align="center">
        Hello! I&apos;m a fullcycle software developer based in Brazil 🇧🇷🌎
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Patrick Serrano
          </Heading>
          <Text>
            Digital Craftzman ( Software Engineering / Ecommerce / Crypto ){" "}
          </Text>
        </Box>
      </Box>
    </Container>
  );
};
export default Page;
