import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {
  useColorScheme,
  FlatList,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/actions';
import {Container, NavigationBar} from '../../components';
import {styles} from '../../assets/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import di from '../../di';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DetailInterface {
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  episode: [];
}

const Favorites = (props: any) => {
  const [dataSource, setDataSource] = useState<DetailInterface>();
  const [episodeId, setDataEpisodeId] = useState([]);
  const [episodes, setDataEpisodes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isSelect, setSelect] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.white,
  };

  useEffect(() => {
    if (props.dataFavoriteMovies.data) {
      (async () => {
        const data = await di.character.getCharacter(
          props.dataFavoriteMovies.data.id,
        );
        if (data) {
          setLoading(false);
          setDataSource(data);
          setDataEpisodeId(
            data.episode.map((item: string) => {
              return item.replace(
                'https://rickandmortyapi.com/api/episode/',
                '',
              );
            }),
          );
        } else {
          setLoading(false);
          setDataEpisodeId([]);
          setDataSource(undefined);
        }
      })();
    }
  }, [props.dataFavoriteMovies]);

  useEffect(() => {
    if (episodeId.length > 1) {
      (async () => {
        const data = await di.episode.getEpisode(episodeId);
        if (data) {
          setDataEpisodes(data);
          setLoading(false);
        } else {
          setDataEpisodes([]);
          setLoading(false);
        }
      })();
    }
  }, [episodeId]);

  const shimmerLoading = () => {
    return (
      <View style={styles.detail}>
        <View style={styles.avatarDetailShimmer} />
        <View style={styles.nameWrapper}>
          <View style={styles.nameShimmer} />
        </View>
        <View style={styles.detailInfoShimmer} />
        <View style={styles.divider} />
      </View>
    );
  };

  const renderItem = ({item}: any) => {
    return (
      <View key={item.id} style={styles.itemCharacter}>
        <View style={styles.info}>
          <Text style={styles.name}>
            {item.name} - {item.episode}
          </Text>
          <Text style={styles.species}>{item.air_date}</Text>
        </View>
      </View>
    );
  };

  const detailCharacters = () => {
    return (
      <View style={styles.detail}>
        <FastImage
          source={{uri: `${dataSource?.image}`}}
          style={styles.avatarDetail}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.nameWrapper}>
          <Text style={styles.title}>{dataSource?.name}</Text>
          <TouchableOpacity
            onPress={() => {
              setSelect(!isSelect);
              props.removeFavorites(dataSource);
            }}>
            <Icon
              name={isSelect ? 'star' : 'star-o'}
              size={24}
              color={isSelect ? 'yellow' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailInfo}>
          <Text style={styles.detailStyle}>species: {dataSource?.species}</Text>
          <Text style={styles.detailStyle}>gender: {dataSource?.gender}</Text>
          <Text style={styles.detailStyle}>status: {dataSource?.status}</Text>
        </View>
        <View style={styles.divider} />
        <View>
          <FlatList
            data={episodes}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
        </View>
      </View>
    );
  };

  return (
    <Container>
      <View style={backgroundStyle}>
        <NavigationBar
          title={dataSource?.name ?? 'Character'}
          back
          onPress={() => props.navigation.goBack()}
        />
        <ScrollView style={styles.container}>
          <View style={styles.detailWrapper}>
            {isLoading ? shimmerLoading() : detailCharacters()}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  dataFavoriteMovies: state.dataFavoriteMovies,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
