'use client'

import Image from "next/image"
import {
  Box,
  Stack,
  Text,
  Center,
  Hide,
  Heading,
  Button,
} from "@chakra-ui/react";

import { AiOutlineUnorderedList } from "react-icons/ai";

import { GiTicket } from "react-icons/gi";
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";

const Sidebar = () => {
  return ( 
          
            <Box
              width={'15%'}
              h={'auto'}

              bg={'white'}
              borderRadius={'0px 45px 45px 0px;'}
              border={'1px solid rgba(0, 0, 0, 0.30)'}
            >

              <Stack
                m={'auto'}
                direction={['row', 'row', 'column', 'column']}
                w={'full'}
                py={'50'}
                spacing={'50'}
                px={'5'}
              >
                <Link href={'../'}><Box
                  m={'auto'}
                  width={'full'}
                  h={'50px'}
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}

                >
                  <Image src={"/tv.png"} alt="logo" height={"50"} width={"50"} />

                  <Text fontWeight={"700"} fontSize={"24px"} color={"black"}>
                    MovieBox
                  </Text>
                </Box></Link>
                <Box
                  m={'auto'}
                  width={'full'}
                  h={'50px'}
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  p={'5'}
                >
                  <Image src={"/Home.png"} alt="logo" height={"25"} width={"25"} />

                  <Text fontWeight={"600"} fontSize={"20px"} color={"#666"}>
                    MovieBox
                  </Text>
                </Box>
                <Box
                  m={'auto'}
                  width={'full'}
                  h={'50px'}
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  p={'5'}
                >
                  <Image src={"/movies.png"} alt="logo" height={"25"} width={"25"} />

                  <Text fontWeight={"600"} fontSize={"20px"} color={"#666"}>
                    Movies
                  </Text>
                </Box>
                <Box
                  m={'auto'}
                  width={'full'}
                  h={'50px'}
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  p={'5'}
                >
                  <Image src={"/tvshow.png"} alt="logo" height={"25"} width={"25"} />

                  <Text fontWeight={"600"} fontSize={"20px"} color={"#666"}>
                    TV Series
                  </Text>
                </Box>
                <Box
                  m={'auto'}
                  width={'full'}
                  h={'50px'}
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  p={'5'}
                >
                  <Image src={"/cal.png"} alt="logo" height={"25"} width={"25"} />

                  <Text fontWeight={"600"} fontSize={"20px"} color={"#666"}>
                    Upcoming
                  </Text>
                </Box>
              </Stack>
              <Box
                px={'10%'}
                pt={'42px'}
                w={'85%'}
                h={'210px'}
                m={'auto'}
                bg={'rgba(248, 231, 235, 0.40)'}
                borderRadius={'20px'}
                border={'1px solid rgba(190, 18, 60, 0.70)'}
              >
                <Text
                  fontSize={'20px'}
                  fontWeight={'600'}
                  color={'rgba(51, 51, 51, 0.80)'}
                >
                  Play movie quizes
                  and earn
                  free tickets
                </Text>
                <Text
                  color={'#666'}
                  fontSize={'15px'}
                  fontWeight={'500'}
                >
                  50k people are playing
                  now
                </Text>
              </Box>
              <Stack
                m={'auto'}
                direction={'column'}
                w={'full'}
                py={'50'}
                spacing={'50'}
                px={'5'}
              >
                <Box
                  m={'auto'}
                  width={'full'}
                  h={'50px'}
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  p={'5'}
                >
                  <Image src={"/Logout.png"} alt="logo" height={"25"} width={"25"} />

                  <Text fontWeight={"600"} fontSize={"20px"} color={"#666"}>
                    Logout
                  </Text>
                </Box>


              </Stack>

            </Box>
   );
}
 
export default Sidebar;