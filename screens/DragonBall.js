import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';

export default function AssetExample() {
  return (
 
<ScrollView>
<SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>Dragon Ball Z </Text>
      
      <Image style={styles.logo} source={require('../assets/dragon_capa.jpg')} />

      
    <Text style={styles.estilo }>
    Dragon Ball é uma franquia de mídia japonesa criada por Akira Toriyama. Originalmente iniciada com uma série de mangá escrita e ilustrada por Toriyama, foi serializada em capítulos na revista Weekly Shonen Jump de 1984 a 1995. Os 519 capítulos foram compilados em 42 volumes tankōbon e publicados pela editora Shueisha.
    </Text>
    <Text style={styles.estilo }>Personagens:</Text>
    
     <Text style={styles.estilo }>Dragon-Ball</Text>
     <Image style={styles.logo} source={require('../assets/Dragon-Ball.jpg')} />
    
   <Text style={styles.paragraph1}> 
     A série segue as aventuras do protagonista, Son Goku, desde sua infância até a idade adulta enquanto ele treina artes marciais e explora o mundo em busca de sete esferas conhecidas como as Esferas do Dragão, que convocam um dragão que concede um desejo quando reunidas. Ao longo de sua jornada, Goku faz vários amigos e luta contra uma grande variedade de vilões, muitos dos quais também procuram as Esferas do Dragão.
    </Text>
   <Text style={styles.estilo }>Bulma</Text>
     
    <Image style={styles.logo} source={require('../assets/Bulma.jpg')} />
    
   <Text style={styles.paragraph1}>
   As invenções de Bulma têm grande importância em certos pontos da série. Suas criações de maior destaque são o radar do dragão, um aparato que permitia que ela encolhesse, uma máquina do tempo que trouxe seu filho Trunks ao passado em Dragon Ball Z e um gerador que possibilitou que seu marido Vegeta alcançasse o nível Super Saiyajin 4 em Dragon Ball GT.</Text>
  <Text style={styles.estilo }>Piccolo</Text>
     
    <Image style={styles.logo} source={require('../assets/Piccolo.jpg')} />
   
  <Text style={styles.paragraph1}> 
Piccolo foi criado por Akira Toriyama quando ele queria um antagonista que fosse um verdadeiro personagem maligno. Antes da sua criação, quase todos os vilões da série eram considerados muito adoráveis. Quando Piccolo foi criado, Toriyama percebeu que sua aparição se transformou em um dos momentos mais interessantes da história e ele se tornou um de seus personagens favoritos.
    </Text>
 <Text style={styles.estilo }>Freeza</Text>
    
  <Image style={styles.logo} source={require('../assets/freeza.jpg')} />

 <Text style={styles.paragraph1}>
      Freeza, um ditador alienígena que forçosamente assume planetas para revendê-los, foi criado no período da bolha econômica japonesa e inspirado em imobiliários especuladores, a quem Toriyama teria chamado de "o pior tipo de pessoas."[1] Toriyama não se sentia atraído com seus personagens vilões, embora admitisse que Freeza estava perto disso. Por isso, ele prestou atenção especial à forma como Freeza se comportava. A maioria dos vilões tipicamente fala rudemente, por causa disso, Freeza ganhou um aspecto mais educado em contraste com sua inquietante crueldade.
  </Text>
    </View>
    </SafeAreaView>
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
    height: 128,
    width: 188,
     borderRadius:12,
  }
});