import { useState } from 'react';
import Table from '../../table/Table';
function Standard({unit,weight,tdee}) {
    const [selected,setSelected] = useState('cut')
    const total = {'cut':0.75,'maintain':1,'lean':1.1,'bulk':1.2}
    const carbs = {'cut':0.075,'maintain':0.075,'lean':0.15125,'bulk':0.165}
    const fat = {'cut':0.05,'maintain':0.0777777777777777,'lean':0.055,'bulk':0.06}
    return (
        <div className='container'>
            <h2>Daily Goals</h2>
            <div className="choose-plan">
                <div className="form-check">
                    <input className="form-check-input" type="radio" checked={selected==='cut'} onChange={e=>setSelected(e.target.value)} name="plan" id="cut" value='cut'/>
                    <label className="form-check-label" htmlFor="cut">
                        Cut
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" checked={selected==='maintain'} onChange={e=>setSelected(e.target.value)} name="plan" id="maintain" value='maintain'/>
                    <label className="form-check-label" htmlFor="maintain">
                        Maintain
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" checked={selected==='lean'} onChange={e=>setSelected(e.target.value)} name="plan" id="lean" value='lean'/>
                    <label className="form-check-label" htmlFor="lean">
                        Lean Bulk
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" checked={selected==='bulk'} onChange={e=>setSelected(e.target.value)} name="plan" id="bulk" value='bulk'/>
                    <label className="form-check-label" htmlFor="bulk">
                        Bulk
                    </label>
                </div>
            </div>

            <Table headings={['','']} body={{'Total':[Math.round(tdee*total[selected])],'Protein':[unit==='imperial'?weight:Math.round(weight*2.20462)],'Carbs':[Math.round(tdee*carbs[selected])],'Fat':[Math.round(tdee*fat[selected] - weight *(unit==='imperial'?0.4444444444444444:0.9798311111111111))]}}/>
        </div>
    );
}
export default Standard;
