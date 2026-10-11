// ABA LATERAL — compartilhada entre index.html e filtros.html.
// Abre/fecha ao clicar no puxador; fecha ao clicar fora ou apertar Esc.
(function () {
    const aba = document.getElementById('abaLateral');
    const puxador = document.getElementById('abaPuxador');
    if (!aba || !puxador) return;

    function definir(aberta) {
        aba.classList.toggle('aberta', aberta);
        puxador.setAttribute('aria-expanded', String(aberta));
        puxador.setAttribute('aria-label', aberta ? 'Fechar menu de páginas' : 'Abrir menu de páginas');
    }

    puxador.addEventListener('click', () => definir(!aba.classList.contains('aberta')));

    document.addEventListener('click', (e) => {
        if (!aba.contains(e.target)) definir(false);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') definir(false);
    });
})();
