import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PaymentButton = ({ title, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.paymentButton, selected && styles.selected]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paymentButton: {
    width: "45%",
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    fontSize: 16,
  },
});

export default PaymentButton;
