import { useEffect, useState } from 'react';
import './App.sass';

function App() {
  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(75)
  const [bmi, setBMI] = useState(24.49)
  const [bmiCategory, setBmiCategory] = useState()
  const [chart, setChart] = useState()
  const [minWeight, setMinWeight] = useState(56.7)

  useEffect(() => {
    calculateBMI()
    BMIcategory()
  }, [bmi, weight, weight, bmiCategory, chart])

  const handleHeightInput = (e) => {
    setHeight(e.target.value)
  }

  const handleWeightInput = (e) => {
    setWeight(e.target.value)
  }

  const calculateBMI = () => {
    setBMI(weight / (height / 100) ** 2)
  }

  const BMIcategory = () => {
    if (bmi < 15) {
      setBmiCategory('Very severly underweight')
      setChart('12.5%')
    } else if (bmi >= 15 && bmi < 16 ) {
      setBmiCategory('Severly underweight')
      setChart('25%')
    } else if (bmi >= 16 && bmi < 18.5) {
      setBmiCategory('Underweight')
      setChart('37.5%')
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiCategory('Normal')
      setChart('50%')
    } else if (bmi >= 25 && bmi < 30) {
      setBmiCategory('Overweight')
      setChart('62.5%')
    } else if (bmi >= 30 && bmi < 35) {
      setBmiCategory('Moderately obese')
      setChart('75%')
    } else if (bmi >= 35 && bmi < 40) {
      setBmiCategory('Severely obese')
      setChart('87.5%')
    } else if (bmi > 40) {
      setBmiCategory('Very severly obese')
      setChart('100%')
    }
  }

  // min ideal body weight
  const IBWmin = () => {
    setMinWeight(18.5 * height ** 2)
  }

  return (
    <div className="app">

      <div className="outputContainer">
        <h1 className="title">Calculate your Body Index Mass</h1>
        <div className="body">
          <p className="text">Your BMI is <b>{bmi.toFixed(2)}</b>, indicating your weight is in the <b>{bmiCategory}</b> category for adults of you height.</p>
          <p className="text">For your height, a normal weight range would be from <b>{minWeight}</b> to <b>76.3</b> kilograms.</p>
          <p className="text">Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.</p>
        </div>
      </div>

      <div className="inputContainer">
        <p className="title">Find out your <b>BMI</b></p>
        <div className="heightWeightContainer">
          <div className="height">
            <p className="text">Height (cm)</p>
            <input type="number" placeholder="175" value={height} onChange={handleHeightInput} />
          </div>
          <div className="weight">
            <p className="text">Weight (kg)</p>
            <input type="number" placeholder="75" value={weight} onChange={handleWeightInput} />
          </div>
        </div>
        <div className="bmiContainer">
          <p className="text">Your Body Mass Index (BMI)</p>
          <h3 className="bmi">{bmi.toFixed(2)}</h3>
        </div>
        <div className="chart">
          <div className="arrow" style={{ margin: `0 ${chart}` }}></div>
        </div>
      </div>

    </div>
  );
}

export default App;
