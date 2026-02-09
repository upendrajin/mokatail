import React, { useState, useEffect } from "react";

import camera from "./assets/products/camra.png";
import ledBoard from "./assets/products/led-bord.jpg";
import tv from "./assets/products/tv.png";
import wcon from "./assets/products/500con.png";
import juicer from "./assets/products/juicer.png";
import FridgeVrticle from "./assets/products/freazer.png";
import Chairs from "./assets/products/store-chair.png";
import sodaMachine from "./assets/products/soda-machin.jpg";
import InteriorDesign from "./assets/products/store.jpeg";
import silverCup from "./assets/products/silvercup.png";
import fruitboul from "./assets/products/fruit-boul.png";
import knif from "./assets/products/knife.webp";
import wBucket from "./assets/products/bucket.png";
import Jug from "./assets/products/jug.png";
import waterStrainer from "./assets/products/water-strainer.png";
import mp from "./assets/products/m-p.png";
import SoupLadel from "./assets/products/soup-ladle.png";
import Dustbin from "./assets/products/trash-bin.png";
import IceGlass from "./assets/products/ice-glass.png";
import MilkShake from "./assets/products/milk-sheck.png"
import FuljarGlass from "./assets/products/clear-glass.png";
import SmallGlass from "./assets/products/short-glass.png";
import JamunShorts from "./assets/products/jamun.png";
import ICEBox from "./assets/products/ice-bucjet.png";
import IceCrusher from "./assets/products/ice-cuter.png";
import CapBottle from "./assets/products/masala-holder.png";
import Jar from "./assets/products/glass-jar.png";
import PlasticksFunnels from "./assets/products/funnel.png";
import Spoon from "./assets/products/spoon.png";
import GlassTrey from "./assets/products/tray.png";
import CO2Gas from "./assets/products/co2.png";
import Bulb from "./assets/products/bulb.png";
import Plier from "./assets/products/pukkad.png";
import AdjustableSpammers from "./assets/products/panu.png";
import Testers from "./assets/products/tester.png";
import ScrewDriver from "./assets/products/screw-deriver.png";
import Tep from "./assets/products/tape.png";
import Syrup from "./assets/products/lock-keg.png";
import CO2Regulatior from "./assets/products/co2-register.png"
import ORings from "./assets/products/O-rings.png";
import Connectors from "./assets/products/soda-QCD.png";
import Clamp from "./assets/products/sewer.png";
import CO2Ring from "./assets/products/co2-register-ring.png";
import ChoppingBoard from "./assets/products/ped.png";
import Menuchart1 from "./assets/products/Menuchart1.jpeg";
import Menuchart2 from "./assets/products/Menuchart2.jpeg";
import icecreamFridge from "../src/assets/icecream-fridge.png"

import icemojito from "./assets/icemohito.png"
import mockTail from "./assets/mocktail.png"
import Milk from "./assets/Milk.png"
import Franchise from "./assets/franchise-kit.png"
import jamun from "./assets/jamun.jpg"
import Premium from "./assets/premium.png"
import Coco from "./assets/coco.jpg"
import Icesoda from "./assets/ice-soda.jpg"

const categories = [
  {
    id: "mocktail",
    label: "Mocktail",
    icon: mockTail
  },
  {
    id: "icemojito",
    label: "Ice & Mojito",
    icon: icemojito
  },
  {
    id: "milk",
    label: "Milk Cold Drinks",
    icon: Milk
  },
  {
    id: "premium",
    label: "Premium Milk-Shakes",
    icon: Premium
  },
  {
    id: "Naturalfruits",
    label: "Natural fruits",
    icon: jamun
  },
  {
    id: "coco",
    label: "Live Coco",
    icon: Coco
  },
  {
    id: "icesoda",
    label: "Icecream Soda",
    icon: Icesoda
  },
  {
    id: "franchise",
    label: "Franchise Products",
    icon: Franchise
  },
];

