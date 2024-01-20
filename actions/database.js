// Import du module d'accès à la base de données
import SQLite from 'react-native-sqlite-storage';

// Fonction pour créer la base de données et les tables
const initializeDatabase = () => {
  const db = SQLite.openDatabase({ name: 'fooddatabase.db', location: 'default' });

  // Création de la table des plats
  db.transaction((tx) => {
    tx.executeSql(`
        CREATE TABLE IF NOT EXISTS meals (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          date TEXT NOT NULL,
          type TEXT NOT NULL
        )`
    );
  });
};

// Fonction pour insérer un plat dans la base de données
const insertMeal = (name) => {
  const db = SQLite.openDatabase({ name: 'mydatabase.db', location: 'default' });

  db.transaction((tx) => {
    tx.executeSql('INSERT INTO meals (name, date, type) VALUES (?, ?, ?)', [name, date, type]);
  });
};

// Fonction pour récupérer tous les plats de la base de données
const getAllMeals = (callback) => {
    const db = SQLite.openDatabase({ name: 'mydatabase.db', location: 'default' });
  
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM meals', [], (_, { rows }) => {
        const meals = rows._array;
        callback(meals);
      });
    });
  };

// Appel de la fonction d'initialisation au lancement de l'application
initializeDatabase();
