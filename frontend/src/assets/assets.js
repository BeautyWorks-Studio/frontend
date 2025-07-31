// Lipstick Images
import lipstick1 from "./lipstick1.jpeg"
import lipstick2 from "./lipstick2.jpeg"
import lipstick3 from "./lipstick3.jpeg"
import lipstick4 from "./lipstick4.jpeg"
import lipstick5 from "./lipstick5.jpeg"

// Facemask Images
import facemask1 from "./facemask1.jpeg"
import facemask2 from "./facemask2.jpeg"
import facemask3 from "./facemask3.jpeg"
import facemask4 from "./facemask4.jpeg"
import facemask5 from "./facemask5.jpeg"

// Sunscreen Images
import sunscreen1 from "./sunscreen1.jpeg"
import sunscreen2 from "./sunscreen2.jpeg"
import sunscreen3 from "./sunscreen3.jpeg"
import sunscreen4 from "./sunscreen4.jpeg"
import sunscreen5 from "./sunscreen5.jpeg"

// Body Lotion Images
import bodylotion1 from "./bodylotion1.jpeg";
import bodylotion2 from "./bodylotion2.jpeg";
import bodylotion3 from "./bodylotion3.jpeg";
import bodylotion4 from "./bodylotion4.jpeg";
import bodylotion5 from "./bodylotion5.jpeg";

// Nail Polish Images
import nailpolish1 from "./nailpolish1.jpeg";
import nailpolish2 from "./nailpolish2.jpeg";
import nailpolish3 from "./nailpolish3.jpeg";
import nailpolish4 from "./nailpolish4.jpeg";

// Body Scrub Images
import bodyscrub1 from "./bodyscrub1.jpeg";
import bodyscrub2 from "./bodyscrub2.jpeg";
import bodyscrub3 from "./bodyscrub3.jpeg";
import bodyscrub4 from "./bodyscrub4.jpeg";

// UI and Brand Assets
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
    _id: "nail001",
    name: "Glossy Red Nail Polish",
    description: "High-shine, chip-resistant nail polish in a classic red shade.",
    price: 250,
    image: [nailpolish1],
    category: "Women",
    subCategory: "Makeup",
    sizes: [],
    date: 1716235900001,
    bestseller: true
  },
  {
    _id: "nail002",
    name: "Nude Elegance Polish",
    description: "Soft nude shade with a smooth matte finish for everyday elegance.",
    price: 230,
    image: [nailpolish2],
    category: "Women",
    subCategory: "Makeup",
    sizes: [],
    date: 1716235900002,
    bestseller: false
  },
  {
    _id: "nail003",
    name: "Sky Blue Nail Enamel",
    description: "Bright sky-blue nail polish that adds a playful pop to your style.",
    price: 240,
    image: [nailpolish3],
    category: "Women",
    subCategory: "Makeup",
    sizes: [],
    date: 1716235900003,
    bestseller: true
  },
  {
    _id: "nail004",
    name: "Glitter Pink Nail Color",
    description: "Shimmery pink polish ideal for special occasions and glam looks.",
    price: 260,
    image: [nailpolish4],
    category: "Women",
    subCategory: "Makeup",
    sizes: [],
    date: 1716235900004,
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
  },
  {
    _id: "body001",
    name: "Hydrating Aloe Body Lotion",
    description: "Moisturizing lotion with aloe vera that keeps your skin soft and hydrated all day.",
    price: 550,
    image: [bodylotion1],
    category: "Women",
    subCategory: "Body",
    sizes: [],
    date: 1716235800001,
    bestseller: true
  },
  {
    _id: "body002",
    name: "Cocoa Butter Glow Lotion",
    description: "Rich cocoa butter formula that deeply nourishes and gives your skin a radiant glow.",
    price: 620,
    image: [bodylotion2],
    category: "Women",
    subCategory: "Body",
    sizes: [],
    date: 1716235800002,
    bestseller: false
  },
  {
    _id: "body003",
    name: "Shea Soft Moisture Cream",
    description: "Ultra-hydrating shea butter lotion ideal for dry and sensitive skin.",
    price: 670,
    image: [bodylotion3],
    category: "Women",
    subCategory: "Body",
    sizes: [],
    date: 1716235800003,
    bestseller: true
  },
  {
    _id: "body004",
    name: "Vanilla Infusion Lotion",
    description: "Lightweight moisturizer with sweet vanilla scent and quick-absorbing formula.",
    price: 540,
    image: [bodylotion4],
    category: "Women",
    subCategory: "Body",
    sizes: [],
    date: 1716235800004,
    bestseller: false
  },
  {
    _id: "body005",
    name: "Cucumber Mint Fresh Lotion",
    description: "Cooling lotion with cucumber and mint extracts, ideal for post-sun use.",
    price: 580,
    image: [bodylotion5],
    category: "Women",
    subCategory: "Body",
    sizes: [],
    date: 1716235800005,
    bestseller: true
  },
  {
  _id: "scrub001",
  name: "Coffee Exfoliating Scrub",
  description: "Energizing scrub with coffee grounds to smooth and awaken your skin.",
  price: 650,
  image: [bodyscrub1],
  category: "Women",
  subCategory: "Body",
  sizes: [],
  date: 1716236000001,
  bestseller: true
},
{
  _id: "scrub002",
  name: "Coconut Sugar Body Scrub",
  description: "Gentle exfoliator with coconut oil and sugar crystals for glowing skin.",
  price: 620,
  image: [bodyscrub2],
  category: "Women",
  subCategory: "Body",
  sizes: [],
  date: 1716236000002,
  bestseller: false
},
{
  _id: "scrub003",
  name: "Rose & Salt Detox Scrub",
  description: "Detoxifying pink salt scrub infused with rose essence.",
  price: 690,
  image: [bodyscrub3],
  category: "Women",
  subCategory: "Body",
  sizes: [],
  date: 1716236000003,
  bestseller: true
},
{
  _id: "scrub004",
  name: "Citrus Zest Body Polish",
  description: "Refreshing citrus scrub that polishes away dull skin.",
  price: 610,
  image: [bodyscrub4],
  category: "Women",
  subCategory: "Body",
  sizes: [],
  date: 1716236000004,
  bestseller: false
},
]
 