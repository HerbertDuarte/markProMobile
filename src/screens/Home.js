import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { COLORS, DefaultStyles } from "../constants/constants";
import {
  AppleIcon,
  CarTaxiFrontIcon,
  DogIcon,
  DumbbellIcon,
  HighlighterIcon,
  MapPinIcon,
  MicroscopeIcon,
  MoreHorizontalIcon,
  ScissorsIcon,
  StethoscopeIcon,
} from "lucide-react-native";
import CardService from "../components/CardService/CardService";
import MainHeader from "../components/Headers/MainHeader";

export default function Home() {
  const servicesRow1 = [
    {
      label: "médico",
      icon: () => (
        <View>
          <StethoscopeIcon
            strokeWidth={2.2}
            size={44}
            color={COLORS.primary}
            style={styles.locateIcon}
          />
        </View>
      ),
    },
    {
      label: "Salão de beleza",
      icon: () => (
        <View>
          <HighlighterIcon
            strokeWidth={2.2}
            size={44}
            color={COLORS.primary}
            style={styles.locateIcon}
          />
        </View>
      ),
    },
    {
      label: "Barbearia",
      icon: () => (
        <View>
          <ScissorsIcon
            strokeWidth={2.2}
            size={44}
            color={COLORS.primary}
            style={styles.locateIcon}
          />
        </View>
      ),
    },
  ];
  const servicesRow2 = [
    {
      label: "Personal",
      icon: () => (
        <View>
          <DumbbellIcon
            strokeWidth={2.2}
            size={44}
            color={COLORS.primary}
            style={styles.locateIcon}
          />
        </View>
      ),
    },
    {
      label: "Exames",
      icon: () => (
        <View>
          <MicroscopeIcon
            strokeWidth={2.2}
            size={44}
            color={COLORS.primary}
            style={styles.locateIcon}
          />
        </View>
      ),
    },
    {
      label: "PetShop",
      icon: () => (
        <View>
          <DogIcon
            strokeWidth={2.2}
            size={44}
            color={COLORS.primary}
            style={styles.locateIcon}
          />
        </View>
      ),
    },
  ];
  const servicesRow3 = [
    {
      label: "Viagens",
      icon: () => (
        <View>
          <CarTaxiFrontIcon
            strokeWidth={2.2}
            size={44}
            color={COLORS.primary}
            style={styles.locateIcon}
          />
        </View>
      ),
    },
    {
      label: "Nutricionista",
      icon: () => (
        <View>
          <AppleIcon
            strokeWidth={2.2}
            size={44}
            color={COLORS.primary}
            style={styles.locateIcon}
          />
        </View>
      ),
    },
    {
      label: "Outros",
      icon: () => (
        <View>
          <MoreHorizontalIcon
            strokeWidth={2.2}
            size={44}
            color={COLORS.primary}
            style={styles.locateIcon}
          />
        </View>
      ),
    },
  ];
  return (
    <SafeAreaView style={DefaultStyles.safeArea}>
      <View style={styles.container}>
        <MainHeader title="MarkPro" />
        <View style={styles.content}>
          <Text style={styles.agende}>Agende os seus serviços</Text>
          <View style={styles.inputContainer}>
            <View style={DefaultStyles.input}>
              <TextInput
                style={styles.input}
                placeholderTextColor="#999"
                placeholder="Em qual cidade você está?"
              />
              <MapPinIcon
                strokeWidth={3}
                size={24}
                color={COLORS.primary}
                style={styles.locateIcon}
              />
            </View>
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.cardRow}>
              {servicesRow1.map((item, index) => (
                <CardService key={index} service={item} />
              ))}
            </View>

            <View style={styles.cardRow}>
              {servicesRow2.map((item, index) => (
                <CardService key={index} service={item} />
              ))}
            </View>

            <View style={styles.cardRow}>
              {servicesRow3.map((item, index) => (
                <CardService key={index} service={item} />
              ))}
            </View>
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
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  content: {
    padding: 18,
  },
  inputContainer: {
    padding: 8
  },
  input: {
    flexShrink: 1,
    flexGrow: 0,
    marginRight: 8,
    fontSize: 16,
  },
  agende: {
    fontSize: 18,
    paddingVertical: 12,
    paddingLeft: 8,
  },
  locateIcon: {
    paddingRight: 12,
  },
  cardContainer: {
    paddingVertical: 12,
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
});
