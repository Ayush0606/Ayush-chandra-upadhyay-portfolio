import { Box, HStack } from "@chakra-ui/react";
import {
  VscGitMerge,
  VscError,
  VscWarning,
  VscJson,
  VscCheck,
  VscBell,
} from "react-icons/vsc";
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <Box overflowX="auto" px={{ base: 1, md: 2 }}>
      <HStack justifyContent="space-between" spacing={{ base: 1, md: 2 }} minW="max-content">
        <Box display="flex" gap={{ base: 1, md: 2 }}>
          <FooterButton Icon={VscGitMerge} Content="main" TooltipLabel="" />
          <FooterButton Icon={VscError} Content="0" TooltipLabel="" />

          <FooterButton
            Icon={VscWarning}
            Content="1"
            TooltipLabel="Disclaimer: The design and idea for this project are not originally mine; however, the implementation has been entirely done by me."
          />
        </Box>
        <Box display="flex" gap={{ base: 1, md: 2 }}>
          <FooterButton
            Icon={VscJson}
            Content="JavaScript JSX"
            TooltipLabel=""
          />
          <FooterButton Icon={VscCheck} Content="Prettier" TooltipLabel="" />
          <FooterButton Icon={VscBell} Content="" TooltipLabel="" />
        </Box>
      </HStack>
    </Box>
  );
};

export default Footer;
