function logar () {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    const checkbox = document.getElementById('lembrar');

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


    if (checkbox.checked) {
        localStorage.setItem('usuarioSalvo', usuario);
    } else {
        localStorage.removeItem('usuarioSalvo');
    }
}

window.onload = function() {
    const nomeSalvo = localStorage.getItem('usuarioSalvo');
    if(nomeSalvo) {
        document.getElementById('usuario').value = nomeSalvo;
        document.getElementById('lembrar').checked = true;
    }
};

