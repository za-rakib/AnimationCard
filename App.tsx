import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Blur,
  Canvas,
  Circle,
  Group,
  RadialGradient,
  Rect,
  rotate,
} from '@shopify/react-native-skia';
import Blur_card, { CardHeight, CardWidth } from './components/Blur_card';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={windowWidth} height={windowHeight}>
          <RadialGradient
            c={{ x: windowWidth / 2, y: windowHeight / 2 }}
            r={windowWidth / 3}
            colors={['violet', 'black']}
          />
          <Blur blur={100} />
        </Rect>
        <Circle
          cx={windowWidth / 2 - CardWidth / 2}
          cy={ windowHeight / 2 - CardHeight / 2}
          r={10}
          color="lightblue"
        />
        <Group
          transform={[
            {
              translateX: windowWidth / 2 - CardWidth / 2,
            },
            {
              translateY: windowHeight / 2 - CardHeight / 2,
            },
          ]}
        >
          {new Array(5).fill(0).map((_, index) => (
            <Group key={index} transform={[{ rotate: Math.PI / 2 }]}>
              <Blur_card />
            </Group>
          ))}
     
        </Group>
      </Canvas>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
