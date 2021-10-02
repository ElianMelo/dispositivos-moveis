import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import LampItem from './LampItem';

export default function LampApp({ navigation }) {
  const img = require('../assets/icone-sacola.png');

  const DATA = [
    {
      id: 1,
      title: "Abajur",
      img: require('../assets/01-tablelamps.png'),
      estudio: "asd",
      description: "asd"
    },
    {
      id: 2,
      title: "Lâmpada de teto",
      img: require('../assets/02-ceilinglamps.png')
    },
    {
      id: 3,
      title: "Arandela",
      img: require('../assets/03-sconces.png')
    },
    {
      id: 4,
      title: "Luminária de chão",
      img: require('../assets/04-floorlamps.png')
    },
    {
      id: 5,
      title: "Iluminação leve",
      img: require('../assets/05-lightdecor.png')
    },
    {
      id: 6,
      title: "Guirlandas",
      img: require('../assets/06-garlands.png')
    },
  ]

  const renderItem = ({ item }) => (
    <LampItem name={item.title} img={item.img} navigation={navigation}/>
  );

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={[styles.line, styles.topBar]}>
          <Text style={styles.importantText}>Lighteria</Text>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={img}
            />
          </View>
        </View>
        <View style={styles.line}>
          <View style={styles.categoryLine}></View>
          <Text style={styles.categoryGray}>Categorias</Text>
          <View style={styles.categoryLine}></View>
        </View>
        <FlatList
            contentContainerStyle={{
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}
            data={DATA}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 25,
    marginLeft: 20,
    fontWeight: "400"
  },
  container: {
    height: "100%",
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#F4F0F4",
  },
  items: {
    flexDirection: "row",
    justifyContent: "center"
  },
  line: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 4,
    backgroundColor: "#F4F0F4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8
  },
  image: {
    width: 25,
    height: 25
  },
  imageBox: {
    backgroundColor: "white",
    borderRadius: 200,
    padding: 8
  },
  topBar: {
    marginTop: 10,
    justifyContent: "space-between"
  },
  importantText: {
    fontSize: 30,
    fontWeight: "900"
  },
  categoryGray: {
    color: "gray",
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5
  },
  categoryLine: {
    height: 1,
    width: "auto",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#D3D3D3",
    flexGrow: 1,
  },
  background: {
    height: "100%"
  }
});
