import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [randomnumber, setRandomNumber] = useState(null);
  const [isEven, setIsEven] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [correctCount, setCorrectCount] = useState(0); // Doğru sayısını saklar
  const [incorrectCount, setIncorrectCount] = useState(0); // Yanlış sayısını saklar

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 900) + 1;
    setRandomNumber(number);
    setIsEven(null);
    setUserChoice(null);
  };

  const checkNumber = (isEven) => {
    setIsEven(isEven);
    if (
      (randomnumber % 2 === 0 && isEven) ||
      (randomnumber % 2 !== 0 && !isEven)
    ) {
      setUserChoice(true);
      setCorrectCount(correctCount + 1); // Doğru sayısını artır
    } else {
      setUserChoice(false);
      setIncorrectCount(incorrectCount + 1); // Yanlış sayısını artır
    }
  };

  return (
    <View style={styles.container}>
      {randomnumber !== null && (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>TEK SAYI MI ?</Text>
            <Text style={styles.text1}>ÇİFT SAYI MI? </Text>
            <Text style={styles.randomText}>{randomnumber}</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={require('./assets/color.png')} />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => checkNumber(true)}>
              <Text style={styles.text1}>ÇİFT SAYI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => checkNumber(false)}>
              <Text style={styles.text1}>TEK SAYI</Text>
            </TouchableOpacity>
          </View>

          {userChoice !== null && (
            <Text style={styles.result}>
              {userChoice ? 'Tebrikler' : 'Bir daha düşün'}
            </Text>
          )}

          <Text style={styles.counts}>
            Doğru: {correctCount} Yanlış: {incorrectCount}
          </Text>

          <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
            <Text style={styles.text1}>YENİ SAYI GELSİN</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginBottom: 5,
    marginTop: 70,
    alignItems: 'center',
    backgroundColor: '#1580C2',
  },
  text1: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  randomText: {
    fontSize: 40,
    marginTop: 12,
    marginBottom: 12,
    color: 'tomato',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'tomato',
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 5,
  },
  result: {
    fontSize: 32,
    marginBottom: 15,
    marginTop: 12,
    color: 'blue',
  },
  counts: {
    fontSize: 24,
    marginVertical: 10,
    color: 'black',
  },
});
