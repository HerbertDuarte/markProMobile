import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { COLORS, DefaultStyles } from "../constants/constants";
import { ArrowLeftCircleIcon } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import SearchResult from "../components/SearchResult/SearchResult";

export default function Search() {
  const services = [
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
  ];

  const navigation = useNavigation();
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
                style={styles.locateIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.title}>MarkPro</Text>
            <Text style={styles.label}>medico</Text>
          </View>
          <View style={styles.emptyView}></View>
        </View>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={DefaultStyles.input}
              placeholderTextColor="#999"
              placeholder="Pesquisar"
            />
          </View>

          <FlatList
            data={services}
            style={styles.flatList}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
              <SearchResult service={item} index={index} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "start",
    backgroundColor: COLORS.white,
  },
  content:{
    paddingBottom: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  header: {
    padding: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: 20,
    borderBottomColor: COLORS.inputBgColor,
    borderBottomWidth: 0.5,
  },

  label: {
    fontSize: 16,
    color: COLORS.discretText,
  },

  emptyView: {
    width: 32,
  },
});
