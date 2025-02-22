import React, { useState } from "react";
import { MyColors } from "../../theme/AppTheme";
import { StatusBar } from "expo-status-bar";
import styles from "./Style";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../@type/RootStackParam";
import CustomTextInput from "../../components/CustomTextInput";
import useViewModel from "./ViewModel";

export const HomeScreen = () => {
  //***navagitation */
  //jadi kalau mau navigation dari HomeScreen ke lain screen
  //maka harus guna useNavgation<StackNavigationProp<typeparamlistnya>>()
  //dimana typeparamlist adalah daftar type nama list screen masing2 viewscreen
  //yg akan dikunjungi
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //destruct isi state formData
  const { email, password, handleInputChange } = useViewModel();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/chef.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Food App</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>LOGIN</Text>
        {/* ada formInput wraping 2 formtextinput dan image masing2 */}

        {/* dibawah ini kita akan ganti  gabungan  image & textInput dlm formInput 
       dengan CustomTextInput component supaya bisa dire-use 

       
       */}
        <CustomTextInput
          image={"../../../assets/email.png"}
          placeholder={"Email Address"}
          //sudah gak pakai formData.email  dari sblumnya value = {formData.email}
          //kita destruct
          value={email}
          keyboardType={"default"}
          property={"email"}
          onChangeText={handleInputChange}
        />
        <CustomTextInput
          image={"../../../assets/password.png"}
          placeholder={"Your Password"}
          value={password}
          keyboardType={"default"}
          property={"password"}
          onChangeText={handleInputChange}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 20 }}>
          <RoundedButton
            text={"LOGIN"}
            // onPress={() => ToastAndroid.show("Hello", ToastAndroid.SHORT)}
            onPress={() => console.log(" formData =", { email, password })}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>Not Yet Register?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
