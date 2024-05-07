import { Platform, StyleSheet} from 'react-native';
import { PageContainer, PageSubTitle, PageTitle, PageImage } from './src/class/styled-externo/styled-externo';

// Outra forma de importar é: 
// import * as S from './src/class/styled-externo/styled-externo';

export default function App() {
  return (
    <PageContainer style={styles.container}>
      <PageImage source={require('./src/img/palmeiras-sem-fundo.png')}></PageImage>
      <PageTitle>Palmeiras</PageTitle>
      <PageSubTitle>Melhor time do mundo!</PageSubTitle>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'android' ?  '#CFE1FA' : '#fff'
  },
});
