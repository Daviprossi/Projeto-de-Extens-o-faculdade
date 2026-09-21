// Simulando o banco de dados da escola
const estoque = {
    normal: { P: 10, M: 5, G: 0, GG: 2 },
    ed_fisica: { P: 0, M: 12, G: 8, GG: 0 }
};

function verificarEstoque() {
    // 1. Pegar os valores que o aluno selecionou
    const tipoFarda = document.getElementById('tipo').value;
    const tamanhoFarda = document.getElementById('tamanho').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // 2. Resetar a animação caso o aluno clique várias vezes seguidas
    resultadoDiv.classList.remove('show-animate');
    void resultadoDiv.offsetWidth; // Truque do JS para forçar o reinício da animação
    
    // 3. Buscar a quantidade no nosso "banco de dados" falso
    const quantidade = estoque[tipoFarda][tamanhoFarda];

    // 4. Mostrar o resultado com as cores certas
    if (quantidade > 0) {
        resultadoDiv.innerHTML = `✅ Farda Disponível!<br><span style="font-size: 14px; font-weight: normal; color: #333;">Temos ${quantidade} unidades no tamanho ${tamanhoFarda} prontas para retirada.</span>`;
        resultadoDiv.className = 'resultado-container disponivel show-animate';
    } else {
        resultadoDiv.innerHTML = `❌ Tamanho Esgotado.<br><span style="font-size: 14px; font-weight: normal; color: #333;">Infelizmente não temos o tamanho ${tamanhoFarda} no momento. Retorne na próxima semana!</span>`;
        resultadoDiv.className = 'resultado-container esgotado show-animate';
    }
}