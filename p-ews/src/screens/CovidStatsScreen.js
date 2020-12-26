import React, {useState, useEffect} from "react";
import { SafeAreaView, StatusBar, StyleSheet} from "react-native";
import { Text, Header} from "react-native-elements";
import { PieChart } from "react-native-chart-kit";

import PieCard from "./../Components/PieCard";
import {getWorldStats} from "./../requests/CovidStatsWorld"

const CovidStatsScreen = (props) => {
    const [worldStats, setWorldStats] = useState({});
    const loadWorldStats = async()=>{
        const response = await getWorldStats();
        if(response.ok){
            setWorldStats(response.data.Global);
        }else{
            alert(response.problem);
        }
    };


    const worldData = [
        {
            name: "New Confirmed",
            population: worldStats.NewConfirmed,
            color: "#4c4cff",
            legendFontColor: "#FFFFFF",
            legendFontSize: 12
        },
        {
            name: "New Deaths",
            population: worldStats.NewDeaths,
            color: "#1919ff",
            legendFontColor: "#FFFFFF",
            legendFontSize: 12
        },
        {
            name: "New Recovered",
            population: worldStats.NewRecovered,
            color: "#7f7fff",
            legendFontColor: "#FFFFFF",
            legendFontSize: 12
        }
    ];

    useEffect(()=>{
        loadWorldStats();
    }, []);
    return (
    <SafeAreaView style={styles.SFViewStyle}>
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
            <Text style={styles.HeaderStyle}>Live World Stats</Text>
            <PieCard
                data={worldData}
            />
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    HeaderStyle: {
        fontSize: 18,
        margin: 5,
        alignSelf: 'center'
    },
    SFViewStyle: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        justifyContent: 'center'
    },
});

export default CovidStatsScreen;