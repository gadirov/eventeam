import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { MdCategory } from "react-icons/md";
import { useEventCategories } from "../../../hooks/useEventCategories.ts";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { t } = useTranslation();
  const methods = useFormContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const { data } = useEventCategories();
  useEffect(() => {
    const obj = selectedCategories.map((item) => {
      return { keyword: item };
    });
    methods.setValue("listOfCategories", obj);
  }, [selectedCategories, methods]);

  const handleCategoryChange = (selected) => {
    setSelectedCategories(selected);
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updatedCategories);
  };

  const datas = useMemo(() => {
    return data?.body;
  }, [data]);

  const categoryString = (str) => {
    const str1 = str.split(".")[1];
    return str1.charAt(0).toUpperCase() + str1.slice(1);
  };

  return (
    <>
      <VStack
        w={{ base: "100%", lg: "70%" }}
        alignItems="center"
        bg="white"
        p={{ base: "10px", md: "60px" }}
      >
        <HStack w="90%" onClick={onOpen} cursor="pointer">
          <Icon as={MdCategory} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">{t("Category")}</Text>
            <Text color="#98A2B3" pt="16px">
              {t("Category info")}
            </Text>
          </Box>
        </HStack>

        <Box w="90%" mt="30px">
          <Button
            alignSelf="flex-start"
            borderRadius="40px"
            w="4.8"
            p="25px 25px 25px 10px"
            onClick={onOpen}
          >
            <HStack gap="10px">
              <Button
                color="white"
                borderRadius="50%"
                w="15px"
                colorScheme="purple"
              >
                +
              </Button>
              <Text>{t("Add category")}</Text>
            </HStack>
          </Button>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Select Categories</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <CheckboxGroup
                value={selectedCategories}
                onChange={handleCategoryChange}
              >
                <VStack align="start">
                  {datas?.map((category) => {
                    return (
                      <Checkbox key={category.id} value={category.keyword}>
                        {category.name}
                      </Checkbox>
                    );
                  })}
                </VStack>
              </CheckboxGroup>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="green" onClick={onClose}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <VStack w="90%" mt="30px" align="start">
          {selectedCategories?.map((category, index) => (
            <HStack w="60%" justifyContent="space-between">
              <Text key={index}>{categoryString(category)}</Text>
              <Button
                bg="transparent"
                _hover={{ bg: "transparent" }}
                onClick={() => handleRemoveCategory(category)}
              >
                x
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export default Category;
