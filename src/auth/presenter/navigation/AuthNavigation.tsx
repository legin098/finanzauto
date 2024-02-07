import React, {lazy} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParamList} from '@common/presenter/models';
import {SuspendedView} from '@src/common/presenter/components';

const Stack = createStackNavigator<AuthStackParamList>();

const SignIn = lazy(() => import('../pages/SignIn'));

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn">
        {props => (
          <SuspendedView hasSafeArea>
            <SignIn {...props} />
          </SuspendedView>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
