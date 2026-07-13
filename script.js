(function () {
  const siteHeader = document.getElementById('site-header');
  const menuHamburguer = document.getElementById('menu-hamburguer');
  const menuNav = document.getElementById('menu-nav');
  const abas = document.querySelectorAll('.aba');
  const paineis = document.querySelectorAll('.painel');
  const cards = document.querySelectorAll('.card-cultura');
  const botoesAba = document.querySelectorAll('[data-aba]');

  let overlay = document.querySelector('.menu-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }

  function fecharMenu() {
    siteHeader.classList.remove('menu-aberto');
    menuHamburguer.setAttribute('aria-expanded', 'false');
    menuHamburguer.setAttribute('aria-label', 'Abrir menu de navegação');
    overlay.classList.remove('visivel');
    document.body.style.overflow = '';
  }

  function abrirMenu() {
    siteHeader.classList.add('menu-aberto');
    menuHamburguer.setAttribute('aria-expanded', 'true');
    menuHamburguer.setAttribute('aria-label', 'Fechar menu de navegação');
    overlay.classList.add('visivel');
    document.body.style.overflow = 'hidden';
  }

  function alternarMenu() {
    if (siteHeader.classList.contains('menu-aberto')) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  }

  menuHamburguer.addEventListener('click', alternarMenu);

  overlay.addEventListener('click', fecharMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fecharMenu();
  });

  function mostrarAba(id) {
    abas.forEach(function (aba) {
      const ativa = aba.dataset.aba === id;
      aba.classList.toggle('ativa', ativa);
      aba.setAttribute('aria-selected', ativa ? 'true' : 'false');
    });

    paineis.forEach(function (painel) {
      const ativo = painel.id === id;
      painel.classList.toggle('ativo', ativo);
      painel.setAttribute('aria-hidden', ativo ? 'false' : 'true');
    });

    document.body.classList.remove('tema-tomate', 'tema-alface', 'tema-rucula', 'tema-assistente');
    if (id === 'tomate') document.body.classList.add('tema-tomate');
    if (id === 'alface') document.body.classList.add('tema-alface');
    if (id === 'rucula') document.body.classList.add('tema-rucula');
    if (id === 'assistente') {
      document.body.classList.add('tema-assistente');
      if (window.iniciarChatATER) window.iniciarChatATER();
    }

    fecharMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  abas.forEach(function (aba) {
    aba.setAttribute('role', 'tab');
    aba.addEventListener('click', function () {
      mostrarAba(aba.dataset.aba);
    });
  });

  botoesAba.forEach(function (btn) {
    if (btn.classList.contains('aba')) return;
    btn.addEventListener('click', function () {
      mostrarAba(btn.dataset.aba);
    });
  });

  paineis.forEach(function (painel) {
    painel.setAttribute('role', 'tabpanel');
  });

  cards.forEach(function (card) {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.addEventListener('click', function () {
      mostrarAba(card.dataset.ir);
    });

    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mostrarAba(card.dataset.ir);
      }
    });
  });

  mostrarAba('inicio');
})();
