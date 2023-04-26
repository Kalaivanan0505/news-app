import React from "react";
import {
  Link,
  HStack,
  Box,
  Select,
  CheckIcon,
} from "native-base"; 
import { locale, filtersArray } from '../../utils/constants';

const Header = ({ changeNewsFeed, localeChange }) => {

    const renderLink = () => {
        return (
            filtersArray.map((link) => (
                <HStack space={2} key={link}>
                    <Link onPress={() => changeNewsFeed(link)}>
                        <Box p='2' cursor='pointer' _text={{
                            color: "white",
                            fontWeight: "medium"
                        }}>
                            {link}
                        </Box>
                    </Link>
                </HStack>
            ))
        )
    }

    return(
        <Box w='100%' p="1" display='flex' flexDirection='row' alignContent='center' bg="primary.500">
            {renderLink()}
            <Box w='65%' display='flex' alignItems='end'>
                <Select shadow={1} minWidth="100" accessibilityLabel="Choose Service" placeholder="English" _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />
          }} _light={{
            bg: "coolGray.100",
            _hover: {
              bg: "coolGray.200"
            },
            _focus: {
              bg: "coolGray.200:alpha.70"
            }
          }} _dark={{
            bg: "coolGray.800",
            _hover: {
              bg: "coolGray.900"
            },
            _focus: {
              bg: "coolGray.900:alpha.70"
            }
        }} mt={1} onValueChange={itemValue => localeChange(itemValue)}>
            {locale.map((item) => (
                <Select.Item key={item}  label={item} value={item}/>
            ))}
            </Select>
            </Box>
        </Box>
    )
};

export default Header;