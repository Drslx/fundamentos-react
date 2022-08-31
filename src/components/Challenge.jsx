const Challenge = () => {
  const numbeA = 1;
  const numberB = 30;

  const somar = () => {
    const soma = numbeA + numberB;
    console.log(soma);
  };

  return (
    <div>
      <div> {numbeA} </div>
      <div> {numberB} </div>

      <div>
        <button onClick={somar}>Somar</button>
      </div>
    </div>
  );
};

export default Challenge;
