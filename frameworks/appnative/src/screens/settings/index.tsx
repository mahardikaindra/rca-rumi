import React from 'react';
import {View, Text, Switch} from 'react-native';
import {Container, NavigationBar} from '../../components';
import {styles} from '../../assets/styles';

const Settings: React.FC = (props: any) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabledDark, setIsEnabledDark] = React.useState(false);

  const toggleSwitchDark = () =>
    setIsEnabledDark(previousState => !previousState);

  const [isEnabledLoc, setIsEnabledLoc] = React.useState(false);

  const toggleSwitchLoc = () =>
    setIsEnabledLoc(previousState => !previousState);

  return (
    <Container>
      <NavigationBar
        title={'Settings'}
        back={true}
        onPress={() => props.navigation.goBack()}
      />
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabledDark ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchDark}
          value={isEnabledDark}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Location Access</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabledLoc ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchLoc}
          value={isEnabledLoc}
        />
      </View>
    </Container>
  );
};
export default Settings;
