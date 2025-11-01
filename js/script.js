        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado pelo seu contato! Responderemos em breve.');
            this.reset();
        });

        // FAB click event
        document.querySelector('.fab').addEventListener('click', function() {
            alert('Chat de atendimento em breve! Enquanto isso, entre em contato pelo formulário.');
        });

        // Real-time Weather
        function updateWeather() {
            const lat = -13.38;
            const lon = -38.91;
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const temperature = data.current_weather.temperature;
                    const weatherCode = data.current_weather.weathercode;

                    document.querySelector('#weather .display-4').textContent = `${Math.round(temperature)}°C`;

                    let weatherIcon = 'fa-sun';
                    let weatherText = 'Ensolarado';

                    if (weatherCode > 0 && weatherCode < 3) {
                        weatherIcon = 'fa-cloud-sun';
                        weatherText = 'Parcialmente Nublado';
                    } else if (weatherCode >= 3 && weatherCode < 5) {
                        weatherIcon = 'fa-cloud';
                        weatherText = 'Nublado';
                    } else if (weatherCode >= 51 && weatherCode <= 67) {
                        weatherIcon = 'fa-cloud-showers-heavy';
                        weatherText = 'Chuva';
                    } else if (weatherCode >= 80 && weatherCode <= 82) {
                        weatherIcon = 'fa-cloud-showers-heavy';
                        weatherText = 'Chuva Forte';
                    } else if (weatherCode >= 95 && weatherCode <= 99) {
                        weatherIcon = 'fa-bolt';
                        weatherText = 'Tempestade';
                    }

                    document.querySelector('#weather .fa-4x').className = `fas ${weatherIcon} fa-4x text-warning`;
                    document.querySelector('#weather .mb-0').textContent = weatherText;
                })
                .catch(error => console.error('Error fetching weather data:', error));
        }

        updateWeather();
        setInterval(updateWeather, 900000); // 15 minutes