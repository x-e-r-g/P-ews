import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import NewsScreen from "./../screens/NewsScreen";
import CovidStatsScreen from "./../screens/CovidStatsScreen";

import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

const HomeTab = createMaterialBottomTabNavigator();

const HomeTabScreen = () => {
    return (
        <HomeTab.Navigator initialRouteName="News" barStyle={{ backgroundColor: '#1C1C1C' }}>
            <HomeTab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarLabel: "News",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="News" color="white" size={26} />
                        ) : (
                                <AntDesign name="News" color="white" size={22} />
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
                                <Ionicons name="ios-notifications" size={26} color="white" />
                            ) : (
                                    <Ionicons
                                        name="ios-notifications-outline"
                                        size={22}
                                        color="white"
                                    />
                                ),
                    }
                }
            />
        </HomeTab.Navigator>
    );
};

export default HomeTabScreen;