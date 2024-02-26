import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from './context/ThemeContext';
import MainAppbar from './components/MainAppbar';
import Home from './screens/Home';
import Settings from './context/ThemeContext'

import ThemeSwitchButton from './components/ThemeSwitchButton';
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from './context/useTheme';
import Styles from './Styles';
import ThemeProvider from './context/ThemeProvider';


export default function App() {
const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#666' barStyle="light-content"/>
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{header: (props) =>
        <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff"/>
      }}
      >
        <Stack.Screen>
          {() =>
            <Home />
          }
        </Stack.Screen>
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
