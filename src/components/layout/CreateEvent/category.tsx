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
import React, { useState } from "react";
import { MdCategory } from "react-icons/md";

interface ICategoryProps {
  errors: any;
  control: any;
}

const Category: React.FC<ICategoryProps> = ({ errors, control }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (selected: string[]) => {
    setSelectedCategories(selected);
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updatedCategories);
  };

  const allCategories = [
    "Education",
    "Courses",
    "Discussion clubs",
    "Training and master-classes",
    "Conversation clubs",
    "Online Education",
    "Sport",
    "Business",
    "Music",
    "Charity",
    "Auto",
    "Entertainment",
    "Health & Beauty",
    "Travel",
    "Food and Beverage by Drinking Team",
    "Art and Culture",
    "For children",
    "Other",
  ];

  return (
    <>
      <VStack w="50%" alignItems="center" bg="white" p="60px">
        <HStack w="90%" onClick={onOpen} cursor="pointer">
          <Icon as={MdCategory} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">Category</Text>
            <Text color="#98A2B3" pt="16px">
              Select the category to which the event belongs.
            </Text>
          </Box>
        </HStack>

        <Box w="90%" mt="30px">
          <Button
            alignSelf="flex-start"
            borderRadius="40px"
            w="30%"
            p="25px"
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
              <Text>Add category</Text>
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
                  {allCategories.map((category) => (
                    <Checkbox key={category} value={category}>
                      {category}
                    </Checkbox>
                  ))}
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
          {selectedCategories.map((category) => (
            <HStack w="60%" justifyContent="space-between">
              <Text key={category}>{category}</Text>
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