const products = {
  mocktail: [
    { "name": "Green Lemi" },
    { "name": "Blue Lemon" },
    { "name": "Red Bull" },
    { "name": "Kiwi" },
    { "name": "Black Currant" },
    { "name": "Classic Mojito" },
    { "name": "Lime Soda" },
    { "name": "Pineapple Wall" },
    { "name": "Green Mint" },
    { "name": "Blue Lagoon" },
    { "name": "Mint Chocolate" },
    { "name": "Cherry Chocolate" },
    { "name": "Masala Masti" },
    { "name": "Lemon Tea" },
    { "name": "Mojito Mint" },
    { "name": "Sharbat Punch" },
    { "name": "Super Mint" },
    { "name": "Mango Lemon Tea" },
    { "name": "Jam Berry" },
    { "name": "Pina Colada" },
    { "name": "Pink Mocktail" },
    { "name": "Litchi Squash" },
    { "name": "Blue Power" },
    { "name": "Aam Panna" }
  ],
  icemojito: [
    { "name": "Blck Forest" },
    { "name": "Kiwi Killer" },
    { "name": "Fresh Mint" },
    { "name": "Pineapple" },
    { "name": "Blue Haven" },
    { "name": "Orange" },
    { "name": "Blue Mint" },
    { "name": "Pineapple Blue" },
    { "name": "Pink Power" },
    { "name": "Green Punch" }
  ],
  Naturalfruits: [
    { "name": "Pineapple Tukdi" },
    { "name": "Dadum Dana" },
    { "name": "Sing Topra Dadum" },
    { "name": "Strawberry Tukdi" },
    { "name": "Jambun Shot" },
    { "name": "Mix Fruit Tukdi" },
    { "name": "Jambun Shot 2x" },
    { "name": "Jambun Shot 4x" }
  ],
  milk: [
    { "name": "Kesar Pista" },
    { "name": "Mava Malai" },
    { "name": "Raj Bhog" },
    { "name": "Rose" },
    { "name": "Butter Scotch" },
    { "name": "Badam Pista" },
    { "name": "Mango" },
    { "name": "Black Currant" },
    { "name": "Kiwi" },
    { "name": "Jamun" },
    { "name": "Strawberry" },
    { "name": "Shahi Variyali" },
    { "name": "Blue Pearl" }
  ],
  premium : [
    { "name": "Mango Icecream" },
    { "name": "Pineapple Icecream" },
    { "name": "Strawberry Icecream" },
    { "name": "Jamun Icecream" },
    { "name": "Pista Icecream" },
    { "name": "Pista Mango Icecream" },
    { "name": "Pista Strawberry Icecream" },
    { "name": "Pal Mango Icecream" },
    { "name": "Shahi Modak Icecream" },
    { "name": "Rajwadi Chiku Icecream" },
    { "name": "Royal Rose Icecream Shake" }
  ],
  coco: [
    { "name": "Chocobit Coco" },
    { "name": "Chocobit Icecream" },
    { "name": "Chocolate Chips" },
    { "name": "Chocolate Kaju Icecream" },
    { "name": "Chocolate Kitkat" }
  ],
  icesoda: [
    { "name": "Mango Icecream" },
    { "name": "Strawberry Icecream" },
    { "name": "Mango Current Icecream" },
    { "name": "Jamun Mix Icecream" },
    { "name": "Modak Icecream" },
    { "name": "Pineapple Icecream" },
    { "name": "Jamun Icecream" }
  ],
  franchise: [
    {
      name: "CCTV Camero",
      img: camera
    },
    {
      name: "LED Board Included",
      img: ledBoard
    },
    {
      name: "TV Included",
      img: tv
    },
    {
      name: "500 litre water tank",
      img: wcon
    },
    {
      name: "Juicer Mixer",
      img: juicer
    },
    {
      name: "Fridge Vrticle (300 Ltr)",
      img: FridgeVrticle
    },
    {
      name: "Ice cream freze",
      img: icecreamFridge
    },
    {
      name: "5 Baby Ch 10 Adult Chairs",
      img: Chairs
    },
    {
      name: "Menu chart 1",
      img: Menuchart1
    },
    {
      name: "Menu chart 2",
      img: Menuchart2
    },
    {
      name: "Interior Design ACT Sheet (400 to 500 sq.ft)",
      img: InteriorDesign
    },
    {
      name: "14-4 Soda Fountain Machine",
      img: sodaMachine
    },
    {
      name: "30-60 ML",
      img: silverCup
    },
    {
      name: "Lemon Basket",
      img: fruitboul
    },
    {
      name: "Knife",
      img: knif
    },
    {
      name: "20 LTR Bucket",
      img: wBucket
    },
    {
      name: "1 LTR & 500 ML Jug",
      img: Jug
    },
    {
      name: "Double net water strainer",
      img: waterStrainer
    },
    {
      name: "Morter & Pastel Wooden",
      img: mp
    },
    {
      name: "Steel Soup Ladel",
      img: SoupLadel
    },
    {
      name: "Dustbin 80 LTR",
      img: Dustbin
    },
    {
      name: "Ice Glass 6 Ploce",
      img: IceGlass
    },
    {
      name: "Milk Shake 12 Ploce",
      img: MilkShake
    },
    {
      name: "Fuljar Glass 12. Piece",
      img: FuljarGlass
    },
    {
      name: "Fuljar Small Glass 6 Piece",
      img: SmallGlass
    },
    {
      name: "Jamun Shorts 6 Piece",
      img: JamunShorts
    },
    {
      name: "ICE Box",
      img: ICEBox
    },
    {
      name: "Ice Crusher",
      img: IceCrusher
    },
    {
      name: "Cap Bottle 2 Piece",
      img: CapBottle
    },
    {
      name: "Jar 6 Piece",
      img: Jar
    },
    {
      name: "Big Plasticks Funnels",
      img: PlasticksFunnels
    },
    {
      name: "Spoon 6 Plece",
      img: Spoon
    },
    {
      name: "Glass Trey 2 Plece",
      img: GlassTrey
    },
    {
      name: "CO2 Gas Bottles 30 Kg 1 Piece",
      img: CO2Gas
    },
    {
      name: "4 Watt 6 Piece 2 Pink, 2 Blue, 2 Green",
      img: Bulb
    },
    {
      name: "Ceiling Lights 6 Piece",
      img: Bulb
    },
    {
      name: "Plier",
      img: Plier
    },
    {
      name: "Adjustable Spammers",
      img: AdjustableSpammers
    },
    {
      name: "Testers",
      img: Testers
    },
    {
      name: "Screw Driver",
      img: ScrewDriver
    },
    {
      name: "Tep Rol",
      img: Tep
    },
    {
      name: "Syrup Tanks 14 Piece",
      img: Syrup
    },
    {
      name: "CO2 Regulatior",
      img: CO2Regulatior
    },
    {
      name: "O Rings 30 Pince",
      img: ORings
    },
    {
      name: "Connectors 2 Set",
      img: Connectors
    },
    {
      name: "Clamp 5 Pince",
      img: Clamp
    },
    {
      name: "CO2 Regulator Ring 2 Piece",
      img: CO2Ring
    },
    {
      name: "Chopping Board",
      img: ChoppingBoard
    },
  ],
};

function ProductsPage() {
  const [activeTab, setActiveTab] = useState("icemojito");
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [activeTab]);

  return (
    <div className="product-layout">

      {/* SIDEBAR */}
      <aside className="product-sidebar">
        <h3 className="sidebar-title">All Products</h3>

        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`sidebar-item ${activeTab === cat.id ? "active" : ""}`}
            onClick={() => setActiveTab(cat.id)}
          >
            <img src={cat.icon} alt={cat.label} />
            <span>{cat.label}</span>
          </div>
        ))}
      </aside>

      {/* CONTENT */}
      <main className="product-content" key={animateKey}>
        <div className="product-grid">
          {products[activeTab]?.map((item, index) => (
            <div
              key={index}
              className={`product-card ${item.img ? "has-image" : ""}`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {item.img && (
                <div className="product-image-wrap">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="product-image"
                  />
                </div>
              )}

              <span className="product-title">{item.name}</span>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}

export default ProductsPage;
