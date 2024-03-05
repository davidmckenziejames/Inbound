import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import LeadCard from "../components/LeadCard";

export default function Admin() {
  return (
    <Flex w="100%" h="100%" minH="100vh" flexDirection="column" bg="#fff">
      <Flex id="header" bg="#0e243e" w="100%" justify="center" py="15px">
        <Image
          h="24px"
          src="https://dynopest.co.uk/wp-content/uploads/2023/07/dyno-white.png"
        />
      </Flex>
      <Flex id="pagetitle" bg="#e35534" w="100%" justify="center" py="10px">
        <Flex
          fontSize="24px"
          fontWeight="600"
          width="100%"
          py="5px"
          color="#fff"
          lineHeight="1em"
          textAlign="center"
          justify="center"
        >
          LEADS
        </Flex>
      </Flex>
      <Flex
        id="leads"
        flexDirection="column"
        w="100%"
        px={{ base: "5px", sm: "20px" }}
        py="20px"
        gap="30px"
      >
        <Flex id="pestrow" w="100%" h="100%" gap={"20px"} flexWrap={"wrap"}>
          <LeadCard />
        </Flex>
      </Flex>
    </Flex>
  );
}
