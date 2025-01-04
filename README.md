# 🌤️ Buscador de Clima

El **Buscador de Clima** es una aplicación web desarrollada en React que permite a los usuarios consultar el clima actual en cualquier ciudad del mundo. La información meteorológica es proporcionada por la API de [OpenWeather](https://openweathermap.org/).

---

## 🖼️ Vista previa

![Buscador de Clima](https://github.com/KevPatterson/App-de-Clima-en-React/blob/main/src/assets/Captura.png)

---

## 🚀 Características

- Búsqueda del clima por ciudad y país.
- Información detallada sobre:
  - 🌡️ Temperatura actual.
  - 🔽 Temperatura mínima.
  - 🔼 Temperatura máxima.
  - 🌧️ Condiciones climáticas con iconos y descripciones.
- Interfaz amigable y responsiva.
- Indicador de carga (spinner) mientras se obtiene la información.

---

## 🛠️ Tecnologías utilizadas

  - [React](https://reactjs.org/)
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) con diseño responsivo.
  - Consumo de la API de [OpenWeather](https://openweathermap.org/).

---

## 📦 Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/KevPatterson/App-de-Clima-en-React.git
   cd buscador-de-clima
   ```

2. **Instalar las dependencias:**
   Asegúrate de tener Node.js instalado. Luego ejecuta:
   ```bash
   npm install
   ```

3. **Configurar la API Key de OpenWeather:**
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega tu clave de API de OpenWeather:
     ```env
     VITE_API_KEY=tu_api_key
     ```

4. **Iniciar la aplicación:**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   La aplicación estará disponible en `http://localhost:5173`.

---

## 🧪 Pruebas

Actualmente, no hay pruebas automatizadas configuradas. Sin embargo, puedes realizar pruebas manuales asegurándote de:

1. Verificar que la información climática coincida con los datos en la API de OpenWeather.
2. Probar la aplicación en diferentes dispositivos y navegadores para confirmar su responsividad.

---

## 🤝 Contribuciones

¡Contribuciones, sugerencias e ideas son bienvenidas! Si deseas colaborar:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza tus cambios y súbelos: `git commit -m "Agrego una nueva funcionalidad"`.
4. Envía un Pull Request.

---

¡Gracias por usar el **Buscador de Clima**! 🌈
```
