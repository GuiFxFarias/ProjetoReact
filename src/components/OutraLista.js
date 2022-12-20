function OutraLista({ itens }) {
  return (
    <>


      {itens.length > 0 ? (
      itens.map((item, index) => (
        <p key={index}>{item}</p>
      ))) : (
        <p>Não há itens na lista</p>
      )}
      
    </>
  );
}

export default OutraLista;
