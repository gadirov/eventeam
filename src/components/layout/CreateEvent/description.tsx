import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  FormControl,
  Input,
  Button,
  Image,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { MdDescription } from "react-icons/md";

interface IDescriptionProps {
  errors: any;
  control: any;
}

const Description: React.FC<IDescriptionProps> = ({ errors, control }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <VStack w="50%" p="60px" bg="white" alignItems="center">
        <HStack w="90%">
          <Icon as={MdDescription} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">Description</Text>
            <Text color="#98A2B3" pt="16px">
              Provide more information about your event so that guests know what
              to expect.
            </Text>
          </Box>
        </HStack>
        <VStack alignItems="flex-start" w="90%">
          <Text fontSize="20px" pt="40px">
            Event pictures
          </Text>
          <Text pb="25px" color="gray">
            Add Your event's additional picture
          </Text>
          <FormControl
            mb={errors?.btnPhoto ? 0 : 6}
            isInvalid={!!errors?.btnPhoto}
          >
            <Controller
              name="btnPhoto"
              control={control}
              rules={{
                required: "Photo is required!",
              }}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={(e) => {
                      field.onChange(e);
                      handleFileChange(e);
                    }}
                  />
                  <Button
                    onClick={() => {
                      handleBrowseClick();
                    }}
                    colorScheme="purple"
                  >
                    Add photo
                  </Button>

                  {selectedImage && (
                    <div>
                      <Image
                        src={URL.createObjectURL(selectedImage)}
                        alt="Add photo"
                        mt="20px"
                      />
                    </div>
                  )}
                </>
              )}
            />
            <FormErrorMessage mt="0.5rem">
              {errors?.btnPhoto?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            mb={errors?.about ? 0 : 6}
            isInvalid={!!errors?.about}
          >
            <FormLabel pt="60px">About event</FormLabel>
            <Controller
              name="about"
              control={control}
              rules={{
                required: "About info is required!",
              }}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Input any info about your event"
                />
              )}
            />

            <FormErrorMessage mt="0.5rem">
              {errors?.about?.message}
            </FormErrorMessage>
          </FormControl>
        </VStack>
      </VStack>
    </>
  );
};
export default Description;
