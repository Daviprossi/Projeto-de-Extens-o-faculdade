const estoque = {
    normal: { P: 10, M: 5, G: 0, GG: 2 },
    ed_fisica: { P: 0, M: 12, G: 8, GG: 0 }
};

function verificarEstoque() {
    const tipoFarda = document.getElementById('tipo').value;
    const tamanhoFarda = document.getElementById('tamanho').value;
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.classList.remove('show-animate');
    void resultadoDiv.offsetWidth; 
    
    const quantidade = estoque[tipoFarda][tamanhoFarda];

    if (quantidade > 0) {
        resultadoDiv.innerHTML = `✅ Farda Disponível!<br><span style="font-size: 14px; font-weight: normal; color: #333;">Temos ${quantidade} unidades no tamanho ${tamanhoFarda} prontas para retirada.</span>`;
        resultadoDiv.className = 'resultado-container disponivel show-animate';
    } else {
        resultadoDiv.innerHTML = `❌ Tamanho Esgotado.<br><span style="font-size: 14px; font-weight: normal; color: #333;">Infelizmente não temos o tamanho ${tamanhoFarda} no momento. Retorne na próxima semana!</span>`;
        resultadoDiv.className = 'resultado-container esgotado show-animate';
    }
}
