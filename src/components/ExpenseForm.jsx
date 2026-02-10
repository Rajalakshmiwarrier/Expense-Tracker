import { useState } from "react";

function ExpenseForm({addTransaction}){
const [title, setTitle] = useState([]);
const [category, setCategory] = useState([]);
const [type, setType] = useState([]);
const [amount, setAmount] = useState([]);

const handleSubmit = (e)=>{
    e.preventDefault();
    if(!title || !amount) return;
    addTransaction({
        title,
        amount : Number(amount),
        type,
        category
       
    });
    setTitle("");
    setAmount("");
}
return(
    <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
        <select  onChange={e=>setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>
        <select onChange={e=>setCategory(e.target.value)}>
            <option>General</option>
            <option>Food</option>
            <option>Rent</option>
            <option>Travel</option>
            <option>Shopping</option>
        </select>
        <button>Add</button>
    </form>
);

}
export default ExpenseForm;