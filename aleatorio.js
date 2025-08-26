 const nomes = ["Luana", "Brunna", "Gabriela", "Fernanda", "Carla", "Ana", "Clara" ];
 
 export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);