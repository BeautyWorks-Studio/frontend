import lipstick1 from "./lipstick1.jpeg"
import lipstick2 from "./lipstick2.jpeg"
import lipstick3 from "./lipstick3.jpeg"
import lipstick4 from "./lipstick4.jpeg"
import lipstick5 from "./lipstick5.jpeg"

import facemask1 from "./facemask1.jpeg"
import facemask2 from "./facemask2.jpeg"
import facemask3 from "./facemask3.jpeg"
import facemask4 from "./facemask4.jpeg"
import facemask5 from "./facemask5.jpeg"

import sunscreen1 from "./sunscreen1.jpeg"
import sunscreen2 from "./sunscreen2.jpeg"
import sunscreen3 from "./sunscreen3.jpeg"
import sunscreen4 from "./sunscreen4.jpeg"
import sunscreen5 from "./sunscreen5.jpeg"


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [

    
  {
    _id: "lip001",
    name: "Velvet Matte Lipstick",
    description: "A rich matte lipstick that glides on effortlessly, delivering long-lasting color and hydration.",
    price: 650,
    image: [lipstick1],
    category: "Women",
    subCategory: "Makeup",
    sizes: [],
    date: 1716235700001,
    bestseller: true
  },
  {
    _id: "lip002",
    name: "Moisture Luxe Lipstick",
    description: "Infused with shea butter and vitamin E, this lipstick keeps lips soft while delivering bold color.",
    price: 720,
    image: [lipstick2],
    category: "Women",
    subCategory: "Makeup",
    sizes: [],
    date: 1716235700002,
    bestseller: false
  },
  {
    _id: "lip003",
    name: "Glossy Shine Lipstick",
    description: "High-shine lipstick with a smooth finish. Perfect for a radiant everyday look.",
    price: 580,
    image: [lipstick3],
    category: "Women",
    subCategory: "Makeup",
    sizes: [],
    date: 1716235700003,
    bestseller: false
  },
  {
    _id: "lip004",
    name: "Ultra Stay Liquid Lipstick",
    description: "Waterproof and smudge-proof liquid lipstick that lasts up to 12 hours.",
    price: 810,
    image: [lipstick4],
    category: "Women",
    subCategory: "Makeup",
    sizes: [],
    date: 1716235700004,
    bestseller: true
  },
  {
    _id: "lip005",
    name: "Nude Elegance Lipstick",
    description: "A soft nude tone for a subtle and natural lip color. Ideal for daily wear.",
    price: 600,
    image: [lipstick5],
    category: "Women",
    subCategory: "Makeup",
    sizes: [],
    date: 1716235700005,
    bestseller: false
  },

      {
    _id: "mask001",
    name: "Hydrating Sheet Mask",
    description: "Enriched with hyaluronic acid to deeply hydrate and rejuvenate dry skin.",
    price: 250,
    image: [facemask1],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700006,
    bestseller: true
  },
  {
    _id: "mask002",
    name: "Detox Clay Mask",
    description: "Deep-cleansing clay mask formulated with charcoal to absorb excess oil and unclog pores.",
    price: 340,
    image: [facemask2],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700007,
    bestseller: false
  },
  {
    _id: "mask003",
    name: "Brightening Vitamin C Mask",
    description: "Illuminates dull skin and reduces pigmentation for a glowing complexion.",
    price: 400,
    image: [facemask3],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700008,
    bestseller: true
  },
  {
    _id: "mask004",
    name: "Soothing Aloe Mask",
    description: "Soothes sensitive or sunburned skin with the calming properties of aloe vera.",
    price: 280,
    image: [facemask4],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700009,
    bestseller: false
  },
  {
    _id: "mask005",
    name: "Collagen Boost Mask",
    description: "Boosts skin elasticity and firmness with marine collagen infusion.",
    price: 490,
    image: [facemask5],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700010,
    bestseller: false
  },

    {
    _id: "sun001",
    name: "SPF 50+ Mineral Sunscreen",
    description: "Broad-spectrum mineral sunscreen suitable for all skin types. Non-greasy and water-resistant.",
    price: 990,
    image: [sunscreen1],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700011,
    bestseller: true
  },
  {
    _id: "sun002",
    name: "Daily Glow Sunscreen SPF 30",
    description: "Lightweight daily sunscreen with a subtle glow finish and no white cast.",
    price: 890,
    image: [sunscreen2],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700012,
    bestseller: false
  },
  {
    _id: "sun003",
    name: "Ultra Light SPF 40 Gel",
    description: "A refreshing gel formula that protects and hydrates oily skin without clogging pores.",
    price: 850,
    image: [sunscreen3],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700013,
    bestseller: true
  },
  {
    _id: "sun004",
    name: "Tinted Sunscreen SPF 45",
    description: "Combines sun protection and a light tint to even out skin tone naturally.",
    price: 930,
    image: [sunscreen4],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700014,
    bestseller: false
  },
  {
    _id: "sun005",
    name: "Anti-Pollution SPF 50 Spray",
    description: "Protects against UV rays and pollution damage with easy spray-on application.",
    price: 1050,
    image: [sunscreen5],
    category: "Women",
    subCategory: "Skincare",
    sizes: [],
    date: 1716235700015,
    bestseller: true
  }
]



