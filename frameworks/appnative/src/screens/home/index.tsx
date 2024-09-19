import React from 'react';
import {connect} from 'react-redux';
import {useColorScheme, TouchableOpacity, View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/actions';
import {Container, NavigationBar} from '../../components';
import {styles} from '../../assets/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.white,
  };

  return (
    <Container>
      <View style={backgroundStyle}>
        <NavigationBar title={'Home Page'} back={false} onPress={() => {}} />
        <View style={styles.wrapper}>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => props.navigation.navigate('Characters')}>
              <Icon
                name="users"
                size={24}
                color={isDarkMode ? Colors.white : Colors.black}
              />
              <Text style={styles.menuText}>Characters</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                props.setDetailCharacter(1);
                props.navigation.navigate('Detail');
              }}>
              <Icon
                name="user"
                size={24}
                color={isDarkMode ? Colors.white : Colors.black}
              />
              <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => props.navigation.navigate('Favorites')}>
              <Icon
                name="star"
                size={24}
                color={isDarkMode ? Colors.white : Colors.black}
              />
              <Text style={styles.menuText}>Character Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => props.navigation.navigate('Settings')}>
              <Icon
                name="cog"
                size={24}
                color={isDarkMode ? Colors.white : Colors.black}
              />
              <Text style={styles.menuText}>Setting</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>Version 1.0.0</Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(null, mapDispatchToProps)(Home);
