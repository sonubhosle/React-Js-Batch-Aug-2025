

import { useState } from "react"
import Breadcrumb from "../../Components/ProductDetails/Breadcrumb"
import OffersSection from "../../Components/ProductDetails/OffersSection"    
import ProductImageGallery from "../../Components/ProductDetails/ImageGallery"
import RelatedProducts from "../../Components/ProductDetails/RelatedProducts"
import ReviewsSection from "../../Components/ProductDetails/Reviews"
import Product from "../../Components/ProductDetails/Product"


const productData = {
  id: 1,
  brand: "Premium Fashion",
  title: "Classic Cotton T-Shirt",
  price: 89.99,
  originalPrice: 129.99,
  discount: 31,
  rating: 4.5,
  reviewCount: 128,
  description:
    "Experience ultimate comfort with our premium cotton t-shirt. Made from 100% organic cotton, this versatile piece features a classic fit that works for any occasion. The breathable fabric ensures all-day comfort while maintaining its shape wash after wash.",
  colors: [
    {
      name: "Orange",
      value: "#f97316",
      image: "/orange-cotton-t-shirt-front.png",
      images: [
        "/orange-cotton-t-shirt-front.png",
        "/orange-cotton-t-shirt-back.png",
        "/orange-cotton-t-shirt-side.png",
      ],
    },
    {
      name: "Yellow",
      value: "#eab308",
      image: "/yellow-cotton-t-shirt-front.png",
      images: ["/yellow-cotton-t-shirt-front.png", "/yellow-cotton-t-shirt-back.png"],
    },
    {
      name: "Maroon",
      value: "#991b1b",
      image: "/maroon-cotton-t-shirt-front.png",
      images: ["/maroon-cotton-t-shirt-front.png", "/maroon-cotton-t-shirt-back.png"],
    },
    {
      name: "Sky Blue",
      value: "#0ea5e9",
      image: "/skyblue-cotton-t-shirt-front.png",
      images: ["/skyblue-cotton-t-shirt-front.png", "/skyblue-cotton-t-shirt-back.png"],
    },
    {
      name: "Navy Blue",
      value: "#1e40af",
      image: "/navyblue-cotton-t-shirt-front.png",
      images: ["/navyblue-cotton-t-shirt-front.png", "/navyblue-cotton-t-shirt-back.png"],
    },
    {
      name: "Red",
      value: "#dc2626",
      image: "/red-cotton-t-shirt-front.png",
      images: ["/red-cotton-t-shirt-front.png", "/red-cotton-t-shirt-back.png"],
    },
  ],
  sizes: ["M", "XL", "XXL"],
  features: ["100% Organic Cotton", "Machine Washable", "Classic Fit", "Breathable Fabric", "Pre-shrunk"],
}

const ProductPage = ()  =>{
  const [selectedColor, setSelectedColor] = useState(productData.colors[0])
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0])
  const [selectedImage, setSelectedImage] = useState(productData.colors[0].images[0])

const handleColorChange = (color) => {
  setSelectedColor(color);
  setSelectedImage(color.images[0]);
};

  return (
    <div className="min-h-screen bg-white">
      <div className=" px-4 py-6">
        <Breadcrumb />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Left Section - Image Gallery and Action Buttons */}
          <div className="space-y-6">
            <ProductImageGallery
              images={selectedColor.images}
              selectedImage={selectedImage}
              onImageSelect={setSelectedImage}
              productTitle={productData.title}
            />

            <OffersSection />
          </div>

          {/* Right Section - Product Details */}
          <Product
            product={productData}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onColorChange={handleColorChange}
            onSizeChange={setSelectedSize}
          />
        </div>

        {/* Related Products */}
        <RelatedProducts />

        {/* Reviews Section */}
        <ReviewsSection productId={productData.id} />
      </div>
    </div>
  )
}


export default ProductPage