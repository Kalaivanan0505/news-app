import React, { useState, useEffect} from "react";
import {
  Box,
  FlatList,
  Spinner
} from "native-base"; 
import { Platform } from "react-native";
import Card from '../components/card/Card';
import { newsAPI, API_KEY } from '../utils/constants';

const HomePage = ({feedData}) => {
    
    const [ newsData, setNewsData ] = useState([]);
    const [ webViewUrl, setWebViewUrl ] = useState('');
    useEffect(() => {
        const api = `${newsAPI}${feedData}`;
        async function fetchData() {
            try {

                const newsRespose = await fetch(api, {
                    headers: {
                        "X-Api-Key": API_KEY 
                    }
                });
                if(newsRespose.status === 200)
                {
                    const res = await newsRespose.json();
                    setWebViewUrl('');
                    setNewsData(res.articles);
                }
            } 
            catch {
                ((err) => alert(`Something went Wrong, Please try after somtime. Status Code: ${err.status}`))
            }
        }   
        fetchData();
    }, [feedData])

    const navigateToWebView = (url) => {
        setWebViewUrl(url);
    }

    return(
        <Box w='100%' h='100%' p='1'>
            {newsData.length <= 0 && <Spinner accessibilityLabel="Loading posts" />}
            {(webViewUrl !== '')
                ? (
                    <iframe height='100%' src={webViewUrl} />
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