import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Pagamento() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1226955114/pt/vetorial/payment-from-phone-by-card-hand-holding-mobile-with-app-of-online-pay-contactless.jpg?s=1024x1024&w=is&k=20&c=1-iHAnwT-4vBmk3IuYqabsIue5W2Lf9t6iueyhM1RQ0=' }}
        style={styles.imagem}
        resizeMode="contain"
      />
      
      <View style={styles.boxTexto}>
        <Text style={styles.textoCartao}>Peça seu Cartão na nossa loja e receba ofertas Exclusivas!!!</Text>
      </View>
      
      <View style={styles.card}>
        <Pressable style={styles.infoBlock}>
          <Text style={styles.title}>Peça Já !!!</Text>
          <Text style={styles.text}>Agora temos Envio para todo Brasil.</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  boxTexto: {
    width: '40%',
    padding: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoCartao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    width: '30%',
    justifyContent: 'center',
  },
  infoBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
