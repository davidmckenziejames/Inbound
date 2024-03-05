import {
  Flex,
  Text,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tooltip
} from "@chakra-ui/react";
import { FaBuildingUser, FaCalendar, FaEnvelope, FaEye, FaImages, FaLocationCrosshairs, FaMapLocation, FaPhone, FaRegBuilding, FaUser } from "react-icons/fa6";
import { fieldText, viewLead, statsBox, leadicon } from "../assets/ComponentStyles";
import {
  BUILDING,
  ISSUE,
  SOURCE,
  BEDROOMS,
  DATE,
  TIME_OF_DAY,
  POSTCODE,
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PHONE,
  COMPANY,
  NOTES,
  UUID,
} from "./LeadData";
import LeadCardModal from "./LeadCardModal";
import { BuildingIcon, CompanyIcon, DateIcon, UserIcon, WarningIcon } from "../assets/Icons";
import ImageModal from "./ImageModal";

export default function LeadCard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      id="leadcard"
      w="300px"
      px="15px"
      py="15px"
      flexDirection="column"
      overflow="hidden"
      bg="#fff"
      borderRadius={"10px"}
      border="1px solid #d2d2d2"
      gap="10px"
      position="relative"
    >
      <Flex id="infoButtons" flexDirection="column" pos="absolute" bottom="10px" right="10px" gap="8px">
        <Flex id="viewDetails" onClick={onOpen} {...viewLead}>
          <FaEye />
        </Flex>
        <ImageModal />
      </Flex>
      <Flex {...fieldText}><UserIcon {...leadicon} />  {FIRST_NAME} {LAST_NAME}</Flex>
      <Flex><Flex {...fieldText}><BuildingIcon {...leadicon} />  {BUILDING} ({COMPANY})</Flex><Flex {...fieldText}> </Flex></Flex>

      <Flex {...fieldText}><WarningIcon {...leadicon} /> {ISSUE}</Flex>

      <Flex flexWrap="wrap" gap="8px">
        {SOURCE.map((stats, index) => (
          <Flex key={index} {...statsBox}>
            {stats}
          </Flex>
        ))}
      </Flex>
      <Flex id="contactDetails" gap="10px" fontSize="20px">
        <Flex as="a" href={`tel:${PHONE}`}><FaPhone /></Flex>
        <Flex as="a" href={`mail:${EMAIL}`}><FaEnvelope /></Flex>

        <Tooltip label={`${POSTCODE}`} aria-label='A tooltip' bg='gray.300' color='black'>
          <span><FaLocationCrosshairs /></span>
        </Tooltip>
        <Tooltip label={`${DATE} (${TIME_OF_DAY})`} aria-label='A tooltip' bg='gray.300' color='black'>
          <span><FaCalendar /></span>
        </Tooltip>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <LeadCardModal />
      </Modal>
    </Flex>
  );
}
