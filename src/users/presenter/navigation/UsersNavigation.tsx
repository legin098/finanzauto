import React, {lazy} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParamList} from '@common/presenter/models';
import {SuspendedView} from '@src/common/presenter/components';

const Stack = createStackNavigator<AuthStackParamList>();

const Home = lazy(() => import('../pages/Home'));

const UsersNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home">
        {props => (
          <SuspendedView hasSafeArea>
            <Home {...props} />
          </SuspendedView>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default UsersNavigation;
