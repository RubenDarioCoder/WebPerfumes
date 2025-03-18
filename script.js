// Arrays para almacenar los productos
let disponibles = [];
let paraEncargar = [];

// Definición de los productos
let Afeefdelattafa = {
    nombre: "Afeef de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Floral",
    notas_olfativas: ["jazmín", "sándalo", "vainilla"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma envolvente y sensual, inspirado en la belleza de los desiertos árabes."
};
let LataffaHonorYGloria = {
    nombre: "Lataffa honor y gloria",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Dulce",
    notas_olfativas: ["vainilla", "ámbar", "azúcar caramelizado"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma dulce y seductor, perfecto para ocasiones especiales."
};

let AlJhawharaDeLattafa = {
    nombre: "Al jhawhara de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral Oriental",
    notas_olfativas: ["jazmín", "vainilla", "ámbar"],
    ocasion: "Noche, formal",
    descripcion: "Un perfume elegante y sofisticado con un toque oriental."
};

let AmberOudPrivateDeAlHaramain = {
    nombre: "Amber oud private de al Haramain",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["ámbar", "oud", "vainilla"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para quienes buscan algo único."
};

let YaraBourbonDeLataffa = {
    nombre: "Yara bourbon de lataffa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Gourmand",
    notas_olfativas: ["vainilla", "bourbon", "azúcar"],
    ocasion: "Día, noche",
    descripcion: "Un perfume dulce y adictivo, perfecto para cualquier ocasión."
};

let TanasukDeAlHaramain = {
    nombre: "Tanasuk de al Haramain",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Especiado",
    notas_olfativas: ["azafrán", "rosa", "ámbar"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma exótico y cautivador, inspirado en las tradiciones árabes."
};

let RehlaDeAdyan = {
    nombre: "Rehla de adyan",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["oud", "vainilla", "pachulí"],
    ocasion: "Noche, especial",
    descripcion: "Un perfume que evoca un viaje místico y enriquecedor."
};

let TagHerColorataDeArmaf = {
    nombre: "Tag her colorata de armaf",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral Frutal",
    notas_olfativas: ["frutos rojos", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma fresco y femenino, ideal para mujeres modernas."
};

let NitroRedDeDumont = {
    nombre: "Nitro red de dumont",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "cuero", "ámbar"],
    ocasion: "Noche, formal",
    descripcion: "Un perfume audaz y energético, para hombres con carácter."
};

let AnsaamGoldDeLattafa = {
    nombre: "Ansaam gold de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral Dulce",
    notas_olfativas: ["jazmín", "vainilla", "almizcle"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma glamoroso y sofisticado, perfecto para ocasiones especiales."
};

let MayarNaturalDeLattafa = {
    nombre: "Mayar natural de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral Frutal",
    notas_olfativas: ["frutos rojos", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y juvenil, ideal para el día a día."
};

let EjaaziDeLataffa = {
    nombre: "Emaan de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "ámbar"],
    ocasion: "Día, noche",
    descripcion: "Un aroma masculino y sofisticado, ideal para hombres modernos."
};

let GlacierPourHommeDeMaisonAlhambra = {
    nombre: "Glacier pour homme de maison alhambra",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, formal",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let SabahAlWardDeAlWataniah = {
    nombre: "Sabah al ward de al wataniah",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let MuskEssencialDeAdyan = {
    nombre: "Musk essencial de adyan",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Musk",
    notas_olfativas: ["almizcle", "vainilla", "ámbar"],
    ocasion: "Día, noche",
    descripcion: "Un perfume suave y sensual, perfecto para cualquier ocasión."
};

let PhilipsOpusNoirDeMaisonAlhambra = {
    nombre: "Philips opus noir de maison alhambra",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let SillageDeClubDeNuit = {
    nombre: "Sillage de club de nuit",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let HisConfessionDeLattafa = {
    nombre: "His confession de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let FakharDeLattafa = {
    nombre: "Fakhar de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let EmeerDeLattafa = {
    nombre: "Emeer de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let QaedAlFursanDeLattafa = {
    nombre: "Qaed al fursan de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let SouvenirBloomingBlissDeAfnan = {
    nombre: "Souvenir blooming bliss de afnan",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let TagHimUomoRossoDeArmaf = {
    nombre: "Tag him uomo rosso de armaf",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let EternalDeLattafa = {
    nombre: "Eternal de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let NinePMRebelAfnan = {
    nombre: "9pm rebel afnan",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let BlueDeBharara = {
    nombre: "Blue de bharara",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let WajoodDeLattafa = {
    nombre: "Wajood de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let AlNobleWazeerDeLattafa = {
    nombre: "Al noble wazeer de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let AlNobleAmeerDeLattafa = {
    nombre: "Al noble ameer de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let AmberOudDubaiNightDeAlHaramain = {
    nombre: "Amber oud dubai night de al Haramain",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["ámbar", "oud", "vainilla"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para quienes buscan algo único."
};

let KalidDeLattafa = {
    nombre: "Kalid de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let MughalFortDeLattafa = {
    nombre: "Mughal fort de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let MandarinSkyDeArmaf = {
    nombre: "Mandarin sky de armaf",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Cítrico",
    notas_olfativas: ["mandarina", "bergamota", "madera de cedro"],
    ocasion: "Día, noche",
    descripcion: "Un aroma fresco y vibrante, ideal para el día a día."
};

let HayaDeLattafa = {
    nombre: "Haya de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let ShaheenGoldDeLattafa = {
    nombre: "Shaheen gold de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let NineAMDiveDeAfnan = {
    nombre: "9am dive de afnan",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Cítrico",
    notas_olfativas: ["mandarina", "bergamota", "madera de cedro"],
    ocasion: "Día, noche",
    descripcion: "Un aroma fresco y vibrante, ideal para el día a día."
};

let UntoldDeClubDeNuit = {
    nombre: "Untold de club de nuit",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let KhanjarDeLattafa = {
    nombre: "Khanjar de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let HistoricDoriaDeAfnan = {
    nombre: "Historic doria de afnan",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let NobleBlushDeLattafa = {
    nombre: "Noble blush de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let DelilahDeMaisonAlhambra = {
    nombre: "Delilah de maison alhambra",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let MayarCherryIntenseDeLattafa = {
    nombre: "Mayar cherry intense de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral Frutal",
    notas_olfativas: ["cereza", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma dulce y jugoso, perfecto para mujeres jóvenes."
};

let AmberOudUltraVioletDeAlHaramain = {
    nombre: "Amber oud ultra violet de al Haramain",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["ámbar", "oud", "vainilla"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para quienes buscan algo único."
};

let NebrasDeLattafa = {
    nombre: "Nebras de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let OudForGloryDeLattafa = {
    nombre: "Oud for glory de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["oud", "madera de cedro", "vainilla"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para quienes buscan algo único."
};

let VentanaDeArmaf = {
    nombre: "Ventana de armaf",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let GlacierLeNoirDeMaisonAlhambra = {
    nombre: "Glacier le noir de maison alhambra",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let NinePMDeAfnan = {
    nombre: "9pm de afnan",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let AmberOudAquaDubaiDeAlHaramain = {
    nombre: "Amber  oud Aqua dubai de al haramain",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["ámbar", "oud", "vainilla"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para quienes buscan algo único."
};

let GoddessDeBharara = {
    nombre: "Goddess de bharara",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let HerConfessionDeLattafa = {
    nombre: "Her confession de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let EclaireDeLattafa = {
    nombre: "Eclaire de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let AmberOudGold9999DubaiAlHaramain = {
    nombre: "Amber oud gold 999.9 dubai al haramain",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["ámbar", "oud", "vainilla"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para quienes buscan algo único."
};

let VintageCastleDeLattafa = {
    nombre: "Vintage castle de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let SehrDeLattafa = {
    nombre: "Sehr de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let KingDeBharara = {
    nombre: "King de bharara",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let AmberOudRubyDeAlHaramain = {
    nombre: "Amber oud ruby de al Haramain",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["ámbar", "oud", "vainilla"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para quienes buscan algo único."
};

let UrbanManClubDeNuit = {
    nombre: "Urban man club de nuit",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let IconicClubDeNuit = {
    nombre: "Iconic club de nuit",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let JeanLoweImmortelDeMaisonAlhambra = {
    nombre: "Jean lowe immortel de maison alhambra",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let AmberOudGoldAlHaramain = {
    nombre: "Amber oud gold al Haramain",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["ámbar", "oud", "vainilla"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para quienes buscan algo único."
};

let KhamrahQahwaDeLattafa = {
    nombre: "Khamrah qahwa de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Dulce",
    notas_olfativas: ["vainilla", "café", "azúcar"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma dulce y seductor, perfecto para ocasiones especiales."
};

let YaraRosadoDeLattafa = {
    nombre: "Yara rosado de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let MayarDeLattafa = {
    nombre: "Mayar de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral Frutal",
    notas_olfativas: ["frutos rojos", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma fresco y juvenil, ideal para el día a día."
};

let IntenseManClubDeNuit = {
    nombre: "Intense man club de nuit",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let EmaanDeLattafa = {
    nombre: "Emaan de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let YaraAsadDeLattafa = {
    nombre: "Yara asad de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let NineAMAfnan = {
    nombre: "9am afnan",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Cítrico",
    notas_olfativas: ["mandarina", "bergamota", "madera de cedro"],
    ocasion: "Día, noche",
    descripcion: "Un aroma fresco y vibrante, ideal para el día a día."
};

let AjwadDeLattafa = {
    nombre: "Ajwad de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let TeriaqDeLattafa = {
    nombre: "Teriaq de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let FhakarRoseDeLattafa = {
    nombre: "Fhakar rose de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let SakeenaDeLattafa = {
    nombre: "Sakeena de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let YaraTousDeLattafa = {
    nombre: "Yara tous de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let YaraMoiDeLattafa = {
    nombre: "Yara moi de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let YaraAsadZanzibarDeLattafa = {
    nombre: "Yara asad Zanzíbar de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let ConfidentialDeLattafa = {
    nombre: "Confidential de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let FabuloIntenseDeMaisonAlhambra = {
    nombre: "Fabulo intense de maison alhambra",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let QaedAlFursanNegroDeLattafa = {
    nombre: "Qaed al fursan negro de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "cuero"],
    ocasion: "Noche, formal",
    descripcion: "Un aroma intenso y misterioso, ideal para hombres audaces."
};

let ToleenDeLattafa = {
    nombre: "Toleen de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

let KhamrahDeLattafa = {
    nombre: "Khamrah de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Dulce",
    notas_olfativas: ["vainilla", "canela", "azúcar"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma dulce y seductor, perfecto para ocasiones especiales."
};

let CandeeOdysseyDeArmaf = {
    nombre: "Candee odyssey de armaf",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let GlacierUltraDeMaisonAlhambra = {
    nombre: "Glacier ultra de maison alhambra",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Fresco",
    notas_olfativas: ["bergamota", "madera de cedro", "almizcle"],
    ocasion: "Día, noche",
    descripcion: "Un perfume fresco y moderno, perfecto para el hombre contemporáneo."
};

let AmethystDeLattafa = {
    nombre: "Amethyst de lattafa",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral",
    notas_olfativas: ["rosa", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma floral y delicado, ideal para mujeres elegantes."
};

/*paraEncargar.push(Afeefdelattafa, LataffaHonorYGloria, AlJhawharaDeLattafa, AmberOudPrivateDeAlHaramain, YaraBourbonDeLataffa, TanasukDeAlHaramain, RehlaDeAdyan,TagHerColorataDeArmaf, NitroRedDeDumont, AnsaamGoldDeLattafa, MayarNaturalDeLattafa, EjaaziDeLataffa, GlacierPourHommeDeMaisonAlhambra, SabahAlWardDeAlWataniah, MuskEssencialDeAdyan, PhilipsOpusNoirDeMaisonAlhambra, SillageDeClubDeNuit, HisConfessionDeLattafa, FakharDeLattafa, EmeerDeLattafa, QaedAlFursanDeLattafa, SouvenirBloomingBlissDeAfnan, TagHimUomoRossoDeArmaf, EternalDeLattafa, NinePMRebelAfnan, BlueDeBharara, WajoodDeLattafa, AlNobleWazeerDeLattafa, AlNobleAmeerDeLattafa, AmberOudDubaiNightDeAlHaramain, KalidDeLattafa, MughalFortDeLattafa, MandarinSkyDeArmaf, HayaDeLattafa, ShaheenGoldDeLattafa, NineAMDiveDeAfnan, UntoldDeClubDeNuit, KhanjarDeLattafa, HistoricDoriaDeAfnan, NobleBlushDeLattafa, DelilahDeMaisonAlhambra, MayarCherryIntenseDeLattafa, AmberOudUltraVioletDeAlHaramain, NebrasDeLattafa, OudForGloryDeLattafa, VentanaDeArmaf, GlacierLeNoirDeMaisonAlhambra, NinePMDeAfnan, AmberOudAquaDubaiDeAlHaramain, GoddessDeBharara, HerConfessionDeLattafa, EclaireDeLattafa, AmberOudGold9999DubaiAlHaramain, VintageCastleDeLattafa, SehrDeLattafa, KingDeBharara, AmberOudRubyDeAlHaramain, UrbanManClubDeNuit, IconicClubDeNuit, JeanLoweImmortelDeMaisonAlhambra, AmberOudGoldAlHaramain, KhamrahQahwaDeLattafa, YaraRosadoDeLattafa, MayarDeLattafa, IntenseManClubDeNuit, EmaanDeLattafa, YaraAsadDeLattafa, NineAMAfnan, AjwadDeLattafa, TeriaqDeLattafa, FhakarRoseDeLattafa, SakeenaDeLattafa, YaraTousDeLattafa, YaraMoiDeLattafa, YaraAsadZanzibarDeLattafa, ConfidentialDeLattafa, FabuloIntenseDeMaisonAlhambra, QaedAlFursanNegroDeLattafa, ToleenDeLattafa, KhamrahDeLattafa, CandeeOdysseyDeArmaf, GlacierUltraDeMaisonAlhambra, AmethystDeLattafa);
*/

// Función para abrir WhatsApp
function abrirWhatsApp(nombreDelProducto, tipo) {
    var numero = "541158473075"; // Reemplaza con tu número
    var mensaje;

    if (tipo === "disponible") {
        mensaje = `Quiero comprar ${nombreDelProducto}. Soy `;
    } else if (tipo === "encargar") {
        mensaje = `Quiero encargar ${nombreDelProducto}. Soy `;
    }

    var url = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}

//Mensaje de bienvenida
function abrirWhatsAppBienvenida() {
    var numero = "541158473075"; // Reemplaza con tu número en formato internacional sin el signo "+"
    var mensaje = "¡Hola! quiero saber de "; // Mensaje de bienvenida
    var url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank'); // Abre en una nueva pestaña
}
// Función para agregar productos al DOM
function agregarProducto(productos, contenedor, tipo) {
    productos.forEach(producto => {
        let article = document.createElement('article');
        article.classList.add('article');

        // Crear la imagen del producto
        let imgProducto = document.createElement('img');
        imgProducto.src = `img/${producto.nombre}.jpg`;
        imgProducto.alt = producto.nombre;
        imgProducto.classList.add('imgProducto');

        // Crear el contenedor de detalles del producto
        let divProducto = document.createElement('div');
        divProducto.classList.add('divProducto');

        // Nombre del producto
        let h2 = document.createElement('h2');
        h2.textContent = producto.nombre;
        h2.classList.add('h2Producto');

        // Género del producto
        let genero = document.createElement('p');
        genero.textContent = `Género: ${producto.genero}`;
        genero.classList.add('genero');

        // Familia olfativa
        let familiaOlfativa = document.createElement('p');
        familiaOlfativa.textContent = `Familia Olfativa: ${producto.familia_olfativa}`;
        familiaOlfativa.classList.add('familiaOlfativa');

        // Notas olfativas
        let notasOlfativas = document.createElement('p');
        notasOlfativas.textContent = `Notas Olfativas: ${producto.notas_olfativas.join(', ')}`;
        notasOlfativas.classList.add('notasOlfativas');

        // Ocasión
        let ocasion = document.createElement('p');
        ocasion.textContent = `Ocasión: ${producto.ocasion}`;
        ocasion.classList.add('ocasion');

        // Descripción
        let descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;
        descripcion.classList.add('descripcion');

        // Contenedor de botones
        let divButton = document.createElement('div');
        divButton.classList.add('divButton');

        // Botón de WhatsApp
        let buttonComprarParaEncargar = document.createElement('button');
        buttonComprarParaEncargar.textContent = tipo === "disponible" ? 'Comprar por Whatsapp' : 'Encargar por Whatsapp';
        buttonComprarParaEncargar.classList.add('buttonComprarParaEncargar');
        buttonComprarParaEncargar.addEventListener('click', () => abrirWhatsApp(producto.nombre, tipo));

        // Agregar elementos al contenedor de detalles
        divProducto.appendChild(h2);
        divProducto.appendChild(genero);
        divProducto.appendChild(familiaOlfativa);
        divProducto.appendChild(notasOlfativas);
        divProducto.appendChild(ocasion);
        divProducto.appendChild(descripcion);
        divButton.appendChild(buttonComprarParaEncargar);
        divProducto.appendChild(divButton);

        // Agregar imagen y detalles al artículo
        article.appendChild(imgProducto);
        article.appendChild(divProducto);

        // Agregar artículo al contenedor
        contenedor.appendChild(article);
    });
}

// Función para detectar el scroll y mostrar animaciones
function handleScroll() {
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
        const articleTop = article.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (articleTop < windowHeight - 100) {
            article.classList.add('visible');
        }
    });
}

// Cargar productos al DOM
document.addEventListener('DOMContentLoaded', () => {
    const contenedorDisponibles = document.querySelector('.disponibles');
    const contenedorParaEncargar = document.querySelector('.paraEncargar');

    // Verificar si las listas tienen elementos antes de agregarlos
    if (disponibles.length > 0) {
        agregarProducto(disponibles, contenedorDisponibles, "disponible");
    }
    if (paraEncargar.length > 0) {
        agregarProducto(paraEncargar, contenedorParaEncargar, "encargar");
    }

    // Configurar el evento de scroll para animaciones
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar la página para mostrar los elementos visibles
});
