import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n = 3, winCondition}){

    let [ticket, setTicket] = useState(genTicket(n));
    let buyNewTicket = () => {
        setTicket(genTicket(n));
    }
    
    let isWinning = winCondition(ticket);

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket = {ticket}/>
            <button onClick = {buyNewTicket}>Buy New Ticket</button>
            <h2>{isWinning && "Congrats! You won a lottery!"}</h2>
        </div>
    );
}

   