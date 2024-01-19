import { useNavigation } from "@react-navigation/native";
import { ArrowLeftCircleIcon } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/constants";

export default function MainHeader({ title, backButton }) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View>
        {backButton ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon
              strokeWidth={3}
              size={32}
              color={COLORS.primary}
              style={styles.locateIcon}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyView}></View>
        )}
      </View>
      <View style={styles.headerContent}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.emptyView}></View>
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
    borderBottomColor: COLORS.inputBgColor,
    borderBottomWidth: 0.5,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerContent: {
    justifyContent: "center",
  },
  emptyView: {
    width: 32,
  },
});
