import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/Atoms/Buttons/CustomButton";
import { useRouter } from "expo-router";

const Welcome = ({}) => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Welcome!
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Make easy, fast and accurate class attendance
        </ThemedText>
      </ThemedView>
      <CustomButton title="Get Started!" onPress={() => router.push("../")} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "none",
    gap: 50,
  },
  logo: {
    width: "50%",
    height: "50%",
    alignSelf: "center",
  },
  titleContainer: {
    backgroundColor: "none",
  },
  title: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
  },
});

export default Welcome;
