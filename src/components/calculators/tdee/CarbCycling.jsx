import { useState } from 'react';
import Table from '../../table/Table';
function CarbCycling({weight, unit, tdee}) {
    const total = 'Total'+toString(<span className="label-unit">(kcal)</span>)
    const protein = unit=='imperial'?weight:Math.round(weight*2.20462)
    const carbLow = {'cut':0.0375,'maintain':0.0625,'bulk':0.0688}
    const carbHigh = {'cut':0.1125,'maintain':0.125,'bulk':0.1375}
    const carb = (i)=> Math.round(i*tdee)
    const fatLow = 	{'cut':0.0666666666666666,'maintain':0.0833333333333333,'bulk':0.09166666666666666}
    const fatHigh = {'cut':0.05,'maintain':0.05555555555555555,'bulk':0.06111111111111112}
    const fat = (i) => carb(i)-weight+(unit==='imperial'?100:4)
    const [selected,setSelected] = useState('cut')
    return (
        <div className='container'>
            <h2>Carb Cycling</h2>
            <div className="choose-plan">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="plan" id="cut" value='cut' checked={selected==='cut'} onChange={e=>setSelected(e.target.value)}/>
                    <label className="form-check-label" htmlFor="cut">
                        Cut
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="plan" id="maintain" value='maintain' checked={selected==='maintain'} onChange={e=>setSelected(e.target.value)}/>
                    <label className="form-check-label" htmlFor="maintain">
                        Maintain
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="plan" id="bulk" value='bulk' checked={selected==='bulk'} onChange={e=>setSelected(e.target.value)}/>
                    <label className="form-check-label" htmlFor="bulk">
                        Bulk
                    </label>
                </div>
            </div>
            <Table headings={['','Low Carb Day','High Carb Day']} body={{total:[selected==='cut'?Math.round(tdee*0.75):selected==='bulk'?Math.round(tdee*1.1):tdee,selected==='cut'?Math.round(tdee*0.9):selected==='bulk'?Math.round(tdee*1.1):tdee],'Protein':[protein,protein],'Carbs':[carb(carbLow[selected]),carb(carbHigh[selected])],'Fat':[fat(fatLow[selected]),fat(fatHigh[selected])]}}/>
        </div>
    );
}
export default CarbCycling;
