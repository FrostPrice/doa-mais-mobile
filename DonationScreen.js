import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import PaymentButton from "./PaymentButton";
import PaymentModal from "./PaymentModal";

const DonationScreen = ({ navigation, addDonation }) => {
  const PAYMENT_METHODS = [
    "Pix",
    "Cartão débito",
    "Cartão crédito",
    "Boleto bancário",
  ];
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Pix");
  const [modalVisible, setModalVisible] = useState(false);

  const handleDonate = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    if (amount > 0) {
      addDonation({ amount, paymentMethod });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DOAR</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em R$"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Text style={styles.subtitle}>Selecione a forma de pagamento</Text>
      <View style={styles.buttonContainer}>
        {PAYMENT_METHODS.map((method) => (
          <PaymentButton
            key={method}
            title={method}
            selected={paymentMethod === method}
            onPress={() => setPaymentMethod(method)}
          />
        ))}
      </View>
      <TouchableOpacity
        style={
          amount <= 0.0 ? styles.donateButtonDisabled : styles.donateButton
        }
        onPress={handleDonate}
        disabled={amount <= 0.0}
      >
        <Text style={styles.donateButtonText}>DOAR</Text>
      </TouchableOpacity>
      <PaymentModal
        visible={modalVisible}
        amount={amount}
        paymentMethod={paymentMethod}
        onClose={closeModal}
      />
    </View>
  );
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 16,
    backgroundColor: "#f0f0f0",
    width: width,
    height: height * 0.2,
    textAlign: "center",
    textAlignVertical: "center",
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  donateButton: {
    width: "80%",
    padding: 15,
    backgroundColor: "#006400",
    borderRadius: 5,
    marginVertical: 16,
    alignItems: "center",
  },
  donateButtonDisabled: {
    width: "80%",
    padding: 15,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginVertical: 16,
    alignItems: "center",
  },
  donateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DonationScreen;
