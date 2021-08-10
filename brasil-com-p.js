function solucao(primeiraLetra, segundaLetra, palavras) {
    const resultado = [];
    let qtdVezes = 0;
    
    for (const item of palavras) {
        if (item[0] === primeiraLetra && item[1] === segundaLetra) {
            qtdVezes++;
            resultado.push(item);
            console.log(item);
        } 
    } if (qtdVezes === 0) {
        console.log("NENHUMA")
    }
}