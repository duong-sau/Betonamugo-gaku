import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import GrammarEntity from '../Entity/GrammarEntity';
import Practice from '../Practice';
import Result from '../Result';
import Grammar from '../Entity/Grammar';

const Stack = createStackNavigator();
export default class GrammarController extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Grammar"
          component={Grammar}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="GrammarEntity"
          component={GrammarEntity}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Practice"
          component={Practice}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Result"
          component={Result}
        />
      </Stack.Navigator>
    );
  }
}
