import { useStore } from "@/context/StoreContext";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Checkout() {
  const { cart, clearCart } = useStore();
  const router = useRouter();
  
  const [shippingMethod, setShippingMethod] = useState("regular");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = shippingMethod === "regular" ? 40.0 : 60.0;
  const importDuty = 128.0;
  const total = subtotal + shipping + importDuty;

  const handlePayNow = () => {
    clearCart();
    // Navigate to Order Complete screen
    router.push("/order-complete");
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center border-b border-[#EBF0FF] p-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <MaterialIcons name="arrow-back" size={24} color="#9098B1" />
        </TouchableOpacity>
        <Text className="font-poppins700 text-lg text-[#223263] flex-1">
          Checkout
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4 pt-4">
        {/* Shipping Address */}
        <View className="mb-6">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">Shipping Address</Text>
          <View className="border border-[#EBF0FF] p-4 rounded-md">
            <Text className="font-poppins700 text-[#223263] text-sm mb-2">Priscekila</Text>
            <Text className="font-poppins400 text-[#9098B1] text-xs leading-5">
              3711026017 12th St, New York, NY 10001, United States
            </Text>
            <Text className="font-poppins400 text-[#9098B1] text-xs mt-2">+1 123-456-7890</Text>
          </View>
        </View>

        {/* Shipping Method */}
        <View className="mb-6">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">Shipping Method</Text>
          <TouchableOpacity 
            onPress={() => setShippingMethod("regular")}
            className={`flex-row items-center justify-between p-4 rounded-md border ${shippingMethod === "regular" ? "border-[#40BFFF] bg-[#F0F5FF]" : "border-[#EBF0FF]"}`}
          >
            <View>
              <Text className="font-poppins700 text-[#223263] text-xs">Regular Shipping</Text>
              <Text className="font-poppins400 text-[#9098B1] text-[10px]">Delivered in 3-5 days</Text>
            </View>
            <Text className="font-poppins700 text-[#40BFFF] text-xs">$40.00</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setShippingMethod("express")}
            className={`flex-row items-center justify-between p-4 rounded-md border mt-3 ${shippingMethod === "express" ? "border-[#40BFFF] bg-[#F0F5FF]" : "border-[#EBF0FF]"}`}
          >
            <View>
              <Text className="font-poppins700 text-[#223263] text-xs">Express Shipping</Text>
              <Text className="font-poppins400 text-[#9098B1] text-[10px]">Delivered in 1-2 days</Text>
            </View>
            <Text className="font-poppins700 text-[#40BFFF] text-xs">$60.00</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Method */}
        <View className="mb-6">
          <Text className="font-poppins700 text-[#223263] text-sm mb-3">Payment Method</Text>
          <TouchableOpacity 
            onPress={() => setPaymentMethod("credit_card")}
            className={`flex-row items-center p-4 rounded-md border mb-3 ${paymentMethod === "credit_card" ? "border-[#40BFFF] bg-[#F0F5FF]" : "border-[#EBF0FF]"}`}
          >
            <MaterialIcons name="credit-card" size={24} color={paymentMethod === "credit_card" ? "#40BFFF" : "#9098B1"} />
            <Text className="ml-4 font-poppins700 text-[#223263] text-xs">Credit Card or Debit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setPaymentMethod("paypal")}
            className={`flex-row items-center p-4 rounded-md border mb-3 ${paymentMethod === "paypal" ? "border-[#40BFFF] bg-[#F0F5FF]" : "border-[#EBF0FF]"}`}
          >
            <FontAwesome5 name="paypal" size={20} color={paymentMethod === "paypal" ? "#40BFFF" : "#9098B1"} />
            <Text className="ml-4 font-poppins700 text-[#223263] text-xs">Paypal</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setPaymentMethod("bank_transfer")}
            className={`flex-row items-center p-4 rounded-md border ${paymentMethod === "bank_transfer" ? "border-[#40BFFF] bg-[#F0F5FF]" : "border-[#EBF0FF]"}`}
          >
            <MaterialIcons name="account-balance" size={24} color={paymentMethod === "bank_transfer" ? "#40BFFF" : "#9098B1"} />
            <Text className="ml-4 font-poppins700 text-[#223263] text-xs">Bank Transfer</Text>
          </TouchableOpacity>
        </View>

        {/* Order Summary */}
        <View className="mt-4 border border-[#EBF0FF] p-4 rounded-md mb-8">
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
          onPress={handlePayNow}
          className="bg-[#40BFFF] py-4 rounded-md mb-12 shadow-sm"
        >
          <Text className="text-center font-poppins700 text-white text-sm">Pay Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
