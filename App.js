import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import DonationScreen from "./DonationScreen";
import { Dimensions } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  const [donations, setDonations] = useState([]);

  const height = Dimensions.get("window").height;

  const addDonation = (donation) => {
    setDonations((prevDonations) => [...prevDonations, donation]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} donations={donations} />}
        </Stack.Screen>
        <Stack.Screen name="Donation">
          {(props) => <DonationScreen {...props} addDonation={addDonation} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
