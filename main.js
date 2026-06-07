// Banco de dados simulado de culturas, pragas e soluç?es biol?gicas
const dadosAgro = {
    soja: {
        nome: "Soja",
        pragas: {
            lagarta_da_soja: {
                nome: "Lagarta-da-soja (Anticarsia gemmatalis)",
                solucao: "Uso do v?rus <strong>Baculovirus anticarsia</strong> ou liberaç?o da vespinha <strong>Trichogramma pretiosum</strong>, que ataca os ovos da lagarta.",
                vantagens: "N?o afeta polinizadores e reduz a necessidade de inseticidas qu?micos."
            },
            percevejo_marrom: {
                nome: "Percevejo-marrom (Euschistus heros)",
                solucao: "Liberaç?o do parasitoide de ovos <strong>Telenomus podisi</strong> (uma microvespa que impede o nascimento de novos percevejos).",
                vantagens: "Controle focado na fase inicial de reproduç?o da praga."
            }
        }
    },
    milho: {
        nome: "Milho",
        pragas: {
            lagarta_do_cartucho: {
                nome: "Lagarta-do-cartucho (Spodoptera frugiperda)",
                solucao: "Aplicaç?o do bioinseticida à base da bactéria <strong>Bacillus thuringiensis (Bt)</strong> ou uso do fungo <strong>Beauveria bassiana</strong>.",
                vantagens: "Alta eficiência e preservaç?o dos inimigos naturais da praga."
            },
            cigarrinha_do_milho: {
                nome: "Cigarrinha-do-milho (Dalbulus maidis)",
                solucao: "Utilizaç?o combinada dos fungos <strong>Beauveria bassiana</strong> e <strong>Isaria fumosorosea</strong>, que infectam e eliminam o inseto.",
                vantagens: "Reduz drasticamente a transmiss?o do enfezamento do milho."
            }
        }
    },
    tomate: {
        nome: "Tomate",
        pragas: {
            traça_do_tomateiro: {
                nome: "Traça-do-tomateiro (Tuta absoluta)",
                solucao: "Instalaç?o de armadilhas de feromônio para monitoramento e liberaç?o da vespa predadora <strong>Trichogramma pretiosum</strong>.",
                vantagens: "Evita furos nos frutos e mantém a qualidade comercial do tomate."
            }
        }
    }
};

// Seleç?o dos elementos do HTML
const selectCultura = document.getElementById('cultura');
const selectPraga = document.getElementById('praga');
const divResultado = document.getElementById('resultado');

// Evento quando a cultura é alterada
selectCultura.addEventListener('change', function() {
    const culturaSelecionada = this.value;
    
    // Limpa o select de pragas
    selectPraga.innerHTML = '<option value="">Selecione a praga...</option>';
    divResultado.classList.add('hidden');
    
    if (culturaSelecionada && dadosAgro[culturaSelecionada]) {
        const pragas = dadosAgro[culturaSelecionada].pragas;
        
        // Preenche o select com as pragas da cultura escolhida
        for (const chavePraga in pragas) {
            const opcao = document.createElement('option');
            opcao.value = chavePraga;
            opcao.textContent = pragas[chavePraga].nome;
            selectPraga.appendChild(opcao);
        }
        
        // Ativa o select de pragas
        selectPraga.disabled = false;
    } else {
        selectPraga.disabled = true;
    }
});

// Evento quando a praga é alterada
selectPraga.addEventListener('change', function() {
    const culturaSelecionada = selectCultura.value;
    const pragaSelecionada = this.value;
    
    if (culturaSelecionada && pragaSelecionada) {
        const infoPraga = dadosAgro[culturaSelecionada].pragas[pragaSelecionada];
        
        // Monta o HTML do resultado
        divResultado.innerHTML = `
            <h3>Soluç?o Sustent?vel Encontrada</h3>
            <p><strong>Alvo:</strong> ${infoPraga.nome}</p>
            <h4>Método de Controle Biol?gico:</h4>
            <p>${infoPraga.solucao}</p>
            <h4>Vantagens para o Ecossistema:</h4>
            <p>${infoPraga.vantagens}</p>
        `;
        
        // Mostra a div de resultado
        divResultado.classList.remove('hidden');
    } else {
        divResultado.classList.add('hidden');
    }
});