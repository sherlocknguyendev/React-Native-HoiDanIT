
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../review/home';
import DetailScreen from '../review/detail';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../review/about';


const HomeLayout = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Overview' }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ title: 'Detail' }}
            />
        </Stack.Navigator>
    )
}
const AppNavigation = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeLayout} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}

export default AppNavigation