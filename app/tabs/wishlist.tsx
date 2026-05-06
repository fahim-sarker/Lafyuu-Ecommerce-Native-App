import { useStore } from "@/context/StoreContext";
import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ProductCard from "@/components/common/ProductCard";

export default function Wishlist() {
  const { wishlist } = useStore();
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center border-b border-[#EBF0FF] p-4">
        <Text className="font-poppins700 text-lg text-[#223263] flex-1">
          Wishlist
        </Text>
      </View>

      {wishlist.length === 0 ? (
        <View className="flex-1 justify-center items-center px-10">
          <View className="w-24 h-24 bg-[#F0F5FF] rounded-full justify-center items-center mb-4">
            <FontAwesome name="heart-o" size={40} color="#40BFFF" />
          </View>
          <Text className="font-poppins700 text-xl text-[#223263] mb-2">
            Your Wishlist is Empty
          </Text>
          <Text className="font-poppins400 text-sm text-[#9098B1] text-center mb-6">
            Tap heart button on products to add them to your wishlist.
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/tabs/home")}
            className="bg-[#40BFFF] px-8 py-3 rounded-md"
          >
            <Text className="text-white font-poppins700">Go to Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          renderItem={({ item }) => (
            <View className="w-[48%] mb-4">
              <ProductCard
                {...item}
                onPress={() =>
                  router.push({
                    pathname: "/product/[id]",
                    params: { id: item.id.toString() },
                  })
                }
              />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ padding: 16 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      )}
    </View>
  );
}
