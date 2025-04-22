function irparaCofre() {
    document.querySelector(".telaInicial").style.display = "none";
    document.querySelector("#conteudo").style.display = "flex";
}

let nivelAtual = 1;

const senhas = {
    1: [7, 9, 8, 2],
    2: [5, 3, 0, 8],
    3: [6, 1, 2, 3],
    4: [9, 4, 2, 6],
    5: [7, 2, 5, 1],
    6: [4, 0, 8, 3],
    7: [3, 5, 6, 1],
    8: [8, 4, 9, 2],
    9: [2, 9, 1, 7],
    10: [7, 6, 4, 3]
};

const dicas = {
    2: [
        "A soma dos dois primeiros dígitos é 8.",
        "O terceiro dígito é o menor possível.",
        "O último dígito é par e não se repete com os anteriores.",
        "Um dos dígitos é múltiplo de 5.",
        "A senha tem dois dígitos pares e dois ímpares."
    ],
    3: [
        "O primeiro dígito é maior que o segundo.",
        "O segundo e o terceiro são consecutivos.",
        "O último dígito é primo.",
        "A soma de todos os dígitos é maior que 15.",
        "Nenhum dígito é zero."
    ],
    4: [
        "A senha tem dois dígitos pares e dois ímpares.",
        "O primeiro dígito é maior que todos os outros.",
        "O terceiro é múltiplo de 2, mas menor que 5.",
        "Nenhum dígito se repete.",
        "A diferença entre o segundo e o quarto é 2."
    ],
    5: [
        "A senha tem dois dígitos pares e dois ímpares.",
        "O primeiro dígito é maior que todos os outros.",
        "O terceiro é múltiplo de 2, mas menor que 5.",
        "Nenhum dígito se repete.",
        "A diferença entre o segundo e o quarto é 2."
    ],
    6: [
        "O segundo dígito é zero.",
        "O primeiro é múltiplo de 4.",
        "O terceiro é o maior dígito da senha.",
        "A soma de todos é menor que 16.",
        "Nenhum dígito se repete."
    ],
    7: [
        "O terceiro dígito é a diferença entre os dois primeiros.",
        "Há exatamente três dígitos ímpares.",
        "O último dígito é menor que o primeiro.",
        "A soma dos quatro é um número primo.",
        "Nenhum é zero ou nove."
    ],
    8: [
        "O primeiro e o último dígitos somam 10.",
        "O segundo é maior que o terceiro.",
        "O terceiro dígito é menor que 5.",
        "Há três dígitos pares.",
        "Nenhum número se repete."
    ],
    9: [
        "O segundo e terceiro dígitos são consecutivos.",
        "O primeiro dígito é múltiplo de 2.",
        "O último dígito é um número primo maior que 5.",
        "A soma de todos é entre 15 e 20.",
        "Nenhum número se repete."
    ],
    10: [
        "O segundo dígito é exatamente a metade do primeiro.",
        "O terceiro é maior que o segundo.",
        "Todos os dígitos são diferentes.",
        "A soma de todos é 20.",
        "Apenas dois dígitos são ímpares."
    ]
};

function verificarSenha(botao) {
    const senhaCorreta = senhas[nivelAtual];

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
        document.getElementById("audio2").play();
        setTimeout(function() {
            document.querySelector(".conSucesso").style.display = "flex";
        }, 8000);
    } else {
        document.querySelector(".telaInicial").style.display = "none";
        document.querySelector("#conteudo").style.display = "none";
        document.querySelector("#telaSucesso").style.display = "none";
        document.querySelector("#telaErro").style.display = "flex";
        document.getElementById("audio2").pause();
        document.getElementById("audio3").play();
    }
}

function proximoNivel() {
    nivelAtual = nivelAtual + 1;
    const dicasNivel = dicas[nivelAtual];
    document.getElementById("imagem").src = `imagem/imagem${nivelAtual}.jpg`;
    document.querySelector(".telaInicial").style.display = "none";
    document.querySelector("#conteudo").style.display = "flex";
    document.querySelector("#telaSucesso").style.display = "none";
    document.getElementById("audio2").pause();
    [1, 2, 3, 4].forEach(i => {
        document.getElementById("d" + i).style.color = "black";
    });
        for (let i=1; i <= 4; i++) {
            document.getElementById("d" + i).value = "";
        }
        document.querySelector(".h1c").textContent = "COFRE " + nivelAtual;
        document.getElementById("dicas").textContent = dicasNivel.join("\n");
}
 
function tentarNovamente() {
    irparaCofre();
    document.querySelector("#telaErro").style.display = "none";
    document.getElementById("audio3").pause();
    const inputs = [1, 2, 3, 4].map(i => Number(document.getElementById("d" + i).value));

    for (let i=0; i< inputs.length; i++) {
        if (inputs[i] === senhas[nivelAtual][i]) {
            document.getElementById("d" + (i+1)).style.color = "green";
        } else {
            document.getElementById("d" + (i+1)).style.color = "red";
        }
    }
}
