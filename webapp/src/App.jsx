import { SettingsIcon } from "@chakra-ui/icons";
import { Button, Flex, Spacer, VStack } from "@chakra-ui/react";
import React from "react";

import Terminal from "./Terminal";

function App() {
  return (
    <Flex w="full" h="full" direction="row">
      <VStack p="4" mt="4" minW={{ base: "160px", md: "300px" }}>
        <VStack>
          <Button minW={{ base: "100px", md: "240px" }}>One</Button>
          <Button minW={{ base: "100px", md: "240px" }}>Two</Button>
        </VStack>
        <Spacer />
        <Button minW={{ base: "100px", md: "240px" }} leftIcon={<SettingsIcon />}>
          User
        </Button>
      </VStack>
      <Terminal />
    </Flex>
  );
}

export default App;
