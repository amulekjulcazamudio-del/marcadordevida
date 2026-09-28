const mensajes = [
    "Desde que empezamos a hablar en clase de inglés, sentí algo de nervios, pero sentí una gran conexión con vos. En poco tiempo has logrado convertirte en alguien muy especial para mí.",
    "Me encanta la forma en que eres, divertida, alegre y me encanta conversar con vos de cualquier cosa, haces que la conversación se sienta diferente.",
    "Admiro mucho la persona que eres, tu forma de ser, una persona luchadora y esa esencia tan bonita y maravillosa que tienes y que me impacta de vos.",
    "Eres una gran chica, una hija de Dios amada y valiosa por Él y por tus familiares. Recuerda que el Padre Celestial siempre estará contigo en todo momento, ¡nunca lo olvides!",
    "Hoy quiero desearte un feliz cumpleaños increíble, porque alguien tan especial como tú merece momentos increíbles.",
    "Gracias por cada cosita, por los momentos inolvidables y por permitirme conocerte un poquito más cada día.",
    "Así que hoy, más que felicitarte, quiero recordarte algo: me alegra muchísimo haberte conocido. ¡Feliz cumpleaños, bella damisela! ❤️"
];

let mensajeActual = 0;

const screenInicio = document.getElementById('inicio');
const screenCarta = document.getElementById('carta');
const screenFinal = document.getElementById('final');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const letterText = document.getElementById('letterText');


const bgMusic = document.getElementById('bgMusic');

startBtn.addEventListener('click', () => {

    if (bgMusic) {
        bgMusic.play().catch(error => {
            console.log("El navegador bloqueó la reproducción automática:", error);
        });
    }

    screenInicio.classList.remove('active');
    screenCarta.classList.add('active');
    letterText.textContent = mensajes[0];
})

nextBtn.addEventListener('click', () => {
    mensajeActual++;
    if (mensajeActual < mensajes.length) {
        letterText.style.opacity = '0';
        
        setTimeout(() => {
            letterText.textContent = mensajes[mensajeActual];
            letterText.style.opacity = '1';
        }, 300);
    } else {
        screenCarta.classList.remove('active');
        screenFinal.classList.add('active');
    }
});