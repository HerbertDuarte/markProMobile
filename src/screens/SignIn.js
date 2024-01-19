import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/constants";
constants;

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MarkPro</Text>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input} placeholder="Senha" />

          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate("tabroutes")}
          >
            <Text style={styles.textButton1}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate("tabroutes")}
          >
            <Text style={styles.textButton2}>Meu estabelecimento</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.messageConteiner}>
        <Text style={styles.message}>
          Não tenho uma conta. Toque aqui para criar uma agora.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
  },
  form: {
    padding: 20,
    gap: 15,
  },
  input: {
    backgroundColor: COLORS.inputBgColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    fontSize: 16,
  },
  button1: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    fontSize: 16,
  },
  textButton1: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 16,
    padding: 3,
  },
  button2: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
    fontSize: 16,
  },
  textButton2: {
    color: COLORS.primary,
    textAlign: "center",
    fontSize: 16,
    padding: 3,
  },
  messageConteiner: {
    borderTopColor: COLORS.borderColor,
    borderTopWidth: 0.5,
    padding: 15,
  },
  message: {
    color: COLORS.discretText,
    textAlign: "center",
    fontSize: 12,
  },
});
