import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsArrowUpRightCircle, BsChatDots } from 'react-icons/bs';
import {
    IoFilterCircleOutline,
    IoNotificationsOutline,
    IoVideocamOutline
} from "react-icons/io5"
import { GrAdd } from "react-icons/gr"

const Icons:React.FC= () => {
    
    return (
        <Flex>
            <Flex 
                display={{ base: "none", md: "flex"}} 
                align='center' 
                borderRight='1px solid' 
                borderColor='gray.200'
            >
                <Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} _hover={{bg: "gray.200"}}>

                    <Icon as={BsArrowUpRightCircle}/>
                </Flex>
                <Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} _hover={{bg: "gray.200"}}>

                    <Icon as={IoFilterCircleOutline} />
                </Flex>
                <Flex mr={1.5} ml={1.5} padding={1} cursor="pointer" borderRadius={4} _hover={{bg: "gray.200"}}>

                    <Icon as={IoVideocamOutline} />
                </Flex>
            </Flex>
            <>
                <Flex mr={1.5} ml={1.5} padding={1} fontSize={20} cursor="pointer" borderRadius={4} _hover={{bg: "gray.200"}}>
                    <Icon as={BsChatDots}/>
                </Flex>
                <Flex mr={1.5} ml={1.5} padding={1} fontSize={20} cursor="pointer" borderRadius={4} _hover={{bg: "gray.200"}}>
                    <Icon as={IoNotificationsOutline}/>
                </Flex>
                <Flex display={{base:'none', md:'flex'}} mr={1.5} ml={1.5} padding={1} fontSize={20} cursor="pointer" borderRadius={4} _hover={{bg: "gray.200"}}>
                    <Icon as={GrAdd}/>
                </Flex>
            </>
        </Flex>
    )
}
export default Icons;