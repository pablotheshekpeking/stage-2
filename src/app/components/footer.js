'use client'

import { Stack, Heading, Text, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";

const Footer = () => {
    return ( 
        <Stack direction={'row'}  ml={'45%'}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
        </Stack>
     );
}
 
export default Footer;