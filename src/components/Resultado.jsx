import useClima from '../hooks/useClima';

const Resultado = () => {
    const { resultado } = useClima();
    const { name, main, weather } = resultado;

    if (!name || !main || !weather) return null;

    const kelvin = 273.15;

    // Función para determinar un emoji y texto basado en la descripción del clima
    const obtenerClimaConEmoji = (descripcion) => {
        const descripcionLower = descripcion.toLowerCase();
        if (descripcionLower.includes('clear')) return { texto: 'Despejado', emoji: '☀️' };
        if (descripcionLower.includes('cloud')) return { texto: 'Nublado', emoji: '☁️' };
        if (descripcionLower.includes('rain')) return { texto: 'Lluvioso', emoji: '🌧️' };
        if (descripcionLower.includes('snow')) return { texto: 'Nevado', emoji: '❄️' };
        if (descripcionLower.includes('storm')) return { texto: 'Tormentoso', emoji: '⛈️' };
        return { texto: 'Condiciones desconocidas', emoji: '🌡️' }; // Predeterminado
    };

    const { texto: descripcionClima, emoji: emojiClima } = obtenerClimaConEmoji(weather[0].description);

    return (
        <div className="contenedor clima">
            <h2>
                {emojiClima} El clima en {name} es de: {parseInt(main.temp - kelvin)}
                <span>&#x2103;</span>
            </h2>
            <div className="temperatura">
                <p>
                    Mínima: {parseInt(main.temp_min - kelvin)}
                    <span>&#x2103;</span>
                </p>
                <p>
                    Máxima: {parseInt(main.temp_max - kelvin)}
                    <span>&#x2103;</span>
                </p>
            </div>
            <p>
                <strong>Condiciones:</strong> {descripcionClima} {emojiClima}
            </p>
        </div>
    );
};

export default Resultado;
