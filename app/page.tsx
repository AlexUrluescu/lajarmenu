"use client";
import React, { useState } from "react";
import {
  ChefHat,
  Flame,
  UtensilsCrossed,
  Wine,
  IceCream,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function LaJarMenu() {
  const [activeCategory, setActiveCategory] = useState("feluri_principale");

  const menuData: any = {
    feluri_principale: [
      {
        name: "Mici",
        price: "6 lei / buc",
        description: "Mici din porc făcuți la grătar",
      },
      {
        name: "Sarmale",
        price: "6 lei / buc",
        description: "Sarmale traditionale",
      },
      {
        name: "Hot Dog",
        price: "12 lei / buc",
        description: "Chiflă crocantă cu crenvuști de porc",
      },
    ],
    garnituri: [
      {
        name: "Cartofi prăjiți",
        price: "9 lei",
        description: "Cartofi prăjiți tip bărcuță crocanți",
      },
      {
        name: "Mămăliguță",
        price: "8 lei",
        description: "Mămăliguță tradițională",
      },
    ],

    meniu_hotdog: [
      {
        name: "Meniu Hot Dog Classic",
        price: "28 lei",
        description: "2 Hot Dog + Cartofi prăjiți",
      },
      {
        name: "Meniu Hot Dog XXL",
        price: "34 lei",
        description: "3 Hot Dog + Cartofi prăjiți",
      },
    ],
    meniu_mici: [
      {
        name: "Meniu Mici Clasic",
        price: "26 lei",
        description: "3 Mici + Cartofi prăjiți + Muștar + Pâine",
      },
      {
        name: "Meniu Mici XXL",
        price: "30 lei",
        description: "4 Mici + Cartofi prăjiți + Muștar + Pâine",
      },
    ],
    meniu_sarmale: [
      {
        name: "Meniu Sarmale Classic",
        price: "18 lei",
        description: "2 Sarmale + Mămăliguță + Smântână",
      },
      {
        name: "Meniu Sarmale XXL",
        price: "24 lei",
        description: "3 Sarmale + Mămăliguță + Smântână",
      },
    ],
    // --------------------------------------------------

    bauturi: [
      {
        name: "Vin Fiert",
        price: "10 lei/pahar",
        description: "Vin fiert aromat",
      },
      {
        name: "Ciocolată caldă densă",
        price: "9 lei/pahar",
        description: "Ciocolată caldă densă cu aroma de ciocolată sau vanilie",
      },
      {
        name: "Ceai",
        price: "9 lei/pahar",
        description: "Ceai cald cu diferse arome",
      },
      {
        name: "Coca Cola",
        price: "10 lei",
        description: "Suc carbogazos",
      },
      {
        name: "Fanta",
        price: "10 lei",
        description: "Suc carbogazos",
      },
      {
        name: "Apă plată/minerală",
        price: "10 lei",
        description: "Apă îmbuteliată",
      },
    ],
    deserturi: [
      {
        name: "Croissant cu topping",
        price: "9 lei",
        description: "Croissant cu topping de ciocolată sau vanilie",
      },
      {
        name: "Croissant cu topping si fructe",
        price: "12 lei",
        description:
          "Croissant cu topping de ciocolată sau vanilie + felii de banană",
      },
    ],
  };

  const categories = [
    { id: "feluri_principale", name: "Feluri Principale", icon: Flame },
    { id: "garnituri", name: "Garnituri", icon: ChefHat },
    { id: "meniuri", name: "Meniuri", icon: UtensilsCrossed },
    { id: "bauturi", name: "Băuturi", icon: Wine },
    { id: "deserturi", name: "Deserturi", icon: IceCream },
  ];

  const scrollToSection = (categoryId: any) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveCategory(categoryId);
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    { url: "mici.png", alt: "Mici" },
    { url: "sarmale.png", alt: "Sarmale" },
    { url: "mamaliga.png", alt: "Mămăligă" },
    { url: "cartofi.png", alt: "Cartofi prăjiți" },
    { url: "croisant.png", alt: "Croissant" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  // Componenta ajutatoare pentru a randa un card de produs (pentru a nu repeta codul)
  const ProductCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-orange-600 hover:scale-[1.02]">
      <div className="p-5">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-xl font-bold text-zinc-900 flex-1">
            {item.name}
          </h3>
          <span className="text-2xl font-bold text-orange-600 whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </div>
      <div className="h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>
    </div>
  );

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

      {/* Menu Items */}
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

            {/* LOGICA SPECIALA PENTRU CATEGORIA MENIURI */}
            {category.id === "meniuri" ? (
              <div className="space-y-10">
                {/* 1. Meniu Hot Dog */}
                <div>
                  <div className="mb-6 pl-2 border-l-4 border-orange-300">
                    <h3 className="text-2xl font-semibold text-orange-800">
                      Hot Dog Meniu
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      Cele mai bune combinații
                    </p>
                  </div>
                  <div className="grid gap-4 md:gap-5">
                    {menuData.meniu_hotdog.map((item: any, index: any) => (
                      <ProductCard key={`hd-${index}`} item={item} />
                    ))}
                  </div>
                </div>

                {/* 2. Meniu Mici */}
                <div>
                  <div className="mb-6 pl-2 border-l-4 border-orange-300">
                    <h3 className="text-2xl font-semibold text-orange-800">
                      Mici Meniu
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      Gustul tradițional la grătar
                    </p>
                  </div>
                  <div className="grid gap-4 md:gap-5">
                    {menuData.meniu_mici.map((item: any, index: any) => (
                      <ProductCard key={`mici-${index}`} item={item} />
                    ))}
                  </div>
                </div>

                {/* 3. Meniu Sarmale */}
                <div>
                  <div className="mb-6 pl-2 border-l-4 border-orange-300">
                    <h3 className="text-2xl font-semibold text-orange-800">
                      Sarmale Meniu
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      Ca la bunica acasă
                    </p>
                  </div>
                  <div className="grid gap-4 md:gap-5">
                    {menuData.meniu_sarmale.map((item: any, index: any) => (
                      <ProductCard key={`sarmale-${index}`} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* LOGICA STANDARD PENTRU CELELALTE CATEGORII */
              <div className="grid gap-4 md:gap-5">
                {menuData[category.id].map((item: any, index: any) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Galerie Foto Section */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8 bg-orange-600/90 py-2 rounded-lg shadow-sm">
            Galerie Foto
          </h2>
          <div className="relative group">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-2xl">
              <img
                src={carouselImages[currentImageIndex].url}
                alt={carouselImages[currentImageIndex].alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold">
                  {carouselImages[currentImageIndex].alt}
                </p>
              </div>
            </div>

            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-orange-600 w-8"
                      : "bg-gray-400 w-3 hover:bg-orange-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-zinc-900 text-white py-12 px-4 mt-12 border-t-4 border-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-8 h-8 text-orange-600" />
            <h3 className="text-3xl font-bold">La Jar</h3>
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            Servim cu pasiune, gătim cu suflet
          </p>
          <div className="inline-block bg-zinc-800 px-6 py-3 rounded-lg border border-zinc-700">
            <p className="text-orange-500 font-semibold mb-1">Program</p>
            <p className="text-gray-300">Luni - Duminică: 12:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
