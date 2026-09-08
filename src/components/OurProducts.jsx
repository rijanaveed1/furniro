import { Share2, ArrowLeftRight, Heart } from "lucide-react";

// Apni product images import karein jab ready hon:
 import syltherine from "../assets/table.png";
import Leviosa from "../assets/white.png";
import Lolito from "../assets/lolito.png";
import Respira from "../assets/respira.png";
import Grifo from "../assets/grifo.png";
import Muggo from "../assets/muggo.png";
import Pingky from "../assets/pingky.png";
import Brown from "../assets/sofa.png";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    badge: null,
    image: syltherine,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    badge: { text: "-30%", color: "bg-red-400" },
    image: Leviosa,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: { text: "-50%", color: "bg-red-400" },
    image: Lolito,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    badge: { text: "New", color: "bg-teal-400" },
    image: Respira,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    oldPrice: null,
    badge: { text: "New", color: "bg-teal-400" },
    image: Grifo,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    oldPrice: null,
    badge: null,
    image: Muggo,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: { text: "-50%", color: "bg-red-400" },
    image: Pingky,
  },
  {
    id: 8,
    name: "Brown",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    oldPrice: null,
    badge: { text: "New", color: "bg-teal-400" },
    image: Brown,
  },
];

export default function OurProducts() {
  return (
    <section className="py-16 px-6 text-center bg-white">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-gray-50 rounded-sm overflow-hidden text-left">

            {/* Image Container */}
            <div className="relative overflow-hidden h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
              />

              {/* Badge */}
              {product.badge && (
                <span
                  className={`absolute top-4 right-4 ${product.badge.color} text-white text-xs font-bold px-2 py-1 rounded-full`}
                >
                  {product.badge.text}
                </span>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Add to Cart Button */}
                <button className="bg-white text-[#B88E2F] font-semibold text-sm px-6 py-2 hover:bg-[#B88E2F] hover:text-white transition-colors duration-200">
                  Add to cart
                </button>

                {/* Share / Compare / Like */}
                <div className="flex items-center gap-4 text-white text-xs font-medium">
                  <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Share2 size={13} /> Share
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <ArrowLeftRight size={13} /> Compare
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
                    <Heart size={13} /> Like
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{product.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-base font-bold text-gray-800">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Show More Button */}
      <button className="mt-12 border border-[#B88E2F] text-[#B88E2F] font-semibold px-16 py-3 hover:bg-[#B88E2F] hover:text-white transition-colors duration-200">
        Show More
      </button>

    </section>
  );
}