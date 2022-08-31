const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou Evento");
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        {/*Logica direto no elemento */}
        <button
          onClick={() => {
            console.log("Clicou");
          }}
        >
          Clique aqui tambem!
        </button>
      </div>
    </div>
  );
};

export default Events;
