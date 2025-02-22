import React from "react";
import { KeyboardType, StyleSheet, View, Image, TextInput } from "react-native";
interface Props {
  image: any; //alamat brupa address dari asset di local atau internet
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean; //ini optoion boleh atau tidak berlaku hanya utk field password
  property: string; //ini nama field compoennt
  onChangeText: (property: string, value: any) => void;
}

const CustomTextInput: React.FC<Props> = ({
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText,
}) => {
  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />
      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        //props value dari parent misal : pada homeScreen utk texInput berupa state formData.email
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
        //onChangeText={(text) => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

//utk style yg dibutuhkan hanya  formIcon,formInput,formTextInput dari
//asal di homeScreen sblumnya ( yg sblumnya asli blu diubah )

const styles = StyleSheet.create({
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 25,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
});

export default CustomTextInput;
