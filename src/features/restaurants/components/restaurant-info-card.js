import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Rating } from "react-native-ratings";

import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <Card elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <View style={styles.space}>
        <Text>{name}</Text>
        <View style={styles.section}>
          <Rating startingValue={rating} readonly imageSize={20} />
          <View style={styles.sectionEnd}>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </View>
        </View>
        <Text>{address}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  space: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  section: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  sectionEnd: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
