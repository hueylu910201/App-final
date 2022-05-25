import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {FontAwesome5} from '@expo/vector-icons';
import HomeScreen2 from './src/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRef, useState } from 'react/cjs/react.production.min';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Animated from 'react-native-reanimated';

const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window');
const TAB_BAR_WIDTH=width-16;
const TAB_WIDTH=TAB_BAR_WIDTH/5;


export default function App() {
  // const [translateX]=useState(new Animated.Value(0));
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
           tabBarStyle:{
          position:'absolute',
          height:60,
          // bottom:16,
          // borderRadius:10,
          // left:16,
          // right:16,

        }
        }}

       
      >
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon:({focused})=>(
                <View backgroundColor={focused?'#e6e8eb':'#fff'} style={styles.tabBarContainer}>
                  <FontAwesome5 name="home" size={26} color={focused?'#00a4eb':'gray'} ></FontAwesome5>
                </View>
              )
            }}
          />
          <Tab.Screen name="News" component={NewsScreen}
            options={{
              tabBarIcon:({focused})=>(
                <View backgroundColor={focused?'#e6e8eb':'#fff'} style={styles.tabBarContainer}>
                  <FontAwesome5 name="newspaper" size={26} color={focused?'#00a4eb':'gray'}></FontAwesome5>
                </View>
              )
            }}
          
          /> 

          <Tab.Screen name="Map" component={MapScreen}
            options={{
              tabBarIcon:({focused})=>(
                <View backgroundColor={focused?'#e6e8eb':'#fff'} style={styles.tabBarContainer}>
                  <FontAwesome5 name="map-marked-alt" size={26} color={focused?'#00a4eb':'gray'}></FontAwesome5>
                </View>
              )
            }}
          
          /> 
          <Tab.Screen name="Notice" component={NoticeScreen}
            options={{
              tabBarIcon:({focused})=>(
                <View backgroundColor={focused?'#e6e8eb':'#fff'}style={styles.tabBarContainer}>
                  <FontAwesome5 name="bell" size={26} color={focused?'#00a4eb':'gray'}>

                  </FontAwesome5>
               </View>)
            }}
          />
          <Tab.Screen name="Settings" component={SettingsScreen}
            options={{
              tabBarIcon:({focused})=>(
                <View backgroundColor={focused?'#e6e8eb':'#fff'}style={styles.tabBarContainer}>
                  <FontAwesome5 name="wrench" size={26} color={focused?'#00a4eb':'gray'}>

                  </FontAwesome5>
                </View> )
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
  tabBarContainer:{
    width:TAB_WIDTH,
    padding:10,
    ...StyleSheet.absoluteFillObject,
    backgroundColor:Colors.gray,
    alignItems:'center'
  }
});