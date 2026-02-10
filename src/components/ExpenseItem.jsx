function ExpenseItem({transactions, deleteTransaction}){
return(
    <li className={transactions.type}>
        <span>
            {transactions.title} ({transactions.category})
        </span>
        <span>
            {transactions.amount}
            <button onClick={()=>deleteTransaction(transactions.id)}>❌</button>
        </span>
    </li>
);
}
export default ExpenseItem;