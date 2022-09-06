/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Container} from './components';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StorybookUIRoot from '../storybook';
import DevMenu from 'react-native-dev-menu';
import codePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [storybookActive, setStorybookActive] = useState(false);

  const toggleStorybook = useCallback(
    () => setStorybookActive(active => !active),
    [],
  );

  useEffect(() => {
    if (__DEV__) {
      DevMenu.addItem('Toggle Storybook', toggleStorybook);
    }
  }, [toggleStorybook]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (storybookActive) {
    return <StorybookUIRoot />;
  } else {
    return (
      <NavigationContainer>
        <Container>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Header />
            <View
              style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}>
              <Section title="Step One">
                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Section>
              <Section title="See Your Changes">
                <ReloadInstructions />
              </Section>
              <Section title="Debug">
                <DebugInstructions />
              </Section>
              <Section title="Learn More">
                Read the docs to discover what to do next:
              </Section>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </Container>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'NunitoSans-Bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'NunitoSans-Regular',
  },
  highlight: {
    fontWeight: '700',
    fontFamily: 'NunitoSans-Light',
  },
});

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL,
  updateDialog: false,
};

export default codePush(codePushOptions)(App);
