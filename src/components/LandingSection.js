import { Avatar, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Curt Whelan!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="landing-section"
  >
    <VStack>
      <Avatar
        size="2xl"
        src="https://media.licdn.com/dms/image/D5635AQFMjXzYQw6JpA/profile-framedphoto-shrink_400_400/0/1680128313718?e=1685566800&v=beta&t=a0OCrGi5ahgyJw9kUMd64mWDkwfo_BcoYHk19aBjw3M"
        alt="Picture of Curt Whelan"
      ></Avatar>
      <Heading as="h3" size="sm" paddingBottom={"40px"}>
        {greeting}
      </Heading>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
