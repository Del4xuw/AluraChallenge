document.addEventListener("DOMContentLoaded", function() {
    const encriptarBtn = document.querySelector('.encriptar');
    const desencriptarBtn = document.querySelector('.desencriptar');
    const textoInput = document.querySelector('.contenedor-texto');
    const rectangulo = document.querySelector('.rectangulo');

    // Función para encriptar el texto
    function encriptarTexto(texto) {
        // Reemplazar las letras según las reglas de encriptación
        const textoEncriptado = texto.replace(/e/g, 'enter')
                                      .replace(/i/g, 'imes')
                                      .replace(/a/g, 'ai')
                                      .replace(/o/g, 'ober')
                                      .replace(/u/g, 'ufat');
        return textoEncriptado;
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        // Reemplazar las palabras encriptadas por las letras originales
        const textoDesencriptado = texto.replace(/enter/g, 'e')
                                        .replace(/imes/g, 'i')
                                        .replace(/ai/g, 'a')
                                        .replace(/ober/g, 'o')
                                        .replace(/ufat/g, 'u');
        return textoDesencriptado;
    }

    // Función para manejar el clic en el botón de encriptar
    encriptarBtn.addEventListener('click', () => {
        const textoOriginal = textoInput.value.toLowerCase(); // Convertir a minúsculas
        const textoEncriptado = encriptarTexto(textoOriginal);
        
        // Mostrar el texto encriptado dentro del rectángulo
        rectangulo.innerHTML = `<p class="texto-rectangulo texto-encriptado">${textoEncriptado}</p>`;
        
        // Ocultar la imagen y los textos secundarios
        rectangulo.style.backgroundImage = "none";
    });

    // Función para manejar el clic en el botón de desencriptar
    desencriptarBtn.addEventListener('click', () => {
        const textoEncriptado = textoInput.value.toLowerCase(); // Convertir a minúsculas
        const textoDesencriptado = desencriptarTexto(textoEncriptado);
        
        // Mostrar el texto desencriptado dentro del rectángulo
        rectangulo.innerHTML = `<p class="texto-rectangulo texto-encriptado">${textoDesencriptado}</p>`;
        
        // Ocultar la imagen y los textos secundarios
        rectangulo.style.backgroundImage = "none";
    });
});
