import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account';
import AuthenticationScreen from '../screens/Authentication';
import HomeScreen from '../screens/Home';
import ImdbSvg from '../features/commons/components/ImdbSvg';
import MovieDetail from '../features/MovieDetail';
import MyFavoriteMoviesScreen from '../screens/MyFavoriteMovies';
import MyRatedMoviesScreen from '../screens/MyRatedMovies';
import PopularMoviesScreen from '../screens/PopularMovies';
import RateAMovieScreen from '../screens/RateAMovie';
import TopRatedMoviesScreen from '../screens/TopRatedMovies';
import UpcomingMoviesScreen from '../screens/UpcomingMovies';
import SearchMovie from '../features/Search';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitle: () => <ImdbSvg />,
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#f4c518',
      }}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Authentication" component={AuthenticationScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="MyFavoriteMovies" component={MyFavoriteMoviesScreen} />
      <Stack.Screen name="MyRatedMovies" component={MyRatedMoviesScreen} />
      <Stack.Screen name="PopularMovies" component={PopularMoviesScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="RateAMovie" component={RateAMovieScreen} />
      </Stack.Group>
      <Stack.Screen name="TopRatedMovies" component={TopRatedMoviesScreen} />
      <Stack.Screen name="UpcomingMovies" component={UpcomingMoviesScreen} />
      <Stack.Screen name="Search" component={SearchMovie} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
