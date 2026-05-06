import { useStore } from "@/context/StoreContext";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState, useMemo } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import ProductCard from "@/components/common/ProductCard";

// Mock product data for search (in a real app, this would come from an API)
const ALL_PRODUCTS = [
  { id: 1, name: "Blue Nike Shoes", price: 89.99, rating: 5, reviews: 128, image: require("../assets/images/product1.png") },
  { id: 2, name: "Red Sneakers", price: 79.99, rating: 4, reviews: 96, image: require("../assets/images/product2.png") },
  { id: 3, name: "Black Athletic Shoes", price: 99.99, rating: 5, reviews: 256, image: require("../assets/images/product3.png") },
  { id: 4, name: "White Sports Shoes", price: 109.99, rating: 4, reviews: 87, image: require("../assets/images/product.png") },
  { id: 5, name: "Premium Leather Shoes", price: 59.99, rating: 5, reviews: 203, image: require("../assets/images/product.png") },
  { id: 6, name: "Casual Sneaker", price: 49.99, rating: 4, reviews: 145, image: require("../assets/images/product1.png") },
  { id: 7, name: "Running Shoes", price: 74.99, rating: 5, reviews: 312, image: require("../assets/images/product2.png") },
  { id: 8, name: "Casual Loafers", price: 64.99, rating: 4, reviews: 98, image: require("../assets/images/product3.png") },
];

export default function Search() {
  const { q } = useLocalSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState((q as string) || "");

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return [];
    return ALL_PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearch = () => {
    // This just triggers a re-render with the current searchQuery
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center border-b border-[#EBF0FF] p-4 gap-2">
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#9098B1" />
        </TouchableOpacity>
        
        <View className="relative flex-1">
          <TextInput
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            autoFocus={!q}
            className="flex-1 border-2 border-[#EBF0FF] rounded-md pl-9 py-2 text-sm font-poppins400 text-[#223263]"
            placeholderTextColor="#9098B1"
          />
          <TouchableOpacity className="absolute top-1/2 -translate-y-1/2 left-3">
            <FontAwesome name="search" size={14} color="#40BFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {searchQuery && filteredProducts.length > 0 ? (
        <View className="flex-1">
           <View className="p-4 flex-row justify-between items-center">
              <Text className="font-poppins700 text-[#223263] text-sm">
                {filteredProducts.length} Results
              </Text>
           </View>
           <FlatList
             data={filteredProducts}
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
             contentContainerStyle={{ padding: 16 }}
             columnWrapperStyle={{ justifyContent: "space-between" }}
           />
        </View>
      ) : searchQuery ? (
        <View className="flex-1 justify-center items-center px-10">
          <View className="w-20 h-20 bg-[#F0F5FF] rounded-full justify-center items-center mb-4">
            <MaterialIcons name="search-off" size={40} color="#40BFFF" />
          </View>
          <Text className="font-poppins700 text-lg text-[#223263] mb-2">No Results Found</Text>
          <Text className="font-poppins400 text-xs text-[#9098B1] text-center">
            We couldn't find any products matching your search.
          </Text>
        </View>
      ) : (
        <View className="flex-1 p-4">
           <Text className="font-poppins700 text-[#223263] text-sm mb-4">Recent Searches</Text>
           {["Nike Shoes", "Sneakers", "Running"].map((item, index) => (
             <TouchableOpacity 
               key={index} 
               className="flex-row items-center py-3 border-b border-[#F6F6F6]"
               onPress={() => setSearchQuery(item)}
             >
                <MaterialIcons name="history" size={20} color="#9098B1" />
                <Text className="ml-3 font-poppins400 text-xs text-[#9098B1]">{item}</Text>
             </TouchableOpacity>
           ))}
        </View>
      )}
    </View>
  );
}
