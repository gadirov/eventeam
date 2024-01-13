import React, { useEffect } from "react";
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

const DetailView = () => {
  const params = useParams();
  const { data, error, isLoading } = useSWR(
    `/events-ms/api/v1/events/${params.detailviewid}`,
    fetcher,
    swrOptions
  );
  useEffect(() => {
    console.log(data);
  }, [data, error, isLoading]);

  return (
    <Box backgroundColor="#090632" pt="100px">
      <Box w="60%" margin="auto">
        <Image
          height="90vh"
          w="100%"
          src="../assests/Detail-Img/Tehmine-Zaur.jpeg"
          alt=""
        />
      </Box>
      <Box w="95%" margin="auto" borderRadius="20px" backgroundColor="white">
        <Box w="95%" margin="auto">
          <Box p="30px 0px" display="flex" flexDirection="column" gap="20px">
            <Box display="flex" alignItems="center" gap="10px">
              <Box
                p="6px 17px"
                backgroundColor="#FF7422"
                borderRadius="15px"
                color="white"
              >
                Paid
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
            <Box>
              <Heading>"Tahmina va Zaur" filmi (10% endirim)</Heading>
            </Box>
            <Box display="flex" gap="10px">
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
          <Box p="30px 0px" display="flex" gap="150px">
            <Box display="flex" flexDirection="column" gap="20px">
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faCalendar} />
                <Text fontSize="20px">13 Jan, 2024 17:00</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faClock} />
                <Text fontSize="20px">120 minute</Text>
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
                  <Text fontSize="20px">1 Attended </Text>
                  <Text color="gray" fontSize="20px">
                    {" "}
                    / Max:
                  </Text>
                  <Text fontSize="20px">500 Attended</Text>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap="20px">
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faListCheck} />
                <Text fontSize="20px">Entertaiment</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faLink} />
                <Link>
                  <Text color="blue" fontSize="20px">
                    See more
                  </Text>
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap="15px">
                <FontAwesomeIcon fontSize="23px" icon={faWallet} />
                <Text fontSize="20px">6.0 ₼</Text>
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
                <Text fontSize="20px">Public event</Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <Heading m="20px 0px">Description</Heading>
            <Text fontSize="20px">
              Azarbaycan kinematoqrafiyasinin an möhtasam asarlarindan olan
              "Tahmin va Zaur" filmini yenidan kinoteatrda izlamaya na
              deyirsiniz? Filmsevar izlayicilarimize özal olaraq 10% ENDiRiMI
              *5.40 AZN*-a!
            </Text>
            <br />
            <Text fontSize="20px">
              13 yanvar tarixinda BakI Kinoteatrinda nümayis olunacaq filmi
              izlamaya TaLaSin
            </Text>
            <br />
            <Text fontSize="20px">
              Siz da bu filmi dostlarinizla birlikda izlamak va hala üstalik
              endirim alda etmak istayirsinizsa, geyd edilan nömraya yazmaginiz
              kifayatdir.
            </Text>
          </Box>

          <Box p="120px 0px" display="flex" gap="100px">
            <Box>
              <Heading>Attended</Heading>
              <Box p="30px 0px" display="flex" gap="100px">
                <Box>
                  <Text
                    textAlign="center"
                    color="#56d5f5"
                    fontSize="30px"
                    fontWeight="500"
                  >
                    12
                  </Text>
                  <Text color="gray" fontSize="25px">
                    GOING
                  </Text>
                </Box>
                <Box>
                  <Text
                    textAlign="center"
                    color="#56d5f5"
                    fontSize="30px"
                    fontWeight="500"
                  >
                    3
                  </Text>
                  <Text color="gray" fontSize="25px">
                    INTERESTED
                  </Text>
                </Box>
                <Box>
                  <Text
                    textAlign="center"
                    color="#56d5f5"
                    fontSize="30px"
                    fontWeight="500"
                  >
                    0
                  </Text>
                  <Text color="gray" fontSize="25px">
                    INVITED
                  </Text>
                </Box>
              </Box>
              <Box>
                <Button
                  colorScheme="teal"
                  size="lg"
                  gap="10px"
                  p="30px 110px"
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
                  p="32px 180px 32px 10px"
                  backgroundColor="#ededed"
                  borderRadius="10px"
                >
                  <Box backgroundColor="white" p="15px" borderRadius="15px">
                    <FontAwesomeIcon icon={faPhone} color="#74C0FC" />
                  </Box>
                  <Text color="black">+994502150630</Text>
                </Button>
              </Box>
            </Box>
            <Box>
              <Heading>Hosted</Heading>
              <Box p="30px 0px" display="flex" gap="20px">
                <Image
                  borderRadius="50px"
                  w="15%"
                  src="./assests/Detail-Img/Eventeam-Img.jpeg"
                  alt=""
                />
                <Box>
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
