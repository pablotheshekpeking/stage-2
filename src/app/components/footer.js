'use client'

import { Stack, Heading, Text, Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";

const Footer = () => {
    return ( 
        <Stack direction={'row'} m={'auto'}>
            <FaFacebook boxSize={10} />
            <FaInstagram boxSize={10} />
            <FaTwitter boxSize={10} />
            <FaYoutube boxSize={10} />
        </Stack>
     );
}
 
export default Footer;