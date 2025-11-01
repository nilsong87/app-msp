
document.addEventListener('DOMContentLoaded', function () {
    const eventsContainer = document.getElementById('events-container');

    const events = [
        {
            title: 'Festa de Iemanjá',
            date: '2 de Fevereiro',
            description: 'Uma das comemorações mais tradicionais, com concentração na Primeira ou Segunda Praia e uma romaria fluvial até a Gamboa.',
            image: 'images/agenda/iemanja.webp' 
        },
        {
            title: 'Carnaval',
            date: 'Fevereiro/Março',
            description: 'O carnaval de rua se concentra na Gamboa, um vilarejo vizinho, com shows todas as noites. Há também o Carnaval das Crianças na Primeira Praia.',
            image: 'images/agenda/carnaval.avif'
        },
        {
            title: 'Ressaca de Carnaval',
            date: 'Março',
            description: 'Após o carnaval de Salvador, Morro de São Paulo recebe muitos visitantes, e a festa continua com pacotes de hospedagem específicos para este período.',
            image: 'images/agenda/ressaca.jpg'
        },
        {
            title: 'Festas Juninas',
            date: 'Junho',
            description: 'Uma das maiores festas da Bahia, acontece em quase todas as cidades em junho. Em Morro de São Paulo, as ruas são enfeitadas, há shows na Praça Aureliano Lima, comidas e bebidas típicas.',
            image: 'images/agenda/sao-joao.jpg'
        },
        {
            title: 'Festa de São Pedro da Gamboa',
            date: '29 de Junho',
            description: 'Uma celebração tradicional de dois dias com muita animação, música ao vivo e festa de rua.',
            image: 'images/agenda/sao-pedro.jpg'
        },
        {
            title: 'Festival de Morro (antigo Festival de Primavera)',
            date: 'Dezembro',
            description: 'Um evento anual de destaque com shows gratuitos de artistas nacionais na Segunda Praia.',
            image: 'images/agenda/festival-de-morro.jpg'
        }
    ];

    function renderEvents() {
        eventsContainer.innerHTML = '';
        if (events.length === 0) {
            eventsContainer.innerHTML = '<p>Nenhum evento encontrado.</p>';
            return;
        }

        events.forEach(event => {
            const eventCard = `
                <div class="col-md-4" data-aos="fade-up" style="margin-bottom: 20px;">
                    <div class="card">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                        <div class="card-body">
                            <h5 class="card-title">${event.title}</h5>
                            <p class="card-text"><strong>Data:</strong> ${event.date}</p>
                            <p class="card-text">${event.description}</p>
                        </div>
                    </div>
                </div>
            `;
            eventsContainer.innerHTML += eventCard;
        });
    }

    renderEvents();
    AOS.init();
});
