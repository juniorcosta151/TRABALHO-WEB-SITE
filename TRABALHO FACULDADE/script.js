// Verifica se há um contador no armazenamento local
if (localStorage.getItem('visits')) {
    // Se houver, obtém o número de visitas e atualiza o contador na página
    let visits = parseInt(localStorage.getItem('visits'));
    document.getElementById('counter').innerText = visits;

    // Incrementa o número de visitas e salva no armazenamento local
    visits++;
    localStorage.setItem('visits', visits);
} else {
    // Se não houver contador, define o contador como 1 e salva no armazenamento local
    localStorage.setItem('visits', 1);
    document.getElementById('counter').innerText = 1;
}
