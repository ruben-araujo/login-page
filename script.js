function logar () {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    const usuarioCorreto = "laranja123";
    const senhaCorreta = "salada123";

    if(usuario === usuarioCorreto && senha === senhaCorreta) {
        mensagem.style.color ="black";
        mensagem.innerText ="Login realizado com sucesso! redirecionando...";

        setTimeout(() => {
            window.location.href ="https://www.google.com";
        }, 2000);
    } else {
        mensagem.style.color = "red";
        mensagem.innerText = "Usuário ou Senha incorretos";
    }
}