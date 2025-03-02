import { TypographyStyles } from "@/theme/typography";
import { StyleSheet, Text, View } from "react-native";
import { Table } from "./Table";

export const Contact = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Əlaqə Məlumatları</Text>
      <Table text="enihad801@gmail.com" />
      <Table text="+994 77 532 95 07" icon="phone" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 60,
    padding: 20,
    backgroundColor: "#1E293B",
    borderRadius: 20,
  },
  title: {
    ...TypographyStyles.inter24,
    marginBottom: 20,
  },
});
