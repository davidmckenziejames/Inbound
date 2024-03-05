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
import PestCard from "../PestQuiz/PestCard";
import PestCards from "../PestQuiz/Pests";

export default function Home() {
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
          PEST IDENTIFIER TOOL
        </Flex>
      </Flex>
      <Flex
        id="form"
        flexDirection="column"
        w="100%"
        px={{ base: "5px", sm: "20px" }}
        py="20px"
        gap="30px"
      >
        <Box id="whatpest">
          <Flex
            fontSize="20px"
            fontWeight="500"
            width="100%"
            py="10px"
            lineHeight="1em"
          >
            What does your pest look like?
          </Flex>
          <PestCards />
        </Box>
        <Flex w="100%">
          <Tabs isFitted w="100%">
            <TabList mb="1em">
              <Tab>Signs of Bedbugs</Tab>
              <Tab>Risks & Dangers</Tab>
              <Tab>About</Tab>
              <Tab>How to Remove</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box id="signs">
                  <Flex
                    fontSize="20px"
                    fontWeight="500"
                    width="100%"
                    lineHeight="1em"
                  >
                    Cockroach Infestation Signs
                  </Flex>
                  <Flex
                    my="10px"
                    fontSize="16px"
                    fontWeight="500"
                    width="100%"
                    lineHeight="1.2em"
                  >
                    Cockroach Infestation Signs Some common signs that can help
                    you to identify a possible cockroach infestation;
                  </Flex>
                  <Flex
                    id="pestrow"
                    w="100%"
                    h="100%"
                    gap={"20px"}
                    flexWrap={"wrap"}
                    justify={{ base: "center", md: "start" }}
                  >
                    <Flex
                      id="pestsigncard"
                      w="300px"
                      maxW="90%"
                      flexDirection="column"
                      overflow="hidden"
                      bg="#fff"
                      borderRadius={"10px"}
                      border="1px solid #d2d2d2"
                    >
                      <Image src="https://cdn.rentokil.com/content/local/uk/images/desktop/main_cockroach-in-sink-plug.jpg" />
                      <Flex gap="5px" flexDir="column" py="10px">
                        <Flex
                          fontSize="20px"
                          fontWeight="500"
                          width="100%"
                          justifyContent="center"
                          lineHeight="1em"
                          color={"#111"}
                          cursor="pointer"
                          textAlign="center"
                        >
                          Unusual smell
                        </Flex>
                        <Flex
                          fontSize="14px"
                          fontWeight="400"
                          textAlign="center"
                          width="100%"
                          justifyContent="center"
                          lineHeight="1.2em"
                          color={"#111"}
                          cursor="pointer"
                        >
                          An established cockroach infestation produces a
                          lingering and unpleasant odour that taints items they
                          contact.
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex
                      id="pestsigncard"
                      w="300px"
                      maxW="90%"
                      flexDirection="column"
                      overflow="hidden"
                      bg="#fff"
                      borderRadius={"10px"}
                      border="1px solid #d2d2d2"
                    >
                      <Image src="https://cdn.rentokil.com/content/local/uk/images/desktop/main_cockroach-in-sink-plug.jpg" />
                      <Flex gap="5px" flexDir="column" py="10px">
                        <Flex
                          fontSize="20px"
                          fontWeight="500"
                          width="100%"
                          justifyContent="center"
                          lineHeight="1em"
                          color={"#111"}
                          cursor="pointer"
                          textAlign="center"
                        >
                          Cockroach droppings
                        </Flex>
                        <Flex
                          fontSize="14px"
                          fontWeight="400"
                          textAlign="center"
                          width="100%"
                          justifyContent="center"
                          lineHeight="1.2em"
                          color={"#111"}
                          cursor="pointer"
                        >
                          If little water is available cockroaches will produce
                          brown/black cylindrical droppings, approx. 2mm long.
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex
                      id="pestsigncard"
                      w="300px"
                      maxW="90%"
                      flexDirection="column"
                      overflow="hidden"
                      bg="#fff"
                      borderRadius={"10px"}
                      border="1px solid #d2d2d2"
                    >
                      <Image src="https://cdn.rentokil.com/content/local/uk/images/desktop/main_cockroach-in-sink-plug.jpg" />
                      <Flex gap="5px" flexDir="column" py="10px">
                        <Flex
                          fontSize="20px"
                          fontWeight="500"
                          width="100%"
                          justifyContent="center"
                          lineHeight="1em"
                          color={"#111"}
                          cursor="pointer"
                          textAlign="center"
                        >
                          Smear marks
                        </Flex>
                        <Flex
                          fontSize="14px"
                          fontWeight="400"
                          textAlign="center"
                          width="100%"
                          justifyContent="center"
                          lineHeight="1.2em"
                          color={"#111"}
                          cursor="pointer"
                        >
                          If water is abundant cockroaches will produce brown
                          and irregular shaped smear marks. Check for marks on
                          surfaces where cockroaches scuttle along.
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex
                      id="pestsigncard"
                      w="300px"
                      maxW="90%"
                      flexDirection="column"
                      overflow="hidden"
                      bg="#fff"
                      borderRadius={"10px"}
                      border="1px solid #d2d2d2"
                    >
                      <Image src="https://cdn.rentokil.com/content/local/uk/images/desktop/main_cockroach-in-sink-plug.jpg" />
                      <Flex gap="5px" flexDir="column" py="10px">
                        <Flex
                          fontSize="20px"
                          fontWeight="500"
                          width="100%"
                          justifyContent="center"
                          lineHeight="1em"
                          color={"#111"}
                          cursor="pointer"
                          textAlign="center"
                        >
                          Shed skins
                        </Flex>
                        <Flex
                          fontSize="14px"
                          fontWeight="400"
                          textAlign="center"
                          width="100%"
                          justifyContent="center"
                          lineHeight="1.2em"
                          color={"#111"}
                          cursor="pointer"
                        >
                          Cockroaches shed 'cast nymphal' skins 5-8 times as
                          they mature to adults. These shed skins are usually
                          found close to where the cockroaches are sheltering.
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Flex
                    id="pestsigncard"
                    w="300px"
                    maxW="90%"
                    flexDirection="column"
                    overflow="hidden"
                    bg="#fff"
                    borderRadius={"10px"}
                    border="2px solid red"
                  >
                    <Flex gap="5px" flexDir="column" py="10px">
                      <Flex
                        fontSize="20px"
                        fontWeight="500"
                        width="100%"
                        justifyContent="center"
                        lineHeight="1em"
                        color="red"
                        cursor="pointer"
                        textAlign="center"
                      >
                        Risks & Dangers
                      </Flex>
                      <Flex
                        fontSize="14px"
                        fontWeight="400"
                        textAlign="center"
                        width="100%"
                        justifyContent="center"
                        lineHeight="1.2em"
                        color={"#111"}
                        cursor="pointer"
                      >
                        1. Infection from scratches
                        <br />
                        2. Allergic reaction to bites
                        <br />
                        3. Sleep deprivation
                        <br />
                        4. Stress
                        <br />
                        5. Loss of Business
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Flex
                    id="pestsigncard"
                    w="300px"
                    maxW="90%"
                    flexDirection="column"
                    overflow="hidden"
                    bg="#fff"
                    borderRadius={"10px"}
                    border="2px solid red"
                  >
                    <Flex gap="5px" flexDir="column" py="10px">
                      <Image src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2016/10/Bedbugs_shutterstock_131698883.jpg" />
                      <Flex
                        fontSize="20px"
                        fontWeight="500"
                        width="100%"
                        justifyContent="center"
                        lineHeight="1em"
                        color="red"
                        cursor="pointer"
                        textAlign="center"
                      >
                        About
                      </Flex>
                      <Flex
                        fontSize="14px"
                        fontWeight="400"
                        textAlign="center"
                        width="100%"
                        justifyContent="center"
                        lineHeight="1.2em"
                        color={"#111"}
                        cursor="pointer"
                      >
                        This common pest once associated with unhygienic
                        surroundings is prevalent due to a number of reasons,
                        including increased travel, the use of second-hand
                        furniture, and suspected tolerance to some pesticides.
                        These bugs still occur with regularity, particularly in
                        multi-occupancy buildings with rapid resident turnover,
                        for example, hostels, hotels, holiday camps and blocks
                        of flats.
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>

        <Box id="upload">
          <Flex flexDirection="column" width="100%" gap="10px">
            <Flex
              fontSize="22px"
              fontWeight="500"
              width="100%"
              lineHeight="1em"
              color={"#111"}
              cursor="pointer"
            >
              Still not sure?
            </Flex>
            <Flex
              id="pestsigncard"
              w="300px"
              maxW="90%"
              flexDirection="column"
              overflow="hidden"
              bg="#c4b6e7"
              borderRadius={"10px"}
              border="1px solid #d2d2d2"
              py="40px"
            >
              <Flex gap="5px" flexDir="column" py="10px" align={"center"}>
                <svg
                  width={50}
                  height={50}
                  viewBox="0 0 1.5 1.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.188.813a.063.063 0 0 0-.063.063V.9L1.033.808a.174.174 0 0 0-.246 0L.743.852.588.697a.18.18 0 0 0-.246 0L.25.787V.438A.063.063 0 0 1 .313.375h.438a.063.063 0 0 0 0-.125H.313a.19.19 0 0 0-.188.188v.75a.19.19 0 0 0 .188.188h.75a.19.19 0 0 0 .188-.188V.875a.063.063 0 0 0-.063-.063m-.875.438a.063.063 0 0 1-.063-.063V.964L.431.783a.05.05 0 0 1 .068 0l.198.198.269.269Zm.813-.063a.06.06 0 0 1-.011.033L.832.938.876.894a.05.05 0 0 1 .069 0l.18.182ZM1.42.268 1.232.08 1.211.067a.06.06 0 0 0-.048 0L1.142.08.954.268a.063.063 0 0 0 .089.089l.082-.081v.349a.063.063 0 0 0 .125 0V.276l.081.081a.063.063 0 0 0 .089 0 .063.063 0 0 0 0-.089" />
                </svg>
                <Flex
                  fontSize="20px"
                  fontWeight="500"
                  width="100%"
                  justifyContent="center"
                  lineHeight="1em"
                  color={"#111"}
                  cursor="pointer"
                  textAlign="center"
                >
                  Upload pictures of your pest
                </Flex>
                <Flex
                  fontSize="14px"
                  fontWeight="400"
                  textAlign="center"
                  width="100%"
                  justifyContent="center"
                  lineHeight="1.2em"
                  color={"#111"}
                  cursor="pointer"
                >
                  PNG, JPG, GIF up to 10MB
                </Flex>
              </Flex>
            </Flex>
            <Flex
              fontSize="18px"
              fontWeight="500"
              width="100%"
              lineHeight="1em"
              color={"#111"}
              cursor="pointer"
            >
              Upload pictures of your bug
            </Flex>
            <Flex
              fontSize="18px"
              fontWeight="500"
              width="100%"
              lineHeight="1em"
              color={"#111"}
              cursor="pointer"
              mt="30px"
            >
              Need help fixing your pest problem?
            </Flex>
            <Flex
              fontSize="18px"
              fontWeight="500"
              width="fit-content"
              borderRadius="10px"
              lineHeight="1em"
              px="8px"
              py="10px"
              color="#fff"
              cursor="pointer"
              bg="#111"
            >
              REQUEST FREE QUOTE
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
