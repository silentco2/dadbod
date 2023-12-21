import { useState } from "react";
function Item({dataKey, itemID, deleteItem, btnState, setTotalProtein, setTotalCarbs, setTotalFat, setTotalCalories}) {
// protein,carbs,fat,calories,
  const [serving,setServing] = useState('')
  const [protein,setProtein] = useState('')
  const [carbs,setCarbs] = useState('')
  const [fat,setFat] = useState('')
  const [calories,setCalories] = useState('')
  const [actualServing,setActualServing] = useState('')
  function changeInput(event,input,inputTotal){
    input(event.target.value)
    const pro = actualServing*event.target.value/serving
    inputTotal(arr=>arr.map((i,idx)=>idx==dataKey?pro:i))
  }
  function disableChar(event) {(event.key === 'e'||event.key === '+'||event.key === '-') && event.preventDefault()}
  return (
    <div className="container rounded px-3" style={{border:'var(--dark-grey) 1px solid'}}>
        <div className="item-head mt-2 d-flex justify-content-between">
            <h4 data-bs-toggle="modal" data-bs-target="#rename-item" data-whatever={itemID}>{itemID}</h4>
            <button className={"btn btn-danger delete-icon rounded "+btnState} onClick={()=>{deleteItem(itemID,dataKey)}}><i className="fa-solid fa-trash"></i></button>
        </div>
        <div className="form-row item-form">
            <div className="col-sm mb-3 mx-1 required">
                <label className="form-label" htmlFor="serving-size">Serving size</label>
                <input type="number" onKeyDown={ (event) => disableChar(event)} value={serving} onChange={e=>setServing(e.target.value)} className="form-input" id="serving-size" required/>
            </div>
            <div className="col-sm mb-3 mx-1">
                <label className="form-label" htmlFor="protein">Protein</label>
                <input type="number" onKeyDown={ (event) => disableChar(event)} value={protein} onChange={e=>changeInput(e,setProtein,setTotalProtein)} className="form-input" id="protein"/>
            </div>
            <div className="col-sm mb-3 mx-1">
                <label className="form-label" htmlFor="carbs">Carbs</label>
                <input type="number" onKeyDown={ (event) => disableChar(event)} value={carbs} onChange={e=>changeInput(e,setCarbs,setTotalCarbs)} className="form-input" id="carbs"/>
            </div>
            <div className="col-sm mb-3 mx-1">
                <label className="form-label" htmlFor="fat">Fat</label>
                <input type="number" onKeyDown={ (event) => disableChar(event)} value={fat} onChange={e=>changeInput(e,setFat,setTotalFat)} className="form-input" id="fat"/>
            </div>
            <div className="col-sm mb-3 mx-1">
                <label className="form-label" htmlFor="calories">Calories</label>
                <input type="number" onKeyDown={ (event) => disableChar(event)} value={calories} onChange={e=>changeInput(e,setCalories,setTotalCalories)} className="form-input" id="calories"/>
            </div>
        </div>
        <div className="form-row d-flex">
            <div className="w-auto col-md-3 my-3 mx-1 required">
                <label className="form-label mb-0" htmlFor="your-serving">Your Serving</label>
                <p className="mb-1">How much are you actually consuming?</p>
                <input type="number" onKeyDown={ (event) => disableChar(event)} value={actualServing} onChange={e=>setActualServing(e.target.value)} className="form-input" id="your-serving" required/>
            </div>
        </div>

        <div className="modal fade" id="rename-item" tabIndex="-1" role="dialog" aria-labelledby="rename-item-label" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body" style={{backgroundColor:'var(--secondary-color)'}}>
                        <div className="form-group">
                            <div className="modal-label d-flex justify-content-between align-items-center mb-3">
                                <label htmlFor="item-name" className="col-form-label">Rename Item</label>
                                <button type="button" className="btn close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                            </div>
                            <input type="text" className="form-input" id="item-name"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}
export default Item;
