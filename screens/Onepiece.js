import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function OnePiece() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>One Piece</Text>
       
      <Image style={styles.logo} source={require('../assets/One_Piece.jpg')} />

      
    <Text style={styles.estilo }>
    One Piece conta as aventuras de Monkey D. Luffy, um jovem cujo corpo ganhou as propriedades de borracha após ter comido um fruto do diabo acidentalmente. Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o "One Piece", a fim de se tornar o próximo Rei dos Piratas.
    </Text>
    <Text style={styles.paragraph }>Personagens:</Text>
    
     <Text style={styles.estilo }>Luffy</Text>
     <Image style={styles.logo} source={require('../assets/Luffy.jpg')} />
    
    <Text style={styles.paragraph1}> 
    Em busca de seu sonho de ser o Rei dos Piratas, Luffy navega pelo mundo procurando o lendário tesouro One Piece que foi deixado por Gol D. Roger, o antigo Rei dos Piratas. Alegre e aventureiro, Luffy cria seu próprio bando chamado os Piratas do Chapéu de Palha e eles são constantemente antagonizados pela marinha do Governo Mundial. Em batalha, Luffy usa a elasticidade de seu corpo para se esticar e lutar.
    </Text>
<Text style={styles.estilo }>Bulma</Text>
     
       <Image style={styles.logo} source={require('../assets/Zoro.jpg')} />
    
    <Text style={styles.paragraph1}>
    Dentro do grupo, Zoro tem a função de combatente e muitas vezes assume o papel de imediato do bando. Sua maior característica é lutar usando três katanas em um estilo de esgrima que ele mesmo inventou, o santoryu (三刀流 Santōryū?). Enquanto Luffy almeja ser o Rei dos Piratas, Zoro busca se tornar o maior espadachim do mundo e para isso precisa derrotar o atual detentor do título, Dracule Mihawk.</Text>
<Text style={styles.estilo }>Piccolo</Text>
     
       <Image style={styles.logo} source={require('../assets/Usopp.jpg')} />
   
    <Text style={styles.paragraph1}> 
Usopp é um personagem fictício da série em mangá One Piece criada por Eiichiro Oda. Ele faz parte do grupo principal, os Piratas do Chapéu de Palha, onde atua primariamente como atirador mas quando necessário cumpre outras posições como inventor, escultor e pintor.
    </Text>
<Text style={styles.estilo }>Freeza</Text>
    
       <Image style={styles.logo} source={require('../assets/nami.jpg')} />

    <Text style={styles.paragraph1}>
    Nami, é uma personagem fictícia do mangá e anime One Piece criada por Eiichiro Oda. Nami é introduzida na narrativa como uma aliada oportunista do protagonista Monkey D. Luffy mas que possui motivos nobres por trás de suas ações ambíguas.
  </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
     paragraph1: {
    margin: 24,
    fontSize: 18,
    marginTop: 0,
    textAlign: 'center',
  },
    estilo: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 120,
    width: 188,
     borderRadius:12,
  }
});