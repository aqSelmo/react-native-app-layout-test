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
import {SafeAreaView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ScrollerBills,
  ScrollerContainer,
  BillBox,
  BillText,
  Header,
  ImageHeader,
  LabelHeader,
  TitleHeader,
  SubtitleHeader,
} from './styles';

import Logo from './assets/billshare.png';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#111" barStyle="light-content" />
      <SafeAreaView>
        <Container>
          <Header>
            <ImageHeader source={Logo} />
            <LabelHeader>
              <TitleHeader>Olá,</TitleHeader>
              <SubtitleHeader>Guilherme Falcão</SubtitleHeader>
            </LabelHeader>
          </Header>
          <ScrollerContainer>
            <ScrollerBills>
              {[0, 1, 2, 3, 4, 5, 6].map((value, key) => (
                <BillBox key={key}>
                  <Icon name="bell" size={20} />
                  <BillText>Avisos</BillText>
                </BillBox>
              ))}
            </ScrollerBills>
          </ScrollerContainer>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default App;
