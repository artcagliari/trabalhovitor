(function () {
  const baseConhecimento = [
    {
      chaves: ['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'ei'],
      resposta: 'Olá, produtor! Sou o assistente da ATER Digital. Pergunte sobre tomate, alface ou rúcula — plantio, adubação, doenças, colheita ou cuidados gerais.'
    },
    {
      chaves: ['tomate plantar', 'plantar tomate', 'como planto tomate', 'mudas tomate', 'espaçamento tomate'],
      resposta: '🍅 <strong>Tomate — plantio:</strong><br>• Use mudas de 25–30 dias, firmes.<br>• Espaço: 50 cm entre plantas, 1,2 m entre linhas.<br>• Enterre até a primeira folha.<br>• Coloque o tutor já no plantio.<br>• Não plante onde teve tomate ou batata no ano passado.'
    },
    {
      chaves: ['tomate adubar', 'adubar tomate', 'adubo tomate', 'ureia tomate', 'npk tomate'],
      resposta: '🍅 <strong>Tomate — adubação:</strong><br>• Na cova: 2 L de esterco curtido + 1 colher de superfosfato.<br>• 15 dias depois: 1 colher de ureia por planta.<br>• Na floração: adubo com potássio ou NPK 10-10-10.<br>• Cuidado: muito nitrogênio dá folha e pouco fruto.'
    },
    {
      chaves: ['requeima', 'tomate doença', 'doença tomate', 'mancha tomate', 'murcha tomate', 'pinta preta'],
      resposta: '🍅 <strong>Tomate — doenças:</strong><br>• <strong>Requeima:</strong> manchas escuras — não molhe folhas, melhore ventilação.<br>• <strong>Murcha:</strong> murcha com solo úmido — não replante no mesmo lugar.<br>• <strong>Pinta preta:</strong> manchas no fruto — retire frutos doentes.<br>• <strong>Lagartas:</strong> retire à mão ou use produto biológico.'
    },
    {
      chaves: ['colher tomate', 'colheita tomate', 'quando colher tomate', 'tomate maduro'],
      resposta: '🍅 <strong>Tomate — colheita:</strong><br>• Colha vermelho ou levemente rosado.<br>• Corte com tesoura, deixando o pedúnculo.<br>• Melhor de manhã cedo.<br>• Produção começa entre 70 e 90 dias após plantio.'
    },
    {
      chaves: ['alface plantar', 'plantar alface', 'como planto alface', 'mudas alface', 'espaçamento alface'],
      resposta: '🥬 <strong>Alface — plantio:</strong><br>• Pode usar mudas ou semeadura direta.<br>• Espaço: 25–30 cm entre plantas, 40 cm entre linhas.<br>• Enterre até o colo, sem cobrir o miolo.<br>• Regue logo após plantar.<br>• No calor, plante à tarde ou use sombrite.'
    },
    {
      chaves: ['alface adubar', 'adubar alface', 'adubo alface', 'alface amarela'],
      resposta: '🥬 <strong>Alface — adubação:</strong><br>• Antes: 3–5 kg/m² de esterco curtido + NPK.<br>• 15 dias depois: ureia, 1 punhado por metro.<br>• Responde bem a nitrogênio — folhas maiores.<br>• Se amarelar, pode usar adubação foliar.'
    },
    {
      chaves: ['alface doença', 'doença alface', 'oídio alface', 'oidio alface', 'alface murcha', 'pulgão alface', 'pulgao'],
      resposta: '🥬 <strong>Alface — doenças:</strong><br>• <strong>Oídio:</strong> pó branco — melhore ventilação, regue de manhã.<br>• <strong>Murcha:</strong> não replante alface no mesmo lugar.<br>• <strong>Míldio:</strong> manchas amarelas — evite folha molhada à noite.<br>• <strong>Pulgões:</strong> lave com água forte ou sabão neutro.'
    },
    {
      chaves: ['colher alface', 'colheita alface', 'quando colher alface', 'alface espigar', 'alface flor'],
      resposta: '🥬 <strong>Alface — colheita:</strong><br>• Colha com miolo firme, antes de soltar flor.<br>• Corte rente ao solo de manhã cedo.<br>• Cresce em 35–50 dias.<br>• Para rebrota: corte 3 cm acima do solo.'
    },
    {
      chaves: ['rúcula plantar', 'rucula plantar', 'plantar rúcula', 'plantar rucula', 'semeadura rúcula', 'semeadura rucula'],
      resposta: '🌿 <strong>Rúcula — plantio:</strong><br>• Semeie direto no canteiro.<br>• Cubra com 1 cm de terra fina.<br>• Melhor no outono e inverno.<br>• Semeie de 15 em 15 dias para colheita contínua.<br>• Germina em 4–7 dias.'
    },
    {
      chaves: ['rúcula adubar', 'rucula adubar', 'adubar rúcula', 'adubar rucula'],
      resposta: '🌿 <strong>Rúcula — adubação:</strong><br>• Antes de semear: 2 kg/m² de esterco curtido.<br>• Não precisa de muito adubo — excesso tira o sabor.<br>• Se amarelar: meio punhado de ureia por m².<br>• Use esterco bem curtido para não queimar.'
    },
    {
      chaves: ['rúcula doença', 'rucula doença', 'doença rúcula', 'rucula doenca', 'rúcula amarga', 'rucula amarga'],
      resposta: '🌿 <strong>Rúcula — doenças e cuidados:</strong><br>• <strong>Oídio:</strong> manchas brancas — não plante muito junto.<br>• <strong>Alternariose:</strong> manchas escuras — retire folhas afetadas.<br>• <strong>Pulgões:</strong> lave com água ou extrato de alho.<br>• Fica amarga se secar ou florir — regue bem.'
    },
    {
      chaves: ['colher rúcula', 'colher rucula', 'colheita rúcula', 'colheita rucula', 'quando colher rúcula'],
      resposta: '🌿 <strong>Rúcula — colheita:</strong><br>• Colha com 25–35 dias.<br>• Corte folhas de fora ou tudo a 3 cm do solo.<br>• Melhor de manhã.<br>• Antes da flor o sabor é melhor.'
    },
    {
      chaves: ['regar', 'rega', 'irrigação', 'irrigacao', 'água', 'agua', 'quanto regar', 'encharcar'],
      resposta: '💧 <strong>Rega geral:</strong><br>• <strong>Tomate:</strong> 2–3 vezes por semana, solo úmido sem encharcar.<br>• <strong>Alface:</strong> rega leve e frequente — seca faz amargar.<br>• <strong>Rúcula:</strong> mantenha sempre úmido.<br>• Regue na base, evitando molhar muito as folhas. De manhã é o melhor horário.'
    },
    {
      chaves: ['esterco', 'adubo orgânico', 'adubo organico', 'composto', 'curtido', 'adubação geral', 'adubacao geral'],
      resposta: '🧪 <strong>Adubação geral:</strong><br>• Use sempre esterco <strong>bem curtido</strong> — esterco fresco queima a planta.<br>• Misture no solo antes de plantar.<br>• Adube com solo úmido.<br>• Siga sempre o rótulo do adubo químico.'
    },
    {
      chaves: ['pragas', 'lagarta', 'inseto', 'controle', 'defensivo', 'biológico', 'biologico'],
      resposta: '🐛 <strong>Controle de pragas:</strong><br>• Observe a horta todo dia.<br>• Retire lagartas à mão quando possível.<br>• Prefira produtos biológicos (ex.: Bacillus thuringiensis).<br>• Mantenha a horta limpa de mato e restos velhos.<br>• Em caso grave, procure o técnico da sua região.'
    },
    {
      chaves: ['rotação', 'rotacao', 'mesmo lugar', 'replantar', 'solo cansado'],
      resposta: '🔄 <strong>Rotação de culturas:</strong><br>• Não plante a mesma hortaliça no mesmo lugar seguido.<br>• Tomate: evite onde teve tomate ou batata.<br>• Alterne com leguminosas ou deixe o solo descansar.<br>• Isso reduz doenças e pragas no solo.'
    },
    {
      chaves: ['sombrite', 'calor', 'sol forte', 'verão', 'verao', 'queimar folha'],
      resposta: '☀️ <strong>Proteção do calor:</strong><br>• Use sombrite de 30% no verão.<br>• Plante à tarde nos dias quentes.<br>• Alface e rúcula sofrem mais com calor forte.<br>• Regue mais nos dias de sol intenso.'
    },
    {
      chaves: ['quanto tempo', 'ciclo', 'dias', 'demora'],
      resposta: '⏱️ <strong>Tempo de cultivo:</strong><br>• <strong>Rúcula:</strong> 25–35 dias (a mais rápida).<br>• <strong>Alface:</strong> 35–50 dias.<br>• <strong>Tomate:</strong> 70–90 dias para começar a colher.'
    },
    {
      chaves: ['técnico', 'tecnico', 'ajuda', 'problema grave', 'emergência', 'emergencia', 'ater'],
      resposta: '👨‍🌾 <strong>Quando procurar o técnico:</strong><br>• Se muitas plantas murcharem de uma vez.<br>• Se a doença espalhar rápido pela horta.<br>• Se não souber qual produto usar.<br>• Este assistente ajuda nas dúvidas do dia a dia, mas o técnico da sua região conhece sua realidade.'
    }
  ];

  const perguntasRapidas = [
    'Como plantar tomate?',
    'Quando colher alface?',
    'Rúcula ficou amarga, o que faço?',
    'Como regar hortaliças?',
    'O que é requeima?'
  ];

  function normalizar(texto) {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, ' ')
      .trim();
  }

  function buscarResposta(pergunta) {
    const texto = normalizar(pergunta);
    if (!texto) return null;

    let melhor = null;
    let melhorPontuacao = 0;

    baseConhecimento.forEach(function (item) {
      let pontuacao = 0;
      item.chaves.forEach(function (chave) {
        const chaveNorm = normalizar(chave);
        if (texto.includes(chaveNorm)) {
          pontuacao += chaveNorm.split(' ').length + 2;
        } else {
          chaveNorm.split(' ').forEach(function (palavra) {
            if (palavra.length > 3 && texto.includes(palavra)) {
              pontuacao += 1;
            }
          });
        }
      });
      if (pontuacao > melhorPontuacao) {
        melhorPontuacao = pontuacao;
        melhor = item.resposta;
      }
    });

    if (melhorPontuacao >= 2) return melhor;

    if (texto.includes('tomate')) {
      return '🍅 Vi que você perguntou sobre <strong>tomate</strong>. Posso ajudar com plantio, adubação, doenças ou colheita. Tente perguntar de forma mais específica, por exemplo: "Como adubar tomate?"';
    }
    if (texto.includes('alface')) {
      return '🥬 Vi que você perguntou sobre <strong>alface</strong>. Posso ajudar com plantio, adubação, doenças ou colheita. Tente: "Quando colher alface?"';
    }
    if (texto.includes('rucula')) {
      return '🌿 Vi que você perguntou sobre <strong>rúcula</strong>. Posso ajudar com plantio, adubação, doenças ou colheita. Tente: "Como plantar rúcula?"';
    }

    return 'Não encontrei essa resposta agora. Tente perguntar de outro jeito ou escolha uma das sugestões abaixo. Para problemas graves, procure o técnico da sua região.';
  }

  function criarMensagem(texto, tipo) {
    const div = document.createElement('div');
    div.className = 'chat-msg chat-msg-' + tipo;
    div.innerHTML = '<div class="chat-bolha">' + texto + '</div>';
    return div;
  }

  function rolarParaBaixo() {
    const corpo = document.getElementById('chat-corpo');
    if (corpo) corpo.scrollTop = corpo.scrollHeight;
  }

  function mostrarDigitando() {
    const corpo = document.getElementById('chat-corpo');
    const indicador = document.createElement('div');
    indicador.className = 'chat-msg chat-msg-bot chat-digitando';
    indicador.id = 'chat-digitando';
    indicador.innerHTML = '<div class="chat-bolha"><span></span><span></span><span></span></div>';
    corpo.appendChild(indicador);
    rolarParaBaixo();
    return indicador;
  }

  function responder(pergunta) {
    const corpo = document.getElementById('chat-corpo');
    corpo.appendChild(criarMensagem(pergunta, 'user'));
    rolarParaBaixo();

    const digitando = mostrarDigitando();

    setTimeout(function () {
      digitando.remove();
      const resposta = buscarResposta(pergunta);
      corpo.appendChild(criarMensagem(resposta, 'bot'));
      rolarParaBaixo();
    }, 700 + Math.random() * 500);
  }

  function iniciarChat() {
    const corpo = document.getElementById('chat-corpo');
    const input = document.getElementById('chat-input');
    const enviar = document.getElementById('chat-enviar');
    const sugestoes = document.getElementById('chat-sugestoes');

    if (!corpo || corpo.dataset.iniciado) return;
    corpo.dataset.iniciado = 'true';

    corpo.appendChild(criarMensagem(
      'Olá! Sou o <strong>Assistente ATER</strong>. Pergunte sobre tomate, alface ou rúcula — estou aqui para ajudar com as dúvidas mais comuns do dia a dia na horta.',
      'bot'
    ));

    perguntasRapidas.forEach(function (pergunta) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chat-sugestao';
      btn.textContent = pergunta;
      btn.addEventListener('click', function () {
        responder(pergunta);
      });
      sugestoes.appendChild(btn);
    });

    function enviarPergunta() {
      const texto = input.value.trim();
      if (!texto) return;
      input.value = '';
      responder(texto);
    }

    enviar.addEventListener('click', enviarPergunta);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        enviarPergunta();
      }
    });
  }

  window.iniciarChatATER = iniciarChat;
})();
