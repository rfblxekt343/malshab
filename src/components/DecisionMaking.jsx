export default function DecisionMaking({onDecisionClick}) {
function decisionClick(){
    onDecisionClick();
}


    return (
     
        <div id="decision-making">
        <h1>קבלת החלטות</h1>
        <ul>
            <li><button onClick={decisionClick}>נקודה להחלטה</button></li>
            <li><button  onClick={decisionClick}>נקודה להחלטה</button></li>
            <li><button  onClick={decisionClick}>נקודה להחלטה</button></li>
        </ul>
    </div>
 
    
        
    );

}