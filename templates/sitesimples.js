let title = '';
let autor = '';
let origemcss = '';
let descricao = '';
let palavraschave = '';
let sitecanonico = '';
let propriedadeanalitcs = '';
let titulotextoh1 = '';
let titulotextoh2 = '';
let titulotextoh3 = '';
let segundotitulotextoh3 = '';
let terceirotitulotextoh3 = '';
let footerTitle = '';
let urlImagem1 = '';
let descricaoImagem1 = '';
let urlImagem2 = '';
let descricaoImagem2 = '';

let site = '';

var dt = new Date();
function initialize() {
    site = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <title>${title}</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="${autor}" />
        <link rel="stylesheet" type="text/css" href="${origemcss}" />
        <meta name="description" content="${descricao}" />
        <meta name="keywords" content="${palavraschave}" />
        <link rel="canonical" href="${sitecanonico}" />
        <meta name="google-site-verification" content="${propriedadeanalitcs}" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="${title}" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    </head>
    <body>
        <div class="content-container">
            <div class="text-container">
                <h1>${titulotextoh1}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo aperiam temporibus cupiditate nisi quod facere sint voluptas eaque eius quo dignissimos nam sapiente, debitis quam iusto facilis saepe officiis!</p>
                <img src="${urlImagem1}" alt="${descricaoImagem1}">
                <h2>${titulotextoh2}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo aperiam temporibus cupiditate nisi quod facere sint voluptas eaque eius quo dignissimos nam sapiente, debitis quam iusto facilis saepe officiis!</p>
                <h3>${titulotextoh3}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo aperiam temporibus cupiditate nisi quod facere sint voluptas eaque eius quo dignissimos nam sapiente, debitis quam iusto facilis saepe officiis!</p>
                <h3>${segundotitulotextoh3}</h3>
                <img src="${urlImagem2}" alt="${descricaoImagem2}">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo aperiam temporibus cupiditate nisi quod facere sint voluptas eaque eius quo dignissimos nam sapiente, debitis quam iusto facilis saepe officiis!</p>
                <h3>${terceirotitulotextoh3}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo aperiam temporibus cupiditate nisi quod facere sint voluptas eaque eius quo dignissimos nam sapiente, debitis quam iusto facilis saepe officiis!</p>
                <hr>
                <footer>Copyright © ${footerTitle} ${dt.getFullYear()}</footer>
            </div>
        </div>
    </body>
    </html>`;
}
