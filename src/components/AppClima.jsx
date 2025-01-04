import React from 'react';
import Formulario from './Formulario';
import Resultado from './Resultado';
import Spinner from './Spinner';
import useClima from '../hooks/useClima';

const AppClima = () => {
    const { resultado, cargando, noResultado } = useClima();

    return (
        <main className="dos-columnas">
            <Formulario />
            <section>
                {cargando && <Spinner />}
                {!cargando && resultado?.name && <Resultado />}
                {!cargando && noResultado && <p>{noResultado}</p>}
                {!cargando && !resultado?.name && !noResultado && (
                    <p>El clima se mostrará aquí</p>
                )}
            </section>
        </main>
    );
};

export default AppClima;
