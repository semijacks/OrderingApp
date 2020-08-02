import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import ScrollableTabView, {
  DefaultTabBar,
} from "react-native-scrollable-tab-view";
import AllScreen from "../screens/AllScreen";
import MenuScreen from "../screens/MenuScreen";
import PopularScreen from "../screens/PopularScreen";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require("../asset/header.png")}
          style={styles.ImageBackground}
          resizeMode="contain"
        >
          <Text style={styles.title}>HOME</Text>
        </ImageBackground>
      </View>
      <View style={styles.tabBar}>
        <ScrollableTabView
          style={{ marginTop: 20 }}
          initialPage={0}
          renderTabBar={() => (
            <DefaultTabBar
              underlineStyle={{
                backgroundColor: "green",
              }}
            />
          )}
        >
          <AllScreen tabLabel="All" />
          <MenuScreen tabLabel="Menu" />
          <PopularScreen tabLabel="Popular" />
        </ScrollableTabView>
      </View>
    </View>
  );
};

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 20,
    position: "absolute",
  },
  tabBar: {
    flex: 1,
    marginTop: width * 0.3,
    paddingHorizontal: 30,
  },
  ImageBackground: {
    width: width * 0.4,
    height: width * 0.4,
    alignItems: "center",
  },
  title: {
    color: "white",
    marginTop: 25,
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default HomeScreen;
