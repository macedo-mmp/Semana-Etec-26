// MAPA DAS FOTOS — atualizado com as imagens reais que você enviou.
// Faltam as versões "ia" de quase todas (só "Blond" já tem) — quando
// tiver os arquivos, troque o caminho marcado com // COLOQUE AQUI.
// Para adicionar uma foto nova, copie um bloco inteiro e ajuste os 3 caminhos.
const fotosDoSite = {
    'Blond': {
        original: './imgs/imagens sem edição/blond.jpg',
        ia: './imgs/editadas na ia/blondedit.png',
        photoshop: './imgs/editadas photoshop/blond.jpg'
    },
    'Icon': {
        original: './imgs/imagens sem edição/Brent.jpg',
        ia: './imgs/editadas na ia/Brent IA.png',              // COLOQUE AQUI
        photoshop: './imgs/editadas photoshop/Brent Filtro.jpg'
    },
    'Caos': {
        original: './imgs/imagens sem edição/Caos.jpg',
        ia: './imgs/editadas na ia/CAOS IA.png',                
        photoshop: './imgs/editadas photoshop/Caos.jpg'
    },
    'Damn': {
        original: './imgs/imagens sem edição/Damn.jpg',
        ia: './imgs/editadas na ia/DAMN IA.png',                // COLOQUE AQUI
        photoshop: './imgs/editadas photoshop/Damn Filtro.jpg'
    },
    'Bluesman': {
        original: './imgs/imagens sem edição/Flamingos.png',
        ia: './imgs/editadas na ia/flamingos IA.png',           // COLOQUE AQUI
        photoshop: './imgs/editadas photoshop/Flamingos Filtro.jpg'
    },
    'Freudian': {
        original: './imgs/imagens sem edição/Freudian.jpg',
        ia: './imgs/editadas na ia/Freudian IA.png',            // COLOQUE AQUI
        photoshop: './imgs/editadas photoshop/Freudian.jpg'
    },
    'HASOS': {
        original: './imgs/imagens sem edição/HASOS.jpg',
        ia: './imgs/editadas na ia/HASOS IA.png',                // COLOQUE AQUI
        photoshop: './imgs/editadas photoshop/HASOS.jpg'
    },
    'Igor': {
        original: './imgs/imagens sem edição/Igor.jpg',
        ia: './imgs/editadas na ia/Igor IA.png',                // COLOQUE AQUI
        photoshop: './imgs/editadas photoshop/Igor filtro.jpg'
    },
    'Ausência': {
        original: './imgs/imagens sem edição/Ausência.jpg',
        ia: './imgs/editadas photoshop/Ausência photoshop.jpg',            // COLOQUE AQUI
        photoshop: './imgs/editadas na ia/Ausência IA.png'
    },
    'PSSIIIKO RADIIIO': {
        original: './imgs/imagens sem edição/PSSIIIKO RADIIIO.jpg',
        ia: './imgs/editadas na ia/PSSIIIKO RADIIIO IA.png',    // COLOQUE AQUI
        photoshop: './imgs/editadas photoshop/PSSIIIKO RADIIIO.jpg'
    },
    'Músicas para Churrasco, Vol.1': {
        original: './imgs/imagens sem edição/Seu Jorge.jpg',
        ia: './imgs/editadas na ia/Seu Jorge IA.png',           // COLOQUE AQUI
        photoshop: './imgs/editadas photoshop/Seu jorge.jpg'
    },
    'Até o próximo carnaval Vol.3': {
        original: './imgs/imagens sem edição/Sotam.jpg',
        ia: './imgs/editadas na ia/Sotam IA.png',                // COLOQUE AQUI
        photoshop: './imgs/editadas photoshop/Sotam Filtro.jpg'
    },
    'Xtranho': {
        original: './imgs/imagens sem edição/xtranho.jpg',    
        ia: './imgs/editadas na ia/xtranho.jpg',          
        photoshop: './imgs/editadas photoshop/xtranho.jpg' 
    },
    '13 Lentes de um Final Feliz': {
        original: './imgs/imagens sem edição/13 Lentes de um Final Feliz (2).jpg',   
        ia: './imgs/editadas na ia/13 Lente de um Final Feliz IA.png',          
        photoshop: './imgs/editadas photoshop/13 lentes de um Final feliz.jpg' 
    },
    'VETIIIN E PSIIIKO': {
        original: './imgs/imagens sem edição/vetin.jpg',   
        ia: './imgs/editadas na ia/vetin IA.png',           
        photoshop: './imgs/editadas photoshop/vetin filtro.jpg' 
    },
    '333' : {
        original: './imgs/imagens sem edição/333.jpg',   
        ia: './imgs/editadas na ia/333.png',           
        photoshop: './imgs/editadas photoshop/333.jpg'
    },
     'BLACK LAMEN' : {
        original: './imgs/imagens sem edição/BLACK LAMEN.jpg',   
        ia: './imgs/editadas na ia/BLACK LAMEN.png',           
        photoshop: './imgs/editadas photoshop/BLACK LAMEN.jpg'
    },
     'Nada Como um Dia após o Outro Dia, Vol. 1 e 2' : {
        original: './imgs/imagens sem edição/racionais.jpg',   
        ia: './imgs/editadas na ia/recionais.png',           
        photoshop: './imgs/editadas photoshop/racionaiis.jpg'
    },
    'VIBRAÇÕES, VOL.1' : {
        original: './imgs/imagens sem edição/Broca.jpg',   
        ia: './imgs/editadas na ia/broca.png',           
        photoshop: './imgs/editadas photoshop/Broca.jpg'
    },
    'EU NUNCA QUIS SER COMO ELES' : {
        original: './imgs/imagens sem edição/Eu nunca vou ser como eles.jpg',   
        ia: './imgs/editadas na ia/eu.png',           
        photoshop: './imgs/editadas photoshop/Eu nunca vou ser como eles.jpg'
    },
    'ADULTO IDEAL VOL.2' : {
        original: './imgs/imagens sem edição/Adulto Ideal.jpg',   
        ia: './imgs/editadas na ia/Adulto.png',           
        photoshop: './imgs/editadas photoshop/Adulto Ideal.jpg'
    },
    'ISSO É TRAP VOL.2' : {
        original: './imgs/imagens sem edição/isso é trap.jpg',   
        ia: './imgs/editadas na ia/ISSO.png',           
        photoshop: './imgs/editadas photoshop/isso é trap.jpg'
    },
    'SWAGBOY2' : {
        original: './imgs/imagens sem edição/swagboy2.jpg',   
        ia: './imgs/editadas na ia/swagboy2.png',           
        photoshop: './imgs/editadas photoshop/swagboy2.jpg'
    },
    'HITOKIRI' : {
        original: './imgs/imagens sem edição/Hitokiri.jpg',   
        ia: './imgs/editadas na ia/Hitokiri.png',           
        photoshop: './imgs/editadas photoshop/Hitokiri.jpg'
    },
    'NEVER ENOUGH' : {
        original: './imgs/imagens sem edição/never.jpg',   
        ia: './imgs/editadas na ia/never.png',           
        photoshop: './imgs/editadas photoshop/never.jpg'
    },
    'TDB' : {
        original: './imgs/imagens sem edição/tdb.jpg',   
        ia: './imgs/editadas na ia/tdb.png',           
        photoshop: './imgs/editadas photoshop/tdb.jpg'
    },
    'EVDC DELUXE' : {
        original: './imgs/imagens sem edição/evdc.jpg',   
        ia: './imgs/editadas na ia/evdc.png',           
        photoshop: './imgs/imagens sem edição/evdc1.jpg'
    },
    '+SWAG' : {
        original: './imgs/imagens sem edição/+swag.jpg',   
        ia: './imgs/editadas na ia/+swag.png',           
        photoshop: './imgs/editadas photoshop/+swag.jpg'
    },
    'ENRICÓPOLIS É LOGO ALI' : {
        original: './imgs/imagens sem edição/enricopolis.jpg',   
        ia: './imgs/editadas na ia/enricopolis.png',           
        photoshop: './imgs/editadas photoshop/enricopolis.jpg'
    },
    'MIIXTAPE' : {
        original: './imgs/imagens sem edição/miixtape.jpg',   
        ia: './imgs/editadas na ia/miixtape.png',           
        photoshop: './imgs/editadas photoshop/miixtape.jpg'
    },
};

