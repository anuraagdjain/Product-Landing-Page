import {
  Box,
  Flex,
  Text,
  Button,
  Divider,
  Container,
  Image,
  Stack,
  SimpleGrid,
  Link,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

const UserIcon = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const variants = {
    active: { scale: 1.3, transition: { duration: 0.3 } },
    inactive: { scale: 1 }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      position="relative"
    >
      <motion.div
        animate={isHovering ? "active" : "inactive"}
        variants={variants}
        style={{
          position: "absolute",
          display: isHovering ? "inline" : "none",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "gray.500"
        }}
      />
      <Icon as={FaUser} boxSize={6} color={"gray"} />
    </Box>
  );
};

const NavBar = () => {
  const MotionBox = motion(Box);
  return (
    <Container maxW="container.lg">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="white"
        color="black"
        p={6}
        borderBottom="none"
      >
        <Flex align="center">
          <Box
            mr={4}
            w="40px"
            h="40px"
            bg="black"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white">Logo</Text>
          </Box>
          <Text fontWeight="bold">SiteName</Text>
        </Flex>

        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/">Pricing</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/">Product</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/">Resources</Link>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Link href="/">Dashboard</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box display={{ base: "none", md: "flex" }}>
          <MotionBox
            whileHover={{ borderBottomWidth: "4px" }}
            transition={{ duration: 0.2 }}
          >
            <Text fontWeight="bold" color="gray.700">
              Pricing
            </Text>
          </MotionBox>
          <Box mx={4}>
            <Divider orientation="vertical" borderColor="black" />
          </Box>
          <MotionBox
            whileHover={{ borderBottomWidth: "4px" }}
            transition={{ duration: 0.2 }}
          >
            <Text fontWeight="bold" color="gray.700">
              Product
            </Text>
          </MotionBox>
          <Box mx={4}>
            <Divider orientation="vertical" borderColor="black" />
          </Box>
          <MotionBox
            whileHover={{ borderBottomWidth: "4px" }}
            transition={{ duration: 0.2 }}
          >
            <Text fontWeight="bold" color="gray.700">
              Resources
            </Text>
          </MotionBox>
        </Box>

        <Box display={{ base: "none", md: "flex" }}>
          <MotionBox
            whileHover={{ borderBottomWidth: "4px" }}
            transition={{ duration: 0.2 }}
          >
            <Text fontWeight="bold" color="gray.700">
              Dashboard
            </Text>
          </MotionBox>
          <Box mx={4}>
            <Divider orientation="vertical" borderColor="black" />
          </Box>
          <UserIcon />
        </Box>
      </Flex>
    </Container>
  );
};

