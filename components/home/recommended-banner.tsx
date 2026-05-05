import React, { FC } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

const RecommendedBanner: FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/recomendedimage.png")}
      className="rounded-lg overflow-hidden my-4 mx-4"
      resizeMode="cover"
      style={{ height: 200 }}
    >
      <View className="flex-1 justify-center px-6 bg-black/10">
        <Text className="text-white text-2xl font-poppins700 mb-2 shadow-sm">
          Recommended Product
        </Text>
        <Text className="text-white text-xs font-poppins400 mb-4 w-3/4">
          We have picked the best seller for you
        </Text>
        <TouchableOpacity className="bg-white w-32 py-2 rounded-md shadow-sm">
          <Text className="text-center text-[#223263] font-poppins600 text-sm">
            See More
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RecommendedBanner;
