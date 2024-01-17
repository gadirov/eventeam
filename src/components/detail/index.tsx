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

const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

// interface DetailData {
//   eventName: string;
// }
const DetailView = () => {
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

  //category part
  const category = detailData?.body?.listOfCategories[0]?.keyword
    .split(".")[1]
    .toUpperCase();

  return (
    <Box pt="100px">
      <Box w="100%" margin="auto">
        <Image
          height="60vh"
          w="100%"
          src={`http://173.212.221.237/images/${detailData?.body?.coverPhoto}`}
          alt=""
        />
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
                  backgroundColor="#56d5f5"
                  size="lg"
                >
                  <Box display="flex" alignItems="center">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "#ffffff" }}
                    />
                    <Text color="white" ml="5px">
                      Going
                    </Text>
                  </Box>
                </MenuButton>
                <MenuList>
                  <MenuItem>Going</MenuItem>
                  <MenuItem>Interested</MenuItem>
                  <MenuItem>Unset</MenuItem>
                </MenuList>
              </Menu>
              <Button
                borderRadius="13px"
                p="30px"
                backgroundColor="#ededed"
                colorScheme="teal"
                size="lg"
              >
                <FontAwesomeIcon icon={faStar} style={{ color: "#74C0FC" }} />{" "}
                <Text ml="5px" color="black">
                  Interested
                </Text>
              </Button>
            </Box>
          </Box>
          <Divider border="1px solid #d4d4d4  " />
          <Box p="30px 0px" display="flex" gap="150px" margin="0 50px">
            <Box display="flex" flexDirection="column" gap="20px">
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faCalendar} />
                <Text fontSize="20px">
                  {detailData?.body?.startDate}, {detailData?.body?.startTime}{" "}
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faClock} />
                <Text fontSize="20px">{timeDifferenceInMinutes} minutes</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faLocationDot} />
                <Text color="blue" fontSize="20px">
                  Baki Kinoteatrı
                </Text>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faUserGroup} />
                <Box display="flex">
                  <Text color="gray" fontSize="20px">
                    {" "}
                    Min:{" "}
                  </Text>
                  <Text fontSize="20px">
                    {" "}
                    {detailData?.body?.minAttendees} Attended{" "}
                  </Text>
                  <Text color="gray" fontSize="20px">
                    {" "}
                    / Max:
                  </Text>
                  <Text fontSize="20px">
                    {" "}
                    {detailData?.body?.maxAttendees} Attended
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap="20px">
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faListCheck} />
                <Text fontSize="20px">{category}</Text>
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
                  Event hosted by <Link color="blue">eventeam</Link>
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
            <Heading m="20px 0px">Description</Heading>
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
            p="120px 0px"
            display="flex"
            gap="80px"
            w="100vw"
            justifyContent="center"
          >
            <Box>
              <Heading textAlign="center" fontSize="40px">
                Attended
              </Heading>
              <Box p="30px 0px" display="flex" gap="120px">
                <Box>
                  <Text
                    textAlign="center"
                    color="#56d5f5"
                    fontSize="40px"
                    fontWeight="500"
                  >
                    {detailData?.body?.usersList?.goingCount}
                  </Text>
                  <Text color="gray" fontSize="25px">
                    GOING
                  </Text>
                </Box>
                <Box>
                  <Text
                    textAlign="center"
                    color="#56d5f5"
                    fontSize="40px"
                    fontWeight="500"
                  >
                    {detailData?.body?.usersList?.interestedCount}
                  </Text>
                  <Text color="gray" fontSize="25px">
                    INTERESTED
                  </Text>
                </Box>
                <Box>
                  <Text
                    textAlign="center"
                    color="#56d5f5"
                    fontSize="40px"
                    fontWeight="500"
                  >
                    0
                  </Text>
                  <Text color="gray" fontSize="25px">
                    INVITED
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            p="0 100px"
            mt="-50px"
            display="flex"
            gap="80px"
            w="100vw"
            justifyContent="space-around"
          >
            <Box>
              <Heading>Friends</Heading>
              <Box p="30px 0px">
                <Button
                  colorScheme="teal"
                  size="lg"
                  gap="10px"
                  p="32px 60px 32px 20px"
                  backgroundColor="#ededed"
                  borderRadius="10px"
                >
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ color: "#74C0FC" }}
                  />
                  <Text color="black">Invite friends</Text>
                </Button>
              </Box>
            </Box>
            <Box>
              <Heading>Contact</Heading>
              <Box p="30px 0px">
                <Button
                  colorScheme="teal"
                  size="lg"
                  gap="10px"
                  p="32px 80px 32px 10px"
                  backgroundColor="#ededed"
                  borderRadius="10px"
                >
                  <Box backgroundColor="white" p="15px" borderRadius="15px">
                    <FontAwesomeIcon icon={faPhone} color="#74C0FC" />
                  </Box>
                  <Text color="black">{detailData?.body?.mobileNumber} </Text>
                </Button>
              </Box>
            </Box>
            <Box>
              <Heading>Hosted</Heading>
              <Box p="30px 0px" display="flex" gap="20px">
                {/* <Image borderRadius="50px" w="15%" src="./assests/Detail-Img/Eventeam-Img.jpeg" alt='' /> */}
                <Box padding="0">
                  <Text fontSize="20px">eventeam</Text>
                  <Text fontSize="20px" color="gray">
                    eventeam.app@gmail.com
                  </Text>
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
