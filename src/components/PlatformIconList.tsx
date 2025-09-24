import { HStack } from "@chakra-ui/react";
import type { Platform } from "./hooks/useGame";
import type { IconType } from "react-icons";
import { FaLaptopCode } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
      pc: FaLaptopCode,
      xbox: FaXbox,
      playstation: FaPlaystation,
      nintendo: BsNintendoSwitch,
      mac: FaApple,
      linux: FaLinux,
      ios: MdPhoneIphone,
      web: BsGlobe,
      android: FaAndroid,
    };
  return (
    <HStack>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? <Icon key={platform.id} color="gray.500"/> : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;
