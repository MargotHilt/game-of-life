import './Cell.css';
export default function Cell(props){
    return <td style={{"fontSize": props.font}} className={!props.isGameOn ? "toggle" : ""} id={props.id} onClick={props.handleCellClick}>{props.gridStatus ? "🌸" : "🌱"}</td>
}