const versoes = [
    { chave: 'original',  rotulo: 'Original',  icone: 'bi-image' },
    { chave: 'ia',        rotulo: 'IA',        icone: 'bi-robot' },
    { chave: 'photoshop', rotulo: 'Photoshop', icone: 'bi-brush' }
];

// Monta o HTML de um quadro (imagem + selo) para usar dentro do alerta.
function quadroHTML(nome, versao) {
    const src = fotosDoSite[nome][versao.chave];
    return `
        <div class="quadro">
            <div class="quadro-moldura" data-moldura>
                <img src="${src}" alt="${nome} – ${versao.rotulo}" loading="lazy" data-fallback>
            </div>
            <span class="selo ${versao.chave}"><i class="bi ${versao.icone}"></i> ${versao.rotulo}</span>
        </div>`;
}

// Abre o alerta (tema escuro) com as três variações da foto clicada.
function abrirFiltro(nome) {
    const trioHTML = versoes.map(v => quadroHTML(nome, v)).join('');

    Swal.fire({
        title: nome,
        width: 1520,
        showCloseButton: true,
        showConfirmButton: false,
        background: '#000000ff',
        color: '#f1f3ef',
        customClass: { popup: 'alerta-escuro' },
        html: `
            <p class="swal-subtitulo">Original, IA e Photoshop lado a lado</p>
            <div class="trio">${trioHTML}</div>`,
        didOpen: (popup) => {
            popup.querySelectorAll('img[data-fallback]').forEach((img) => {
                img.addEventListener('error', () => {
                    img.closest('[data-moldura]').innerHTML = `
                        <div class="quadro-vazio">
                            <i class="bi bi-image-alt"></i>
                            <span>Sem imagem ainda</span>
                        </div>`;
                });
            });
        }
    });
}

// Cria um cartão (foto + legenda + botão) para a galeria principal.
function criarCartao(nome) {
    const cartao = document.createElement('div');
    cartao.className = 'cartao';

    const moldura = document.createElement('div');
    moldura.className = 'foto-moldura';

    const img = document.createElement('img');
    img.src = fotosDoSite[nome].original;
    img.alt = `Foto original: ${nome}`;
    img.loading = 'lazy';
    img.onerror = () => {
        moldura.innerHTML = `
            <div class="quadro-vazio">
                <i class="bi bi-image-alt"></i>
                <span>Sem imagem ainda</span>
            </div>`;
    };

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'btn-foto';
    botao.setAttribute('aria-label', `Ver as três variações de ${nome}`);
    botao.innerHTML = '<i class="bi bi-sliders" aria-hidden="true"></i>';
    botao.addEventListener('click', () => abrirFiltro(nome));

    moldura.append(img, botao);

    const legenda = document.createElement('p');
    legenda.className = 'legenda';
    legenda.textContent = nome;

    cartao.append(moldura, legenda);
    return cartao;
}

// Monta a galeria inteira a partir do mapa acima.
const galeria = document.getElementById('galeria');
Object.keys(fotosDoSite).forEach((nome) => {
    galeria.appendChild(criarCartao(nome));
});
