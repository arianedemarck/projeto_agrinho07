// Banco de dados simulado de culturas, pragas e solu�?es biol?gicas
const dadosAgro = {
    soja: {
        nome: "Soja",
        pragas: {
            lagarta_da_soja: {
                nome: "Lagarta-da-soja (Anticarsia gemmatalis)",
                solucao: "Uso do v?rus <strong>Baculovirus anticarsia</strong> ou libera�?o da vespinha <strong>Trichogramma pretiosum</strong>, que ataca os ovos da lagarta.",
                vantagens: "N?o afeta polinizadores e reduz a necessidade de inseticidas qu?micos."
            },
            percevejo_marrom: {
                nome: "Percevejo-marrom (Euschistus heros)",
                solucao: "Libera�?o do parasitoide de ovos <strong>Telenomus podisi</strong> (uma microvespa que impede o nascimento de novos percevejos).",
                vantagens: "Controle focado na fase inicial de reprodu�?o da praga."
            }
        }
    },
    milho: {
        nome: "Milho",
        pragas: {
            lagarta_do_cartucho: {
                nome: "Lagarta-do-cartucho (Spodoptera frugiperda)",
                solucao: "Aplica�?o do bioinseticida � base da bact�ria <strong>Bacillus thuringiensis (Bt)</strong> ou uso do fungo <strong>Beauveria bassiana</strong>.",
                vantagens: "Alta efici�ncia e preserva�?o dos inimigos naturais da praga."
            },
            cigarrinha_do_milho: {
                nome: "Cigarrinha-do-milho (Dalbulus maidis)",
                solucao: "Utiliza�?o combinada dos fungos <strong>Beauveria bassiana</strong> e <strong>Isaria fumosorosea</strong>, que infectam e eliminam o inseto.",
                vantagens: "Reduz drasticamente a transmiss?o do enfezamento do milho."
            }
        }
    },
    tomate: {
        nome: "Tomate",
        pragas: {
            traa_do_tomateiro: {
                nome: "Tra�a-do-tomateiro (Tuta absoluta)",
                solucao: "Instala�?o de armadilhas de ferom�nio para monitoramento e libera�?o da vespa predadora <strong>Trichogramma pretiosum</strong>.",
                vantagens: "Evita furos nos frutos e mant�m a qualidade comercial do tomate."
            }
        }
    }
};

// Sele�?o dos elementos do HTML
const selectCultura = document.getElementById('cultura');
const selectPraga = document.getElementById('praga');
const divResultado = document.getElementById('resultado');

// Evento quando a cultura � alterada
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

// Evento quando a praga � alterada
selectPraga.addEventListener('change', function() {
    const culturaSelecionada = selectCultura.value;
    const pragaSelecionada = this.value;
    
    if (culturaSelecionada && pragaSelecionada) {
        const infoPraga = dadosAgro[culturaSelecionada].pragas[pragaSelecionada];
        
        // Monta o HTML do resultado
        divResultado.innerHTML = `
            <h3>Solu�?o Sustent?vel Encontrada</h3>
            <p><strong>Alvo:</strong> ${infoPraga.nome}</p>
            <h4>M�todo de Controle Biol?gico:</h4>
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
