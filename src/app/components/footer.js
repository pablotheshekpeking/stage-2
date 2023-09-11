'use client'

import { Stack, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return ( 
        <Stack direction={'row'}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
        </Stack>
     );
}
 
export default Footer;