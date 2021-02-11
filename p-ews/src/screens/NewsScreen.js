import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import { getNews } from "./../api/News";
import { FlatList } from 'react-native';
import Article from "./../Components/Article";

const NewsScreen = () => {
    //let news = getNews();
    const [articles, setArticles] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNews();
    }, [])

    const fetchNews = async () => {
        setLoading(true);
        const response = await getNews().then((response) => {
            setArticles(response.data.articles);
            setRefresh(false);
            setLoading(false);
            //console.log("sadat                 is ", articles);
        });
    }

    const handleRefresh = () => {
        setRefresh(true);
        fetchNews();
    }
    if (!loading) {
        return (
            <View>
                <Header
                    containerStyle={{
                        backgroundColor: '#1c1c1c',
                    }}
                    leftComponent={{
                        icon: "menu",
                        color: "#fff",
                    }}
                    centerComponent={{ text: "P-ews", style: { color: "#fff", fontSize: 20 } }}
                    rightComponent={{
                        icon: "lock-outline",
                        color: "#fff"
                    }}
                />
                <FlatList
                    data={articles}//
                    renderItem={({ item }) => {
                        console.log("item", item);
                        return (<Article article={item} />);
                    }}
                    keyExtractor={item => item.url}
                    refreshing={refresh}
                    onRefresh={handleRefresh}
                />
            </View>
        );
    } else {
        return (
            <View>
                <Header
                    containerStyle={{
                        backgroundColor: '#1c1c1c',
                    }}
                    leftComponent={{
                        icon: "menu",
                        color: "#fff",
                    }}
                    centerComponent={{ text: "P-ews", style: { color: "#fff", fontSize: 20 } }}
                    rightComponent={{
                        icon: "lock-outline",
                        color: "#fff"
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NewsScreen;