// Arrays para almacenar los productos
let disponibles = [];
let paraEncargar = [];

// Definición de los productos
let afeef = {
    nombre: "Afeef",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Floral",
    notas_olfativas: ["jazmín", "sándalo", "vainilla"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma envolvente y sensual, inspirado en la belleza de los desiertos árabes."
};

let mughalFort = {
    nombre: "Mughal Fort",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Vainilla",
    notas_olfativas: ["cardamomo", "pimiento morrón", "caramelo", "cedro", "vainilla", "ámbar", "almizcle"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma cautivador que seduce desde el instante inicial. Combina notas especiadas y dulces para crear una experiencia olfativa única."
};

let p9AmDive = {
    nombre: "9 Am Dive",
    presentacion: "Eau de Toilette, 100ml",
    genero: "Unisex",
    familia_olfativa: "Acuática",
    notas_olfativas: ["bergamota", "lavanda", "sándalo"],
    ocasion: "Diario, verano",
    descripcion: "Un aroma fresco y energizante, ideal para comenzar el día. Evoca la sensación de sumergirse en aguas cristalinas al amanecer."
};

let haya = {
    nombre: "Haya",
    presentacion: "Eau de Parfum, 50ml",
    genero: "Femenino",
    familia_olfativa: "Floral Frutal",
    notas_olfativas: ["pera", "rosa", "almizcle"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma delicado y sensual, inspirado en la flor de haya. Perfecto para ocasiones especiales."
};

let odysseyMarineSky = {
    nombre: "Odyssey Marine Sky",
    presentacion: "Eau de Toilette, 100ml",
    genero: "Masculino",
    familia_olfativa: "Aromática Acuática",
    notas_olfativas: ["romero", "cedro", "ambroxan"],
    ocasion: "Diario, deportivo",
    descripcion: "Un aroma fresco y vigorizante, que evoca la sensación de libertad y aventura."
};

let badeeAlOud = {
    nombre: "Badee al Oud",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Amaderado",
    notas_olfativas: ["oud", "azafrán", "vainilla"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma intenso y sofisticado, centrado en el oud, ideal para ocasiones especiales."
};

let alJawharaNicheEmarato = {
    nombre: "Al Jawhara Niche Emarato",
    presentacion: "Eau de Parfum, 75ml",
    genero: "Femenino",
    familia_olfativa: "Floral Oriental",
    notas_olfativas: ["jazmín", "vainilla", "ámbar"],
    ocasion: "Noche, formal",
    descripcion: "Un perfume elegante y femenino, con un toque oriental que evoca lujo y sofisticación."
};

let haramainTanasuk = {
    nombre: "Haramain Tanasuk",
    presentacion: "Eau de Parfum, 60ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Especiado",
    notas_olfativas: ["canela", "azafrán", "madera de sándalo"],
    ocasion: "Noche, invierno",
    descripcion: "Un aroma cálido y especiado, perfecto para las noches frías."
};

let rehlaAydan = {
    nombre: "Rehla Aydan",
    presentacion: "Eau de Parfum, 50ml",
    genero: "Unisex",
    familia_olfativa: "Amaderado Aromático",
    notas_olfativas: ["pachulí", "vétiver", "notas amaderadas"],
    ocasion: "Día, noche",
    descripcion: "Un perfume versátil y moderno, con un carácter amaderado y aromático."
};

let armafTag = {
    nombre: "Armaf Tag",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Amaderado Especiado",
    notas_olfativas: ["pimienta", "madera de cedro", "ámbar"],
    ocasion: "Día, noche",
    descripcion: "Un aroma masculino y especiado, con un toque amaderado que lo hace ideal para cualquier ocasión."
};

let mayar = {
    nombre: "Mayar",
    presentacion: "Eau de Parfum, 50ml",
    genero: "Unisex",
    familia_olfativa: "Floral Amaderado",
    notas_olfativas: ["rosa", "madera de oud", "almizcle"],
    ocasion: "Noche, especial",
    descripcion: "Un perfume elegante y equilibrado, con notas florales y amaderadas que lo hacen perfecto para ocasiones especiales."
};

let muskEsentialAydan = {
    nombre: "Musk Esencial Aydan",
    presentacion: "Eau de Parfum, 60ml",
    genero: "Unisex",
    familia_olfativa: "Musk Floral",
    notas_olfativas: ["almizcle", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un aroma suave y sensual, con un toque floral que lo hace versátil para cualquier momento."
};

let SouvenirBoomingBless = {
    nombre: "Souvenir Booming Bless",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Femenino",
    familia_olfativa: "Floral Frutal",
    notas_olfativas: ["frutas rojas", "jazmín", "vainilla"],
    ocasion: "Día, noche",
    descripcion: "Un perfume vibrante y femenino, con un toque frutal y floral que lo hace ideal para cualquier ocasión."
};

let p9AmDiveRebeld = {
    nombre: "9Am Dive Rebeld",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Masculino",
    familia_olfativa: "Cítrico Aromático",
    notas_olfativas: ["limón", "manzana", "lavanda", "vainilla", "ámbar"],
    ocasion: "Día, primavera/verano",
    descripcion: "Un perfume fresco y vibrante, con un toque cítrico y aromático que evoca energía y juventud. Perfecto para el uso diario en climas cálidos."
};

disponibles.push(afeef, badeeAlOud, haramainTanasuk, rehlaAydan, armafTag, mayar);
paraEncargar.push(mughalFort, p9AmDive, haya, odysseyMarineSky);

// Función para abrir WhatsApp
function abrirWhatsApp(nombreDelProducto, tipo) {
    var numero = "541144701604"; // Reemplaza con tu número
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
    var numero = "541144701604"; // Reemplaza con tu número en formato internacional sin el signo "+"
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