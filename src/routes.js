import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Configs from './pages/Profile/Configs';
// import Schedule from './pages/Schedule';
import Visit from './pages/Schedule/pages/Visit';
import Requests from './pages/Schedule/pages/Requests';
import Search from './pages/Search';
import Detail from './pages/Search/pages/Details';
import Scheduling from './pages/Search/pages/scheduling';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const SearchPage = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SearchIndex" component={Search} />
      <Stack.Screen name="DetailIndex" component={DetailsPages} />
    </Stack.Navigator>
  );
};

const DetailsPages = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="Scheduling"
        component={Scheduling}
        options={{
          headerTitle: 'Solicitação de Agendamento',
        }}
      />
    </Stack.Navigator>
  );
};

const TopTab = createMaterialTopTabNavigator();

const Schedule = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        indicatorStyle: {backgroundColor: '#26d0ce'},
        pressColor: '#26d0ce',
      }}>
      <TopTab.Screen
        name="Visit"
        component={Visit}
        options={{
          title: 'Visitar',
        }}
      />
      <TopTab.Screen
        name="Requests"
        component={Requests}
        options={{
          title: 'Solicitações',
        }}
      />
    </TopTab.Navigator>
  );
};

const ProfilePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileIndex"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Configs"
        component={Configs}
        options={{headerShown: true, headerTitle: 'Configurações'}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#26D0CE',
      }}>
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="search" size={34} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person-outline" size={34} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="calendar" size={34} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

//Auth

const Router = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
};

export default Router;
