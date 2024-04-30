import { Text, View, Image } from 'react-native';
import { estilos } from './style-externo';

export default function App() {
  return (
    <View style={estilos.container}>
      <Image source={require('./assets/favicon.png')}/>
      <Text style={estilos.title}>Hello World!</Text>
      <Text style={estilos.rimuru}>rimuru</Text> 
    </View>
  );
}
