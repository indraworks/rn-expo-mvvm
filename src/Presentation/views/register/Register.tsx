import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import { MyColors } from "../../theme/AppTheme";
import { RoundedButton } from "../../components/RoundedButton";
import CustomTextInput from "../../components/CustomTextInput";
import styles from "./Style";
import useViewModel from "./ViewModel";

export const RegisterScreen = () => {
  const {
    name,
    lastname,
    phone,
    email,
    password,
    confirm_password,
    handleInputChange,
  } = useViewModel();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/chef.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/user_image.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Select Image</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>REGISTER</Text>
        {/* ada formInput wraping 2 formtextinput dan image masing2 */}

        <CustomTextInput
          image={require("../../../assets/user.png")}
          placeholder={"Name"}
          //stlah pakai desttruct useViewModel maka fromData.name diganti  name dst
          value={name}
          keyboardType={"default"}
          //property adalah namafield
          property={"name"}
          onChangeText={handleInputChange}
        />
        <CustomTextInput
          image={require("../../../assets/my_user.png")}
          placeholder={"Last Name"}
          value={lastname}
          keyboardType={"default"}
          //property adalah namafield /state
          property={"lastname"}
          onChangeText={handleInputChange}
        />
        <CustomTextInput
          image={require("../../../assets/phone.png")}
          placeholder={"Phone Number"}
          value={phone}
          keyboardType={"numeric"}
          //property adalah namafield /state
          property={"phone"}
          onChangeText={handleInputChange}
        />
        <CustomTextInput
          image={require("../../../assets/password.png")}
          placeholder={"Password"}
          value={password}
          keyboardType={"default"}
          secureTextEntry={true}
          //property adalah namafield /state
          property={"password"}
          onChangeText={handleInputChange}
        />

        <CustomTextInput
          image={require("../../../assets/confirm_password.png")}
          placeholder={"Password"}
          value={confirm_password}
          keyboardType={"default"}
          secureTextEntry={true}
          //property adalah namafield /state
          property={"confirm_password"}
          onChangeText={handleInputChange}
        />

        {/* ahrus pakai view utk  posisi */}
        <View style={{ marginTop: 20 }}>
          <RoundedButton
            text={"LOGIN"}
            onPress={() =>
              console.log("formRegister =", {
                name,
                lastname,
                phone,
                email,
                password,
                confirm_password,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};
