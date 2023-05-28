import { React } from "react";

const Botao =({
    type,
    text,
    onClick,
    // disabled,
}) => {
    return (
        <Botao
        type={type}
        text={text}
        onClick={onClick}>
            {text}
        </Botao>
    );
}

export default Botao;