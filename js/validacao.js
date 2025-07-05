// Função para validar nome do jogador

function validarNomeJogador(nome) {
    console.log("Validando nome do jogador:", nome);
    const nomeLimpo = nome.trim();

    if (!nomeLimpo) {
        audioManager.playSFX('notification');
        alert("Por favor, jovem aventureiro, insira um nome válido!");
        return false;
    }

    if (nomeLimpo.length > 20) {
        audioManager.playSFX('notification');
        alert("Aventureiro, o nome deve ter no máximo 20 caracteres!");
        return false;
    }

    const regex = /^[\w\s]+$/;
    if (!regex.test(nomeLimpo)) {
        audioManager.playSFX('notification');
        alert("Aventureiro, o nome só pode conter letras, números e espaços!");
        return false;
    }
    audioManager.playSFX('click');
    return true;
}