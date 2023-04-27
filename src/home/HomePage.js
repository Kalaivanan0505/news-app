import React, { useState, useEffect} from "react";
import {
  Box,
  FlatList,
  Spinner
} from "native-base"; 
import { WebView } from 'react-native-webview';
import { Platform } from "react-native";
import Card from '../components/card/Card';
import { newsAPI, API_KEY } from '../utils/constants';

const HomePage = ({feedData}) => {
    
    const [ newsData, setNewsData ] = useState([]);
    const [ webViewUrl, setWebViewUrl ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    useEffect(() => {
        const api = `${newsAPI}${feedData}&apiKey=${API_KEY}`;
        
        async function fetchData() {
            try {
                setIsLoading(true);
                const newsRespose = await fetch(api);
                if(newsRespose.status === 200)
                {
                    const res = await newsRespose.json();
                    setWebViewUrl('');
                    setNewsData(res.articles);
                } else {
                    alert(`Something went Wrong, Please try after sometime`);
                }
            } 
            catch {
                ((err) => alert(`Something went Wrong, Please try after sometime. Status Code: ${err.status}`))
            }
            setIsLoading(false);
        }   
        fetchData();
    }, [feedData])

    const navigateToWebView = (url) => {
        setWebViewUrl(url);
    }

    return(
        <Box w='100%' h='100%' p='1'>
            {isLoading && <Spinner accessibilityLabel="Loading posts" />}
            {(webViewUrl !== '')
                ? ( Platform.OS === 'web' ?
                    (<iframe height='100%' src={webViewUrl} />) :
                    (<WebView source={{uri: webViewUrl}}/>)
                )
                : (
                    newsData.length > 0 && (
                    <FlatList
                        data={newsData}
                        numColumns={Platform.OS=== 'web' ? 4 : 1}
                        renderItem={({item}) => item && <Card cardItem={item} navigateToWebView={navigateToWebView}/>}
                    />
                ))
            }
        </Box>
    )
};

export default HomePage;