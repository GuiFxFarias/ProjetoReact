import Button from "./Eventos/Button"

function Evento(){

    function meuEvento(){
        console.log('opa')
    }

    return(
        <div>
            <p>Clique para disparar um Evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
        </div>
    )
}


export default Evento