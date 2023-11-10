import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ServiceCard from "../components/ServiceCard";
import SpecialtiesScreen from "./ٍٍSpecialtiesScrean";
import LabScreen from "./LabScreen";

import PharmacyScreen from "./PharmacyScreen";

export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>
          <Text style={styles.letter}>O</Text>ur{" "}
          <Text style={styles.letter}>S</Text>ervices
        </Text>
        <View style={styles.row}>
          <ServiceCard
            imageSource={require("../../New folder (11)/assets/da.png")}
            cardText="Doctors"
            nav={() => navigation.navigate("specialties ", SpecialtiesScreen)}
          />
          <ServiceCard
            imageSource={require("../../New folder (11)/assets/lab.png")}
            cardText="Laboratory"
            nav={() => navigation.navigate("lab", LabScreen)}
          />
        </View>
        <View style={styles.row}>
          <ServiceCard
            imageSource={require("../../New folder (11)/assets/phr.png")}
            cardText="Pharmacy"
            nav={() => navigation.navigate("pharmacys", PharmacyScreen)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#45B3CB",
    borderRadius: 8,
    width: "43%",
    height: 130,
    marginRight: 5,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  cardImage: {
    width: "100%",
    height: "80%",
    padding: 5,
  },
  cardText: {
    marginTop: 5,
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
    color: "white",

    borderRadius: 8,
    padding: 5,
  },

  background: {
    flex: 1,
    backgroundColor: "#eaf6f6", // Set your background color here
    padding: 16,
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  letter: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#FF8c00",
  },
  image: {
    width: "70%",
    height: 130,
  },
});

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.background}>
//         <Text style={styles.title}>
//           <Text style={styles.letter}>O</Text>ur{' '}
//           <Text style={styles.letter}>S</Text>ervices
//         </Text>
//         <View style={styles.row}>
//           <ServiceCard
//             imageSource={require('../../healthCare/assets/da.png')}
//             cardText="Doctors"
//             nav={() => navigation.navigate('specialties',SpecialtiesScreen)}
//           />
//           <ServiceCard
//             imageSource={require('../../healthCare/assets/lab.png')}
//             cardText="Laboratory"
//           />
//         </View>
//         <View style={styles.row}>
//           <ServiceCard
//             imageSource={require('../../healthCare/assets/phr.png')}
//             cardText="Pharmacy"
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }
