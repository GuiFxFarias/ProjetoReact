function Evento({numero}){

    function meuEvento(){
        console.log({numero})
    }

    return(
        <div>
            <p>Clique para disparar um Evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}


export default Evento