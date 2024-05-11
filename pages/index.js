import { Box, Button, Container, Heading, Text, Image } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container maxW="container.md">
      <Box borderRadius="md" bg="" p={3} mb={6} align="center">
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
        <Box
          flexShrine={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            src="images/profile.jpg"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  );
};
export default Page;
