import os from 'os'; // 노드 api
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Grid from '@/components/layout/Grid';
// import { useState } from 'react';

export default function Home() {
  console.log('안녕!');
  console.log(os.hostname());
  return (
    <>
      <Box $marginTop={{ base: 1, md: 2 }}>
        <Flex $justifyContent='space-between' $padding='0 10px' $paddingBottom='20px'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Flex>
        <Grid $border='1px solid red' $gridTemplateColumns='180px 180px 180px'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </Grid>
        <Grid $border='1px solid blue' $gridGap='16px' $gridTemplateColumns='repeat(4, 1fr)'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>51</div>
        </Grid>
      </Box>
    </>
  );
}
