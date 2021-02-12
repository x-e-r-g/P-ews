import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";
import { AuthContext } from "./../Provider/AuthProvider";
import * as firebase from 'firebase';

const SignInScreen = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Card>
            <Card.Title> P - ews </Card.Title>
            <Card.Divider />
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

            <Button
              icon={<AntDesign name="login" size={24} color="white" />}
              title="  Sign In!"
              type="solid"
              onPress={() => {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(Email, Password)
                  .then((userCreds) => {
                    auth.setIsLoggedIn(true);
                    auth.setCurrentUser(userCreds.user);
                  })
                  .catch((error) => {
                    alert(error);
                  });}}
            />
            <Button
              type="clear"
              icon={<AntDesign name="user" size={24} color="dodgerblue" />}
              title="  Don't have an account?"
              onPress={function () {
                props.navigation.navigate("SignUp");
              }}
            />
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#D9D2D2",
  },
});
export default SignInScreen;