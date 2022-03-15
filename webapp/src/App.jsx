import { SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  VStack,
  Text,
  HStack,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useColorModeValue,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

import Terminal from "./Terminal";

function App() {
  const sideBarColor = useColorModeValue("gray.200", "gray.900");
  const barColor = useColorModeValue("white", "gray.800");
  const logoColor = useColorModeValue("blue.800", "blue.100");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex w="full" h="full" direction="column">
      <Center boxShadow="base" bg={barColor} w="full" h="70px">
        <Text fontSize="22px" color={logoColor} fontFamily="Alien-Encounters-Regular">
          pip3r
        </Text>
      </Center>
      <Flex w="full" h="full">
        <VStack boxShadow="base" bg={sideBarColor} p="4" minW={{ base: "160px", md: "320px" }}>
          <VStack>
            <Button minW={{ base: "100px", md: "240px" }}>One</Button>
            <Button minW={{ base: "100px", md: "240px" }}>Two</Button>
          </VStack>
          <Spacer />
          <Menu>
            <MenuButton
              minW={{ base: "100px", md: "240px" }}
              as={Button}
              leftIcon={<SettingsIcon />}
            >
              Settings
            </MenuButton>
            <MenuList>
              <MenuItem>
                <HStack w="full">
                  <Text>{`Toggle ${colorMode} mode`}</Text>
                  <Spacer />
                  <Switch onChange={(e) => toggleColorMode()} />
                </HStack>
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
        <Terminal />
      </Flex>
    </Flex>
  );
}

export default App;
