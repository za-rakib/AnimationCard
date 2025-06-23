import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Canvas, RadialGradient, Rect, RoundedRect, vec } from '@shopify/react-native-skia';
const {width:windowWidth,height:windowHeight }= Dimensions.get("window")

const App = () => {
  return (
    <View style={styles.container}>
     <Canvas style={{ flex: 1 }}>
      <Rect
        x={0}
        y={0}
        width={windowWidth}
        height={windowHeight}
      >
       <RadialGradient
          c={{x:windowWidth/2,y:windowHeight/2}}
          r={windowWidth/2}
          colors={["violet", "black"]}
        />
        </Rect>
    </Canvas>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
  },
});
