import { Ionicons } from '@expo/vector-icons';
import { router} from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

export default function Perfil() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Ionicons name="qr-code-outline" size={20} style={styles.icon}/>
            <View style={styles.logo}/>
            <Text style={styles.title}>Nome do usuário</Text>
        <Pressable>
            <Text style={styles.text}><Ionicons name="call-outline"/> Adicione um telefone </Text>
        </Pressable>

        <View style={styles.card}>
            <View style={styles.logo}></View>
            <Pressable style={styles.infoBlock}>
          <Text style={styles.title}>Entrega mais segura!</Text>  
          <Text style={styles.text}>Agora dá para alterar o código de entrega. Vem ver!</Text> 
        </Pressable>
        <Ionicons name="chevron-forward-outline" size={40} style={styles.icon}/>
        </View>

        <Pressable>
      <View style={styles.card}>
        <Ionicons name="chatbubble-ellipses-outline" size={30} style={styles.icon}/>
        <View style={styles.infoBlock}>
      <Text style={styles.title}>Conversas</Text>  
      <Text style={styles.text}>Meu histórico de conversas</Text> 
      </View>
      <Ionicons name="chevron-forward-outline" size={30} style={styles.icon}/>
      </View>
      </Pressable>

      <Pressable>
      <View style={styles.card}>
        <Ionicons name="notifications-outline" size={30} style={styles.icon}/>
        <View style={styles.infoBlock}>
      <Text style={styles.title}>Notificações</Text>  
      <Text style={styles.text}>Minha central de notificações</Text> 
      </View>
      <Ionicons name="chevron-forward-outline" size={30} style={styles.icon}/>
      </View>
      </Pressable>

      <Pressable>
      <View style={styles.card}>
        <Ionicons name="reader-outline" size={30} style={styles.icon}/>
        <View style={styles.infoBlock}>
      <Text style={styles.title}>Dados da Conta</Text>  
      <Text style={styles.text}>Minhas informações da conta</Text> 
      </View>
      <Ionicons name="chevron-forward-outline" size={30} style={styles.icon}/>
      </View>
      </Pressable>

      <Pressable onPress={() => router.push('/(tabs)/pagamento')}>
      <View style={styles.card}>
        <Ionicons name="card-outline" size={30} style={styles.icon}/>
        <View style={styles.infoBlock}>
      <Text style={styles.title}>Pagamentos</Text>  
      <Text style={styles.text}>Meus saldos e cartões</Text> 
      </View>
      <Ionicons name="chevron-forward-outline" size={30} style={styles.icon}/>
      </View>
      </Pressable>

      <Pressable>
      <View style={styles.card}>
        <Ionicons name="diamond-outline" size={30} style={styles.icon}/>
        <View style={styles.infoBlock}>
      <Text style={styles.title}>Clube Ifood</Text>  
      <Text style={styles.text}>Meus benefícios exclusivos</Text> 
      </View>
      <Ionicons name="chevron-forward-outline" size={30} style={styles.icon}/>
      </View>
      </Pressable>

      <Pressable>
      <View style={styles.card}>
        <Ionicons name="receipt-outline" size={30} style={styles.icon}/>
        <View style={styles.infoBlock}>
      <Text style={styles.title}>Cupons</Text>  
      <Text style={styles.text}>Meus Cupons de desconto</Text> 
      </View>
      <Ionicons name="chevron-forward-outline" size={30} style={styles.icon}/>
      </View>
      </Pressable>

      <Pressable>
      <View style={styles.card}>
        <Ionicons name="people-outline" size={30} style={styles.icon}/>
        <View style={styles.infoBlock}>
      <Text style={styles.title}>Comunidade</Text>  
      <Text style={styles.text}>Junte-se a nós</Text> 
      </View>
      <Ionicons name="chevron-forward-outline" size={30} style={styles.icon}/>
      </View>
      </Pressable>

      <Pressable>
      <View style={styles.card}>
        <Ionicons name="keypad-outline" size={30} style={styles.icon}/>
        <View style={styles.infoBlock}>
      <Text style={styles.title}>Código de entrega</Text>  
      <Text style={styles.text}>Alterar meu código de entrega</Text> 
      </View>
      <Ionicons name="chevron-forward-outline" size={30} style={styles.icon}/>
      </View>
      </Pressable>
      
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
    marginBottom: 2,
    marginTop: 16,
    flex: 1,
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 30,
    marginRight: 12,
    alignSelf: 'auto',
    marginBottom: 10,
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
  icon:{
    alignSelf: 'flex-end',
    marginTop: 0,
    marginBottom: 7,
    marginRight: 5,
  }
});
