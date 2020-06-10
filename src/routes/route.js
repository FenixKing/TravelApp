import React, { useState } from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import { HomeScreen } from '../screens/Home'
import { CityProfile } from '../screens/CityProfile'

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator()

const RoutesBottom = () => {

    const [select, setSelect] = useState(0)

    const icon = [
        {
            id: 0,
            icon: faSearch,
            name: 'Search',
            component: HomeScreen,
        },
        {
            id: 1,
            icon: faShoppingBag,
            name: 'Bag',
            component: HomeScreen,
        },
    ]

    const Perfil = [
        {
            id: 0,
            name: 'Perfil',
            component: HomeScreen,
        },
    ]


    const onPress = (item) => {
        setSelect(item.id)
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 70,
                    paddingBottom: 20,
                }
            }}
        >
            {icon.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesomeIcon icon={item.icon} size={22} onPress={onPress} onPress={() => onPress(item)} color={select === item.id ? '#3EBACE50' : '#ddd'} />
                        ),
                        headerTitle: false,
                    }}
                />
            ))}
            {Perfil.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Image style={{ width: 23, height: 23, borderRadius: 20 }} source={require('../../assets/Perfil/woman.jpg')} />
                        ),
                        headerTitle: false,
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}

export const Routes = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={RoutesBottom} />
            <Stack.Screen name="CityProfile" component={CityProfile} />
        </Stack.Navigator>
    );
}
