function irparaCofre() {
    document.querySelector(".telaInicial").style.display = "none";
    document.querySelector("#conteudo").style.display = "flex";
    document.getElementById("audio1").play();
}

const senhas = {
    1: [7, 9, 8, 2]
};

function verificarSenha(botao) {
    const nivel = botao.dataset.nivel;
    const senhaCorreta = senhas[nivel];

    const inputs = [1, 2, 3, 4].map(i => Number(document.getElementById("d" + i).value));
    let acerto = true;

    inputs.forEach((valor, i) => {
       if (valor !== senhaCorreta[i]) {
        acerto = false;
    }
    });

    if (acerto) {
        document.querySelector(".telaInicial").style.display = "none";
        document.querySelector("#conteudo").style.display = "none";
        document.querySelector("#telaSucesso").style.display = "flex";
        document.getElementById("audio1").pause();
        document.getElementById("audio2").play();
        setTimeout(function() {
            document.querySelector(".conSucesso").style.display = "flex";
        }, 7000);
        inputs.forEach((_, i) => document.getElementById("d" + (i + 1)).disabled = true);
    } else {
        document.querySelector(".telaInicial").style.display = "none";
        document.querySelector("#conteudo").style.display = "none";
        document.querySelector("#telaSucesso").style.display = "none";
        document.querySelector("#telaErro").style.display = "flex";
        document.getElementById("audio1").pause();
        document.getElementById("audio2").pause();
        document.getElementById("audio3").play();
        setTimeout(function() {
            location.reload();
            window.scrollTo(0, 0);
        }, 10000);
    }
}