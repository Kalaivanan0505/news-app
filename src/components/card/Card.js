import React from "react";
import {
  Text,
  HStack,
  Heading,
  Stack,
  AspectRatio,
  Box,
  Image,
  Pressable
} from "native-base"; 
const fallbackImg = require('../../../assets/no-image-placeholder.png');

const Card = ({ cardItem, navigateToWebView }) => {
    return(
        <Pressable onPress={()=> navigateToWebView(cardItem?.url)}>
            <Box w='80' cursor='pointer' paddingBottom='5'>
                <HStack>
                    <AspectRatio w="90%" ratio={16 / 9}>
                        <Image source={{
                            uri: cardItem?.urlToImage ? cardItem.urlToImage : fallbackImg
                        }}
                        fallbackSource={{
                            uri: fallbackImg
                        }} 
                        alt="No Images" />
                    </AspectRatio>
                </HStack>
                <Stack space={1} w='90%'>
                    {cardItem?.author && <Heading size='md'> {cardItem?.author}</Heading>}
                    {cardItem?.title && <Text fontSize='xs'>{cardItem?.title}</Text>}
                    {cardItem?.description && <Text fontSize='2xs'>{cardItem?.description}</Text>}
                </Stack>
            </Box>
        </Pressable>
    )
};

export default Card;