import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  useToast,
  Text,
  Radio,
  RadioGroup,
  Heading,
  Image,
  Button,
  Textarea,
  FormHelperText,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  useRadioGroup,
  Select,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { FaApple, FaArrowRight, FaLock, FaUsers } from "react-icons/fa";
import {
  filterStyle,
  fontlabelStyle,
  optionStyle,
  wb,
} from "../assets/ComponentStyles";
import { options } from "../components/JigsawOptions";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

function isIOS() {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}
export default function Form() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState<string>("");
  const [companyIndustry, setCompanyIndustry] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState<string>("");
  const [termsAccepted, settermsAccepted] = useState<string>("");

  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(
    "Services"
  );

  const handleSubmit = (event?: React.SyntheticEvent) => {
    event?.preventDefault();
    // Handle the form submission:
    console.log("Selected option:", selectedOptions);
    console.log("Full name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
  };

  const handleCategoryFilterChange = (category: string) => {
    setCategoryFilter(category);
  };

  // Filter options based on selected category
  const filteredOptions = options.filter((option) =>
    categoryFilter === "All" ? true : option.category === categoryFilter
  );

  const handleOptionSelect = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };
  const handleShowCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay the scroll by 100 milliseconds
  };

  const isFormComplete = selectedOptions && companyIndustry && companySize;
  const toast = useToast();
  const handleButtonClick = () => {
    if (!isFormComplete) {
      // Show toast notification
      toast({
        title: "Incomplete Form",
        description: "Please fill in all questions before proceeding.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // Handle the click event when the form is complete
      handleShowCheckout();
    }
  };
  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      flexDirection="column"
      bg="#fff"
      align="center"
      fontFamily="figtree, sans serif"
    >
      <Flex
        id="header"
        bg="#eeeeee"
        w="100%"
        flexDirection="column"
        align="center"
      >
        <Flex w="100%" justify="space-between" py="15px" maxW="800px" px="15px">
          <Flex>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 158 25"
              data-testid="brand-bar__logo"
            >
              <g id="j24_logo" transform="translate(-24.07 -10.63)">
                <path
                  id="Path_288"
                  data-name="Path 288"
                  d="M34.921,28.53a4.167,4.167,0,0,1-4.365,4.522,5.244,5.244,0,0,1-4.17-2.174l-.329-.4L24.07,33.355l.192.224a8.048,8.048,0,0,0,6.469,2.835c4.88,0,7.912-3.009,7.912-7.853V11.84H34.921Z"
                  transform="translate(0 -0.823)"
                ></path>
                <rect
                  id="Rectangle_1213"
                  data-name="Rectangle 1213"
                  width="3.726"
                  height="24.149"
                  transform="translate(42.471 11.017)"
                ></rect>
                <path
                  id="Path_289"
                  data-name="Path 289"
                  d="M190.19,20.921l-.112-.028c-2.869-.768-5.347-1.429-5.347-3.455,0-1.963,1.839-3.332,4.471-3.332a8.74,8.74,0,0,1,6.559,2.68l.3.329,2.277-2.747-.237-.247a11.538,11.538,0,0,0-8.692-3.382c-4.934,0-8.513,2.889-8.513,6.872,0,4.852,4.362,5.98,8.212,6.976l.1.025c3.057.825,5.7,1.536,5.7,4.043,0,1.764-1.362,3.648-5.181,3.648a9.63,9.63,0,0,1-7.16-3.2l-.31-.345-2.223,2.826.214.24a12.066,12.066,0,0,0,9.373,3.847c6.722,0,9.117-3.749,9.117-7.257C198.742,23.168,194,21.923,190.19,20.921Z"
                  transform="translate(-106.351 -0.075)"
                ></path>
                <path
                  id="Path_290"
                  data-name="Path 290"
                  d="M311.9,29.2l4.823-17.356h3.041L324.586,29.2l6.162-17.356h3.716l-8.414,24.149h-3.422l-4.372-17.422-4.375,17.422h-3.422L302.05,11.84h3.716Z"
                  transform="translate(-189.595 -0.823)"
                ></path>
                <path
                  id="Path_291"
                  data-name="Path 291"
                  d="M424.54,18c0-4.987-4.32-7.256-8.337-7.256a10.713,10.713,0,0,0-8.542,3.833l-.2.262,2.354,2.414.275-.351a7.574,7.574,0,0,1,6.115-2.8c2.095,0,4.541,1.021,4.541,3.89,0,3.947-4.931,7.986-12.977,14.246l-.147.117v2.885h17.029V31.879H413.776C419.743,27.17,424.54,22.825,424.54,18Z"
                  transform="translate(-261.511 -0.075)"
                  fill="#eb5d0b"
                ></path>
                <path
                  id="Path_292"
                  data-name="Path 292"
                  d="M121.849,28.2v1.764a9.07,9.07,0,0,1-5.961,2.3c-5.056,0-8.727-3.85-8.727-9.151,0-5.282,3.671-9.116,8.727-9.116a8.345,8.345,0,0,1,6.54,3.076l.214.275,3.016-1.852-.278-.338a11.763,11.763,0,0,0-9.492-4.526A12.111,12.111,0,0,0,103.33,23.113,12.125,12.125,0,0,0,115.888,35.63a12.763,12.763,0,0,0,9.584-4.16l.1-.111V28.2Z"
                  transform="translate(-54.048 0)"
                ></path>
                <rect
                  id="Rectangle_1214"
                  data-name="Rectangle 1214"
                  width="11.772"
                  height="3.415"
                  transform="translate(59.719 21.481)"
                ></rect>
                <g
                  id="Group_1392"
                  data-name="Group 1392"
                  transform="translate(93.223 11.017)"
                >
                  <path
                    id="Path_293"
                    data-name="Path 293"
                    d="M259,25.866l3.521-9.936,3.5,9.936h3.873L264.593,11.84h-4.18L255.14,25.866Z"
                    transform="translate(-250.772 -11.84)"
                  ></path>
                  <path
                    id="Path_294"
                    data-name="Path 294"
                    d="M261.95,66.21H244.5l-3.019,7.055h4.285l1.477-3.7h11.973l1.474,3.7H264.8Z"
                    transform="translate(-241.48 -49.115)"
                  ></path>
                </g>
                <path
                  id="Path_295"
                  data-name="Path 295"
                  d="M479.1,25.7V11.84h-4.643L465.12,25.683v3.333h10.259v6.973H479.1v-6.97h3.7V25.7Zm-3.722,0H468.91l6.473-9.511Z"
                  transform="translate(-300.732 -0.823)"
                  fill="#eb5d0b"
                ></path>
              </g>
            </svg>
          </Flex>

          <Flex gap="15px" height="100%" align="center">
            <Flex as="a" href="mail:">
              <FaEnvelope fontSize="22px" />
            </Flex>
            <Flex as="a" href="mail:">
              <FaPhone fontSize="22px" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        onSubmit={handleSubmit}
        w="100%"
      >
        <Flex
          gap={"20px"}
          px={{ base: "15px", md: "0" }}
          pb="30px"
          pt="20px"
          flexDirection={"column"}
          w={"100%"}
          maxW="600px"
        >
          <FormControl isRequired>
            <Flex
              fontSize="28px"
              fontWeight="600"
              width="100%"
              lineHeight="1em"
              mb="15px"
            >
              Contact Us
            </Flex>
            <FormLabel {...fontlabelStyle}>
              What can we assist you with?
            </FormLabel>

            <Flex
              onChange={(e) =>
                handleCategoryFilterChange((e.target as HTMLInputElement).value)
              }
              gap="10px"
              width="100%"
              justifyContent="flex-start"
              pb="15px"
            >
              <label htmlFor="filter-services">
                <input
                  type="radio"
                  value="Services"
                  name="categoryFilter"
                  checked={categoryFilter === "Services"}
                  id="filter-services"
                  style={{ display: "none" }}
                />
                <Flex
                  {...filterStyle}
                  borderColor={
                    categoryFilter === "Services" ? "#dc662c" : "111"
                  }
                  bg={categoryFilter === "Services" ? "#dc662c" : "#fff"}
                  color={categoryFilter === "Services" ? "#fff" : "#000"}
                >
                  Services
                </Flex>
              </label>

              <label htmlFor="filter-solutions">
                <input
                  type="radio"
                  value="Solutions"
                  name="categoryFilter"
                  checked={categoryFilter === "Solutions"}
                  id="filter-solutions"
                  style={{ display: "none" }}
                />
                <Flex
                  {...filterStyle}
                  borderColor={
                    categoryFilter === "Solutions" ? "#dc662c" : "111"
                  }
                  bg={categoryFilter === "Solutions" ? "#dc662c" : "#fff"}
                  color={categoryFilter === "Solutions" ? "#fff" : "#000"}
                >
                  Solutions
                </Flex>
              </label>
              <label htmlFor="filter-all">
                <input
                  type="radio"
                  value="All"
                  name="categoryFilter"
                  checked={categoryFilter === "All"}
                  id="filter-all"
                  style={{ display: "none" }}
                />
                <Flex
                  {...filterStyle}
                  bg={categoryFilter === "All" ? "#dc662c" : "#fff"}
                  color={categoryFilter === "All" ? "#fff" : "#000"}
                  borderColor={categoryFilter === "All" ? "#dc662c" : "111"}
                >
                  All
                </Flex>
              </label>
            </Flex>
            <Flex
              direction="row"
              wrap="wrap"
              gap="15px"
              justifyContent={{
                base: "space-between",
                sm: "unset",
                md: "unset",
              }}
            >
              {filteredOptions.map((option) => (
                <Flex
                  key={option.value}
                  border="2px solid"
                  borderRadius="lg"
                  overflow="hidden"
                  flexDirection="column"
                  alignItems="center"
                  w={{ base: "48%", sm: "150px", md: "30%" }}
                  cursor="popromxia-nova"
                  bg={selectedOptions.includes(option.value) ? "#111" : "white"}
                  onClick={() => handleOptionSelect(option.value)}
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.value)}
                    style={{ display: "none" }}
                  />
                  <Image
                    width="100%"
                    height="100px"
                    minH="100px"
                    objectFit="cover"
                    src={option.imageUrl}
                    alt={option.label}
                  />
                  <Flex
                    color={
                      selectedOptions.includes(option.value) ? "#fff" : "#111"
                    }
                    textAlign="center"
                    {...optionStyle}
                  >
                    {option.label}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </FormControl>

          <FormControl id="company-industry" isRequired>
            <FormLabel {...fontlabelStyle}>Company Industry</FormLabel>
            <Select
              placeholder="Select industry"
              onChange={(e) => setCompanyIndustry(e.target.value)}
              value={companyIndustry}
              fontSize="16px"
            >
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>

          <FormControl id="company-size" isRequired>
            <FormLabel {...fontlabelStyle}>Company Size</FormLabel>
            <RadioGroup onChange={setCompanySize} value={companySize}>
              <Flex direction="row">
                {["small", "medium", "large", "enterprise"].map((size) => (
                  <Radio value={size} key={size} sx={{ display: "none" }}>
                    <Box
                      as="span"
                      sx={{
                        display: "inline-block",
                        border: "1px solid",
                        borderColor: companySize === size ? "#111" : "gray.200",
                        color: companySize === size ? "#111" : "inherit",
                        px: 2,
                        py: 1,
                        borderRadius: "md",
                        cursor: "popromxia-nova",
                      }}
                      onClick={() => setCompanySize(size)}
                    >
                      {size === "small" && "1-10"}
                      {size === "medium" && "11-50"}
                      {size === "large" && "51-200"}
                      {size === "enterprise" && "201-500+"}
                    </Box>
                  </Radio>
                ))}
              </Flex>
            </RadioGroup>
          </FormControl>

          <Button
            bg={isFormComplete ? "#111" : "#989898"}
            id="showcheckout"
            display={"flex"}
            gap={"6px"}
            alignItems={"center"}
            fontSize={"18px"}
            color="#fff"
            w={"100%"}
            height={"50px"}
            mt="5px"
            fontWeight={"600"}
            onClick={handleButtonClick}
            _hover={{ bg: isFormComplete ? "#cf6c3c" : undefined }}
          >
            CONTINUE{" "}
            {isFormComplete ? (
              <FaArrowRight fontSize={"16px"} />
            ) : (
              <FaLock fontSize={"16px"} />
            )}
          </Button>
        </Flex>
        <Flex
          id="checkout"
          bg="black"
          w="100%"
          flexDirection={"column"}
          alignItems="center"
          display={showCheckout ? "flex" : "none"}
          ref={checkoutRef}
          py={{ base: "20px", md: "40px" }}
          px={{ base: "15px", md: "0" }}
        >
          <Flex
            w="100%"
            maxW="600px"
            flexDirection={"column"}
            alignItems="center"
            bg="#fff"
            px="20px"
            py="25px"
            borderRadius="10px"
          >
            <Text
              lineHeight="1em"
              fontSize={"24px"}
              fontWeight={"600"}
              color={"#111"}
            >
              How can we reach you?
            </Text>
            <Flex
              flexDirection={"row"}
              flexWrap={"wrap"}
              justify={"space-between"}
            >
              <FormControl mt="4" color="black" w="48%">
                <FormLabel htmlFor="first-name" {...fontlabelStyle}>
                  First Name
                </FormLabel>
                <Input
                  {...wb}
                  color="black"
                  id="first-name"
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  value=""
                />
              </FormControl>
              <FormControl mt="4" color="black" w="48%">
                <FormLabel htmlFor="last-name" {...fontlabelStyle}>
                  Last Name
                </FormLabel>
                <Input
                  {...wb}
                  color="black"
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  value=""
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel htmlFor="company-name" {...fontlabelStyle}>
                  Company Name
                </FormLabel>
                <Input
                  {...wb}
                  id="company-name"
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel htmlFor="job-title" {...fontlabelStyle}>
                  Job Title
                </FormLabel>
                <Input
                  {...wb}
                  id="job-title"
                  type="email"
                  placeholder="Job Title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel htmlFor="email" {...fontlabelStyle}>
                  Email
                </FormLabel>
                <Input
                  {...wb}
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value=""
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel htmlFor="phone" {...fontlabelStyle}>
                  Phone
                </FormLabel>
                <Input
                  {...wb}
                  id="phone"
                  type="tel"
                  value=""
                  placeholder="Phone Number"
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel htmlFor="message" {...fontlabelStyle}>
                  Message
                </FormLabel>
                <Textarea
                  {...wb}
                  id="message"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel htmlFor="company-name" {...fontlabelStyle}>
                  Company Name
                </FormLabel>
                <Input
                  {...wb}
                  id="company-name"
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired mt="6">
                <FormLabel
                  lineHeight="1em"
                  fontSize={"16px"}
                  fontWeight={"600"}
                  color={"#111"}
                >
                  Would you like to receive Jigsaw24 news, offers and event
                  invites?
                </FormLabel>
                <RadioGroup defaultValue="No">
                  <Flex direction="column">
                    <Radio size="sm" value="No" {...wb}>
                      No please don't
                    </Radio>
                    <Radio size="sm" value="Yes" {...wb}>
                      Yes, sign me up to receive the latest from Jigsaw24
                    </Radio>
                  </Flex>
                </RadioGroup>
              </FormControl>
              <Button
                mt="4"
                w="100%"
                bg="#dc652c"
                fontSize="20px"
                h="40px"
                color="#fff"
                onClick={handleSubmit}
                isDisabled={!isFormComplete}
              >
                SEND MESSAGE
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
