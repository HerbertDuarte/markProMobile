import { StyleSheet,View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/constants";

export default function SearchResult({service, index}) {
  return (
    <View>
      <TouchableOpacity key={index}>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceName}>{service.local}</Text>
          <Text style={styles.serviceSubInfo}>{service.address}</Text>
          <Text style={styles.serviceSubInfo}>
            {service.neighborhood} - {service.city}
          </Text>
          <Text style={styles.serviceSubInfo}>{service.phone}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  serviceInfo: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 0.5,
  },

  serviceName: {
    fontSize: 22,
    fontWeight: "500",
    color: COLORS.grey,
  },

  serviceSubInfo: {
    fontSize: 16,
    color: COLORS.lightGrey,
  },
});
