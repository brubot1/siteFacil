document.getElementById('linkForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pegando o valor do input
    const groupLink = document.getElementById('groupLink').value;

    // Verifica se o link não está vazio
    if (groupLink.trim() === "") {
        document.getElementById('message').innerHTML = "Por favor, insira um link válido!";
        return;
    }

    // Adiciona o link ao Firestore
    db.collection("whatsappLinks").add({
        link: groupLink,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        document.getElementById('message').innerHTML = "Link enviado com sucesso!";
        document.getElementById('groupLink').value = '';  // Limpa o campo
    }).catch((error) => {
        console.error("Erro ao adicionar link: ", error);
        document.getElementById('message').innerHTML = "Erro ao enviar link.";
    });
});
