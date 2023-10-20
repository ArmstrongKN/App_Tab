import { Text, SafeAreaView, StyleSheet,ScrollView, Image, View,ImageBackground } from 'react-native';

export default function Home() {
  return (


 
    <ScrollView>
    <SafeAreaView style={styles.container}>
 
      <Text style={styles.paragraph}>
          Animes Online
      </Text>
  <View style={styles.container}>
     <View style={styles.container1}>
      <Image source={require('../assets/dragon_capa.jpg')} style={styles.image} />
      <Image source={require('../assets/16bit.jpg')} style={styles.image} />
      <Image source={require('../assets/helck.jpg')} style={styles.image} />
    </View>
      <View style={styles.container2}>
   
      <Text style={styles.paragraph1}>Dragon Ball</Text>
      <Text style={styles.paragraph1}>16 Bit</Text>
      <Text style={styles.paragraph1}>Helck</Text>
      
    </View>

   <View style={styles.container1}>
      <Image source={require('../assets/ikena.jpg')} style={styles.image} />
      <Image source={require('../assets/keikenzum.jpg')} style={styles.image} />
      <Image source={require('../assets/konyaku.jpg')} style={styles.image} />
    </View>
        <View style={styles.container2}>
   
      <Text style={styles.paragraph1}>Ikena</Text>
      <Text style={styles.paragraph1}>Keikenzum</Text>
      <Text style={styles.paragraph1}>Konyaku</Text>
      
    </View>

       <View style={styles.container1}>
      <Image source={require('../assets/naruto.jpg')} style={styles.image} />
      <Image source={require('../assets/niehime.jpg')} style={styles.image} />
      <Image source={require('../assets/ragna.jpg')} style={styles.image} />
    </View>
        <View style={styles.container2}>
   
      <Text style={styles.paragraph1}>Naruto</Text>
      <Text style={styles.paragraph1}>Niehime</Text>
      <Text style={styles.paragraph1}>Ragna</Text>
      
    </View>

       <View style={styles.container1}>
      <Image source={require('../assets/shy.jpg')} style={styles.image} />
      <Image source={require('../assets/spyce.jpg')} style={styles.image} />
      <Image source={require('../assets/sword.jpg')} style={styles.image} />
    </View>
        <View style={styles.container2}>
   
      <Text style={styles.paragraph1}>Shi</Text>
      <Text style={styles.paragraph1}>Spyce</Text>
      <Text style={styles.paragraph1}>Sword</Text>
      
    </View>

        <View style={styles.container1}>
      <Image source={require('../assets/toaru.jpg')} style={styles.image} />
      <Image source={require('../assets/zen.jpg')} style={styles.image} />
      <Image source={require('../assets/Zoro.jpg')} style={styles.image} />
    </View>
        <View style={styles.container2}>
   
      <Text style={styles.paragraph1}>Toaru</Text>
      <Text style={styles.paragraph1}>Zen</Text>
      <Text style={styles.paragraph1}>Zoro</Text>
      
    </View>

       </View>
    </SafeAreaView>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Isso alinha os itens na vertical
    alignItems: 'center', // Isso centraliza os itens horizontalmente
    backgroundColor: '#ecf0f1',
    padding: 8,
    justifyContent: 'space-between', // Isso coloca espaço igual entre os itens
  },
  container1: {
    flex: 1,
    flexDirection: 'row', // Isso alinha os itens na vertical
    alignItems: 'center', // Isso centraliza os itens horizontalmente
    backgroundColor: '#ecf0f1',
    padding: 8,
    justifyContent: 'space-between', // Isso coloca espaço igual entre os itens
  },
    container2: {
    flex: 1,
    flexDirection: 'row', // Isso alinha os itens na vertical
    alignItems: 'center', // Isso centraliza os itens horizontalmente
    backgroundColor: '#ecf0f1',
    padding: 0,
    justifyContent: 'space-between', // Isso coloca espaço igual entre os itens
  },
  image: {
    width: 80, // Largura da imagem
    height: 100, // Altura da imagem
    marginVertical: 10, // Espaçamento vertical entre as imagens (opcional)
    borderRadius:12,
    margin: 10,
  },
      paragraph: {
    margin: 24,
    fontSize: 14,
    marginTop: 0,
    textAlign: 'center',
  },
    paragraph1: {
    margin: 24,
    fontSize: 14,
    marginTop: 0,
    textAlign: 'center',
  },

});