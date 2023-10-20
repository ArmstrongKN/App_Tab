import{MaterialCommunityIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./Home";
import DragonBall from "./DragonBall";
import Onepiece from "./Onepiece";
 
const Tab = createBottomTabNavigator();

export default function Rotastab() {
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
    <Tab.Screen
    name="Home"
    component={Home}
    optons={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="StarBorderPurple500" color={color} size={size}/>   }}
    />
    <Tab.Screen
    name="DragonBall"
    component={DragonBall}
    optons={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="home-hert" color={color} size={size}/>
    }}/>
     <Tab.Screen
    name="Onepiece"
    component={Onepiece}
    optons={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="StarBorderPurple500" color={color} size={size}/>
    }}/>
    </Tab.Navigator>
  );
}





