import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/bonglua.jpg"
import ColorModeSwitch from "./ColorSwitchMode"

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} width={"100%"} padding={"4px"}>
      <HStack>
        <Image src={logo} alt="logo" boxSize={"60px"} objectFit={"contain"} />
        <Text>Navigation Bar</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar