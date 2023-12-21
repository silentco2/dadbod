import Table from '../../table/Table';
function KetoCycling({weight, unit, tdee}) {
    return (
        <div className='container'>
            <h2>Keto Cycling</h2>
            <Table headings={['','Low Carb Day','High Carb Day']} body={{'Total':[Math.round(tdee*0.8),Math.round(tdee*0.8)],'Protein':[unit==='imperial'?Math.round(weight*1.2):Math.round(weight*2.645544),unit==='imperial'?Math.round(weight*1.2):Math.round(weight*2.645544)],'Carbs':[Math.round(tdee*0.014),Math.round(tdee*0.06)],'Fat':[Math.round(tdee*0.08266666666666667 - (unit==='imperial'?0.5333333333333333*weight:1.175797333333333*weight)),Math.round(tdee*0.06222222222222222 - (unit==='imperial'?0.5333333333333333*weight:1.175797333333333*weight))]}}/>
        </div>
    );
}
export default KetoCycling;
