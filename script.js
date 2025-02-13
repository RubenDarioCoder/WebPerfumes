// Arrays para almacenar los productos
let disponibles = [];
let ofertas = [];
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
disponibles.push(afeef);
ofertas.push(afeef);
paraEncargar.push(afeef);

let mughalFort = {
    nombre: "Mughal Fort",
    presentacion: "Eau de Parfum, 100ml",
    genero: "Unisex",
    familia_olfativa: "Oriental Vainilla",
    notas_olfativas: ["cardamomo", "pimiento morrón", "caramelo", "cedro", "vainilla", "ámbar", "almizcle"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma cautivador que seduce desde el instante inicial. Combina notas especiadas y dulces para crear una experiencia olfativa única."
};
disponibles.push(mughalFort);
ofertas.push(mughalFort);
paraEncargar.push(mughalFort);

let p9AmDive = {
    nombre: "9 Am Dive",
    presentacion: "Eau de Toilette, 100ml",
    genero: "Unisex",
    familia_olfativa: "Acuática",
    notas_olfativas: ["bergamota", "lavanda", "sándalo"],
    ocasion: "Diario, verano",
    descripcion: "Un aroma fresco y energizante, ideal para comenzar el día. Evoca la sensación de sumergirse en aguas cristalinas al amanecer."
};
disponibles.push(p9AmDive);
paraEncargar.push(p9AmDive);
ofertas.push(p9AmDive);

let haya = {
    nombre: "Haya",
    presentacion: "Eau de Parfum, 50ml",
    genero: "Femenino",
    familia_olfativa: "Floral Frutal",
    notas_olfativas: ["pera", "rosa", "almizcle"],
    ocasion: "Noche, especial",
    descripcion: "Un aroma delicado y sensual, inspirado en la flor de haya. Perfecto para ocasiones especiales."
};
disponibles.push(haya);
ofertas.push(haya);
paraEncargar.push(haya);

let odysseyMarineSky = {
    nombre: "Odyssey Marine Sky",
    presentacion: "Eau de Toilette, 100ml",
    genero: "Masculino",
    familia_olfativa: "Aromática Acuática",
    notas_olfativas: ["romero", "cedro", "ambroxan"],
    ocasion: "Diario, deportivo",
    descripcion: "Un aroma fresco y vigorizante, que evoca la sensación de libertad y aventura."
};
disponibles.push(odysseyMarineSky);
ofertas.push(odysseyMarineSky);
paraEncargar.push(odysseyMarineSky);


// Función para abrir WhatsApp
function abrirWhatsApp(nombreDelProducto) {
    var numero = "541158473075"; // Reemplaza con tu número
    var mensaje = `Hola! quiero este producto: ${nombreDelProducto}.`; // Usar template literals para incluir el nombre del producto
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
function agregarProducto(productos, contenedor, esOferta = false) {
    productos.forEach(producto => {
        let article = document.createElement('article');
        article.classList.add('article');

        // Agregar clase adicional si es una oferta
        if (esOferta) {
            article.classList.add('oferta');
        }

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
        genero.textContent = `${producto.genero}`;
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
        let buttonPedirW = document.createElement('button');
        buttonPedirW.textContent = 'Pedir por Whatsapp';
        buttonPedirW.classList.add('buttonPedirW');
        buttonPedirW.addEventListener('click', () => abrirWhatsApp(producto.nombre));


        // Agregar elementos al contenedor de detalles
        divProducto.appendChild(h2);
        divProducto.appendChild(genero);
        divProducto.appendChild(familiaOlfativa);
        divProducto.appendChild(notasOlfativas);
        divProducto.appendChild(ocasion);
        divProducto.appendChild(descripcion);
        divButton.appendChild(buttonPedirW);
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
    const contenedorOfertas = document.querySelector('.ofertas');
    const contenedorParaEncargar = document.querySelector('.paraEncargar');

    // Verificar si las listas tienen elementos antes de agregarlos
    if (disponibles.length > 0) {
        agregarProducto(disponibles, contenedorDisponibles);
    }
    if (ofertas.length > 0) {
        agregarProducto(ofertas, contenedorOfertas, true); // true para indicar que son ofertas
    }
    if (paraEncargar.length > 0) {
        agregarProducto(paraEncargar, contenedorParaEncargar);
    }

    // Configurar el evento de scroll para animaciones
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar la página para mostrar los elementos visibles
    
    document.querySelectorAll('.pregunta-btn').forEach(button => {
    button.addEventListener('click', () => {
        const pregunta = button.parentElement;
        pregunta.classList.toggle('active');
    });
});
    
    
});
