import Table from "../../table/Table";
import Item from "./Item";
import './NutritionStyles.css'
import { useState } from "react";
function Nuetrition() {
  function deleteItem(itemID,dataKey){
    setTotalProtein(arr=>arr.filter((_,idx)=>idx!==dataKey))
    setTotalCarbs(arr=>arr.filter((_,idx)=>idx!==dataKey))
    setTotalFat(arr=>arr.filter((_,idx)=>idx!==dataKey))
    setTotalCalories(arr=>arr.filter((_,idx)=>idx!==dataKey))
    setItems(items=>items.filter((item)=>itemID!==item.props.itemID));
  }
  const [totalProtein,setTotalProtein] = useState([''])
  const [totalCarbs,setTotalCarbs] = useState([''])
  const [totalFat,setTotalFat] = useState([''])
  const [totalCalories,setTotalCalories] = useState([''])
  const [items,setItems] = useState([<Item key={1} dataKey={0} setTotalProtein={setTotalProtein} setTotalCarbs={setTotalCarbs} setTotalFat={setTotalFat} setTotalCalories={setTotalCalories} itemID={'Item # 1'} deleteItem={deleteItem}/>])
  // protein={totalProtein} carbs={totalCarbs} fat={totalFat} calories={totalCalories} 
  // useEffect(function(){setItems(items.map((item)=>{return items.length===1?{...item,props:{...item.props,btnState:'disabled'}}:item}))},[setTotalProtein,setTotalCarbs,setTotalFat,setTotalCalories])
  function addItem(){
    setItems(arr=>[...arr,<Item key={(Number(items[items.length-1].key) + 1)} dataKey={(Number(items[items.length-1].key))} setTotalProtein={setTotalProtein} setTotalCarbs={setTotalCarbs} setTotalFat={setTotalFat} setTotalCalories={setTotalCalories} itemID={'Item # '+(Number(items[items.length-1].key) + 1)} deleteItem={deleteItem}/>]);
    setTotalProtein(arr=>[...arr,''])
    setTotalCarbs(arr=>[...arr,''])
    setTotalFat(arr=>[...arr,''])
    setTotalCalories(arr=>[...arr,''])
  }
  console.log(totalProtein,totalCarbs,totalFat,totalCalories)
  // console.log(items.map(e=>e.props.itemID))
  return (
    <div className="container">
      <div className='title mb-3 pb-3'>
        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="calculator-simple" className="svg-inline--fa fa-calculator-simple title-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M336 128H384v48c0 8.844 7.156 16.04 16 16.04S416 184.8 416 176V128h48C472.8 128 480 120.9 480 112S472.8 96 464 96H416V48c0-8.844-7.156-15.96-16-15.96S384 39.16 384 48V96h-48C327.2 96 320 103.2 320 112S327.2 128 336 128zM168.6 343.4c-6.254-6.254-16.37-6.254-22.63 0L112 377.4l-33.94-33.94c-6.254-6.254-16.37-6.254-22.63 0s-6.254 16.37 0 22.63L89.37 400l-33.94 33.94c-6.254 6.254-6.254 16.37 0 22.63s16.37 6.254 22.63 0L112 422.6l33.94 33.94c6.254 6.254 16.37 6.254 22.63 0s6.254-16.37 0-22.63L134.6 400l33.94-33.94C174.8 359.8 174.8 349.7 168.6 343.4zM48 128h128C184.8 128 192 120.8 192 112S184.8 96 176 96h-128C39.16 96 32 103.2 32 112S39.16 128 48 128zM496 240h-224v-224C272 7.156 264.8 0 256 0S240 7.156 240 16v224h-224C7.156 240 0 247.2 0 256s7.156 16 16 16h224v224c0 8.844 7.156 16 16 16s16-7.156 16-16v-224h224C504.8 272 512 264.8 512 256S504.8 240 496 240zM464 416h-128c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16S472.8 416 464 416zM464 352h-128c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16S472.8 352 464 352z"></path></svg>
        <h1>Nutrition Data</h1>
      </div>
      {items.map((item)=>{return items.length===1?{...item,props:{...item.props,btnState:'disabled'}}:item})}
      {/* {items} */}
      <button className="btn btn-main rounded" onClick={addItem}>Add another item</button>
      <h5>Total</h5>
      <Table headings={[]} body={{'Protein':[totalProtein.reduce((acc,i)=>{return acc+=i},0)],'Carbs':[totalCarbs.reduce((acc,i)=>{return acc+=i},0)],'Fat':[totalFat.reduce((acc,i)=>{return acc+=i},0)],'Calories':[totalCalories.reduce((acc,i)=>{return acc+=i},0)]}}/>
    </div>
  );
}
export default Nuetrition;
