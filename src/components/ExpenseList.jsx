import ExpenseItem from "./ExpenseItem";
function ExpenseList({transactions, deleteTransaction}){
    if(transactions.length === 0){
        return <p>No transactions found.</p>
    }
    return(
        <ul className="list">
            
            {transactions.map(t =>(
                <ExpenseItem 
                key={t.id} 
                transactions ={t}
                deleteTransaction = {deleteTransaction}
                />
            ))}
        </ul>
    );
}
export default ExpenseList;