import React, { useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { Feather, AntDesign, Ionicons, Entypo} from "@expo/vector-icons";
import * as firebase from 'firebase';
import 'firebase/firestore';
import DatePicker from 'react-native-datepicker'


const SignUpScreen = (props) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [DOB, setDOB] = useState()
  const [Address, setAddress] = useState("")

  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title> P - ews </Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<Ionicons name="ios-person" size={24} color="#B30205" />}
          placeholder="Name"
          onChangeText={function (currentInput) {
            setName(currentInput);
          }}
        />
        <Input
          leftIcon={<Entypo name="email" size={24} color="#B30205" />}
          placeholder="E-mail Address"
          onChangeText={function (currentInput) {
            setEmail(currentInput);
          }}
        />

        <Input
          placeholder="Password"
          leftIcon={<Feather name="key" size={24} color="#B30205" />}
          secureTextEntry={true}
          onChangeText={function (currentInput) {
            setPassword(currentInput);
          }}
        />

        
        <DatePicker
        style={{width: 200}}
        mode="date"
        placeholder="Date of Birth"
        date = {DOB}
        format="DD-MM-YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 7,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            left: 7,
            bottom: 7,
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={
          setDOB
        }
      />

      <Input
          placeholder="Address"
          leftIcon={<Entypo name="address" size={24} color="#B30205" />}
          onChangeText={function (currentInput) {
            setAddress(currentInput);
          }}
        />

        <Button
          icon={<AntDesign name="user" size={24} color="white" />}
          title="  Sign Up!"
          type="solid"
          onPress={() => {
            if (Name && Email && Password) {
              firebase
                .auth()
                .createUserWithEmailAndPassword(Email, Password)
                .then((userCreds) => {
                  userCreds.user.updateProfile({ displayName: Name });
                  firebase
                    .firestore()
                    .collection("users")
                    .doc(userCreds.user.uid)
                    .set({
                      name: Name,
                      email: Email,
                      password: Password,
                      date: DOB,
                      homeAddress: Address,
                    })
                    .then(() => {
                      alert("Account created!");
                      console.log(userCreds.user);
                      props.navigation.navigate("SignIn");
                    })
                    .catch((error) => {
                      alert(error);
                    });
                })
                .catch((error) => {
                  alert(error);
                });
            } else {
              alert("Fields can not be empty!");
            }
          }}
        />
        <Button
          type="clear"
          icon={<AntDesign name="login" size={24} color="dodgerblue" />}
          title="  Already have an account?"
          onPress={function () {
            props.navigation.navigate("SignIn");
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#D9D2D2",
  },
});
export default SignUpScreen;