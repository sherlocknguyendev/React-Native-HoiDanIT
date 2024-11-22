
import { Text, View } from "react-native"
import AboutScreen from "./components/review/about";
import HomeScreen from "./components/review/home";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPENSANS_REGULAR } from "./utils/const";

import { NavigationContainer } from '@react-navigation/native';


import 'react-native-gesture-handler';
import AppNavigation from "./components/navigation/app.navigation";
import { SafeAreaView } from "react-native-safe-area-context";


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



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>

                <AppNavigation />

            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App;