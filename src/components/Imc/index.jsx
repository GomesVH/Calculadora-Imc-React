import { useState } from "react";

const Imc = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(null);

  const calcImc = (weight, height) => {
    var imc = weight / (height * height);
    return imc.toFixed(2);
  }

  const interpreter = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Sobrepeso";
    } else {
      return "Obeso";
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const imcFinalized = calcImc(weight, height);
    setResult(imcFinalized);
  }

  return (
    <div className="container mx-auto mt-5">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-row justify-content-center">
          <div className="col-md-4 mb-3">
            <label htmlFor="weight"><b>Peso (kg):</b></label>
            <input type="number" className="form-control" id="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="height"><b>Altura (m):</b></label>
            <input type="number" step="0.01" className="form-control" id="height" value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Calculadora <b>IMC</b></button>
      </form>

      {result !== null && (
        <div className="alert alert-info text-center">
          <p className="mb-0">
            <strong>Resultado IMC:</strong> {result}
          </p>
          <p className="mb-0">
            <strong>Interpretação:</strong> {interpreter(parseFloat(result))}
          </p>
        </div>
      )}
    </div>
  );
}

export default Imc;
