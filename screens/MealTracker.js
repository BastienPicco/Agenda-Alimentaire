import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MealTracker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const navigation = useNavigation();

  const changeDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const navigateToFoodManagement = () => {
    navigation.navigate('FoodManagement'); // Assurez-vous que le nom de votre nouvelle page est correct
  };

  return (
    <View style={styles.container}>
      {/* En-tête avec la date et les boutons de navigation */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeDate(-1)}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.date}>{formatDate(currentDate)}</Text>
        <TouchableOpacity onPress={() => changeDate(1)}>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Affichage des repas du midi et du soir */}
      <View style={styles.mealsContainer}>
        <Text style={styles.mealLabel}>Repas du midi :</Text>
        <TextInput
          style={[styles.mealInput, styles.textArea]}
          multiline={true}
          numberOfLines={4}
          value={lunch}
          onChangeText={(text) => setLunch(text)}
          placeholder="Entrez le repas du midi"
        />

        <Text style={styles.mealLabel}>Repas du soir :</Text>
        <TextInput
          style={[styles.mealInput, styles.textArea]}
          multiline={true}
          numberOfLines={4}
          value={dinner}
          onChangeText={(text) => setDinner(text)}
          placeholder="Entrez le repas du soir"
        />
      </View>

      {/* Bouton "Plats" pour naviguer vers la nouvelle page */}
      <TouchableOpacity style={styles.foodButton} onPress={navigateToFoodManagement}>
        <Text style={styles.foodButtonText}>Plats</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between', // Pour espacer les éléments verticalement
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mealsContainer: {
    width: '100%',
  },
  mealLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  mealInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
  },
  foodButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 50,
  },
  foodButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MealTracker;
