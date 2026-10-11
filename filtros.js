// APLICADOR DE FILTROS
// Para criar um filtro novo, copie uma linha da lista abaixo e ajuste:
//   id    -> nome interno (sem espaços)
//   nome  -> texto que aparece no botão
//   css   -> valor da propriedade CSS "filter" (use '' para nenhum filtro)
//   blur  -> (opcional) desfoque em px; é proporcional ao tamanho da imagem ao baixar
const filtros = [
    { id: 'original',  nome: 'Original',          css: '' },
    { id: 'pb',        nome: 'Preto e branco',    css: 'grayscale(1)' },
    { id: 'invertido', nome: 'Cores invertidas',  css: 'invert(1)' },
    { id: 'sepia',     nome: 'Sépia',             css: 'sepia(1)' },
    { id: 'noir',      nome: 'Noir',              css: 'grayscale(1) contrast(1.7) brightness(.9)' },
    { id: 'contraste', nome: 'Alto contraste',    css: 'contrast(1.8)' },
    { id: 'clarear',   nome: 'Clarear',           css: 'brightness(1.35)' },
    { id: 'escurecer', nome: 'Escurecer',         css: 'brightness(.6)' },
    { id: 'saturado',  nome: 'Saturado',          css: 'saturate(2.4)' },
    { id: 'apagado',   nome: 'Desbotado',         css: 'saturate(.35) brightness(1.1)' },
    { id: 'matiz',     nome: 'Cores trocadas',    css: 'hue-rotate(90deg) saturate(1.3)' },
    { id: 'vintage',   nome: 'Vintage',           css: 'sepia(.5) contrast(1.2) brightness(1.1) saturate(1.3)' },
    { id: 'frio',      nome: 'Frio',              css: 'sepia(.25) hue-rotate(170deg) saturate(1.5)' },
    { id: 'quente',    nome: 'Quente',            css: 'sepia(.4) saturate(1.6) hue-rotate(-15deg)' },
    { id: 'desfoque',  nome: 'Desfocar',          css: '', blur: 4 }
];

const el = {
    arquivo: document.getElementById('arquivo'),
    envio: document.getElementById('envio'),
    imgOriginal: document.getElementById('imgOriginal'),
    imgResultado: document.getElementById('imgResultado'),
    vazioResultado: document.getElementById('vazioResultado'),
    btnTrocar: document.getElementById('btnTrocar'),
    btnBaixar: document.getElementById('btnBaixar'),
    linha: document.getElementById('filtrosLinha'),
    nomeFiltro: document.getElementById('nomeFiltro'),
    molduraOriginal: document.getElementById('molduraOriginal')
};

let urlAtual = null;                 // endereço (blob:) da imagem enviada
let nomeArquivo = 'imagem';          // usado no nome do arquivo baixado
let filtroAtual = filtros[0];

// Monta o valor do "filter" a partir do filtro; k = escala do desfoque.
function montarCss(f, k = 1) {
    const partes = [];
    if (f.css) partes.push(f.css);
    if (f.blur) partes.push(`blur(${(f.blur * k).toFixed(2)}px)`);
    return partes.length ? partes.join(' ') : 'none';
}

function alertaErro(texto) {
    Swal.fire({
        icon: 'error', title: 'Ops!', text: texto,
        background: '#000000', color: '#f1f3ef',
        confirmButtonColor: '#5bd18a',
        customClass: { popup: 'alerta-escuro' }
    });
}

// ---------- Linha de filtros ----------
// Antes do envio as amostras usam um degradê colorido; depois, a própria foto.
const FUNDO_PADRAO = 'linear-gradient(135deg, #e0524d 0%, #f2a93c 35%, #5bd18a 65%, #4a7bd1 100%)';

