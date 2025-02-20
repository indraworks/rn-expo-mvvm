import React from "react";
import { MyColors } from "../../theme/AppTheme";
import { StatusBar } from "expo-status-bar";
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
import { RootStackParamList } from "../../@type/RootStackParam";

export const HomeScreen = () => {
  //jadi kalau mau navigation dari HomeScreen ke lain screen
  //maka harus guna useNavgation<StackNavigationProp<typeparamlistnya>>()
  //dimana typeparamlist adalah daftar type nama list screen masing2 viewscreen
  //yg akan dikunjungi
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/email.png")}
            style={styles.formIcon}
          />

          <TextInput
            style={styles.formTextInput}
            placeholder="Email Address"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/password.png")}
            style={styles.formIcon}
          />

          <TextInput
            style={styles.formTextInput}
            placeholder="Your Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        {/* ahrus pakai view utk  posisi */}
        <View style={{ marginTop: 20 }}>
          <RoundedButton
            text={"LOGIN"}
            onPress={() => ToastAndroid.show("Hello", ToastAndroid.SHORT)}
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
    height: "40%",
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
    top: "15%",
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
    marginTop: 25,
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
