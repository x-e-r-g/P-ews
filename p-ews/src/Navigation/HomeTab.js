import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import NewsScreen from "./../screens/NewsScreen";
import CovidStatsScreen from "./../screens/CovidStatsScreen";

import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

const HomeTab = createMaterialBottomTabNavigator();

const HomeTabScreen = () => {
    return (
        <HomeTab.Navigator initialRouteName="News" barStyle={{ backgroundColor: '#7f7fff' }}>
            <HomeTab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarLabel: "News",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="ios-newspaper" color="white" size={26} />
                        ) : (
                                <Ionicons name="ios-newspaper-outline" color="white" size={22} />
                            ),
                }}
            />
            <HomeTab.Screen
                name="CovidStats"
                component={CovidStatsScreen}
                options={
                    {
                        tabBarLabel: "Covid Stats",
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="stats-chart" color="white" size={26} />
                            ) : (
                                    <Ionicons name="stats-chart-outline" color="white" size={22} />
                                ),
                    }
                }
            />
        </HomeTab.Navigator>
    );
};

export default HomeTabScreen;