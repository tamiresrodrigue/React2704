class Carro{
    constructor(nome){
        this.nomeMarca = nome;
    }
    aprsentaDadosCarro(){
        return 'O preço do carro do professor é 12mil reais de IPVA'
    }
}
    const carroJailson = new Carro ("Puro sangue")
    const carroBreno = new Carro ("Mc laren")
    const carroGustavo = new Carro ("Ford Ka")
    console.log("O carro do professor milionario " + carroJailson.nomeMarca)
    console.log("O carro do dev senior Breno é " + carroBreno.nomeMarca)
    console.log("O carro do Gustavo é " + carroGustavo.nomeMarca)
    console.log (carroJailson.aprsentaDadosCarro())



