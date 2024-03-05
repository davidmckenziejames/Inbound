import {
    Flex,
    ModalContent,
} from "@chakra-ui/react";

const fieldText = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1em",
    color: "gray.500",
};

import {
    BUILDING,
    ISSUE,
    SOURCE,
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

export default function LeadCardModal() {
    return (
        <>
            <ModalContent>
                <Flex
                    id="LeadCardModalContent"
                    w="100%"
                    flexDirection="column"
                    gap="10px"
                >
                    <Flex {...fieldText}>Building: {BUILDING}</Flex>
                    <Flex {...fieldText}>Issue: {ISSUE}</Flex>
                    <Flex {...fieldText}>Services: {SOURCE.join(", ")}</Flex>
                    <Flex {...fieldText}>Date: {DATE}</Flex>
                    <Flex {...fieldText}>Time of Day: {TIME_OF_DAY}</Flex>
                    <Flex {...fieldText}>Postcode: {POSTCODE}</Flex>
                    <Flex {...fieldText}>First Name: {FIRST_NAME}</Flex>
                    <Flex {...fieldText}>Last Name: {LAST_NAME}</Flex>
                    <Flex {...fieldText}>Email: {EMAIL}</Flex>
                    <Flex {...fieldText}>Phone: {PHONE}</Flex>
                    <Flex {...fieldText}>Company: {COMPANY}</Flex>
                    <Flex {...fieldText}>Notes: {NOTES}</Flex>
                    <Flex {...fieldText}>UUID: {UUID}</Flex>
                </Flex>
            </ModalContent>
        </>
    );
}
