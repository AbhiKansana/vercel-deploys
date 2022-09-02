import { Text, Box } from '@chakra-ui/react'
import React from 'react'
import ScoreCard from '../comp/ScoreCard'

const Score = () => {
  return (
    <Box pt='2rem'>
      <Text textAlign={'center'} fontSize='1.5rem'>Score</Text>
      <Box>
        <ScoreCard/>
      </Box>
    </Box>
  )
}

export default Score