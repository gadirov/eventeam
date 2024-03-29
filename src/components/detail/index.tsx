import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Link,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleCheck,
  faCircleUser,
  faClock,
  faEarthAmericas,
  faLink,
  faListCheck,
  faLocationDot,
  faPhone,
  faStar,
  faUser,
  faUserGroup,
  faUserPlus,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { fetcher } from "../../config/axiosConfig.ts";
import useSWR from "swr";
import { BaseUrl, swrOptions } from "../../const.ts";
import { useTranslation } from "react-i18next";

// interface DetailData {
//   eventName: string;
// }
const DetailView = () => {
  const { t } = useTranslation();
  const params = useParams();
  const [detailData, setDetailData] = useState<any>(undefined);
  const { data, error, isLoading } = useSWR(
    `/events-ms/api/v1/events/${params.detailviewid}`,
    fetcher,
    swrOptions
  );
  useEffect(() => {
    setDetailData(data);
  }, [data, error, isLoading]);

  //minutes part
  // Assuming detailData is of type EventData
  const startTimeString = detailData?.body?.startTime || "";
  const endTimeString = detailData?.body?.endTime || "";
  const [startHour, startMinute] = startTimeString.split(":").map(Number);
  const [endHour, endMinute] = endTimeString.split(":").map(Number);
  // Calculate the time difference in minutes
  const timeDifferenceInMinutes =
    endHour * 60 + endMinute - (startHour * 60 + startMinute);

  // console.log(d)
  return (
    <Box pt="100px">
      <Box>
        <Box w="72%" margin="auto">
          <Image
            height={{ base: "30vh", md: "78vh " }}
            w="100%"
            src={`${BaseUrl}/images/${detailData?.body?.coverPhoto}`}
            alt=""
          />
        </Box>
      </Box>
      <Box w="100%" borderRadius="20px" backgroundColor="white">
        <Box w="100%" margin="auto">
          <Box p="30px 0px" display="flex" flexDirection="column" gap="20px">
            <Box display="flex" alignItems="center" gap="10px" margin="0 50px">
              <Box
                p="6px 17px"
                backgroundColor="#FF7422"
                borderRadius="15px"
                color="white"
              >
                {detailData?.body?.ticketType}
              </Box>
              <Box
                p="6px 20px"
                backgroundColor="gray"
                borderRadius="15px"
                color="white"
              >
                <FontAwesomeIcon icon={faUser} /> In person{" "}
              </Box>
            </Box>
            <Box margin="0 50px">
              <Heading>{detailData?.body?.eventName}</Heading>
            </Box>
            <Box display="flex" gap="10px" margin="0 50px">
              <Menu>
                <MenuButton
                  as={Button}
                  borderRadius="13px"
                  p="30px"
                  backgroundColor="#8f64ff"
                  size="lg"
                >
                  <Box display="flex" alignItems="center">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "#ffffff" }}
                    />
                    <Text color="white" ml="5px">
                      {t("Going")}
                    </Text>
                  </Box>
                </MenuButton>
                <MenuList>
                  <MenuItem>{t("Going")}</MenuItem>
                  <MenuItem>{t("Interested")}</MenuItem>
                  <MenuItem>{t("Unset")}</MenuItem>
                </MenuList>
              </Menu>
              <Button
                borderRadius="13px"
                p="30px"
                backgroundColor="#ededed"
                colorScheme="teal"
                size="lg"
              >
                <FontAwesomeIcon icon={faStar} style={{ color: "#8f64ff" }} />{" "}
                <Text ml="5px" color="black">
                  {t("Interested")}
                </Text>
              </Button>
            </Box>
          </Box>
          <Divider border="1px solid #d4d4d4  " />
          <Box
            p="30px 0px"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "50px", md: "150px" }}
            margin="0 50px"
          >
            <Box display="flex" flexDirection="column" gap="20px">
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faCalendar} />
                <Text fontSize="20px">
                  {detailData?.body?.startDate}, {detailData?.body?.startTime}{" "}
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faClock} />
                <Text fontSize="20px">
                  {timeDifferenceInMinutes} {t("Minutes")}
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faLocationDot} />
                <Text color="blue" fontSize="20px">
                  Baki Kinoteatrı
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                gap="15px"
              >
                <Box textAlign={{ made: "start", md: "center" }}>
                  <FontAwesomeIcon fontSize="23px" icon={faUserGroup} />
                </Box>
                <Box display="flex">
                  <Text color="gray" fontSize="20px">
                    {" "}
                    Min:{" "}
                  </Text>
                  <Text fontSize="20px">
                    {" "}
                    {detailData?.body?.minAttendees} {t("Attended")}{" "}
                  </Text>
                  <Text color="gray" fontSize="20px">
                    {" "}
                    / Max:
                  </Text>
                  <Text fontSize="20px">
                    {" "}
                    {detailData?.body?.maxAttendees} {t("Attended")}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap="20px">
              <Box display="flex" alignItems="center" gap="10px">
                <FontAwesomeIcon fontSize="23px" icon={faListCheck} />
                {detailData?.body?.listOfCategories.map((item) => (
                  <Text fontSize="20px">{item.name}</Text>
                ))}
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faLink} />
                <Link>
                  <Text color="blue" fontSize="20px">
                    {detailData?.body?.websiteUrl}
                  </Text>
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faWallet} />
                <Text fontSize="20px">{detailData?.body?.ticketCost}.0 ₼</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faCircleUser} />
                <Text fontSize="20px">
                  {t("Event hosted")} <Link color="blue">eventeam</Link>
                </Text>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap="20px">
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faEarthAmericas} />
                <Text fontSize="20px">{detailData?.body?.eventType} event</Text>
              </Box>
            </Box>
          </Box>

          <Box margin="0 50px">
            <Heading m="20px 0px">{t("Description")}</Heading>
            <Text fontSize="20px">{detailData?.body?.description}</Text>
            <br />
            <Text fontSize="20px">
              BakI Kinoteatrinda nümayiş olunacaq filmi izləməyə tələsin.
            </Text>
            <br />
            <Text fontSize="20px">
              Siz də bu filmi dostlarinizla birlikdə izləmək və hələ də üstəlik
              endirim əldə ətmək istəyirsinizsə, qeyd edilən nömrəyə yazmağiniz
              kifayətdir.
            </Text>
          </Box>

          <Box
            p={{ base: "40px 0px", md: "120px 0px" }}
            display="flex"
            gap="80px"
            w="100vw"
            justifyContent="center"
          >
            <Box>
              <Heading textAlign="center" fontSize="40px">
                {t("Attended")}
              </Heading>
              <Box
                p="30px 0px"
                display="flex"
                gap={{ base: "19px", md: "120px" }}
              >
                <Box>
                  <Text
                    textAlign="center"
                    color="#8f64ff"
                    fontSize={{ base: "37px", md: "40px" }}
                    fontWeight="500"
                  >
                    {detailData?.body?.usersList?.goingCount}
                  </Text>
                  <Text color="gray" fontSize={{ base: "20", md: "25px" }}>
                    {t("Going")}
                  </Text>
                </Box>
                <Box>
                  <Text
                    textAlign="center"
                    color="#8f64ff"
                    fontSize={{ base: "37px", md: "40px" }}
                    fontWeight="500"
                  >
                    {detailData?.body?.usersList?.interestedCount}
                  </Text>
                  <Text color="gray" fontSize={{ base: "20", md: "25px" }}>
                    {t("Interested")}
                  </Text>
                </Box>
                <Box>
                  <Text
                    textAlign="center"
                    color="#8f64ff"
                    fontWeight="500"
                    fontSize={{ base: "37px", md: "40px" }}
                  >
                    0
                  </Text>
                  <Text color="gray" fontSize={{ base: "20", md: "25px" }}>
                    {t("Invited")}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            p={{ base: "0 50px", md: "0 100px" }}
            mt="-50px"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "35px", md: "80px" }}
            w="100vw"
            justifyContent="space-around"
          >
            <Box>
              <Heading>{t("Friends")}</Heading>
              <Box p="30px 0px">
                <Menu>
                  <MenuButton
                    w={{ base: "100%", md: "100%" }}
                    size="lg"
                    gap="10px"
                    p="32px 60px 32px 20px"
                    backgroundColor="#ededed"
                    borderRadius="10px"
                    as={Button}
                    leftIcon={
                      <FontAwesomeIcon
                        icon={faUserPlus}
                        style={{ color: "#8f64ff" }}
                      />
                    }
                  >
                    {t("Invite Friends")}
                  </MenuButton>
                  <MenuList>
                    <MenuItem minH="48px">
                      <FacebookShareButton
                        url={"https://abb-bank.az/"}
                        hashtag="#abb_tech"
                      >
                        <FacebookIcon size={35} round />
                      </FacebookShareButton>
                      <Text margin="12px">Facebook</Text>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <WhatsappShareButton url={"https://abb-bank.az/"}>
                        <WhatsappIcon size={35} round />
                      </WhatsappShareButton>
                      <Text margin="12px">Whatsapp</Text>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <LinkedinShareButton url={"https://abb-bank.az/"}>
                        <LinkedinIcon size={35} round />
                      </LinkedinShareButton>
                      <Text margin="12px">Linkedin</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
            <Box>
              <Heading>{t("Contact")}</Heading>
              <Box p="30px 0px">
                <Link href={`tel:${detailData?.body?.mobileNumber}`}>
                  <Button
                    colorScheme="teal"
                    size="lg"
                    gap="10px"
                    p="32px 80px 32px 10px"
                    backgroundColor="#ededed"
                    borderRadius="10px"
                    w={{ base: "100%", md: "100%" }}
                  >
                    <Box
                      backgroundColor="white"
                      p="15px"
                      ml={{ base: "-30px", md: "0px" }}
                      mr={{ base: "30px", md: "0px" }}
                      borderRadius="15px"
                    >
                      <FontAwesomeIcon icon={faPhone} color="#8f64ff" />
                    </Box>
                    <Text color="black">{detailData?.body?.mobileNumber} </Text>
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box>
              <Heading>{t("Hosted")}</Heading>
              <Box p="30px 0px" display="flex" gap="20px">
                <Box padding="0">
                  <Text fontSize="20px">eventeam</Text>
                  <Link href={`mailto:${"eventeam@gmail.com"}`}>
                    <Text fontSize="20px" color="gray">
                      eventeam.app@gmail.com
                    </Text>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailView;
