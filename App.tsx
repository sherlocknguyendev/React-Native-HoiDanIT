
import { Text, View } from "react-native"
import AboutScreen from "./components/review/about";
import DetailScreen from "./components/review/detail";
import HomeScreen from "./components/review/home";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPENSANS_REGULAR } from "./utils/const";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


SplashScreen.preventAutoHideAsync(); // chặn hành động tự hiển thị trang ( thay vào đó là hiện màn hình chờ)


const App = () => {

    const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync(); // khi tải xog font thì ms hiển thị trang (ẩn màn hình chờ)
        }
    }, [loaded, error]);
    if (!loaded && !error) {
        return null;
    }

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (

        <NavigationContainer>
            <Stack.Navigator>
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
        </NavigationContainer>
    )
}

export default App;