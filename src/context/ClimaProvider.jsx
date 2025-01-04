import { useState, createContext } from 'react';
import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: '',
    });

    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);
    const [noResultado, setNoResultado] = useState('');

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    const consultarClima = async (datos) => {
        setCargando(true);
        setNoResultado('');
        try {
            const { ciudad, pais } = datos;
            const appId = import.meta.env.VITE_API_KEY;

            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
            const { data: geoData } = await axios(geoUrl);

            if (geoData.length === 0) {
                setNoResultado('No se encontró la ubicación.');
                setResultado({});
                return;
            }

            const { lat, lon } = geoData[0];
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const { data: weatherData } = await axios(weatherUrl);

            setResultado(weatherData);
        } catch (error) {
            setNoResultado('Error al obtener el clima.');
            setResultado({});
        } finally {
            setCargando(false);
        }
    };

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                cargando,
                noResultado,
            }}
        >
            {children}
        </ClimaContext.Provider>
    );
};

export { ClimaProvider };
export default ClimaContext;