function criarBotoes() {
    filtros.forEach((f) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'filtro-btn';
        b.setAttribute('role', 'radio');
        b.setAttribute('aria-checked', String(f === filtroAtual));
        b.dataset.id = f.id;
        b.innerHTML = `<div class="filtro-amostra" style="background-image:${FUNDO_PADRAO}; filter:${montarCss(f, .3)}"></div><span>${f.nome}</span>`;
        b.addEventListener('click', () => escolherFiltro(f));
        el.linha.appendChild(b);
    });
}

function atualizarAmostras() {
    el.linha.querySelectorAll('.filtro-amostra').forEach((a) => {
        a.style.backgroundImage = urlAtual ? `url("${urlAtual}")` : FUNDO_PADRAO;
    });
}

function escolherFiltro(f) {
    filtroAtual = f;
    el.linha.querySelectorAll('.filtro-btn').forEach((b) => {
        b.setAttribute('aria-checked', String(b.dataset.id === f.id));
    });
    el.nomeFiltro.textContent = f.nome;
    el.imgResultado.style.filter = montarCss(f);
}

// ---------- Envio da imagem ----------
function carregarArquivo(arquivo) {
    if (!arquivo) return;
    if (!arquivo.type.startsWith('image/')) {
        alertaErro('Esse arquivo não é uma imagem. Escolha um JPG, PNG, WEBP ou similar.');
        return;
    }
    if (urlAtual) URL.revokeObjectURL(urlAtual);
    urlAtual = URL.createObjectURL(arquivo);
    nomeArquivo = arquivo.name.replace(/\.[^.]+$/, '') || 'imagem';

    const teste = new Image();
    teste.onerror = () => {
        URL.revokeObjectURL(urlAtual);
        urlAtual = null;
        alertaErro('Não consegui abrir essa imagem. Tente outro arquivo.');
    };
    teste.onload = () => {
        el.imgOriginal.src = urlAtual;
        el.imgResultado.src = urlAtual;
        el.imgOriginal.hidden = false;
        el.imgResultado.hidden = false;
        el.envio.hidden = true;
        el.vazioResultado.hidden = true;
        el.btnTrocar.hidden = false;
        el.btnBaixar.disabled = false;
        atualizarAmostras();
        escolherFiltro(filtroAtual);
    };
    teste.src = urlAtual;
}

el.arquivo.addEventListener('change', () => {
    carregarArquivo(el.arquivo.files[0]);
    el.arquivo.value = '';           // permite escolher o mesmo arquivo de novo
});
el.btnTrocar.addEventListener('click', () => el.arquivo.click());

// Arrastar e soltar sobre o quadrado da esquerda
['dragenter', 'dragover'].forEach((ev) =>
    el.molduraOriginal.addEventListener(ev, (e) => { e.preventDefault(); el.envio.classList.add('arrastando'); }));
['dragleave', 'drop'].forEach((ev) =>
    el.molduraOriginal.addEventListener(ev, (e) => { e.preventDefault(); el.envio.classList.remove('arrastando'); }));
el.molduraOriginal.addEventListener('drop', (e) => carregarArquivo(e.dataTransfer.files[0]));

// ---------- Download (desenha no canvas com o filtro) ----------
el.btnBaixar.addEventListener('click', () => {
    const img = el.imgOriginal;
    if (!img.naturalWidth) return;

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');

    if (!('filter' in ctx)) {
        alertaErro('Seu navegador não permite baixar imagens com filtro. Tente no Chrome, Edge ou Firefox.');
        return;
    }

    // o desfoque é proporcional: 4px numa imagem exibida com ~500px
    const k = img.naturalWidth / (el.imgResultado.clientWidth || img.naturalWidth);
    ctx.filter = montarCss(filtroAtual, k);
    ctx.drawImage(img, 0, 0);

    canvas.toBlob((blob) => {
        if (!blob) { alertaErro('Não foi possível gerar a imagem.'); return; }
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${nomeArquivo}-${filtroAtual.id}.png`;
        link.click();
        setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    }, 'image/png');
});

criarBotoes();
