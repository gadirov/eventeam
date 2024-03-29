import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Image,
  Input,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  Stack,
  Radio,
  Switch,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MdEvent } from "react-icons/md";
import { useHandleImage } from "../../../hooks/useEventImage.ts";
import { useTranslation } from "react-i18next";
import { BaseUrl } from "../../../const.ts";

const EventDetails = () => {
  const {t}=useTranslation();
  const methods = useFormContext();
  const {errors} = methods.formState;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { submit } = useHandleImage("coverPhoto", methods.setValue);

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <>
      <VStack bg="white" p={{base: "10px",md:"60px" }} w={{base: "100%", lg: "70%"}}>
        <HStack w="90%" alignItems="center">
          <Icon as={MdEvent} w={12} h={12} color="purple.500" />
          <Box pl="32px">
            <Text as="b">{t("Event details")}</Text>
            <Text color="#98A2B3" pt="16px">
              {t("Detail Info")}
            </Text>
          </Box>
        </HStack>
        <VStack
          alignItems="center"
          pt="30px"
          pb="30px"
          bg="#F2F4F7"
          w="90%"
          mt="30px"
        >
          {!methods.watch("coverPhoto") && (
            <>
              <Image src="../assests/Outline.png" alt="Event outline" />
              <Text as="b" fontSize={{ base: "24px", md: "34px", sm: "28px"}}>
                {t("Choose file")}
              </Text>
            </>
          )}
          <Text pt="16px">
            {" "}
            <Controller
              name="coverPhoto"
              control={methods?.control}
              rules={{ required: "This field is required!" }}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    value={undefined}
                    style={{ display: "none" }}
                    onChange={(e) => submit(e?.target?.files?.[0])}
                  />
                  <Link onClick={handleBrowseClick} color="purple">
                    browse{" "}
                  </Link>
                </>
              )}
            />{" "}
           {t("Choose file")}{" "}
          </Text>
          {methods.watch("coverPhoto") && (
            <div>
              <Image
                src={`${BaseUrl}/images/${methods.watch("coverPhoto")}`}
                alt="Selected Image"
              />
            </div>
          )}
          <Text w="90%" as="b" pt="30px" textAlign="center" color="#667085">
            {t("File Info")}{" "}
          </Text>
        </VStack>
        {methods?.formState?.errors?.coverPhoto && (
          <FormErrorMessage color="red" mt="0.5rem">
            {methods?.formState?.errors?.coverPhoto?.message as string}
          </FormErrorMessage>
        )}
        <VStack w="90%">
          <FormControl
            mb={methods?.formState?.errors?.eventName ? 0 : 6}
            pt="30px"
            isInvalid={!!methods?.formState?.errors?.eventName}
          >
            <FormLabel>{t("Name")}</FormLabel>
            <Controller
              name="eventName"
              control={methods?.control}
              rules={{
                required: "Event name is required!",
              }}
              render={({ field }) => (
                <Input {...field} id="eventName" placeholder={t("Event name")} />
              )}
            />
            <FormErrorMessage mt="0.5rem">
              {methods?.formState?.errors?.eventName?.message as string}
            </FormErrorMessage>
          </FormControl>
          <HStack w="100%">
            <FormControl
              mb={methods?.formState?.errors?.startDate ? 0 : 6}
              isInvalid={!!methods?.formState?.errors?.startDate}
            >
              <FormLabel>{t("Start Date")}</FormLabel>
              <Controller
                name="startDate"
                control={methods?.control}
                rules={{
                  required: "Start date is required!",
                }}
                render={({ field }) => <Input {...field} type="date" />}
              />
              <FormErrorMessage mt="0.5rem">
                {methods.formState?.errors?.startDate?.message as string}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              mb={methods?.formState?.errors?.startTime ? 0 : 6}
              isInvalid={!!methods?.formState?.errors?.startTime}
            >
              <Controller
                name="startTime"
                control={methods?.control}
                rules={{
                  required: "Start time is required!",
                }}
                render={({ field }) => (
                  <Input {...field} mt="32px" type="time" />
                )}
              />
              <FormErrorMessage mt="0.5rem">
                {methods.formState?.errors?.startTime?.message as string}
              </FormErrorMessage>
            </FormControl>
          </HStack>
          <HStack w="100%">
            <FormControl
              mb={methods?.formState?.errors?.endDate ? 0 : 6}
              isInvalid={!!methods?.formState?.errors?.endDate}
            >
              <FormLabel>{t("End Date")}</FormLabel>
              <Controller
                name="endDate"
                control={methods?.control}
                rules={{
                  required: "End date is required!",
                }}
                render={({ field }) => <Input {...field} type="date" />}
              />
              <FormErrorMessage mt="0.5rem">
                {methods.formState?.errors?.endDate?.message as string}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              mb={methods?.formState?.errors?.endTime ? 0 : 6}
              isInvalid={!!methods?.formState?.errors?.endTime}
            >
              <Controller
                name="endTime"
                control={methods?.control}
                rules={{
                  required: "End time is required!",
                }}
                render={({ field }) => (
                  <Input {...field} mt="32px" type="time" />
                )}
              />
              <FormErrorMessage mt="0.5rem">
                {methods.formState?.errors?.endTime?.message as string}
              </FormErrorMessage>
            </FormControl>
          </HStack>
          <FormControl isInvalid={!!methods?.formState?.errors?.eventType}>
            <FormLabel pt="30px" fontSize="20px">
              {t("Privacy")}
              <Text fontSize="12px" color="gray">
              {t("Choose Privacy")}
              </Text>
            </FormLabel>
            <Controller
              name="eventType"
              control={methods?.control}
              rules={{
                required: "This field is required!",
              }}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <Stack direction="row">
                    <Radio value="PUBLIC" defaultChecked>
                      {t("Public")}
                    </Radio>
                    <Radio value="PRIVATE">{t("Private")}</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
            <FormErrorMessage mt="0.5rem">
              {errors?.privacy?.message as string} 
            </FormErrorMessage>
          </FormControl>
          <FormControl
            pt="18px"
            display="flex"
            alignItems="center"
            gap="20px"
            isInvalid={!!errors?.attendeesPermission}
            mb={errors?.attendeesPermission ? 0 : 6}
          >
            <FormLabel htmlFor="attendees" mb="0" fontSize="20px">
              {t("Attendees permission")}
              <Text fontSize="14px" color="gray">
              {t("Attendees info")}
              </Text>
            </FormLabel>
            <Controller
              name="attendeesPermission"
              control={methods?.control}
              rules={{
                required: "This field is required!",
              }}
              render={({ field }) => (
                <Switch
                  {...field}
                  id="attendees"
                  value={field.value ? "true" : ""}
                />
              )}
            />
            <FormErrorMessage mt="0.5rem">
              {errors?.attendeesPermission?.message  as string}
            </FormErrorMessage>
          </FormControl>
        </VStack>
      </VStack>
    </>
  );
};
export default EventDetails;
