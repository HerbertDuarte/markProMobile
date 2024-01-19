import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, DefaultStyles } from "../constants/constants";
import { ArrowLeftCircleIcon, ChevronRightIcon, FileEditIcon, LockIcon, LogOutIcon, SettingsIcon } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import MainHeader from "../components/Headers/MainHeader";

export default function Calendar() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={DefaultStyles.safeArea}>
      <View style={styles.container}>
        <MainHeader title="Meu perfil" />
        <View style={styles.content}>

          {/* user infos */}
          <View style={styles.userShortInfos}>
            <Image
              style={styles.profileImage}
              source={require("../assets/herbert.png")}
            />
            <View>
              <Text style={styles.userName}>Herbert Duarte</Text>
              <Text style={styles.otherInfos}>herbertduarte.dev@gmail.com</Text>
            </View>
          </View>

          {/* data */}
          <View style={styles.dataInfosContainer}>
            <View style={styles.dataInfo}>
              <Text style={styles.data}>168</Text>
              <Text style={styles.label}>Reservas</Text>
            </View>
            <View style={styles.dataInfo}>
              <Text style={styles.data}>5</Text>
              <Text style={styles.label}>Favoritos</Text>
            </View>
            <View style={styles.dataInfo}>
              <Text style={styles.data}>4.5</Text>
              <Text style={styles.label}>Avaliação</Text>
            </View>
          </View>

          {/* options */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionContent}>
              <View style={styles.option}>
                <FileEditIcon color={COLORS.discretText} size={24} />
                <Text style={styles.optionText}>Editar Dados</Text>
              </View>
              <ChevronRightIcon color={COLORS.discretText} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContent}>
              <View style={styles.option}>
              <LockIcon color={COLORS.discretText} size={24} />
                <Text style={styles.optionText}>Privacidade</Text>
              </View>
              <ChevronRightIcon color={COLORS.discretText} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContent}>
              <View style={styles.option}>
              <SettingsIcon color={COLORS.discretText} size={24} />
                <Text style={styles.optionText}>Configurações do app</Text>
              </View>
              <ChevronRightIcon color={COLORS.discretText} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContentWithoutBorder}>
              <View style={styles.option}>
              <LogOutIcon color={COLORS.discretText} size={24} />
                <Text style={styles.optionText}>Sair</Text>
              </View>
              <ChevronRightIcon color={COLORS.discretText} size={20} />
            </TouchableOpacity>
          </View>
        </View>
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
  userShortInfos: {
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: COLORS.borderColor,
  },
  userInfoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  userName: {
    fontWeight: "bold",
    color: COLORS.primary,
    fontSize: 24,
    textAlign: "center",
  },
  otherInfos: {
    color: COLORS.discretText,
    fontSize: 16,
    textAlign: "center",
  },
  dataInfosContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 24,
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 0.5,
  },
  dataInfo: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    width: "33%",
  },
  data: {
    fontWeight: "600",
    fontSize: 28,
    color: COLORS.primary,
  },
  label: {
    color: COLORS.discretText,
    fontSize: 14,
  },
  optionsContainer: {
    padding: 24,
    justifyContent: "center",
    gap: 12,
  },
  optionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    paddingBottom: 16,
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 0.5,
  },
  optionContentWithoutBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  option: {
    fontSize: 18,
    color: COLORS.grey,
    flexDirection : "row",
    gap : 12
  },
  optionText: {
    fontSize: 18,
    color: COLORS.grey,
  },
});
