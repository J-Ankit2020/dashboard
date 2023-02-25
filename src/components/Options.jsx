import React from 'react'
import { HStack, VStack, Image } from '@chakra-ui/react'
const Options = () => {
    return (
        <HStack mt='8' justifyContent='space-around' w={{ base: 'full', md: '60%' }} mx='auto'>
            <Image src='/icons/Freelancers.svg' />
            <Image src='/icons/Apps selected.svg' />
            <Image src='/icons/Services.svg' />
            <Image src='/icons/Events.svg' />
            <Image src='/icons/Jobs.svg' />
            <Image src='/icons/Marketplace.svg' />
        </HStack>
    )
}

export default Options