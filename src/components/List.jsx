import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={1985}/>
                <Item marca='Audi' lancamento={1964}/>
                <Item/>
            </ul>
        </>
    )
}

export default List