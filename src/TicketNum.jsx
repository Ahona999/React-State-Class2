import "./TicketNum.css";

// in TicketNum the props value will be a num value for the ticket//
export default function TicketNum({num}) { 
    return (
       <span className="TicketNum">{num}</span>
    );
}