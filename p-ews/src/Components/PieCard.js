import React from "react";
import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const PieCard = (props) => {
    console.log("In pie card", props.data);
    return(
    <View>
            <PieChart
                data={props.data}
                width={(Dimensions.get("window").width - 10)} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                accessor={"population"}
                backgroundColor={"#ccccff"}
                paddingLeft={5}
                bezier
                style={{
                    margin: 5,
                    borderRadius: 10
                }}
            />
    </View>)
}

export default PieCard;