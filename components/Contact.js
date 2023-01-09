import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CheckBox from "expo-checkbox";
// import axios from "axios";

const Contact = () => {
  const [agree, setAgree] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // const baseURL = "https://dummyjson.com/auth/login";
  // const postAPI = () => {
  //   axios({
  //     method: "POST",
  //     url: `${baseURL}`,
  //     body: JSON.stringify({
  //       username: 'username',
  //       password: 'password',
  //     })
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // };
   
fun1 = async () => {

    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": 'kminchelle',
        "password": '0lelplR',
      }),
    })
      .then((res) => res.json())
      .this(console.log);
    
    
  };
  // console.log(username,"username==")
  // console.log(password, "password==")

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}> Login Form </Text>
      <Text style={styles.description}>
        you can reach us via any@Esyasoft.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>username</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          // placeholder="username"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          // placeholder="password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the terms and conditions
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={fun1}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    flexWrap: "wrap",
    backgroundColor: "white",
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    marginHorizontal: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    marginHorizontal: 15,
    textAlign: "center",
    flex: 1,
  },
  inputContainer: { marginTop: 20 },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 5,
    lineHeight: 25,
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: "#7d7d7d",
    // paddingHorizontal: 15,
    // paddingVertical: 7,
    marginHorizontal: 15,
    borderRadius: 1,
    fontSize: 18,
  },

  wrapper: {
    //  marginTop:10,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    // backgroundColor:"#fff"
    // margin-bottom: 100px;
  },
  buttonStyle: {
    marginHorizontal: 15,
    paddingBottom: 15,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 25,
    textAlign: "center",
  },
});

export default Contact;
