import { useStore } from "@/context/StoreContext";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Cart() {
  const { cart, removeFromCart } = useStore();
  const router = useRouter();
  
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 40.0 : 0;
  const importDuty = cart.length > 0 ? 128.0 : 0;
  const total = subtotal + shipping + importDuty;

  const handleRemove = (id: number, name: string) => {
    removeFromCart(id);
    Toast.show({
      type: "info",
      text1: "Removed from Cart",
      text2: `${name} has been removed.`,
      position: "bottom",
    });
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <View className="flex-1 bg-white">
      <View className="border-b border-[#EBF0FF] p-4">
        <Text className="font-poppins700 text-[#223263] text-base">Your Cart</Text>
      </View>

      {cart.length === 0 ? (
        <View className="flex-1 justify-center items-center px-10">
          <View className="w-24 h-24 bg-[#F0F5FF] rounded-full justify-center items-center mb-4">
            <MaterialIcons name="shopping-cart" size={40} color="#40BFFF" />
          </View>
          <Text className="font-poppins700 text-xl text-[#223263] mb-2">
            Your Cart is Empty
          </Text>
          <Text className="font-poppins400 text-sm text-[#9098B1] text-center mb-6">
            Looks like you haven't added anything to your cart yet.
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/tabs/home")}
            className="bg-[#40BFFF] px-8 py-3 rounded-md"
          >
            <Text className="text-white font-poppins700">Go Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4">
          <View className="mt-4 gap-4">
            {cart.map(item => (
              <View key={item.product.id} className="flex-row border border-[#EBF0FF] p-4 rounded-md items-center">
                <View className="w-20 h-20 rounded-md overflow-hidden bg-[#F6F6F6]">
                  <Image 
                    source={item.product.image} 
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover" 
                  />
                </View>
                <View className="flex-1 ml-4 h-20 justify-between">
                  <View className="flex-row justify-between items-start">
                    <Text className="font-poppins700 text-[#223263] text-[12px] flex-1 mr-2" numberOfLines={2}>
                      {item.product.name}
                    </Text>
                    <TouchableOpacity onPress={() => handleRemove(item.product.id, item.product.name)}>
                      <MaterialIcons name="delete-outline" size={20} color="#9098B1" />
                    </TouchableOpacity>
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="font-poppins700 text-[#40BFFF] text-xs">${item.product.price.toFixed(2)}</Text>
                    <View className="flex-row items-center border border-[#EBF0FF] rounded-md">
                      <TouchableOpacity className="px-2 py-1">
                        <FontAwesome name="minus" size={10} color="#9098B1" />
                      </TouchableOpacity>
                      <Text className="px-3 font-poppins400 text-xs text-[#223263]">{item.quantity}</Text>
                      <TouchableOpacity className="px-2 py-1 bg-[#EBF0FF] rounded-r-md">
                        <FontAwesome name="plus" size={10} color="#9098B1" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View className="mt-8 border border-[#EBF0FF] p-4 rounded-md mb-8">
            <View className="flex-row justify-between mb-3">
              <Text className="font-poppins400 text-[#9098B1] text-xs">Items ({cart.length})</Text>
              <Text className="font-poppins400 text-[#223263] text-xs">${subtotal.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between mb-3">
              <Text className="font-poppins400 text-[#9098B1] text-xs">Shipping</Text>
              <Text className="font-poppins400 text-[#223263] text-xs">${shipping.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between mb-3">
              <Text className="font-poppins400 text-[#9098B1] text-xs">Import Duty</Text>
              <Text className="font-poppins400 text-[#223263] text-xs">${importDuty.toFixed(2)}</Text>
            </View>
            <View className="border-t border-[#EBF0FF] pt-3 flex-row justify-between">
              <Text className="font-poppins700 text-[#223263] text-xs">Total Price</Text>
              <Text className="font-poppins700 text-[#40BFFF] text-xs">${total.toFixed(2)}</Text>
            </View>
          </View>

          <TouchableOpacity 
            onPress={handleCheckout}
            className="bg-[#40BFFF] py-4 rounded-md mb-8 shadow-sm"
          >
            <Text className="text-center font-poppins700 text-white text-sm">Check Out</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}
