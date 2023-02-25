import React from 'react'
import { Input, InputGroup, InputLeftElement, Box, chakra, Show, Heading } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import Options from './Options';
const Header = () => {
    return (
        <chakra.header >
            <Box bg='linear-gradient(92.23deg, #0052D4 -1.36%, #4364F7 49.92%, #6FB1FC 101.09%)' p={10} w='full' h='full' rounded={{ base: 'none', md: 'lg' }} >
                <Show above='sm'>
                    <Heading as='h3' color='white' fontWeight='600' size='sm' mx='auto' mb={3}
                        textAlign={'center'} >Explore</Heading>
                </Show>
                <InputGroup bg='white' rounded={'2xl'} outline={'none'} w={{ base: 'full', md: '50%' }} mx='auto'>
                    <InputLeftElement children={<Search2Icon />} />
                    <Input placeholder='Search' />
                </InputGroup>
                <Options />
            </Box>
        </chakra.header >
    )
}

export default Header