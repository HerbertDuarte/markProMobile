import { useNavigation } from "@react-navigation/native";
import { ArrowLeftCircleIcon } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/constants";

export default function SearchHeader({category}) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>MarkPro</Text>
        <Text style={styles.label}>{category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  header: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomColor: COLORS.inputBgColor,
    borderBottomWidth: 0.5,
  },
  headerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: COLORS.discretText,
  },
});
