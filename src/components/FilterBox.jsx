import React from 'react'
import { Box, Heading, Select } from "@chakra-ui/react";
const FilterBox = () => {
    return (
        <Box display={{ base: 'flex', md: 'none' }} justifyContent='space-between' p={5} alignItems='center'>
            <Heading size='md' as='h5' fontWeight='600'>Popular Apps</Heading>
            <Select placeholder='Sort By' w='25%'>
                {/* <option value="">ss</option> */}
            </Select>
        </Box>
    )
}

export default FilterBox