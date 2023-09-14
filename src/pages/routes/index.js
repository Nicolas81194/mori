import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Normal from '../normal/index';
import Nirvana from '../nirvana/index';
import Monkey from '../monkey/index';
import Hui from '../hui/index';
import Dan from '../dan/index';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Normal">
      <Stack.Screen
        name="Normal"
        component={Normal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Nirvana"
        component={Nirvana}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Monkey"
        component={Monkey}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hui"
        component={Hui}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dan"
        component={Dan}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
