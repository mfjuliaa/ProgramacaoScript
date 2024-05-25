namespace vetores {
    let numeros: number[] = [1, 2, 3, 4, 5];
    let frutas: Array<string> = ["Morango", "Laranja", "Kiwi"];

    type Livro = {
        titulo: string;
        autor: string;
        ano: number;
    }

    let livros: Livro[] = [{
        titulo: "Senhor dos aneis ",
        autor: "JJ R Jubileu",
        ano: 1954,
    }, {
        titulo: "Harry potter",
        autor: "JK  Rowling",
        ano: 1997,

    }]

    console.log(numeros[0]);
    console.log(numeros[1]);
    console.log(numeros[2]);
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);

    }


    //adicionando no final do array
    numeros.push(6);

    //remover o ultimo elemento do array
    numeros.pop();

    //adicionando no começo do array
    numeros.unshift(0);

    //removendo o primeiro elemento do array
    numeros.shift();

    livros.forEach(livro => {

        console.log(`${livro.titulo}\n${livro.autor}\n${livro.ano}`)
    })

    let quadrados: number[] = numeros.map(function (num: number) {
        return num * num;


    })

    let pares: number[] = numeros.filter(function (num: number): boolean {
        return num % 2 == 0;
    })


    let soma: number = numeros.reduce(function(total:number, num:number){
        return total + num
    })
}