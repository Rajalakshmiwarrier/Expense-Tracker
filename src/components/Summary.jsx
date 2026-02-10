function Summary({ transactions }){
    const income = transactions.filter(t=> t.type ==="income").reduce((sum,t) => sum + t.amount,0);
    const expense = transactions.filter(t=> t.type==='expense').reduce((sum,t) => sum + t.amount,0);
    const balance = income - expense;
    return(
        <div className="summary">
            <div>Income : <span className="green">{income}</span></div>
            <div>Expense : <span className="red">{expense}</span></div>
            <div>Balance : <strong>{balance}</strong></div>
        </div>
    );
}
export default Summary;