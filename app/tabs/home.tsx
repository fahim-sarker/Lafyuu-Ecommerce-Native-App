import Categories from "@/components/home/category";
import FeaturedSection from "@/components/home/featured-section";
import ProductSlider from "@/components/home/product-slider";
import RecommendedBanner from "@/components/home/recommended-banner";
import { useRouter } from "expo-router";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";

const freshLooksProducts = [
  {
    id: 1,
    name: "Blue Nike Shoes",
    price: 89.99,
    originalPrice: 120.0,
    rating: 5,
    reviews: 128,
    image: require("../../assets/images/product1.png"),
  },
  {
    id: 2,
    name: "Red Sneakers",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4,
    reviews: 96,
    image: require("../../assets/images/product2.png"),
  },
  {
    id: 3,
    name: "Black Athletic Shoes",
    price: 99.99,
    originalPrice: 150.0,
    rating: 5,
    reviews: 256,
    image: require("../../assets/images/product3.png"),
  },
  {
    id: 4,
    name: "White Sports Shoes",
    price: 109.99,
    rating: 4,
    reviews: 87,
    image: require("../../assets/images/product.png"),
  },
];

const megaSaleProducts = [
  {
    id: 5,
    name: "Premium Leather Shoes",
    price: 59.99,
    originalPrice: 149.99,
    rating: 5,
    reviews: 203,
    image: require("../../assets/images/product.png"),
  },
  {
    id: 6,
    name: "Casual Sneaker",
    price: 49.99,
    originalPrice: 89.99,
    rating: 4,
    reviews: 145,
    image: require("../../assets/images/product1.png"),
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 74.99,
    originalPrice: 129.99,
    rating: 5,
    reviews: 312,
    image: require("../../assets/images/product2.png"),
  },
  {
    id: 8,
    name: "Casual Loafers",
    price: 64.99,
    originalPrice: 119.99,
    rating: 4,
    reviews: 98,
    image: require("../../assets/images/product3.png"),
  },
];

const recommendedProducts = [
  {
    id: 9,
    name: "Latest Sneaker 2024",
    price: 119.99,
    rating: 5,
    reviews: 45,
    image: require("../../assets/images/product1.png"),
  },
  {
    id: 10,
    name: "Modern Athletic Shoe",
    price: 99.99,
    rating: 4,
    reviews: 32,
    image: require("../../assets/images/product2.png"),
  },
  {
    id: 11,
    name: "Trendy Casual Shoe",
    price: 89.99,
    rating: 5,
    reviews: 67,
    image: require("../../assets/images/product3.png"),
  },
  {
    id: 12,
    name: "Professional Sports Shoe",
    price: 129.99,
    rating: 5,
    reviews: 89,
    image: require("../../assets/images/product.png"),
  },
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center border-b border-[#EBF0FF] p-4 gap-2">
        <View className="relative flex-1">
          <TextInput
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={() => router.push({ pathname: "/search", params: { q: searchQuery } })}
            onFocus={() => router.push("/search")}
            className="flex-1 border-2 border-[#EBF0FF] rounded-md pl-9 py-3 text-sm font-poppins400 text-[#223263]"
            placeholderTextColor="#9098B1"
          />
          <TouchableOpacity className="absolute top-1/2 -translate-y-1/2 left-3">
            <FontAwesome name="search" size={16} color="#FF3B30" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          onPress={() => router.push("/tabs/wishlist")}
          className="bg-[#F0F5FF] p-3 rounded-md"
        >
          <FontAwesome name="heart-o" size={20} color="#FF3B30" />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push("/notifications")}
          className="bg-[#F0F5FF] p-3 rounded-md relative"
        >
          <MaterialIcons name="notifications-none" size={20} color="#223263" />
          <View className="absolute top-1 right-1 bg-[#FF3B30] w-2 h-2 rounded-full" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <ProductSlider />
        <Categories />

        <FeaturedSection
          title="Fresh Looks"
          products={freshLooksProducts}
          onViewMore={() => console.log("View more fresh looks")}
        />

        <FeaturedSection
          title="Mega Sale"
          products={megaSaleProducts}
        />

        <RecommendedBanner />

        <FeaturedSection
          title="Recommended Product"
          products={recommendedProducts}
        />

        <View className="h-6" />
      </ScrollView>
    </View>
  );
}
