// Obtém todos os elementos com a classe 'scroll-link'
const scrollLinks = document.querySelectorAll('.scroll-link');

// Percorre todos os elementos e adiciona o evento de clique
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o destino da rolagem a partir do atributo 'href' do link
        const targetId = link.getAttribute('href');

        // Obtém o elemento de destino da rolagem
        const targetElement = document.querySelector(targetId);

        // Verifica se o elemento de destino existe
        if (targetElement) {
            // Calcula a posição de rolagem do elemento de destino
            const targetPosition = targetElement.offsetTop;

            // Rola suavemente até a posição do elemento de destino
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
