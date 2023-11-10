// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import Navigation from "./navigation";
// import MainScreen from "../screans/MainScrean";
// import "react-native-gesture-handler";
// import DoctorsScreen from '../screans/DoctorsScrean';
// import LoginScrean from '../screans/LoginScrean';
// import RegisterScrean from "../screans/RegisterAsDoctor";
// import Navigation from "./navigation";
// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
//         <Tab.Screen name="Home" component={Navigation}  />
//         <Tab.Screen name="logins" component={LoginScrean} />
//         <Tab.Screen name="register" component={RegisterScrean} />
//         {/* <Tab.Screen name="registerPharmacy" component={RegisterAsPharmacy} /> */}
//         {/* <Tab.Screen
//           name="registerLaporatory"
//           component={RegisterAsLaboratory}
//         /> */}
//         <Tab.Screen name="Main" component={MainScreen} />
//         <Tab.Screen name="Doctors" component={DoctorsScreen} />
//         {/* <Tab.Screen name="Chats" component={Chat} />
//         <Tab.Screen name="login" component={Login} />
//         <Tab.Screen name="Messaging" component={Messaging} /> */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MyTabs;
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyTabs from "./tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import LoginScrean from "../screans/LoginScrean";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="login" component={LoginScrean} />
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
