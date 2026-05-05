import React, { FC } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface Category {
  id: number;
  name: string;
  icon: any;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Shirt",
    icon: require("../../assets/images/shirt.png"),
  },
  {
    id: 2,
    name: "Shoes",
    icon: require("../../assets/images/shirt.png"),
  },
  {
    id: 3,
    name: "Jacket",
    icon: require("../../assets/images/shirt.png"),
  },
  {
    id: 4,
    name: "Pants",
    icon: require("../../assets/images/shirt.png"),
  },
  {
    id: 5,
    name: "Accessories",
    icon: require("../../assets/images/shirt.png"),
  },
];

const Categories: FC = () => {
  const handleMoreCategory = () => {
    console.log("Navigate to more categories");
  };

  return (
    <View className="py-6 px-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="font-poppins700 text-sm text-[#223263]">Category</Text>
        <TouchableOpacity onPress={handleMoreCategory}>
          <Text className="font-poppins700 text-sm text-[#40BFFF]">
            More Category
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-4">
          {categories.map((category: Category) => (
            <TouchableOpacity key={category.id} className="items-center">
              <View className="h-[70px] w-[70px] rounded-full border border-[#EBF0FF] flex justify-center items-center bg-[#F0F5FF]">
                <Image
                  source={category.icon}
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                />
              </View>
              <Text className="font-poppins400 text-xs text-[#223263] mt-2 text-center">
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
