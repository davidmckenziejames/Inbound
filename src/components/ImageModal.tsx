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
import { CloseIcon } from "../assets/Icons";
import { FaBuildingUser, FaCalendar, FaEnvelope, FaEye, FaImages, FaLocationCrosshairs, FaMapLocation, FaPhone, FaRegBuilding, FaUser } from "react-icons/fa6";
import { fieldText, viewLead, statsBox, leadicon, closeicon } from "../assets/ComponentStyles";
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

export default function ImageModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Flex id="viewImages" onClick={onOpen} {...viewLead}>
                <FaImages />
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <Flex pos="absolute" right="8px" top="8px" cursor="pointer" onClick={onClose}>  <CloseIcon {...closeicon} /> </Flex>
                    <Flex
                        id="LeadCardModalContent"
                        w="100%"
                        flexDirection="column"
                        gap="10px"
                        p="15px"
                    ><Flex {...fieldText}> Uploaded Image</Flex>
                        <Image src="https://cdn-aghgp.nitrocdn.com/oWMXjMOdFgskBGOqleIXmBtTdqJuZMAV/assets/images/optimized/rev-7d520d8/rizereviews.com/wp-content/uploads/2023/05/How-Much-Does-Reputation-Management-Cost_1280x720.png" />
                    </Flex>
                </ModalContent>
            </Modal>
        </>

    );
}
