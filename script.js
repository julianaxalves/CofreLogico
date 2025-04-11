function verificarSenha() {
    let d1 = Number(document.getElementById("d1").value);
    let d2 = Number(document.getElementById("d2").value);
    let d3 = Number(document.getElementById("d3").value);
    let d4 = Number(document.getElementById("d4").value);

    if (d1 === "7") {
        document.getElementById("d1").style.color = "green";
    } else {
        document.getElementById("d1").style.color = "red";
    }

    if (d2 === "9") {
        document.getElementById("d2").style.color = "green";
    } else {
        document.getElementById("d2").style.color = "red";
    }

    if (d3 === "8") {
        document.getElementById("d3").style.color = "green";
    } else {
        document.getElementById("d3").style.color = "red";
    }

    if (d4 === "2") {
        document.getElementById("d4").style.color = "green";
    } else {
        document.getElementById("d4").style.color = "red";
    }

    if (d1 === "7" && d2 === "9" && d3 === "8" && d4 === "2") {
        mensagem.textContent = "Senha correta. Acesso permitido."
        mensagem.style.color = "black";
        d1.disabled = true;
        d2.disabled = true;
        d3.disabled = true;
        d4.disabled = true;
    } else {
        document.body.style.backgroundColor = "red";
        alert("Acesso negado!")
    }
}
