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
import MainHeader from "../components/Headers/MainHeader";
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
       <MainHeader title="Minhas reservas" />
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
  },
});
