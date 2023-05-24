import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack spacing={4} textColor={"black"}>
      <VStack backgroundColor={"white"} borderRadius={"20px"}>
        <Image src={imageSrc} borderRadius={"20px"} />
        <VStack align={"left"} spacing={"2"} padding={"3"}>
          <Heading as="h4" size="sm">
            {title}
          </Heading>
          <Text textColor={"GrayText"}>{description}</Text>
          <Link href="">
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />{" "}
          </Link>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;
