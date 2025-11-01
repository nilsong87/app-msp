
const weatherIcon = document.querySelector('#weather-icon');
const weatherTemperature = document.querySelector('#weather-temperature');
const weatherCondition = document.querySelector('#weather-condition');

const weatherCodes = {
    0: { description: 'Céu limpo', icon: 'fa-sun' },
    1: { description: 'Principalmente limpo', icon: 'fa-sun' },
    2: { description: 'Parcialmente nublado', icon: 'fa-cloud-sun' },
    3: { description: 'Nublado', icon: 'fa-cloud' },
    45: { description: 'Nevoeiro', icon: 'fa-smog' },
    48: { description: 'Nevoeiro depositado', icon: 'fa-smog' },
    51: { description: 'Garoa leve', icon: 'fa-cloud-rain' },
    53: { description: 'Garoa moderada', icon: 'fa-cloud-rain' },
    55: { description: 'Garoa densa', icon: 'fa-cloud-showers-heavy' },
    56: { description: 'Garoa gelada leve', icon: 'fa-snowflake' },
    57: { description: 'Garoa gelada densa', icon: 'fa-snowflake' },
    61: { description: 'Chuva fraca', icon: 'fa-cloud-rain' },
    63: { description: 'Chuva moderada', icon: 'fa-cloud-rain' },
    65: { description: 'Chuva forte', icon: 'fa-cloud-showers-heavy' },
    66: { description: 'Chuva gelada leve', icon: 'fa-snowflake' },
    67: { description: 'Chuva gelada forte', icon: 'fa-snowflake' },
    71: { description: 'Neve fraca', icon: 'fa-snowflake' },
    73: { description: 'Neve moderada', icon: 'fa-snowflake' },
    75: { description: 'Neve forte', icon: 'fa-snowflake' },
    77: { description: 'Grãos de neve', icon: 'fa-snowflake' },
    80: { description: 'Pancadas de chuva fracas', icon: 'fa-cloud-showers-heavy' },
    81: { description: 'Pancadas de chuva moderadas', icon: 'fa-cloud-showers-heavy' },
    82: { description: 'Pancadas de chuva violentas', icon: 'fa-cloud-showers-heavy' },
    85: { description: 'Pancadas de neve fracas', icon: 'fa-snowflake' },
    86: { description: 'Pancadas de neve fortes', icon: 'fa-snowflake' },
    95: { description: 'Trovoada', icon: 'fa-bolt' },
    96: { description: 'Trovoada com granizo fraco', icon: 'fa-bolt' },
    99: { description: 'Trovoada com granizo forte', icon: 'fa-bolt' },
};

async function getWeather() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-13.38&longitude=-38.91&current_weather=true');
        const data = await response.json();

        const temperature = data.current_weather.temperature;
        const weatherCode = data.current_weather.weathercode;
        const condition = weatherCodes[weatherCode] || { description: 'Não disponível', icon: 'fa-question-circle' };

        weatherIcon.className = `fas ${condition.icon} fa-4x text-warning`;
        weatherTemperature.textContent = `${temperature.toFixed(0)}°C`;
        weatherCondition.textContent = condition.description;
    } catch (error) {
        console.error('Erro ao buscar dados do clima:', error);
        weatherTemperature.textContent = '--°C';
        weatherCondition.textContent = 'Erro ao carregar';
    }
}

getWeather();
setInterval(getWeather, 600000); // Atualiza a cada 10 minutos
