import './Cell.css';
export default function Cell(props){
    return <td class={!props.isGameOn ? "toggle" : ""} id={props.id} onClick={props.handleCellClick}>{props.gridStatus ? "🌸" : "🌱"}</td>
}