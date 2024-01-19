import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/constants";
import {
  CalendarCheckIcon,
  CalendarIcon,
  CircleDollarSignIcon,
  ClockIcon,
  MapPinIcon,
} from "lucide-react-native";
import { useState } from "react";

export default function Reserve({reserve}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.service}>{reserve.service}</Text>
        <Text style={styles.local}>{reserve.local}</Text>
      </View>
      <View style={styles.infosContainer}>
        <View style={styles.localDateContainer}>
          <View style={styles.textWithIcon}>
            <CalendarCheckIcon color={COLORS.primary} />
            <Text style={styles.simpleText}>{reserve.date}</Text>
          </View>
          <View style={styles.textWithIcon}>
            <ClockIcon color={COLORS.primary} />
            <Text style={styles.simpleText}>{reserve.time}</Text>
          </View>
        </View>
        <View>
          <View style={styles.textWithIcon}>
            <CircleDollarSignIcon color={COLORS.primary} />
            <Text style={styles.simpleText}>{reserve.price}</Text>
          </View>
        </View>
        <View>
          <View style={styles.textWithIcon}>
            <MapPinIcon color={COLORS.primary} />
            <Text style={styles.simpleText}>{reserve.address}</Text>
          </View>
          <Text style={styles.textWithOutIcon}>
            {reserve.neighborhood}, {reserve.city}
          </Text>
          <Text style={styles.textWithOutIcon}>{reserve.phone}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.reagendar}>
          <Text style={styles.textButton}>Reagendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.excluir}>
          <Text style={styles.textButton}>Excluir Reserva</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 0.5,
  },
  service: {
    color: COLORS.grey,
    fontSize: 22,
    fontWeight: "500",
  },
  localDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 36,
  },
  local: {
    fontSize: 19,
    color: COLORS.lightGrey,
  },

  textWithIcon: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  textWithOutIcon: {
    paddingLeft: 28,
    color: COLORS.lightGrey,
  },
  simpleText: {
    fontSize: 16,
    color: COLORS.lightGrey,
  },
  infosContainer: {
    gap: 8,
    paddingVertical: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
  },
  reagendar: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
  },
  excluir: {
    backgroundColor: "#ff0000",
    padding: 12,
    borderRadius: 8,
  },
  textButton: {
    color: "#ffffffea",
    fontSize: 16,
    textAlign: "center",
  },
});
