import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import { arrowStyles, filterStyle } from "../assets/ComponentStyles";
import { pests } from "./PestData";

export default function PestCards() {
  const [selectedPest, setSelectedPest] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handlePestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPest(event.target.value);
  };
  const [currentSlide, setCurrentSlide] = useState(Array(pests.length).fill(0));

  const prevSlide = (index: number) => {
    setCurrentSlide(
      currentSlide.map((slide, i) =>
        i === index
          ? slide === 0
            ? pests[i].slides.length - 1
            : slide - 1
          : slide
      )
    );
  };

  const nextSlide = (index: number) => {
    setCurrentSlide(
      currentSlide.map((slide, i) =>
        i === index
          ? slide === pests[i].slides.length - 1
            ? 0
            : slide + 1
          : slide
      )
    );
  };

  const handleCategoryFilterChange = (category: string) => {
    setCategoryFilter(category);
  };

  const filteredPests = pests.filter((pest) =>
    categoryFilter === "All" ? true : pest.category === categoryFilter
  );

  return (
    <Flex direction="column">
      <Flex gap="10px" width="100%" justifyContent="flex-start" pb="15px">
        {["All", "Crawling Insects", "Flying Insects", "Rodents", "Birds"].map(
          (category) => (
            <label
              key={category}
              htmlFor={`filter-${category.toLowerCase().replace(" ", "-")}`}
            >
              <input
                type="radio"
                id={`filter-${category.toLowerCase().replace(" ", "-")}`}
                value={category}
                name="categoryFilter"
                checked={categoryFilter === category}
                onChange={() => handleCategoryFilterChange(category)}
                style={{ display: "none" }}
              />
              <Flex
                {...filterStyle}
                borderColor={categoryFilter === category ? "#dc662c" : "#111"}
                bg={categoryFilter === category ? "#dc662c" : "#fff"}
                color={categoryFilter === category ? "#fff" : "#000"}
              >
                {category}
              </Flex>
            </label>
          )
        )}
      </Flex>

      <Flex gap="10px" flexWrap="wrap">
        {filteredPests.map((pest, index) => (
          <Box
            key={pest.name}
            w="200px"
            overflow="hidden"
            bg="#fff"
            borderRadius="10px"
            border="1px solid #d2d2d2"
          >
            <Flex
              id={`carousel-${pest.name}`}
              flexDirection="column"
              pos="relative"
            >
              <Flex
                h="120px"
                w="full"
                transition="all .5s"
                ml={`-${currentSlide[index] * 100}%`}
              >
                <Box
                  cursor="pointer"
                  position="absolute"
                  top="50%"
                  w="auto"
                  mt="-22px"
                  ml="-5px"
                  p="10px"
                  color="white"
                  transition="0.6s ease"
                  userSelect="none"
                  left="0"
                  onClick={() => prevSlide(index)}
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="-5 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.06 2.06 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.06 2.06 0 0 0-2.845 0"
                      fill="#fff"
                    />
                  </svg>
                </Box>
                <Box
                  cursor="pointer"
                  position="absolute"
                  top="50%"
                  w="auto"
                  mt="-22px"
                  mr="-5px"
                  p="10px"
                  color="white"
                  transition="0.6s ease"
                  userSelect="none"
                  right="0"
                  onClick={() => nextSlide(index)}
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="-5 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.06 2.06 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.06 2.06 0 0 1 2.845 0"
                      fill="#fff"
                    />
                  </svg>
                </Box>
                {pest.slides.map((slide, sid) => (
                  <Box
                    key={`slide-${sid}`}
                    boxSize="full"
                    shadow="md"
                    flex="none"
                  >
                    <Image
                      src={slide.img}
                      alt={`carousel image ${sid}`}
                      boxSize="full"
                      backgroundSize="cover"
                    />
                  </Box>
                ))}
              </Flex>
            </Flex>
            <label htmlFor={`pest-radio-${pest.name}`} key={index}>
              <input
                type="radio"
                id={`pest-radio-${pest.name}`}
                name="pest"
                value={pest.name.charAt(0).toUpperCase() + pest.name.slice(1)}
                checked={
                  selectedPest ===
                  pest.name.charAt(0).toUpperCase() + pest.name.slice(1)
                }
                onChange={handlePestChange}
                style={{ display: "none" }}
              />
              <Flex
                fontSize="20px"
                fontWeight="500"
                width="100%"
                justifyContent="center"
                py="10px"
                lineHeight="1em"
                bg={
                  selectedPest ===
                  pest.name.charAt(0).toUpperCase() + pest.name.slice(1)
                    ? "black"
                    : ""
                }
                color={
                  selectedPest ===
                  pest.name.charAt(0).toUpperCase() + pest.name.slice(1)
                    ? "white"
                    : ""
                }
                cursor="pointer"
              >
                {pest.name.charAt(0).toUpperCase() + pest.name.slice(1)}
              </Flex>
            </label>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
