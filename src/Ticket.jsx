import TicketNum from "./TicketNum";
import "./Ticket.css";

//ticket array numbers// -- //in map list is attached, so while map and list there must always be a key prop it can be uuid or idx etc//
export default function Ticket({ticket}) {
    return(
        <div className="Ticket">
            <h6>Ticket</h6>
            {ticket.map((num, idx) => (
                <TicketNum num = {num} key = {idx}/>
            ))}
        </div>
    );
}
   