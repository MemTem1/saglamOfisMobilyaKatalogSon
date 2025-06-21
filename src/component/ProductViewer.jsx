import React, { useState } from 'react';



const productList = [
    {
        id: 1,
        title: 'MEKSİKA KANEPELİ SET',
        images: [
            "https://i.ibb.co/QFwWxgF6/MEKS-KA-KANEPEL-OF-S-SET-KAPAK.jpg",
            "https://i.ibb.co/YT3nFHSC/Whats-App-G-rsel-2025-05-20-saat-18-42-11-1e934428.jpg",
            "https://i.ibb.co/dsY1544T/Whats-App-G-rsel-2025-05-20-saat-18-42-11-a2e8aa35.jpg",
            "https://i.ibb.co/hR7xYHCv/Whats-App-G-rsel-2025-05-20-saat-18-42-11-b3a8cb4b.jpg",
        ],
        features: ['MASA (160) - DOLAP (90)', 'ETEJER 70 - SEHPA (35)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '14.500 ₺', outOfCity: '19.500 ₺' },
    },
    {
        id: 2,
        title: 'BAKÜ KANEPELİ SET',
        images: [
            "https://i.ibb.co/60wtQJSR/BAK-KANEPEL-OF-S-SET-KAPAK-1.jpg",
            "https://i.ibb.co/DBMLb4P/Whats-App-G-rsel-2025-05-19-saat-19-00-29-6dfa5883.jpg",
            "https://i.ibb.co/99qGMKVT/Whats-App-G-rsel-2025-05-19-saat-19-00-29-8d0375ab.jpg",
            "https://i.ibb.co/6JFJmV0n/Whats-App-G-rsel-2025-05-19-saat-19-00-30-bf0ad36e.jpg",
        ],
        features: ['MASA (175) - DOLAP (120)', 'ETEJER 70 - SEHPA (42)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '16.000 ₺', outOfCity: '21.000 ₺' },
    },
    {
        id: 3,
        title: 'NİCE KANEPE SETİ',
        images: [
            'https://i.ibb.co/4nRvzF7v/nice1.jpg',
            'https://i.ibb.co/1GR81DLX/nice2.jpg',
            'https://i.ibb.co/5xkNTbCG/nice3.jpg',
            'https://i.ibb.co/HDbwq1pX/nice4.jpg',
        ],
        features: ['MASA (2M) - DOLAP (150)', 'ETEJER (72) - SEHPA (42)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '20.000 ₺', outOfCity: '26.000 ₺' },
    },
    {
        id: 4,
        title: 'TURKUVAZ KANEPE SETİ',
        images: [
            "https://i.ibb.co/W4mf0pXK/TURKUVAZ-KENEPEL-BOSS-OF-S-SET.jpg",
            "https://i.ibb.co/zTGKFTx6/turkuvaz.jpg",
            "https://i.ibb.co/4wHrrQfs/turkuvaz1.jpg",
            "https://i.ibb.co/pBykrgYh/turkuvaz2.jpg",
        ],
        features: ['MASA (180) - DOLAP (10)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '20.000 ₺', outOfCity: '26.000 ₺' },
    },
    {
        id: 5,
        title: 'NİGHT KANEPE OFİS SET',
        images: [
            "https://i.ibb.co/DfrP70yW/nightkanepe0.jpg",
            "https://i.ibb.co/xSfqqx0P/night-Kanepe1.jpg",
            "https://i.ibb.co/gMpdXDYC/night-Kanepe2.jpg",
            "https://i.ibb.co/Jwy1HQ6C/night-Kanepe3.jpg",
        ],
        features: ['MASA (170) - DOLAP (150)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '17.000 ₺', outOfCity: '22.000 ₺' },
    },
    {
        id: 6,
        title: 'MİLANO BOSS KANEPE SETİ',
        images: [
            "https://i.ibb.co/j04tMVy/milnao-Kanepe-Boss0.jpg",
            "https://i.ibb.co/JFH1wLzC/milano-Kanepe-Boss2.jpg",
            "https://i.ibb.co/pTCyC43/milano-Kanepe-Boss3.jpg",
            "https://i.ibb.co/Y7Nwnb1c/milano-Kanepe-Boss4.jpg",
            "https://i.ibb.co/Jws55TRy/milano-Kanepe-Boss1.jpg",
        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '20.000 ₺', outOfCity: '26.000 ₺' },
    },
    {
        id: 7,
        title: 'BEBEK KANEPE SETİ',
        images: [
            "https://i.ibb.co/svGQSsMH/bebek-KKanepe0.jpg",
            "https://i.ibb.co/mVjCPYyB/bebek-KKanepe1.jpg",
            "https://i.ibb.co/5hKWKcKN/bebek-KKanepe2.jpg",
            "https://i.ibb.co/W48KfWq8/bebek-KKanepe3.jpg",
        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '16.000 ₺', outOfCity: '21.000 ₺' },
    },
    {
        id: 8,
        title: 'HAPPY KANEPE SETİ',
        images: [
            "https://i.ibb.co/2pGrMhD/happykanepe0.jpg",
            "https://i.ibb.co/vC1LnhKr/happykanepe1.jpg",
            "https://i.ibb.co/hJyzQvbZ/happykanepe2.jpg",
            "https://i.ibb.co/9mjxVWFj/happykanepe3.jpg",
        ],
        features: ['MASA (180) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '18.000 ₺', outOfCity: '23.000 ₺' },
    },
    {
        id: 9,
        title: 'GÖLGE KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/602m1t14/1.jpg",
        ],
        features: ['MASA (180) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '38.000 ₺', outOfCity: '45.000 ₺' },
    },
    {
        id: 10,
        title: 'SHADOW KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/xShHydGz/2.jpg",
        ],
        features: ['MASA (180) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '38.000 ₺', outOfCity: '45.000 ₺' },
    },
    {
        id: 11,
        title: 'DARK LİNE KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/ycsdzR4x/3.jpg",
        ],
        features: ['MASA (170) - DOLAP (110)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '15.000 ₺', outOfCity: '20.000 ₺' },
    },
    {
        id: 12,
        title: 'BRONZ KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/S4VnNzYP/4.jpg",
        ],
        features: ['MASA (180) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '60.000 ₺', outOfCity: '70.000 ₺' },
    },
    {
        id: 13,
        title: 'SİLVER KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/KjscpvQp/5.jpg",
        ],
        features: ['MASA (2M) - DOLAP (KOSOL)', 'ETEJER (1M) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '60.000 ₺', outOfCity: '70.000 ₺' },
    },
    {
        id: 14,
        title: 'COCO KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/Q7sbYmGj/6.jpg",
        ],
        features: ['MASA (2M) - DOLAP (ÜNİTELİ)', 'ETEJER (72) - SEHPA (80)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '60.000 ₺', outOfCity: '70.000 ₺' },
    },
    {
        id: 15,
        title: 'MOCCA KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/vMXf988/7.jpg",
        ],
        features: ['MASA (2M) - DOLAP (160)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '45.000 ₺', outOfCity: '52.000 ₺' },
    },
    {
        id: 16,
        title: 'AMBER KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/ymymzCGZ/8.jpg"
        ],
        features: ['MASA (180) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '13.000 ₺', outOfCity: '18.000 ₺' },
    },
    {
        id: 17,
        title: 'ALEMDAR KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/JWb0vv62/9.jpg"
        ],
        features: ['MASA (170) - DOLAP (ÜNİTELİ)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '55.000 ₺', outOfCity: '42.000 ₺' },
    },
    {
        id: 18,
        title: 'GRAY KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/fYBGZ2ZH/13.jpg"
        ],
        features: ['MASA (160) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '50.000 ₺', outOfCity: '60.000 ₺' },
    },
    {
        id: 19,
        title: 'RİGHT KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/HpzccdYk/14.jpg"
        ],
        features: ['MASA (160) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '16.000 ₺', outOfCity: '21.000 ₺' },
    },
    {
        id: 20,
        title: 'ÇAKIR KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/fVK3ydv5/16.jpg",
        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '60.000 ₺', outOfCity: '70.000 ₺' },
    },
    {
        id: 21,
        title: 'WOOD OFİS SET',
        images: [
            "https://i.ibb.co/93gjSCSL/15.jpg"
        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '13.000 ₺', outOfCity: '18.000 ₺' },
    },
    {
        id: 22,
        title: 'ÇİTA KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/C5wgf3T8/17.jpg"
        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '40.000 ₺', outOfCity: '50.000 ₺' },
    },
    {
        id: 23,
        title: 'ÇİTA KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/C5wgf3T8/17.jpg"
        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '40.000 ₺', outOfCity: '47.000 ₺' },
    },
    {
        id: 24,
        title: 'LİGHT KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/XrSgMRgd/18.jpg"
        ],
        features: ['MASA (190) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '28.000 ₺', outOfCity: '35.000 ₺' },
    },
    {
        id: 25,
        title: 'AMAROK KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/8g4tk3sV/19.jpg"
        ],
        features: ['MASA (2M) - DOLAP - ÜNİTELİ', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '50.000 ₺', outOfCity: '60.000 ₺' }

    },
    {
        id: 26,
        title: 'WAGO KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/LfHW4Yb/20.jpg",
        ],
        features: ['MASA (180) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '30.000 ₺', outOfCity: '40.000 ₺' }

    },
    {
        id: 27,
        title: 'BEYAZ KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/Q7Qdr4XV/21.jpg",
        ],
        features: ['MASA (180) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '20.000 ₺', outOfCity: '27.000 ₺' }

    },
    {
        id: 28,
        title: 'MERCEK KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/rf54ySDK/22.jpg",
        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '17.000 ₺', outOfCity: '23.000 ₺' }

    },
    {
        id: 29,
        title: 'AYDA KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/SX3M0CBF/23.jpg"
        ],
        features: ['MASA (180) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '20.000 ₺', outOfCity: '25.000 ₺' }

    },
    {
        id: 30,
        title: 'İNCİ KANEPELİ OFİS SET',
        images: [
            "https://i.ibb.co/FZpG63R/25.jpg",

        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '18.000 ₺', outOfCity: '23.000 ₺' }

    },





];


const ProductViewer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mainImage, setMainImage] = useState(productList[0].images[0]);
    const [transitioning, setTransitioning] = useState(false);
    const [direction, setDirection] = useState('');

    const changeProduct = (newIndex, dir) => {
        if (transitioning) return;
        setDirection(dir);
        setTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setMainImage(productList[newIndex].images[0]);
            setDirection(dir === 'left' ? 'enter-left' : 'enter-right');
        }, 300);
        setTimeout(() => {
            setTransitioning(false);
            setDirection('');
        }, 600);
    };

    const goNext = () => {
        const next = (currentIndex + 1) % productList.length;
        changeProduct(next, 'left');
    };

    const goBack = () => {
        const prev = (currentIndex - 1 + productList.length) % productList.length;
        changeProduct(prev, 'right');
    };

    const currentProduct = productList[currentIndex];

    return (
        <div className="card-viewer-wrapper">
            <div className={`product-card ${transitioning ? (direction === 'left' || direction === 'right' ? `exit-${direction}` : direction) : ''}`}>
                <h2 className='productTitle'>{currentProduct.title}</h2>
                <div className="main-image-container">
                    <img src={mainImage} alt="Ana Fotoğraf" className="main-image" />
                </div>

                <div className="thumbnails">
                    {currentProduct.images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Thumbnail ${i}`}
                            className={`thumb ${mainImage === img ? 'active' : ''}`}
                            onClick={() => setMainImage(img)}
                        />
                    ))}
                </div>

                <div className="prices">
                    <p><strong>ŞEHİR İÇİ:</strong> <span>{currentProduct.prices.city}</span></p>
                    <p><strong>ŞEHİR DIŞI:</strong> <span>{currentProduct.prices.outOfCity}</span></p>
                </div>

                <ul className="features">
                    {currentProduct.features.map((f, i) => (
                        <li key={i}>✓ {f}</li>
                    ))}
                </ul>

                <div className="controls">
                    <button onClick={goBack} disabled={transitioning}>&larr; Geri</button>
                    <button onClick={goNext} disabled={transitioning}>İleri &rarr;</button>
                </div>
            </div>

            <style>{`
                .card-viewer-wrapper {
                    margin-top: 10px;
                    width: 350px;
                    align-items: center;
                    position: relative;
                }

                .product-card {
                    width: 300px;
                    background: #fff;
                    border: 1px solid #ccc;
                    border-radius: 12px;
                    padding: 20px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    position: relative;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }

                .exit-left { animation: slideOutLeft 0.3s forwards; }
                .exit-right { animation: slideOutRight 0.3s forwards; }
                .enter-left { animation: slideInLeft 0.3s forwards; }
                .enter-right { animation: slideInRight 0.3s forwards; }

                @keyframes slideOutLeft {
                    0% { opacity: 1; transform: translateX(0); }
                    100% { opacity: 0; transform: translateX(-100%); }
                }

                @keyframes slideOutRight {
                    0% { opacity: 1; transform: translateX(0); }
                    100% { opacity: 0; transform: translateX(100%); }
                }

                @keyframes slideInLeft {
                    0% { opacity: 0; transform: translateX(100%); }
                    100% { opacity: 1; transform: translateX(0); }
                }

                @keyframes slideInRight {
                    0% { opacity: 0; transform: translateX(-100%); }
                    100% { opacity: 1; transform: translateX(0); }
                }

                .main-image-container {
                    height: 300px;
                    overflow: hidden;
                    border-radius: 10px;
                    margin-bottom: 10px;
                }

                .main-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .thumbnails {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 15px;
                }

                .thumb {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border: 2px solid transparent;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: border 0.3s;
                }

                .thumb.active {
                    border: 2px solid #001f4d;
                }

                .prices {
                    display: flex;
                    margin-bottom: 10px;
                    font-family: Arial, sans-serif;
                }
                    .prices p {
                    font-size: 14px;
                    background: #1e1e2f;
                    margin: 1px;
                    color: white;
                    padding: 7px;
                    border-radius: 5px;
                    }
                .prices span {
                    font-weight: bold;
                }

                .features {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 10px 0;
                    font-weight: bold;
                }

                .features li {
                    margin-bottom: 5px;
                }

                .controls {
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;
                }

                .controls button {
                    padding: 10px 20px;
                    background: #1e1e2f;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                }

                .controls button:disabled {
                    background: #aaa;
                    cursor: not-allowed;
                }

                .productTitle {
                    font-size: 1.3em;
                    margin-bottom: 10px;
                    color: #fff;
                    text-align: center;
                    background:#1e1e2f;
                    padding: 10px;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    );
};

export default ProductViewer;
