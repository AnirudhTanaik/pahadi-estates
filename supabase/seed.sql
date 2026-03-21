-- Sample properties for Pahadi Estates
insert into properties (
  title, description, price, price_label, district, location_name,
  property_type, area_bigha, area_sqft, latitude, longitude,
  outside_hp_eligible, is_featured, status, photos, road_access, water, electricity
) values
(
  'Panoramic Estate — Mashobra Ridge',
  'A rare 4-bigha estate commanding 270-degree views of the Shimla ranges. Situated at 2,200m altitude with dense deodar forest on three sides, this premium plot is fully motorable and just 14km from Shimla main town. Ideal for a luxury homestay or private family villa. HPPWD road connects directly to the property.',
  8500000,
  '85 L',
  'Shimla',
  'Mashobra, Shimla',
  'Residential Plot',
  4,
  43560,
  31.1471,
  77.1942,
  false,
  true,
  'active',
  ARRAY[
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200'
  ],
  'Motorable road to site',
  true,
  true
),
(
  'Orchard Plot — Theog Valley',
  'A 2.5 bigha apple orchard plot with active production trees in Theog, one of Shimla district''s most productive valleys. The orchard generates seasonal income while appreciating as a prime residential/agri-tourism asset. Well water on plot, electricity connection active.',
  4200000,
  '42 L',
  'Shimla',
  'Theog, Shimla',
  'Residential Plot',
  2.5,
  27225,
  31.1195,
  77.3721,
  true,
  false,
  'active',
  ARRAY[
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200'
  ],
  'Kachha road accessible',
  true,
  true
),
(
  'Riverside Commercial Plot — Kullu Town',
  'A prime 1,200 sqm commercial plot on Beas River bank, NH3 frontage, in the heart of Kullu town. Exceptional for a boutique hotel, river-facing restaurant or adventure sports center. Kullu district permits outside HP buyers for commercial use. All utilities present.',
  15000000,
  '1.50 Cr',
  'Kullu',
  'Kullu Town, Near Dhalpur Maidan',
  'Commercial',
  null,
  12916,
  31.9592,
  77.1089,
  true,
  true,
  'active',
  ARRAY[
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200'
  ],
  'NH3 frontage, fully motorable',
  true,
  true
),
(
  'Kinnaur Valley Estate — Sangla',
  'An extraordinary 3-bigha estate in the mythical Sangla Valley of Kinnaur, surrounded by apple orchards and towering Himalayan peaks. Located 2,680m above sea level, the property has breathtaking views of the Kinner Kailash range. Ideal for a high-altitude wellness retreat.',
  12000000,
  '1.20 Cr',
  'Kinnaur',
  'Sangla Valley, Kinnaur',
  'Holiday Estate',
  3,
  32670,
  31.4183,
  78.2457,
  false,
  true,
  'active',
  ARRAY[
    'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1200',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200'
  ],
  'Motorable road, 2km from Sangla market',
  true,
  true
),
(
  'Dharamkot Hillside Plot — McLeod Ganj',
  'A 1.8 bigha residential plot in Dharamkot, the quieter sister of McLeod Ganj. Popular with international visitors and the yoga community, this location offers consistent rental demand. Panoramic views of the Kangra Valley. Outside HP buyers can purchase. Power and water available.',
  6800000,
  '68 L',
  'Kangra',
  'Dharamkot, McLeod Ganj',
  'Residential Plot',
  1.8,
  19602,
  32.2432,
  76.3219,
  true,
  false,
  'active',
  ARRAY[
    'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1200',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200'
  ],
  'Jeep road to site',
  true,
  true
),
(
  'Manali Valley Villa Plot — Old Manali',
  'A 2.2 bigha plot in the charming Old Manali area, walking distance from the famed cafes and the Manalsu River. The plot has mountain views on three sides and is ideal for a boutique guesthouse or personal retreat. Town water supply connected. NH3 is 1.5km away.',
  9500000,
  '95 L',
  'Kullu',
  'Old Manali, Manali',
  'Holiday Estate',
  2.2,
  23958,
  32.2579,
  77.1773,
  false,
  false,
  'active',
  ARRAY[
    'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200'
  ],
  'Motorable road, town center 10min walk',
  true,
  true
);
