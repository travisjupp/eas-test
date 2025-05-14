import * as React from "react";
import { View, AppRegistry } from "react-native";
import { configureFonts, Card, Text, Button, MD3LightTheme, MD3DarkTheme as DefaultTheme, PaperProvider } from "react-native-paper";
import data from "../app.json" with { type: 'json' };
const appName = data.expo.name;

const fontConfig = {
  fontFamily: 'Abel'
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({config: fontConfig}),
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    // secondary: 'yellow',
  },
};

// console.log();
/* other components need useTheme hook, import from 'react-native-paper' */ 
/* and call in component body: const theme = useTheme(); */

export default function Index() {
  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
          fontFamily: 'Abel',
        }}
      >
        <Card>
          <Card.Content>
            <Text variant="titleLarge" style={{ fontFamily: "Abel" }}>Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
        </Card>
        <Text style={{ color: theme.colors.primary }}>Edit app/index.tsx to edit this screen.</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
      }}>
        <Text style={{fontWeight: 700}}>TEST</Text>
      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

