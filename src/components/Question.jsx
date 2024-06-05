import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Question = ({ question, serialNumber }) => {
  return (
    <Box
    // bgGradient={gradient}
    
    p={2}  mt={10}
    // borderBottom="1px solid #d4cfcf"  
    // w={{md:"640px"}}
    w='full'
    // bordershShadow="sm"
    >
      <Text fontSize="xl" fontWeight="semibold" mb={2}>Question {serialNumber}: {question.text}</Text>
    </Box>
  );
};

export default Question;

