import { Platform } from 'react-native';

export default {
  primaryLight: Platform.OS === 'ios' ? 'MuseoSansRounded-300' : 'MuseoSansRounded300',
  primaryRegular: Platform.OS === 'ios' ? 'MuseoSansRounded-500' : 'MuseoSansRounded500',
  primaryBold: Platform.OS === 'ios' ? 'MuseoSansRounded-900' : 'MuseoSansRounded900',
  primarySemiBold: Platform.OS === 'ios' ? 'Harbour-Bold' : 'HarbourBold',
};
