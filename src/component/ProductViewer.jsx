import React, { useState } from 'react';



const productList = [
    {
        id: 1,
        title: 'MEKSİKA KANEPELİ SET',
        images: [
            '/img/meksikaKanepe/MeksikaKanepeKapak.jpg',
            '/img/meksikaKanepe/meksikaKanepe1.jpg',
            '/img/meksikaKanepe/meksikaKanepe2.jpg',
            '/img/meksikaKanepe/meksikaKanepe3.jpg',
        ],
        features: ['MASA (160) - DOLAP (90)', 'ETEJER 70 - SEHPA (35)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '14.500 ₺', outOfCity: '19.500 ₺' },
    },
    {
        id: 2,
        title: 'BAKÜ KANEPELİ SET',
        images: [
            '/img/Baku/BakuKapak.jpg',
            '/img/Baku/baku6.jpg',
            '/img/Baku/baku3.jpg',
            '/img/Baku/baku1.jpg',
        ],
        features: ['MASA (175) - DOLAP (120)', 'ETEJER 70 - SEHPA (42)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '16.000 ₺', outOfCity: '21.000 ₺' },
    },
    {
        id: 3,
        title: 'NİCE KANEPE SETİ',
        images: [
            '/img/niceKanepe/nice1.jpg',
            '/img/niceKanepe/nice2.jpg',
            '/img/niceKanepe/nice3.jpg',
            '/img/niceKanepe/nice4.jpg',
        ],
        features: ['MASA (2M) - DOLAP (150)', 'ETEJER (72) - SEHPA (42)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '20.000 ₺', outOfCity: '26.000 ₺' },
    },
    {
        id: 4,
        title: 'TURKUVAZ KANEPE SETİ',
        images: [
            '/img/turkuvazKanepe/turkuvaz.jpg',
            '/img/turkuvazKanepe/turkuvaz1.jpg',
            '/img/turkuvazKanepe/turkuvaz2.jpg',
            '/img/turkuvazKanepe/turkuvaz3.jpg',
        ],
        features: ['MASA (180) - DOLAP (10)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '20.000 ₺', outOfCity: '26.000 ₺' },
    },
    {
        id: 5,
        title: 'NİGHT KANEPE OFİS SET',
        images: [
            '/img/nightKanepe/nightkanepe0.jpg',
            '/img/nightKanepe/nightKanepe1.jpg',
            '/img/nightKanepe/nightKanepe2.jpg',
            '/img/nightKanepe/nightKanepe3.jpg',
        ],
        features: ['MASA (170) - DOLAP (150)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '17.000 ₺', outOfCity: '22.000 ₺' },
    },
    {
        id: 6,
        title: 'MİLANO BOSS KANEPE SETİ',
        images: [
            '/img/milanoKanepeBoss/milanoKanepeBoss0.jpg',
            '/img/milanoKanepeBoss/milanoKanepeBoss4.jpg',
            '/img/milanoKanepeBoss/milanoKanepeBoss1.jpg',
            '/img/milanoKanepeBoss/milanoKanepeBoss2.jpg',
            '/img/milanoKanepeBoss/milanoKanepeBoss3.jpg',
        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '20.000 ₺', outOfCity: '26.000 ₺' },
    },
    {
        id: 7,
        title: 'BEBEK KANEPE SETİ',
        images: [
            '/img/BebekKanepe/bebekKanepe0.jpg',
            '/img/BebekKanepe/bebekKanepe1.jpeg',
            '/img/BebekKanepe/bebekKanepe2.jpeg',
            '/img/BebekKanepe/bebekKanepe3.jpeg',
        ],
        features: ['MASA (170) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '16.000 ₺', outOfCity: '21.000 ₺' },
    },
    {
        id: 8,
        title: 'HAPPY KANEPE SETİ',
        images: [
            '/img/happyKanepe/happykanepe0.jpg',
            '/img/happyKanepe/happykanepe1.jpg',
            '/img/happyKanepe/happykanepe2.jpg',
            '/img/happyKanepe/happykanepe3.jpg',
        ],
        features: ['MASA (180) - DOLAP (120)', 'ETEJER (72) - SEHPA (40)', "2 TEKLİ 1 ADET 3'LÜ KANEPE (180)", 'MÜDÜR KOLTUĞU'],
        prices: { city: '18.000 ₺', outOfCity: '23.000 ₺' },
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
                    <p><strong>ŞEHİR İÇİ :</strong> {currentProduct.prices.city}</p>
                    <p><strong>ŞEHİR DIŞI:</strong> {currentProduct.prices.outOfCity}</p>
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
                    flex-direction: column;
                    gap: 10px;
                    margin-bottom: 10px;
                    font-size: 1.1em;
                }

                .features {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 10px 0;
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
                    background: #001f4d;
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
                    color: #001f4d;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default ProductViewer;
