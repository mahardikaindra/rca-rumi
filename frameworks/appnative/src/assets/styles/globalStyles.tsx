import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
  },
  avatarShimmer: {
    height: 40,
    width: 40,
    backgroundColor: '#C4C4C4',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    height: height,
  },
  flatList: {
    paddingBottom: Platform.select({ios: 100, android: 50}),
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Lekton-Bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Lekton-Regular',
  },
  highlight: {
    fontWeight: '700',
    fontFamily: 'Lekton-Italic',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Lekton-Bold',
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lekton-Bold',
    color: 'black',
  },
  species: {
    fontSize: 14,
    fontFamily: 'Lekton-Regular',
    color: 'black',
  },
  status: {
    fontSize: 14,
    fontFamily: 'Lekton-Regular',
    color: 'black',
  },
  nameShimmer: {
    height: 16,
    marginBottom: 4,
    width: 200,
    backgroundColor: '#C4C4C4',
  },
  speciesShimmer: {
    height: 14,
    marginTop: 4,
    width: 100,
    backgroundColor: '#C4C4C4',
  },
  info: {
    marginHorizontal: 16,
    alignItems: 'flex-start',
  },
  itemCharacter: {
    flexDirection: 'row',
    minHeight: 40,
    paddingVertical: 10,
    alignItems: 'center',
  },
  detailStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lekton-Regular',
    marginVertical: Platform.select({
      ios: 4,
      android: 0,
    }),
  },
  detail: {
    top: Platform.select({
      ios: -16,
      android: -11,
    }),
  },
  detailInfo: {
    backgroundColor: '#EF5DA8',
    margin: 16,
    borderRadius: 4,
    padding: 10,
  },
  detailInfoShimmer: {
    backgroundColor: '#C4C4C4',
    margin: 16,
    borderRadius: 4,
    width: width * 0.9,
    height: height * 0.1,
  },
  avatarDetail: {
    width: width,
    height: height * 0.5,
  },
  avatarDetailShimmer: {
    width: width,
    height: height * 0.5,
    backgroundColor: '#C4C4C4',
  },
  detailWrapper: {
    height: '100%',
  },
  wrapper: {
    margin: 16,
    height: '100%',
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#C4C4C4',
    marginHorizontal: width * 0.2,
    marginVertical: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 16,
  },
  menuItem: {
    alignItems: 'center',
    width: '45%',
    marginHorizontal: 8,
    marginVertical: 16,
    height: '30%',
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'Lekton-Bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 8,
  },
  backgroundStyle: {
    backgroundColor: 'white',
  },
  containerStyle: {
    flex: 1,
  },
  wrapperStyle: {
    margin: 16,
  },
  shimmer: {
    margin: 16,
  },
  shimmerItem: {
    flexDirection: 'row',
    minHeight: 40,
    paddingVertical: 10,
    alignItems: 'center',
  },
  shimmerAvatar: {
    height: 40,
    width: 40,
    backgroundColor: '#C4C4C4',
  },

  shimmerInfo: {
    marginHorizontal: 16,
    alignItems: 'flex-start',
  },
  shimmerName: {
    height: 16,
    marginBottom: 4,
    width: 200,
    backgroundColor: '#C4C4C4',
  },
  shimmerSpecies: {
    height: 14,
    marginTop: 4,
    width: 100,
    backgroundColor: '#C4C4C4',
  },
  shimmerDetail: {
    height: height * 0.5,
    backgroundColor: '#C4C4C4',
  },
  shimmerDetailInfo: {
    backgroundColor: '#C4C4C4',
    margin: 16,
    borderRadius: 4,
    width: width * 0.9,
    height: height * 0.1,
  },
  shimmerDetailWrapper: {
    height: '100%',
  },
  shimmerNameWrapper: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  shimmerDivider: {
    height: 1,
    backgroundColor: '#C4C4C4',
    marginHorizontal: width * 0.2,
    marginVertical: 20,
  },
  shimmerMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  shimmerMenuItem: {
    alignItems: 'center',
  },
  shimmerMenuText: {
    fontSize: 16,
    fontFamily: 'Lekton-Bold',
    color: 'black',
  },
  shimmerBackgroundStyle: {
    backgroundColor: 'white',
  },
  shimmerContainerStyle: {
    flex: 1,
  },
  shimmerWrapperStyle: {
    margin: 16,
  },
  shimmerShimmer: {
    margin: 16,
  },
  shimmerShimmerItem: {
    flexDirection: 'row',
    minHeight: 40,
    paddingVertical: 10,
    alignItems: 'center',
  },
  shimmerShimmerAvatar: {
    height: 40,
    width: 40,
    backgroundColor: '#C4C4C4',
  },
  versionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 200,
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Lekton-Regular',
    color: 'black',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  settingText: {
    fontSize: 16,
    fontFamily: 'Lekton-Bold',
    color: 'black',
  },
});

export default styles;
