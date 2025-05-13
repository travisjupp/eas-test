import * as React from "react";
import { Text, View, AppRegistry } from "react-native";
import { MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper";
import data from "../app.json" with { type: 'json' };
const appName = data.expo.name;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

console.log();

export default function Index() {
  return (
    <PaperProvider theme={theme}>
      {/* other components need useTheme hook, import from 'react-native-paper' */} 
      {/* const theme = useTheme(); */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: theme.colors.primary }}>Edit app/index.tsx to edit this screen.</Text>
      </View>
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{fontWeight: 700}}>TEST</Text>
      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

