import React from 'react'
import { HStack, VStack, Heading, Text, Avatar } from '@chakra-ui/react'
const Item = () => {
    return (
        <HStack p={3} justifyContent='flex-start' alignContent='center' w='full'>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' mr='4' size={'md'} />
            <VStack spacing={1} justifyContent='center' align='flex-start'>
                <Heading size='md' fontWeight='500'>Catalog</Heading>
                <Text color='gray.500' fontSize='sm'>Bring all your news into one place</Text>
            </VStack>
        </HStack>
    )
}

export default Item