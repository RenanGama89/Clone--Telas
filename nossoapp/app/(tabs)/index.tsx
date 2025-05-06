import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Loja() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.banner} />

      <View style={styles.card}>
        <View style={styles.logo} />
        <View style={styles.infoBlock}>
          <Text style={styles.title}>Nome da Loja</Text>
          <Text style={styles.text}>Entrega rastreável • 1,0 km • Min R$ --,--</Text>
          <Text style={styles.text}>4,9 • Nível 4 de 5</Text>
          <Text style={styles.text}>Entrega: Hoje, 35–45 min • Grátis</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Destaques</Text>
      <View style={styles.grid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <View key={index} style={styles.productCard}>
            <View style={styles.productImage} />
            <Text style={styles.price}>R$ --,--</Text>
            <Text style={styles.productName}>Produto {index + 1}</Text>
          </View>
        ))}
      </View>

      <View style={styles.couponBanner}>
        <Text style={styles.couponText}>cupons aqui</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  banner: {
    height: 160,
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 30,
    marginRight: 12,
    alignSelf: 'center',
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  productCard: {
    width: '48%',
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  productName: {
    fontSize: 12,
    color: '#333',
  },
  couponBanner: {
    backgroundColor: '#eee',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  couponText: {
    color: '#9900cc',
    fontWeight: 'bold',
  },
});
