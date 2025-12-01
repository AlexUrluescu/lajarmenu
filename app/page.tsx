"use client";
import React, { useState } from "react";
import {
  ChefHat,
  Flame,
  UtensilsCrossed,
  Wine,
  Coffee,
  IceCream,
} from "lucide-react";

export default function LaJarMenu() {
  const [activeCategory, setActiveCategory] = useState("feluri_principale");

  const menuData: any = {
    feluri_principale: [
      {
        name: "Mici",
        price: "7 lei / buc",
        description: "Servit cu cartofi wedges și sos de ciuperci",
      },
      {
        name: "Hot Dog",
        price: "10 lei / buc",
        description: "Marinate 24h, cu garnitură de legume",
      },
      {
        name: "Sarmale",
        price: "6 lei / buc",
        description: "Cu lămâie și ierburi aromate",
      },
    ],
    garnituri: [
      {
        name: "Cartofi prăjiți",
        price: "10 lei",
        description: "Sos de roșii, mozzarella, busuioc proaspăt",
      },
      {
        name: "Mămăliguță",
        price: "10 lei",
        description: "Salam picant, mozzarella, ardei iute",
      },
    ],
    bauturi: [
      {
        name: "Vin Fiert",
        price: "18 lei/pahar",
        description: "Cramă locală, sec",
      },
      {
        name: "Ciocolată caldă densă",
        price: "18 lei/pahar",
        description: "Cramă locală, demisec",
      },
      {
        name: "Ceai",
        price: "18 lei/pahar",
        description: "Selecție rotativă",
      },
      {
        name: "Coca Cola",
        price: "12 lei",
        description: "Preparată zilnic",
      },
      {
        name: "Fanta",
        price: "12 lei",
        description: "Preparată zilnic",
      },
      {
        name: "Apă plată",
        price: "12 lei",
        description: "Preparată zilnic",
      },
      {
        name: "Apă minerală",
        price: "12 lei",
        description: "Preparată zilnic",
      },
    ],
    deserturi: [
      {
        name: "Crossaint cu topping",
        price: "22 lei",
        description: "Rețetă italiană autentică",
      },
      {
        name: "Crossaint cu topping si fructe",
        price: "22 lei",
        description: "Rețetă italiană autentică",
      },
    ],
  };

  const categories = [
    { id: "feluri_principale", name: "Feluri Principale", icon: Flame },
    { id: "garnituri", name: "Garnituri", icon: ChefHat },
    { id: "bauturi", name: "Băuturi", icon: Wine },
    { id: "deserturi", name: "Deserturi", icon: IceCream },
  ];

  const scrollToSection = (categoryId: any) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 150; // Increased offset to account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveCategory(categoryId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-8 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              La Jar
            </h1>
            <Flame className="w-10 h-10" />
          </div>
          <p className="text-orange-100 text-lg">Aromele autentice româneşti</p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 z-10 bg-zinc-900 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 p-3 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-orange-600 text-white shadow-lg scale-105"
                      : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu Items - All Categories */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {categories.map((category) => (
          <div
            key={category.id}
            id={category.id}
            className="mb-12 scroll-mt-20"
          >
            <div className="flex items-center gap-3 mb-6">
              {React.createElement(category.icon, {
                className: "w-8 h-8 text-orange-600",
              })}
              <h2 className="text-3xl font-bold text-zinc-900">
                {category.name}
              </h2>
            </div>
            <div className="grid gap-4 md:gap-5">
              {menuData[category.id].map((item: any, index: any) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-orange-600 hover:scale-[1.02]"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-xl font-bold text-zinc-900 flex-1">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-orange-600 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-zinc-900 text-white py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Flame className="w-6 h-6 text-orange-600" />
            <h3 className="text-2xl font-bold">La Jar</h3>
          </div>
          <p className="text-gray-400 mb-2">
            Servim cu pasiune, gătim cu suflet
          </p>
          <p className="text-gray-500 text-sm">
            Program: Luni - Duminică, 12:00 - 23:00
          </p>
        </div>
      </div>
    </div>
  );
}
