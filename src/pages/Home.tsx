import {
  Image,
  Text,
  VStack,
  Flex,
  Box,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import HomeItem from "../components/HomeItem";
import { homeData } from "../../public/data/home";

interface Props {
  setPage: (page: string) => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Home = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("home.js");
  }, []);

  const accentColor = useColorModeValue("syntax.keyword", "#0BCEAF");
  const textColor = useColorModeValue("nightOwl.text", "whiteAlpha.900");
  const headingColor = useColorModeValue("nightOwl.text", "whiteAlpha.900");
  const cardBg = useColorModeValue(
    "rgba(1, 22, 39, 0.7)",
    "rgba(31, 36, 40, 0.7)"
  );
  const cardBorderColor = useColorModeValue(
    "rgba(126, 87, 194, 0.2)",
    "rgba(11, 206, 175, 0.2)"
  );

  const renderSection = (items: typeof homeData.contactInfo) => (
    <Box
      p={6}
      borderRadius="xl"
      bg={cardBg}
      border="1px solid"
      borderColor={cardBorderColor}
      boxShadow="xl"
      width="100%"
      transition="all 0.3s"
      backdropFilter="blur(10px)"
    >
      <VStack spacing={4} align="stretch">
        {items.map((item, index) => (
          <HomeItem key={index} {...item} />
        ))}
      </VStack>
    </Box>
  );

  return (
    <Flex
      minHeight="100%"
      justify="space-around"
      align="center"
      direction={{ base: "column-reverse", lg: "row" }}
      px={{ base: 3, sm: 4, md: 8 }}
      py={{ base: 6, sm: 8, md: 0 }}
      gap={{ base: 6, sm: 8, md: 16 }}
    >
      <VStack
        alignItems={{ base: "center", lg: "flex-start" }}
        justify="center"
        spacing={{ base: 3, md: 4 }}
        animation={`${fadeIn} 0.5s ease-out`}
        color={textColor}
        w="full"
      >
        <Box textAlign={{ base: "center", lg: "left" }} w="full">
          <Text
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
            fontWeight="bold"
            letterSpacing="wide"
            color={headingColor}
          >
            Ayush Chandra Upadhyay
          </Text>
          <Text
            fontSize={{ base: "sm", sm: "md", md: "xl" }}
            fontWeight="bold"
            color={accentColor}
            mb={{ base: 4, sm: 6, md: 10 }}
          >
            Full Stack Developer | MERN | Open Source Enthusiast | 
          </Text>
        </Box>

        {renderSection(homeData.contactInfo)}
        {renderSection(homeData.education)}
        {renderSection(homeData.social)}
      </VStack>

      <Box position="relative" animation={`${fadeIn} 0.5s ease-out`} w="full" display="flex" justifyContent="center">
        <Box
          position="absolute"
          inset="0"
          borderRadius="50%"
          bgGradient={`radial(${accentColor}, transparent 70%)`}
          opacity={useColorModeValue("0.1", "0.15")}
          filter="blur(15px)"
        />
        <Image
          src={homeData.myImage}
          width={{ base: "200px", sm: "250px", md: "400px", lg: "425px" }}
          height="auto"
          borderRadius="15%"
          border="4px solid"
          borderColor={accentColor}
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.02)" }}
        />
      </Box>
    </Flex>
  );
};

export default Home;
