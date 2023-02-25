import React from 'react'
import {
    chakra, Box, VStack,
    HStack, Text, Icon,
    Image, Heading, InputGroup,
    Input, InputLeftElement, Divider,
    Avatar, Flex
} from '@chakra-ui/react'
import { FiHome, FiMessageSquare } from 'react-icons/fi'
import { BsPerson, BsGear } from 'react-icons/bs'
import { CgLoadbarSound } from 'react-icons/cg';
import { HiOutlineBars3 } from 'react-icons/hi2'
import { BiPurchaseTag } from 'react-icons/bi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { Search2Icon } from '@chakra-ui/icons';
import { RiStackLine } from 'react-icons/ri'
import { RxExit } from 'react-icons/rx'
import { CiHeadphones } from 'react-icons/ci'
const NavBar = () => {
    return (
        <chakra.nav>
            <Box p={3} position='fixed' bottom='0px' bg='white' zIndex='100' w='full' alignItems='center' shadow='md' color='gray.700' display={{ md: 'none', base: 'block' }}>
                <HStack justify='space-evenly' align='center' color='gray.700'>
                    <VStack spacing={1} color='#004AAD' align={'center'} justifyContent='center'>
                        <Icon as={FiHome} boxSize={8} />
                        <Text>Home</Text>
                    </VStack>
                    <VStack spacing={1} align={'center'} justifyContent='center'>
                        <Icon as={CgLoadbarSound} boxSize={8} />
                        <Text>Dashboard</Text>
                    </VStack>
                    <VStack spacing={1} align={'center'} justifyContent='center'>
                        <Icon as={BsPerson} boxSize={8} />
                        <Text>Profile</Text>
                    </VStack>
                    <VStack spacing={1} align={'center'} justifyContent='center'>
                        <Icon as={FiMessageSquare} boxSize={8} />
                        <Text>Messages</Text>
                    </VStack>
                    <VStack spacing={1} align={'center'} justifyContent='center'>
                        <Icon as={HiOutlineBars3} boxSize={8} />
                        <Text>More</Text>
                    </VStack>
                </HStack>
            </Box>
            <Box w='15vw' h='100vh' display={{ base: 'none', md: 'block' }} p={5} justifyContent='space-between'>
                <VStack spacing={8} justifyContent='space-around' align='center'>
                    <HStack spacing={3} alignItems='center'>
                        <Image src='/logo.webp' w={9} />
                        <Heading fontWeight='700' size='md' display='flex'>Connect
                            <Text color='#B6BCC4' ml={1} fontWeight='400'>link</Text>
                        </Heading>
                    </HStack>
                    <InputGroup bg='white' rounded={'2xl'} outline={'none'}>
                        <InputLeftElement children={<Search2Icon />} />
                        <Input placeholder='Search' />
                    </InputGroup>
                    <VStack spacing={2} justifyContent='flex-start' w='full' align='flex-start' color='gray.500'>
                        <HStack justifyContent='flex-start' fontWeight='500' fontSize="md" align='center'>
                            <Icon as={FiHome} />
                            <Text >Home</Text>
                        </HStack>
                        <HStack justifyContent='flex-start' fontWeight='500' color='gray.500' fontSize="md" align='center'>
                            <Icon as={CgLoadbarSound} fontSize='lg' />
                            <Text >Dashboard</Text>
                        </HStack>
                        <HStack justifyContent='flex-start' fontWeight='500' fontSize="md" align='center' color='gray.500'>
                            <Icon as={BsPerson} fontSize='lg' />
                            <Text >Profile</Text>
                        </HStack>
                        <HStack justifyContent='flex-start' fontWeight='500' fontSize="md" align='center' color='gray.500'>
                            <Icon as={FiMessageSquare} fontSize='lg' />
                            <Text >Messages</Text>
                        </HStack>
                        <HStack justifyContent='flex-start' fontWeight='500' fontSize="md" align='center' color='gray.500'>
                            <Icon as={MdOutlinePeopleAlt} fontSize='lg' />
                            <Text >Connections</Text>
                        </HStack>
                        <HStack justifyContent='flex-start' fontWeight='500' fontSize="md" align='center' color='gray.500'>
                            <Icon as={BiPurchaseTag} fontSize='lg' />
                            <Text >Promotions & Advertising</Text>
                        </HStack>
                        <HStack justifyContent='flex-start' fontWeight='500' fontSize="md" align='center' color='gray.500'>
                            <Icon as={RiStackLine} fontSize='lg' />
                            <Text >Integrations</Text>
                        </HStack>

                    </VStack>
                </VStack>
                <VStack mt='36' align='flex-start' justifyContent='center' spacing={2}>
                    <HStack justifyContent='flex-start' fontWeight='500' fontSize="md" align='center' color='gray.500' mt={10}>
                        <Icon as={CiHeadphones} fontSize='lg' />
                        <Text >Support</Text>
                    </HStack>
                    <HStack justifyContent='flex-start' fontWeight='500' fontSize="md" align='center' color='gray.500' mt={10}>
                        <Icon as={BsGear} fontSize='lg' />
                        <Text >Settings</Text>
                    </HStack>
                </VStack>
                <Divider mt={8} borderColor='gray.600' />
                <Flex justifyContent='space-between' px={1} mt={2}>
                    <HStack>
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' size='sm' />
                        <VStack spacing={'0.5'} fontSize='xs' alignItems='flex-start'>
                            <Text fontWeight='500'>Olivia Rhye</Text>
                            <Text fontWeight='400' color='#667085'>olivia@untitledui.com</Text>
                        </VStack>
                    </HStack>
                    <Icon as={RxExit} />
                </Flex>
            </Box>
        </chakra.nav >
    )
}

export default NavBar