import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation, donations }) => {
  const renderItem = ({ item }) => (
    <View style={styles.donationItem}>
      <Text>Valor: R$ {item.amount}</Text>
      <Text>Método de Pagamento: {item.paymentMethod}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doações</Text>
      {donations.length === 0 && (
        <Text style={styles.donationEmpty}>Nenhuma doação realizada</Text>
      )}
      <FlatList
        data={donations}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={styles.donateButton}
        onPress={() => navigation.navigate("Donation")}
      >
        <Text style={styles.donateButtonText}>Fazer uma Doação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
  },
  donationItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  donateButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#006400",
    borderRadius: 5,
    alignItems: "center",
  },
  donateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  donationEmpty: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default HomeScreen;
