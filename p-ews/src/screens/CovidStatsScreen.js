import React, {useState, useEffect} from "react";
import { SafeAreaView, View, StatusBar, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text, Header} from "react-native-elements";
import { PieChart } from "react-native-chart-kit";

import PieCard from "./../Components/PieCard";
import {getWorldStats} from "./../requests/CovidStatsWorld"

const CovidStatsScreen = (props) => {
    const [worldStats, setWorldStats] = useState({});
    const [selectedCountry, setSelectedCountry] = useState("uk");
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
            name: "New Recovered",
            value: "New Recovered",
            population: 20,//worldStats.NewRecovered,
            color: "#7f7fff",
            legendFontColor: "#FFFFFF",
            legendFontSize: 12
        },
        {
            name: "New Confirmed",
            value: "New Confirmed",
            population: 30,// worldStats.NewConfirmed,
            color: "#4c4cff",
            legendFontColor: "#FFFFFF",
            legendFontSize: 12
        },
        {
            name: "New Deaths",
            value: "New Deaths",
            population: 50,//worldStats.NewDeaths,
            color: "#1919ff",
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
                    backgroundColor: '#7f7fff',
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
            <DropDownPicker
                items={[
                    { label: 'USA', value: 'usa'},
                    { label: 'UK', value: 'uk'},
                    { label: 'France', value: 'france'},
                ]}
                defaultValue={selectedCountry}
                multiple={false}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => setSelectedCountry(item.value)}
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