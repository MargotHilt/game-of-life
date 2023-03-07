
export default function Cell(props){
    return <td id={props.id} onClick={props.handleCellClick}>{props.gridStatus ? "🌸" : "🌱"}</td>
}