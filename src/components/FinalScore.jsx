// src/FinalScore.js
import React from 'react';
import { Text } from '@chakra-ui/react';

const FinalScore = ({ score }) => {
  return (
    <div>
      <Text fontSize="xl">Your Final Score: {score}</Text>
      {/* Add any additional content or styling for the final score */}
    </div>
  );
};

export default FinalScore;
