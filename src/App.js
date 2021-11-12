import './App.sass';

function App() {
  return (
    <div className="app">

      <div className="outputContainer">
        <h1 className="title">Calculate your Body Index Mass</h1>
        <div className="body">
          <p class="text">Your BMI is <b>24.5</b>, indicating your weight is in the <b>Normal</b> category for adults of you height.</p>
          <p class="text">For your height, a normal weight range would be from <b>56.7</b> to <b>76.3</b> kilograms.</p>
          <p class="text">Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.</p>
        </div>
      </div>

      <div className="inputContainer">
        <p className="title">Find out your <b>BMI</b></p>
        <div className="buttonContainer">
          <a>KG</a>
          <a>LBS</a>
        </div>
        <div className="heightWeightContainer">
          <div className="height">
            <p className="text">Height (cm)</p>
            <input type="number" placeholder="175" />
          </div>
          <div className="weight">
            <p className="text">Weight (kg)</p>
            <input type="number" placeholder="75" />
          </div>
        </div>
        <div className="bmiContainer">
          <p className="text">Your Body Mass Index (BMI)</p>
          <h3 className="bmi">24.5</h3>
        </div>
        <div className="chart">
          <div className="arrow"></div>
        </div>
      </div>

    </div>
  );
}

export default App;
