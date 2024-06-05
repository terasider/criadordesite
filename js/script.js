let pagina = document.getElementById('page');
let paginaRender = document.getElementById('pageRender');
let campoEdicoes = document.getElementsByClassName('edit');

function reload() {
    title = campoEdicoes[0].value;
    origemcss = campoEdicoes[1].value;
    descricao = campoEdicoes[2].value;
    palavraschave = campoEdicoes[3].value;
    sitecanonico = campoEdicoes[4].value;
    propriedadeanalitcs = campoEdicoes[5].value;
    titulotextoh1 = campoEdicoes[6].value;
    titulotextoh2 = campoEdicoes[7].value;
    titulotextoh3 = campoEdicoes[8].value;
    segundotitulotextoh3 = campoEdicoes[9].value;
    terceirotitulotextoh3 = campoEdicoes[10].value;
    footerTitle = campoEdicoes[11].value;
    autor = campoEdicoes[12].value;
    urlImagem1 = campoEdicoes[13].value;
    descricaoImagem1 = campoEdicoes[14].value;
    urlImagem2 = campoEdicoes[15].value;
    descricaoImagem2 = campoEdicoes[16].value;

    initialize();

    console.log("chamou reload");
    pagina.innerText = site;
    paginaRender.innerHTML = site;
}
