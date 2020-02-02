import { validarDataNascimento } from "./validarDataNascimento";

export const validarInput = input => {
    const tipo = input.dataset.tipo;
    const validadoresEspecificos = {
        data: input => validarDataNascimento(input),
    };

    if (validadoresEspecificos[tipo]) {
        validadoresEspecificos[tipo](input);
    }
}