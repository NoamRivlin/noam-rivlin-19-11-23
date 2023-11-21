import { ReactNode } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import Search from "../components/Search";

interface RootLayoutHeaderProps {
  children: ReactNode;
}

const RootLayoutHeader: React.FC<RootLayoutHeaderProps> = ({ children }) => {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        padding={{ base: "0.5rem", md: "1rem" }}
      >
        <Heading fontSize="4xl">Hello Weather</Heading>

        <Navbar />
      </Flex>
      <Search />

      <Flex>{children}</Flex>
    </>
  );
};

export default RootLayoutHeader;
