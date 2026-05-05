import { useRouter } from "expo-router";
import React, { FC } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ProductCard from "../common/ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: any;
  badge?: string;
}

interface SectionProps {
  title: string;
  products: Product[];
  onViewMore?: () => void;
}

const FeaturedSection: FC<SectionProps> = ({ title, products, onViewMore }) => {
  const router = useRouter();

  return (
    <View className="py-4 px-4">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="font-poppins700 text-base text-[#223263]">
          {title}
        </Text>
        <TouchableOpacity onPress={onViewMore}>
          <Text className="font-poppins600 text-sm text-[#40BFFF]">
            View More
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="w-[48%] mb-4">
            <ProductCard
              {...item}
              onPress={() => router.push({ pathname: "/product/[id]", params: { id: item.id.toString() } })}
            />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default FeaturedSection;
