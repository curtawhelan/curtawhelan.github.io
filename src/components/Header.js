import { Box, Flex, HStack } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: curtawhelan@outlook.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/curtawhelan",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/curt-a-whelan/",
  },
];

const Header = () => {
  const listSocials = socials.map((socialItem) => {
    const socialIcon = socialItem.icon;
    const socialURL = `${socialItem.url}`;
    return (
      <a href={socialURL} target="_blank">
        <FontAwesomeIcon icon={socialIcon} size="2x" />
      </a>
    );
  });

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerReference = useRef(null);

  useEffect(() => {
    // store previous scroll position
    let prevScrollY = window.scrollY;
    let currentHeader = headerReference.current;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY > currentScrollY) {
        currentHeader.style.transform = "translateY(0)";
      } else {
        currentHeader.style.transform = "translateY(-100%)";
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerReference}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack direction={"row"} spacing={4}>
            {listSocials}
          </HStack>
          <nav>
            <HStack spacing={8}>
              <a href="/#landing" onClick={handleClick("landing")}>
                Home
              </a>
              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
