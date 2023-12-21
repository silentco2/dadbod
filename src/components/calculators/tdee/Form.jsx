import { useState } from "react";
function Form({setBmr, unit, setUnit, weight, setWeight}) {
    const [gender,setGender] = useState('male');
    const [heightFoot,setHeightFoot] = useState(6);
    const [heightInch,setHeightInch] = useState(0);
    const [heightCm,setHeightCm] = useState(180);
    const [age,setAge] = useState(30);
    setBmr(Math.floor(unit==='imperial'?(4.536*weight)+(15.88*(heightFoot*12+heightInch*1)):(10*weight)+(6.25*heightCm))-(5*age)+(gender==='male'?5:-161))
    function disableChar(event) {(event.key === 'e'||event.key === '+'||event.key === '-') && event.preventDefault()}
    return (
        <form className='mb-3 pb-3' style={{borderBottom:'var(--dark-grey) 1px solid'}}>
            <div className="form-row d-flex">
                <div className="col-sm mb-3 mx-1">
                    <label className="form-label" htmlFor="unit">Unit</label>
                    <select className="custom-select form-input" id="unit" defaultValue={unit} onChange={(e)=>setUnit(e.target.value)}>
                        <option value="imperial">Imperial</option>
                        <option value="metric">Metric</option>
                    </select>
                </div>
                <div className="col-sm mb-3 mx-1">
                    <label className="form-label" htmlFor="gender">Gender</label>
                    <select className="custom-select form-input" id="gender" defaultValue={gender} onChange={(e)=>setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="col-sm mb-3 mx-1 required">
                    <label className="form-label" htmlFor="weight">Weight<span className="label-unit">{unit==='imperial'?'(lb)':'(kg)'}</span></label>
                    <input type="number" onKeyDown={ (event) => disableChar(event)} min={0} className="form-input" id="weight" placeholder={'Weight '+ (unit === 'imperial' ? '(lb)' : '(kg)')} value={weight} onChange={(e)=>setWeight(e.target.value)} required/>
                </div>
            </div>

            <div className="form-row d-flex">
                <div className="col-sm mb-3 mx-1">
                    <label className="form-label" htmlFor="height-base">Height<span className="label-unit">{unit === 'imperial' ? '(ft)' : '(cm)'}</span></label>
                    {unit==='imperial'?
                    <div>
                        <input type="number" onKeyDown={ (event) => disableChar(event)} min={0} className="form-input" id="height-base" placeholder="Feet" value={heightFoot} onChange={(e)=>setHeightFoot(e.target.value)} style={{display:'inline', width:'calc(50% - .5rem)',marginRight:'.5rem'}}/>
                        <input type="number" onKeyDown={ (event) => disableChar(event)} min={0} max={12} className="form-input" id="height-inch" placeholder="Inches" value={heightInch} onChange={(e)=>setHeightInch(e.target.value)} style={{display:'inline',width:'calc(50% - .5rem)'}}/>
                    </div>
                    :<input type="number" onKeyDown={ (event) => disableChar(event)} min={0} className="form-input" id="height" placeholder={'Height '+ unit === 'imperial' ? '(ft)' : '(cm)'} value={heightCm} onChange={(e)=>setHeightCm(e.target.value)}/>}
                </div>
                <div className="col-sm mb-3 mx-1">
                    <label className="form-label" htmlFor="age">Age</label>
                    <input type="number" onKeyDown={ (event) => disableChar(event)} min={0} className="form-input" id="age" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
            </div>
        </form>
    );
}
export default Form;
