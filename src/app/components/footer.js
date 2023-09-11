'use client'

import { Stack, Heading, Text, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";

const Footer = () => {
    return ( 
        <Stack direction={'row'}  ml={'45%'}>
            <FaFacebook />
            <FaInstagram ml={'10%'} />
            <FaTwitter ml={'10%'} />
            <FaYoutube ml={'10%'} />
        </Stack>
     );
}
 
export default Footer;