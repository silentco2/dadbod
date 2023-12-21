import { useState } from "react";
import { useLocation } from 'react-router-dom'
import './TdeeStyles.css'
import Form from './Form';
import Table from '../../table/Table';
import CarbCycling from './CarbCycling';
import KetoCycling from "./KetoCycling";
import Standard from "./Standard";
function Tdee() {
    const [unit,setUnit] = useState('imperial');
    const [weight,setWeight] = useState(180);
    const [bmr, setBmr] = useState(0)
    const [actualTdee,setActualTdee]= useState('')
    const [activeCell,setActiveCell] = useState('Moderate')
    const location = useLocation().pathname;
    const activity = {'Sedentary':["'Sedentary' translates little to no physical activity.",1.2],'Light':["'Light' translates to 1-3 hrs/wk of physical activity.",1.375],'Moderate':["'Moderate' translates to 4-6 hrs/wk of physical activity.",1.55],'A Lot':["'A lot' translates to 7-9 hrs/wk of physical activity.",1.725],'Extreme':["'Extreme' translates to 10+ hrs/wk of physical activity.",1.9]}
    const tdee = Object.fromEntries(Object.keys(activity).map(i=>[i,[Math.round(activity[i][1]*bmr)]]))
    function disableChar(event) {(event.key === 'e'||event.key === '+'||event.key === '-') && event.preventDefault()}
    //2.20462*weight(kg)
  return(
    <>
      <div className="container" style={{borderBottom:'var(--dark-grey) 1px solid'}}>
          <div className='title mb-3 pb-3'>
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="calculator-simple" className="svg-inline--fa fa-calculator-simple title-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M336 128H384v48c0 8.844 7.156 16.04 16 16.04S416 184.8 416 176V128h48C472.8 128 480 120.9 480 112S472.8 96 464 96H416V48c0-8.844-7.156-15.96-16-15.96S384 39.16 384 48V96h-48C327.2 96 320 103.2 320 112S327.2 128 336 128zM168.6 343.4c-6.254-6.254-16.37-6.254-22.63 0L112 377.4l-33.94-33.94c-6.254-6.254-16.37-6.254-22.63 0s-6.254 16.37 0 22.63L89.37 400l-33.94 33.94c-6.254 6.254-6.254 16.37 0 22.63s16.37 6.254 22.63 0L112 422.6l33.94 33.94c6.254 6.254 16.37 6.254 22.63 0s6.254-16.37 0-22.63L134.6 400l33.94-33.94C174.8 359.8 174.8 349.7 168.6 343.4zM48 128h128C184.8 128 192 120.8 192 112S184.8 96 176 96h-128C39.16 96 32 103.2 32 112S39.16 128 48 128zM496 240h-224v-224C272 7.156 264.8 0 256 0S240 7.156 240 16v224h-224C7.156 240 0 247.2 0 256s7.156 16 16 16h224v224c0 8.844 7.156 16 16 16s16-7.156 16-16v-224h224C504.8 272 512 264.8 512 256S504.8 240 496 240zM464 416h-128c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16S472.8 416 464 416zM464 352h-128c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16S472.8 352 464 352z"></path></svg>
              <h1>TDEE</h1>
          </div>
          <Form setBmr={setBmr} unit={unit} setUnit={setUnit} weight={weight} setWeight={setWeight}/>
          <p className='mb-3'>{activity[activeCell][0]}</p>
          <Table isHoverTable={actualTdee===''} activeCell={activeCell} changeTdee={setActiveCell} headings={['Activity','TDEE']} body={tdee}/>
          <label id='actual-tdee-label' htmlFor='actual-tdee'>Know your actual TDEE?</label>
          <p>We use the Mifflin-St Jeor equation to calculate basal metabolic rate (BMR) and then scale that figure by your average physical activity to `guess` your total daily energy expenditure (TDEE). While this is the most reliable of the predictive equations, it may be off by ~10%. If you use a wearable you trust, we recommend averaging weekly or monthly caloric expenditure to determine TDEE.</p>
          <div className='position-relative'>
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="campfire" className="svg-inline--fa fa-campfire input-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="var(--red)" d="M256 320c79.5 0 144-64.5 144-144c0-33.25-33.38-102-80-144c-13.38 12-25.5 24.75-36.13 37.5C266.4 46 244.6 22.25 220 0c-63.13 57-108 131.3-108 176C112 255.5 176.5 320 256 320zM220.2 44.38c14.12 14.38 27 29.38 38.13 44.25L282.4 121l26-31c3.5-4.25 7.25-8.375 11-12.38C350 114.5 368 159.3 368 176c0 61.75-50.25 112-112 112s-112-50.25-112-112C144 148.3 172 94.38 220.2 44.38zM501.5 480.1L302.5 408l199-72.97c8.281-3.062 12.55-12.25 9.5-20.53c-3.047-8.312-12.17-12.53-20.53-9.531L256 390.9L21.52 304.1c-8.297-3-17.48 1.219-20.53 9.531c-3.047 8.281 1.219 17.47 9.5 20.53L209.5 408l-199 72.97c-8.281 3.062-12.55 12.25-9.5 20.53C3.359 508 9.484 512 16 512c1.828 0 3.688-.3125 5.516-.9687L256 425.1l234.5 85.98C492.3 511.7 494.2 512 496 512c6.516 0 12.64-4 15.02-10.5C514.1 493.2 509.8 484 501.5 480.1z"></path></svg>
              <input type="number" onKeyDown={ (event) => disableChar(event)} value={actualTdee} min={0} onChange={(e)=>setActualTdee(e.target.value)} className="form-input w-auto col-md-3" id='actual-tdee'/>
          </div>
      </div>
      {location === '/carb-cycling' ? <CarbCycling weight={weight} unit={unit} tdee={actualTdee === ''?tdee[activeCell][0]:actualTdee}/> : location === '/keto-cycling' ? <KetoCycling weight={weight} unit={unit} tdee={actualTdee === ''?tdee[activeCell][0]:actualTdee}/> : location === '/standard' ? <Standard weight={weight} unit={unit} tdee={actualTdee === ''? tdee[activeCell][0] : actualTdee}/> : null}
    </>
  );
}

export default Tdee;
