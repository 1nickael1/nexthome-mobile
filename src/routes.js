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
import Announce from './pages/Profile/Announce';
import AnnounceEdit from './pages/Profile/AnnounceEdit';
import Visit from './pages/Schedule/pages/Visit';
import Requests from './pages/Schedule/pages/Requests';
import Solicitations from './pages/Schedule/pages/Requests/pages/Solicitations';
import SolicitationsDetails from './pages/Schedule/pages/Requests/pages/Solicitations/SolicitationsDetails';
import Search from './pages/Search';
import Detail from './pages/Search/pages/Details';
import Filter from './pages/Search/pages/Filter';
import FilterResult from './pages/Search/pages/Filter/FilterResult';
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
    <Stack.Navigator>
      <Stack.Screen
        name="SearchIndex"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailIndex"
        component={DetailsPages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{headerTitle: 'Filtros'}}
      />
      <Stack.Screen
        name="FilterResult"
        component={FilterResult}
        options={{headerTitle: 'Resultados'}}
      />
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

const RequestsPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RequestsIndex"
        component={Requests}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SolicitationsIndex"
        component={Solicitations}
        options={{headerTitle: 'Clientes'}}
      />
      <Stack.Screen
        name="SolicitationsDetails"
        component={SolicitationsDetails}
        options={{headerTitle: 'Detalhes da solicitação'}}
      />
    </Stack.Navigator>
  );
};

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
        component={RequestsPage}
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
        options={{headerTitle: 'Configurações'}}
      />
      <Stack.Screen
        name="Announce"
        component={Announce}
        options={{headerTitle: 'Anúncio'}}
      />
      <Stack.Screen
        name="AnnounceEdit"
        component={AnnounceEdit}
        options={{headerTitle: 'Anuncio'}}
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
