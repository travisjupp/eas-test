import { Text, View } from "react-native";
import { BottomSheet } from '@expo/ui/swift-ui';
import React, { useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Index() {
const [isOpen, setIsOpen] = useState(true);
  console.log('isOpen', isOpen);
  return (
    <GestureHandlerRootView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{fontWeight: 700}}>TEST</Text>
        <BottomSheet isOpen={true} onIsOpenedChange={e => setIsOpened(e)}>
          <Text>Hello, world!</Text>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
