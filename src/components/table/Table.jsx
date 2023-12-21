function Table({headings,body,isHoverTable,activeCell,changeTdee}) {
    return (
        <table className={"table "+(isHoverTable?'table-hover':'')}>
            <thead>
                <tr>
                    {headings.map((i)=><th scope="col" key={i} id={'table-head-'+(headings.indexOf(i)+1)}>{i}</th>)}
                </tr>
            </thead>
            <tbody>
                    {Object.keys(body).map((i)=><tr key={i} id={activeCell===i?'active':''} onClick={()=>isHoverTable&&changeTdee(i)} style={Object.keys(body).indexOf(i)===Object.keys(body).length-1?{borderBottomColor: 'transparent'}:{}}><th key={i} scope="row">{i}</th>{body[i].map((j)=><td key={body[i].indexOf(j)}>{j}</td>)}</tr>)}
            </tbody>
        </table>
    );
}
export default Table;