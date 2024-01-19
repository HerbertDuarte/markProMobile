import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, DefaultStyles } from "../constants/constants";
import { ArrowLeftCircleIcon } from "lucide-react-native";
import Reserve from "../components/Reserve/Reserve";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

export default function Calendar() {
  const navigation = useNavigation();
  const reserves = [
    {
      service: "Corte de cabelo",
      local: "Barbearia do Zé",
      date: "10/10/2021",
      time: "10:00",
      price: "R$ 30,00",
      address: "Rua dos bobos, 700",
      neighborhood: "Centro",
      city: "Vitória da Conquista",
      phone: "(00) 00000-0000",
  },
  {
      service: "Corte de cabelo",
      local: "Barbearia do Zé",
      date: "10/10/2021",
      time: "10:00",
      price: "R$ 30,00",
      address: "Rua dos bobos, 700",
      neighborhood: "Centro",
      city: "Vitória da Conquista",
      phone: "(00) 00000-0000",
  },
  {
      service: "Corte de cabelo",
      local: "Barbearia do Zé",
      date: "10/10/2021",
      time: "10:00",
      price: "R$ 30,00",
      address: "Rua dos bobos, 700",
      neighborhood: "Centro",
      city: "Vitória da Conquista",
      phone: "(00) 00000-0000",
  },
  {
      service: "Corte de cabelo",
      local: "Barbearia do Zé",
      date: "10/10/2021",
      time: "10:00",
      price: "R$ 30,00",
      address: "Rua dos bobos, 700",
      neighborhood: "Centro",
      city: "Vitória da Conquista",
      phone: "(00) 00000-0000",
  }
  ]
  return (
    <SafeAreaView style={DefaultStyles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("signin")}>
              <ArrowLeftCircleIcon
                strokeWidth={3}
                size={32}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Minhas reservas</Text>
          </View>
          <View style={styles.emptyView}></View>
        </View>
        <FlatList
          data={reserves}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <Reserve reserve={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "start",
    alignItems: "start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  header: {
    padding: 12,
    borderBottomColor: COLORS.inputBgColor,    
    borderBottomWidth: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  emptyView: {
    width: 32,
  },
});
