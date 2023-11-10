import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScrean from "../screans/HomeScrean";
import HospitalScrean from "../screans/HospitalScrean";
import MainScrean from "../screans/MainScrean";
import SpecialtiesScrean from "../screans/ٍٍSpecialtiesScrean";
import DoctorsScrean from "../screans/DoctorsScrean";
//import LoginScrean from "../screans/LoginScrean";
import RegisterScrean from "../screans/RegisterScrean";
import RegisterAs from "../screans/RegisterAs";
import RegisterAsDoctor from '../screans/RegisterAsDoctor';
import LabScreen from '../screans/LabScreen';
import PharmacyScreen from './../screans/PharmacyScreen';
import AdminDashboardScreen from './../screans/AdminDashboardScreen';
import DoctorsManagement from './../screans/DoctorsManagement';
import PharmactManagement from './../screans/PharmacyManagement';
import LaboratoryManagement from './../screans/LaboratoryManagement';
import FeedbackScreen from "../screans/FeedbackScreen";
import RegisterAsPharmacy from './../screans/RegisterAsPharmacy';
import RegisterAsLaboratory from './../screans/RegisterAsLaboratory';
import PeopleList from "../screans/PeopleList";
import ChatScreen from "../screans/ChatScreen";
//import ProfileScreen from "../screans/ProfileScreen";


const Stack = createStackNavigator();
function Navigation() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen name="Home" component={HomeScrean}  />
      {/* <Stack.Screen name="login" component={LoginScrean} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen}/> */}
      <Stack.Screen name="register" component={RegisterScrean} />
      <Stack.Screen name="About " component={HospitalScrean} />
      <Stack.Screen name="Main " component={MainScrean} />
      <Stack.Screen name="specialties " component={SpecialtiesScrean} />
      <Stack.Screen name="doctors" component={DoctorsScrean} />
      <Stack.Screen name="register_As" component={RegisterAs} />
      <Stack.Screen name="register_As_doctor" component={RegisterAsDoctor} />
      <Stack.Screen name="lab" component={LabScreen} />
      <Stack.Screen name="pharmacys" component={PharmacyScreen} />
      <Stack.Screen name="DoctorsManagement" component={DoctorsManagement}/>
      <Stack.Screen name="PharmcyManagement" component={PharmactManagement}/>
      <Stack.Screen name="LaboratoryManagement" component={LaboratoryManagement}/>
      <Stack.Screen name="register_As_pharmacy" component={RegisterAsPharmacy}/>
      <Stack.Screen name="register_As_laboratory" component={RegisterAsLaboratory}/>
      <Stack.Screen name="Chats" component={PeopleList} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="feedback" component={FeedbackScreen}/>
       <Stack.Screen name="admin" component={AdminDashboardScreen}/>
       
      
     

      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true }}
      /> */}

      {/* <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Chats",
          headerShown: true,
        }}
      /> */}
      {/* <Stack.Screen name="Messaging" component={Messaging} /> */}
    </Stack.Navigator>
  );
}
export default Navigation;
