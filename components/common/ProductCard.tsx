import { useStore } from "@/context/StoreContext";
import { FontAwesome } from "@expo/vector-icons";
import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: any;
  badge?: string;
  onPress?: () => void;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    id,
    name,
    price,
    originalPrice,
    rating,
    reviews,
    image,
    badge,
    onPress,
  } = props;
  
  const { addToWishlist, wishlist, removeFromWishlist } = useStore();
  
  const isWishlisted = wishlist.some((item) => item.id === id);

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleWishlist = (e: any) => {
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(id);
      Toast.show({
        type: "info",
        text1: "Removed from Wishlist",
        text2: `${name} has been removed.`,
        position: "bottom",
      });
    } else {
      addToWishlist({ id, name, price, originalPrice, rating, reviews, image });
      Toast.show({
        type: "success",
        text1: "Added to Wishlist",
        text2: `${name} is now in your wishlist!`,
        position: "bottom",
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-lg border border-[#EBF0FF] overflow-hidden flex-1"
    >
      {/* Image Container */}
      <View className="bg-[#F0F5FF] h-32 justify-center items-center relative">
        <Image
          source={image}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />

        {badge && (
          <View className="absolute top-2 right-2 bg-[#FF3B30] px-2 py-1 rounded">
            <Text className="text-white text-xs font-poppins600">{badge}</Text>
          </View>
        )}

        {discountPercentage > 0 && (
          <View className="absolute top-2 left-2 bg-[#FF3B30] px-2 py-1 rounded">
            <Text className="text-white text-xs font-poppins600">
              -{discountPercentage}%
            </Text>
          </View>
        )}

        <TouchableOpacity 
          onPress={handleWishlist}
          className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-md"
        >
          <FontAwesome name={isWishlisted ? "heart" : "heart-o"} size={14} color="#FF3B30" />
        </TouchableOpacity>
      </View>

      {/* Info Container */}
      <View className="p-2.5">
        <Text
          className="font-poppins600 text-xs text-[#223263] mb-1"
          numberOfLines={2}
        >
          {name}
        </Text>

        {/* Price */}
        <View className="flex-row items-center gap-1.5 mb-1.5">
          <Text className="font-poppins700 text-sm text-[#40BFFF]">
            ${price.toFixed(2)}
          </Text>
          {originalPrice && (
            <Text className="font-poppins400 text-xs text-[#9098B1] line-through">
              ${originalPrice.toFixed(2)}
            </Text>
          )}
        </View>

        {/* Rating */}
        <View className="flex-row items-center gap-0.5">
          <View className="flex-row gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FontAwesome
                key={i}
                name={i < Math.floor(rating) ? "star" : "star-o"}
                size={10}
                color="#FFC107"
              />
            ))}
          </View>
          <Text className="text-xs text-[#9098B1] font-poppins400">
            ({reviews})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
