import React from "react";
import { Box, Flex, Button, Text, VStack, useBoolean, Image, Spacer } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const Index = () => {
  const [isGameStarted, setIsGameStarted] = useBoolean(false);

  const handleStartGame = () => {
    setIsGameStarted.toggle();
  };

  const handleJump = () => {
    // This is where the jump logic would go
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" flexDirection="column">
      <VStack spacing={4}>
        <Text fontSize="5xl" fontWeight="bold">
          Flappy Bird
        </Text>
        <Box position="relative" width="md" height="sm" bg="blue.200" borderRadius="md" overflow="hidden">
          {!isGameStarted && (
            <Flex height="100%" alignItems="center" justifyContent="center">
              <Button colorScheme="teal" onClick={handleStartGame}>
                Start Game
              </Button>
            </Flex>
          )}
          {/* The bird */}
          <Image position="absolute" bottom="50%" left="10%" src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmbGFwcHklMjBiaXJkfGVufDB8fHx8MTcwOTQ5MjM2M3ww&ixlib=rb-4.0.3&q=80&w=1080" />
          {/* Pipes would be dynamically generated here */}
        </Box>
        <Button leftIcon={<FaArrowUp />} colorScheme="pink" variant="solid" onClick={handleJump} isDisabled={!isGameStarted}>
          Jump
        </Button>
      </VStack>
      <Spacer />
      <Text fontSize="sm">Press "Jump" to play</Text>
    </Flex>
  );
};

export default Index;
