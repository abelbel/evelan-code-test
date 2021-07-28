import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

const Card: React.FC = (props) => {
  return (
    <Box
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      {props.children}
    </Box>
  );
};

export default Card;
