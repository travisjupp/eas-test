import * as React from "react";
import { View, AppRegistry } from "react-native";
import { configureFonts, ToggleButton, Card, Text, Button, MD3LightTheme as DefaultTheme, MD3DarkTheme, PaperProvider } from "react-native-paper";
import data from "../app.json" with { type: 'json' };
import { useFonts } from 'expo-font';

const appName = data.expo.name;

const fontConfig = {
  // fontFamily: 'Abel', // override all variants (only if no variants)
  ios: {
    regular: {
      fontFamily: 'Abel', // Your custom font
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Abel',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Abel',
      fontWeight: '700',
    },
  },
  android: {
    regular: {
      fontFamily: 'Abel', // Your custom font
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Abel',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Abel',
      fontWeight: '700',
    },
  },
};

/* other components need useTheme hook, import from 'react-native-paper' */ 
/* and call in component body: const theme = useTheme(); */

export default function Index() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
const theme = isThemeDark ? {
  ...MD3DarkTheme,
  fonts: configureFonts({config: fontConfig}),
  colors: {
    ...MD3DarkTheme.colors,
    // primary: 'tomato',
    // secondary: 'yellow',
  },
} : {
  ...DefaultTheme,
  fonts: configureFonts({config: fontConfig}),
  colors: {
    ...DefaultTheme.colors,
    // primary: 'tomato',
    // secondary: 'yellow',
  },
}
  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.surface,
        }}
      >
        <Card style={{
          // backgroundColor: theme.colors.primaryContainer
        }}>
          <Card.Content>
            <Text variant="titleLarge" style={{ fontFamily: "Abel" }}>Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
        </Card>
        <Text style={{ 
          // color: theme.colors.primary 
        }} variant="bodyLarge" >Edit app/index.tsx to edit this screen.</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
        <ToggleButton
          icon="theme-light-dark"
          value={isThemeDark}
          status={isThemeDark}
          onPress={() => setIsThemeDark(!isThemeDark)}
        />
      </View>
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.surfaceVariant,
      }}>
        <Text style={{fontWeight: 700}}>TEST</Text>
      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

