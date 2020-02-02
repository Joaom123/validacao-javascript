export const validarDataNascimento = input => {
    const dataNascimento = new Date(input.value);
    const dataAtual = new Date();
    const dataFaz18 = new Date(
        dataNascimento.getUTCFullYear() + 18,
        dataNascimento.getUTCMonth(),
        dataNascimento.getUTCDay()
    );

    //Caso usuário tenha menos que 18 anos
    if(dataFaz18 > dataAtual){
        input.setCustomValidity("Idade mínima de 18 anos");
        return;
    }
    
    input.setCustomValidity("");
    return;
}