const HeroBanner = () => {
  return (
    <Box bg="white" py={16}>
      <Container maxW="container.lg">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          wrap="nowrap"
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
              We enable Developers to create{" "}
              <Box
                as="span"
                bgGradient="linear(to-r, cyan.200, blue.600)"
                bgClip="text"
              >
                stunning visuals
              </Box>
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} mt={4}>
              Take your technical content to the next level with snappify's
              powerful design features.
            </Text>
            <Button mt={8} color="white" colorScheme="messenger" size="lg">
              <Text as="b">Get started </Text> - It's free!
            </Button>
            <Box mt={8} alignItems="center">
              <Image
                src="https://as1.ftcdn.net/v2/jpg/04/96/27/36/1000_F_496273635_F2zHgxWAAc6wYLFuQKIKpTximimRCvNn.jpg"
                boxSize="sm"
                paddingX="5px"
                align="centre"
                height="80px"
                objectFit="cover"
              />
            </Box>
            <Text fontSize="sm" mt={4}>
              Join a community of 7k+ developers spicing up their content
            </Text>
          </Box>
          <Box w={{ base: "100%", md: "50%" }} mt={{ base: "0", md: 0 }}>
            <Image
              src="https://i.imgur.com/3kcgHye.jpg"
              alt="https://github.com/agarrharr/awesome-cli-apps"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

const BackgroundSplash = () => {
  return (
    <Box
      overflowX="hidden"
      pos="absolute"
      top="460px"
      left="0"
      right="0"
      padding="0px"
      w="100vw"
      h="500px"
      filter="blur(30px)"
      opacity="0.06"
      bgGradient="linear-gradient(200deg, #DC03FF 22.42%, rgba(10, 152, 255, 0.74) 70.33%)"
    />
  );
};

const SponsorSection = () => {
  const sponsors = [
    { name: "Sponsor 1", src: "https://img.logoipsum.com/240.svg" },
    { name: "Sponsor 2", src: "https://img.logoipsum.com/285.svg" },
    { name: "Sponsor 3", src: "https://img.logoipsum.com/256.svg" },
    { name: "Sponsor 4", src: "https://img.logoipsum.com/235.svg" }
  ];

  return (
    <Flex direction="column" justify="center" align="center">
      <Text fontSize="2xl" fontWeight="bold" mb={6} color="gray.600">
        Trusted by Industry leaders
      </Text>
      <Flex justify="space-between" align="center" flexWrap="wrap" maxW="100%">
        {sponsors.map((sponsor) => (
          <Box
            key={sponsor.name}
            width="120px"
            maxW="240px"
            m={6}
            _hover={{ filter: "none" }}
            filter="grayscale(100%)"
            transition="all 0.2s ease-in-out"
          >
            <Image
              key={sponsor.name}
              src={sponsor.src}
              alt={sponsor.name}
              width="120px"
              maxW="240px"
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

const ProductFeatureScrollSection = () => {
  const [direction, setDirection] = useState("left");
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=256&h=256",
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=256&h=256",
    "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=256&h=256",
    "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=256&h=256"
  ];

  const textTransitionColors = [
    "var(--chakra-colors-teal-500)",
    "var(--chakra-colors-purple-500)",
    "var(--chakra-colors-pink-500)",
    "var(--chakra-colors-orange-500)"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex(
        (currentIndex) => (currentIndex + 1) % textTransitionColors.length
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg="gray.100" py={20} px={0}>
      <Container maxW="container.lg" px={0}>
        <Stack spacing={0} textAlign="center">
          <Heading size="2xl" fontWeight="bold">
            Because your product deserves{" "}
          </Heading>

          <motion.div
            style={{ display: "inline-block" }}
            animate={{
              color: textTransitionColors[currentColorIndex]
            }}
            transition={{ duration: 0.5 }}
          >
            <Text fontWeight="bold" fontSize="4xl">
              stunning insight
            </Text>
          </motion.div>
          <Text fontSize="xl" color="gray.600">
            Our product is designed to give you the best analytics and insights
            for your business.
          </Text>
        </Stack>
      </Container>
      <Box overflowX="hidden" mt={20}>
        <motion.div
          style={{ display: "flex", flexDirection: "row" }}
          animate={{
            x: direction === "left" ? "-75%" : 0,
            transitionEnd: {
              x: direction === "left" ? 0 : "-100%"
            }
          }}
          transition={{
            duration: 20,
            ease: "linear"
          }}
        >
          {images.concat(images).map((image, idx) => (
            <Image
              key={idx}
              minH="240px"
              src={image}
              alt={image}
              style={{ marginRight: "30px" }}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

const ProductFeatureOneSection = () => {
  return (
    <Box>
      <Box
        display={{ md: "flex" }}
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        paddingTop="4rem"
        paddingBottom="4rem"
      >
        <Box
          flex="1"
          borderRadius="lg"
          boxShadow="2xl"
          bg="red.500"
          height={{ base: "200px", md: "400px" }}
          mb={{ base: 8, md: 0 }}
        />
        <Box
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          pl={{ md: 8 }}
          pt={{ base: 8, md: 0 }}
        >
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            Product Feature
          </Text>
          <Text fontSize="xl" mb={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            augue volutpat, mollis odio ac, scelerisque nulla.
          </Text>
          <Button
            colorScheme="blue"
            variant="ghost"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Box
        w="40%"
        mx="auto"
        borderBottomWidth="0.75px"
        borderBottomColor="gray.300"
        my="10"
      />
    </Box>
  );
};
const ProductFeatureTwoSection = () => {
  return (
    <Box>
      <Box
        display={{ md: "flex" }}
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        paddingTop="2rem"
        paddingBottom="2rem"
      >
        <Box
          flex="1"
          order={{ base: "1", md: "2" }} // Show second on mobile, first on desktop
          borderRadius="lg"
          boxShadow="2xl"
          bg="orange.500"
          height={{ base: "200px", md: "400px" }}
        />
        <Box
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          pl={{ md: 8 }} // Change paddingRight to paddingLeft
          pt={{ base: 8, md: 0 }}
          order={{ base: "2", md: "1" }} // Show first on mobile, second on desktop
        >
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            Product Feature Two
          </Text>
          <Text fontSize="xl" mb={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            augue volutpat, mollis odio ac, scelerisque nulla.
          </Text>
          <Button
            colorScheme="blue"
            variant="ghost"
            size="lg"
            mb={{ base: 8, md: 0 }}
            rightIcon={<ArrowForwardIcon />}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box
      bgGradient="linear(to-r, purple.800, purple.500)"
      color="white"
      py={8}
      bottom={0}
      left={0}
      width="100%"
    >
      <Container maxW="container.lg">
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb={{ base: 8, lg: 0 }}
        >
          <Flex alignItems="center">
            <Box alignItems="left">
              <Text fontSize="3xl" fontWeight="bold">
                SiteName
              </Text>
              <Link href="https://snappify.com" fontSize="sm">
                Inspired by Snappify
              </Link>
              <br />
              <Link href="https://twitter.com/anuraagdjain" fontSize="sm">
                Created by Anuraag Jain
              </Link>
              <Text fontSize="sm">
                © {new Date().getFullYear()} SiteName Inc. All rights reserved.
              </Text>
            </Box>
          </Flex>
          <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={8}>
            <Stack>
              <Text fontWeight="bold">Product</Text>
              <Link>Features</Link>
              <Link>Pricing</Link>
              <Link>Security</Link>
              <Link>Enterprise</Link>
            </Stack>
            <Stack>
              <Text fontWeight="bold">Resources</Text>
              <Link>Docs</Link>
              <Link>Blog</Link>
              <Link>Community</Link>
              <Link>Support</Link>
            </Stack>
            <Stack>
              <Text fontWeight="bold">Integrations</Text>
              <Link>Slack</Link>
              <Link>GitHub</Link>
              <Link>Zoom</Link>
              <Link>Google Drive</Link>
            </Stack>
            <Stack>
              <Text fontWeight="bold">About</Text>
              <Link>Team</Link>
              <Link>Careers</Link>
              <Link>Contact</Link>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export const App = () => {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <BackgroundSplash />
      <SponsorSection />
      <ProductFeatureOneSection />
      <ProductFeatureTwoSection />
      <ProductFeatureScrollSection />
      <Footer />
    </>
  );
};
