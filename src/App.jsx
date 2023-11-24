import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList';
import Lottery from './Lottery';
import {sum} from './helper';
import Form from './Form';
import CommentsForm from './CommentsForm';
import Counter from './Counter';
import Joker from './Joker';


  function App() {

    // Passing this func as a Propsz bELOW//
    //let winCondition = (ticket) => {
    //  return ticket.every((num) => num === ticket[0]);
    //};
    //<Lottery n = {3} winCondition={winCondition} />//

    return (
      <>
        <Joker/>
      </>
    );
  }

export default App
