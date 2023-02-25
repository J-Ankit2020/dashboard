import React from 'react'
import { Box, Image, AspectRatio, Heading, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
const Card = () => {
    return (
        <Box w='xs' borderRadius='lg' boxShadow='sm' mr='4'>
            <Image src='https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8YW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' w='xs' borderTopEndRadius='lg' />
            <Box my={11}>
                <Heading fontWeight='600' size='md' color='gray.900'>Lorem ipsum dolor sit amet.</Heading>
                <Text mt={4} fontSize='lg' fontWeight='400' color='gray.500'>How do you create compelling presentations that wow your colleagues and impress your managers?</Text>
            </Box>
            <Link href='#' isExternal color='blue.500'>
                Read post <ExternalLinkIcon mx='2px' />

            </Link>

        </Box>
    )
}

export default Card