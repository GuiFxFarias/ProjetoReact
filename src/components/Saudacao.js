function Saudacao ({nome}){

    function helper(algumNome){
        return `Olá ${algumNome}, tudo bem ?!`
    }

    return (
        <>
        {nome && <p>{helper(nome)}</p>}
        
        </>
    )
}
export default Saudacao