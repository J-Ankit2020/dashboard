import React from 'react'
import { Box, Show, Heading, Flex } from '@chakra-ui/react'
import Item from './Item'
import Card from './Card'
const MainContent = () => {
    return (
        <Box padding={{ base: '0', md: '2' }} >
            <Show below='md'>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Show>
            <Show above='sm'>
                <Heading fontWeight='500' size='md' mt={3}>Recommended for you</Heading>
                <Flex mt={5} justifyContent='flex-start'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Flex>
            </Show>
        </Box>
    )
}

export default MainContent