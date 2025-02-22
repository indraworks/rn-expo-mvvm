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

export const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  //prpoperty mengacu pada nama field ata nama state mis diatas :'name'
  //value adalah nilai yg diketikan pada inputText ,
  // yatu nilai dari formData.field/ formData.proeprty  contoh formData.email (isinya ya!)

  const handleInputChange = (property: string, value: any) => {
    setFormData({ ...formData, [property]: value });
  };

  // const handleInputChange = (property: string, value: any) => {
  //   setFormData({ ...formData, [property]: value });
  // };
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
          value={formData.name}
          keyboardType={"default"}
          //property adalah namafield
          property={"name"}
          onChangeText={handleInputChange}
        />
        <CustomTextInput
          image={require("../../../assets/my_user.png")}
          placeholder={"Last Name"}
          value={formData.lastname}
          keyboardType={"default"}
          //property adalah namafield /state
          property={"lastname"}
          onChangeText={handleInputChange}
        />
        <CustomTextInput
          image={require("../../../assets/phone.png")}
          placeholder={"Phone Number"}
          value={formData.phone}
          keyboardType={"numeric"}
          //property adalah namafield /state
          property={"phone"}
          onChangeText={handleInputChange}
        />
        <CustomTextInput
          image={require("../../../assets/password.png")}
          placeholder={"Password"}
          value={formData.password}
          keyboardType={"default"}
          secureTextEntry={true}
          //property adalah namafield /state
          property={"password"}
          onChangeText={handleInputChange}
        />

        <CustomTextInput
          image={require("../../../assets/confirm_password.png")}
          placeholder={"Password"}
          value={formData.confirm_password}
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
            onPress={() => console.log("formRegister =", formData)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    //itung naik dari bottom 30%
    bottom: "30%",
    opacity: 0.4,
  },
  form: {
    width: "100%",
    height: "70%",
    backgroundColor: MyColors.background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    //yg background itu relative ,nah yg form absolute isi kosongnya
    //30% punya background image yg ilang karena relative 30% dari bawah utk image bavcground
    //nah yg absolute start 0 dari background! ( tanpa %)
    position: "absolute",
    bottom: 0,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  //utk logo container kita bisa  buat
  //dari top 15% utk kiri kananya diriny abisa center dgn alinself
  logoContainer: {
    position: "absolute",
    top: "6%",
    alignSelf: "center",
  },
  logoImage: { height: 100, width: 100, marginBottom: 10 },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  formText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 10,
    alignContent: "space-between",
    alignItems: "center",
  },
  formTextInput: {
    //diberi flex:1  supaya growtnya aktif jadi  border width isi smua width/lebarnya
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 20,
  },
  formButton: {
    backgroundColor: MyColors.primary,
  },
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  formRegisterText: {
    color: "orange",
    fontStyle: "italic",
    borderBottomColor: MyColors.primary,
    borderBottomWidth: 1,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
