const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6297.371398567429!2d37.34553932072659!3d37.18621339087115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531fd00399b4111%3A0x60fd4aab22d44022!2sPiri%20pack%20ambalaj!5e0!3m2!1sen!2str!4v1725652443750!5m2!1sen!2str'; // Google Maps iframe linkini buraya ekle
const phone = '+901234567890'; // Telefon numarası
const email = 'info@seninsiten.com'; // Email adresi
const whatsapp = 'https://wa.me/901234567890'; // WhatsApp linki
const workHours = [
    { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
    { day: 'Cumartesi', hours: '10:00 - 16:00' },
    { day: 'Pazar', hours: 'Kapalı' }
];
const address = 'Sanayi, 60011. Caddesi No:17, 27090 Şehitkamil/Gaziantep';

const company_details = {
    "address": "Sanayi, 60011. Caddesi No:17, 27090 Şehitkamil/Gaziantep",
    "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6297.371398567429!2d37.34553932072659!3d37.18621339087115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531fd00399b4111%3A0x60fd4aab22d44022!2sPiri%20pack%20ambalaj!5e0!3m2!1sen!2str!4v1725652443750!5m2!1sen!2str",
    "phone": "+901234567890",
    "email": "info@piripack.com.tr",
    "whatsapp": "https://wa.me/901234567890",
    "workHours": [
        { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
        { day: 'Cumartesi', hours: '10:00 - 16:00' },
        { day: 'Pazar', hours: 'Kapalı' }
    ],
    "socials": [
        { facebook: '/#' },
        { instagram: '/#' },
        { twitter: '/#' }
    ]
}
const contact_info = {
    "name": "",
    "surname": "",
    "email": "",
    "no": "",
    "detail": ""
}
const links = [
    {
        "name": "Anasayfa",
        "url": "/",
        "is_active": true
    },
    {
        "name": "Hakkımızda",
        "url": "/about",
        "is_active": false
    },
    {
        "name": "Kategoriler",
        "url": "/categories",
        "is_active": false
    },
    {
        "name": "Ürünler",
        "url": "/products",
        "is_active": false
    },
]
const categories = [
    {
        "id": 1,
        "name": "SIVI DOLUM AMBALAJLARI",
        "description": "Latest gadgets and electronics",
        "url": "images/foto-03.webp"
    },
    {
        "id": 2,
        "name": "DOYPACK AMBALAJLAR",
        "description": "Appliances for your home",
        "url": "images/foto-02.webp"
    },
    {
        "id": 3,
        "name": "ÖZEL  HALI SHRİNK AMBALAJLARI",
        "description": "Clothing and accessories for all",
        "url": "images/foto-11.webp"
    },
    {
        "id": 4,
        "name": "MARKAMIZA ÖZEL ÜRÜNLER",
        "description": "Wide range of books and literature",
        "url": "images/foto-04.webp"
    }
]
const products = [
    {
        "id": 101,
        "name": "ASEPTİK SALÇA",
        "category_id": 1,
        "price": 799.99,
        "stock": 25,
        "description": "En kaliteli aseptik salca",
        "image_url": "images/foto-01.webp",
        "tags": ["10x15", "15x21"],
        "long_description": "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
    },
    {
        "id": 102,
        "name": "Ketcap Mayonez",
        "category_id": 1,
        "price": 799.99,
        "stock": 25,
        "description": "En kaliteli ketcap ve mayonez",
        "image_url": "images/foto-02.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 103,
        "name": "Tahin Pekmez",
        "category_id": 1,
        "price": 199.99,
        "stock": 25,
        "description": "Tahin pekmez paketlerinde devrim",
        "image_url": "images/foto-03.webp",
        "tags": ["10x15", "15x21", "eco friendly"]
    },
    {
        "id": 104,
        "name": "KONSANTRE MEYVE SULARI",
        "category_id": 1,
        "price": 799.99,
        "stock": 25,
        "description": "En kaliteli konsantre meyve suyu paketi",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21" , "temiz urun"]
    },
    {
        "id": 105,
        "name": "ENERJİ İÇEKLERİ",
        "category_id": 1,
        "price": 99.99,
        "stock": 25,
        "description": "En kaliteli konsantre meyve suyu paketi",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 106,
        "name": "ADBLUE",
        "category_id": 1,
        "price": 99.99,
        "stock": 25,
        "description": "Her ebatta ADBLUE paketleri",
        "image_url": "images/foto-06.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 107,
        "name": "SIVI JEL ŞEKERLEMELER",
        "category_id": 1,
        "price": 99.99,
        "stock": 25,
        "description": "SIVI JEL ŞEKERLEMELER",
        "image_url": "images/foto-07.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 108,
        "name": "MUSLUKLU SIVI AMBALAJLAR",
        "category_id": 1,
        "price": 99.99,
        "stock": 25,
        "description": "MUSLUKLU SIVI AMBALAJLAR",
        "image_url": "images/foto-08.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 201,
        "name": "KURUYEMİŞ VE TOZ İÇECEKLER	",
        "category_id": 2,
        "price": 99.99,
        "stock": 25,
        "description": "KURUYEMİŞ VE TOZ İÇECEKLER	",
        "image_url": "images/foto-09.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 202,
        "name": "BAHARAT",
        "category_id": 2,
        "price": 99.99,
        "stock": 25,
        "description": "BAHARAT PAKETLERI",
        "image_url": "images/foto-10.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 203,
        "name": "BAKLIYAT",
        "category_id": 2,
        "price": 99.99,
        "stock": 25,
        "description": "BAKLIYAT PAKETLERI",
        "image_url": "images/foto-11.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 204,
        "name": "KURUKAHVE",
        "category_id": 2,
        "price": 99.99,
        "stock": 25,
        "description": "KURU KAHVE",
        "image_url": "images/foto-12.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 205,
        "name": "CAY",
        "category_id": 2,
        "price": 99.99,
        "stock": 25,
        "description": "CAY PAKETLERI",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 301,
        "name": "HALI SHRINK",
        "category_id": 3,
        "price": 99.99,
        "stock": 25,
        "description": "HALI SHRINK",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 401,
        "name": "ÇÖP TORBALARI",
        "category_id": 4,
        "price": 99.99,
        "stock": 25,
        "description": "HALI SHRINK",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 402,
        "name": "BUZDOLABI POŞETLERİ",
        "category_id": 4,
        "price": 99.99,
        "stock": 25,
        "description": "BUZDOLABI POŞETLERİ",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 403,
        "name": "ZİPLİ FERMUARLI SAKLAMALAMA POŞETLERİ",
        "category_id": 4,
        "price": 99.99,
        "stock": 25,
        "description": "ZİPLİ FERMUARLI SAKLAMALAMA POŞETLERİ",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 404,
        "name": "KİLİTLİ SAKLAMALAMA POŞETLERİ",
        "category_id": 4,
        "price": 99.99,
        "stock": 25,
        "description": "KİLİTLİ SAKLAMALAMA POŞETLERİ",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 405,
        "name": "ÇOK AMAÇLI VAKUMLU AMBALAJLAR",
        "category_id": 4,
        "price": 99.99,
        "stock": 25,
        "description": "ÇOK AMAÇLI VAKUMLU AMBALAJLAR",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21"]
    },
    {
        "id": 404,
        "name": "ÜÇGEN KREMŞANTİ POŞETİ",
        "category_id": 4,
        "price": 99.99,
        "stock": 25,
        "description": "ÜÇGEN KREMŞANTİ POŞETİ",
        "image_url": "images/foto-04.webp",
        "tags": ["10x15", "15x21"]
    },
]
export { phone, email, whatsapp, workHours, mapUrl, address, categories, products, company_details, links }