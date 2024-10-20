document.addEventListener('DOMContentLoaded', function() {
    const linksContainer = document.getElementById('linksContainer');

    // Busca todos os links do Firestore
    db.collection("whatsappLinks").orderBy('timestamp', 'desc').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Cria um elemento para cada link
            const linkElement = document.createElement('div');
            linkElement.innerHTML = `<a href="${doc.data().link}" target="_blank">${doc.data().link}</a>`;
            linksContainer.appendChild(linkElement);
        });
    }).catch((error) => {
        console.error("Erro ao buscar links: ", error);
        linksContainer.innerHTML = "Erro ao carregar os links.";
    });
});
