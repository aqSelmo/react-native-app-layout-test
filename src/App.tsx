/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {Container, Title, SliderContainer, SliderBox, ImageBox} from './styles';

import Logo from './assets/background.png';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#111" barStyle="light-content" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container background="#111">
            <Title>Imagens</Title>
          </Container>
          <SliderContainer background="#111">
            {[0, 1, 2, 3].map((value, key) => (
              <SliderBox key={key}>
                <ImageBox source={Logo} />
              </SliderBox>
            ))}
          </SliderContainer>
          <Container background="#242424">
            <Title>Apps</Title>
          </Container>
          <SliderContainer background="#242424">
            {[0, 1, 2, 3].map((value, key) => (
              <SliderBox key={key}>
                <ImageBox source={Logo} />
              </SliderBox>
            ))}
          </SliderContainer>
          <Container background="#111">
            <Title>Imagens</Title>
          </Container>
          <SliderContainer background="#111">
            {[0, 1, 2, 3].map((value, key) => (
              <SliderBox key={key}>
                <ImageBox source={Logo} />
              </SliderBox>
            ))}
          </SliderContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
