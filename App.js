import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {FontAwesome5} from '@expo/vector-icons';
import HomeScreen2 from './src/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRef } from 'react/cjs/react.production.min';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={{
          // tabBarInactiveTintColor: 'light400',
          // tabBarActiveTintColor: 'primary700' ,
          //tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : 'black' },
          // headerShown: false
        }}
      >
          <Tab.Screen name="Home11" component={HomeScreen}
            options={{
              tabBarIcon:({focused})=>(
               <FontAwesome5 name="home" size={26} color={focused?'#00a4eb':'gray'}>

               </FontAwesome5>
              )
            }}
          />
          <Tab.Screen name="News" component={NewsScreen}
            options={{
              tabBarIcon:({focused})=>(
               <FontAwesome5 name="newspaper" size={26} color={focused?'#00a4eb':'gray'}>

               </FontAwesome5>
              )
            }}
          
          /> 

          <Tab.Screen name="Map" component={MapScreen}
            options={{
              tabBarIcon:({focused})=>(
               <FontAwesome5 name="map-marked-alt" size={26} color={focused?'#00a4eb':'gray'}>

               </FontAwesome5>
              )
            }}
          
          /> 
          <Tab.Screen name="Notice" component={NoticeScreen}
            options={{
              tabBarIcon:({focused})=>(
               <FontAwesome5 name="bell" size={26} color={focused?'#00a4eb':'gray'}>

               </FontAwesome5>
              )
            }}
          />
          <Tab.Screen name="Settings" component={SettingsScreen}
            options={{
              tabBarIcon:({focused})=>(
               <FontAwesome5 name="wrench" size={26} color={focused?'#00a4eb':'gray'}>

               </FontAwesome5>
              )
            }}
          />     
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
  </View>
  );
}

function NewsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>News</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map</Text>
    </View>
  );
}

function NoticeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notice</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
