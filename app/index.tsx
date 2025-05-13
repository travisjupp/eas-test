import { Text, View } from "react-native";
import React, { useState } from "react";


export default function Index() {
  return (
    <>
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
      </View>
    </>
  );
}
