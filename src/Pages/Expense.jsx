import Navbar from "./../Component/Navbar";
import React, { useState } from "react";

const Expense = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Amount : ${amount} , Description : ${description}`);
  };

  return (
    <div>
      <Navbar />
      <h1 className="font-bold shadow mb-5 text-4xl">Expense Page</h1>
      <form onSubmit={handleSubmit} className="grid gap-5">
        <h2>Expense Transaction Form</h2>
        <div className="flex gap-8 justify-center items-center">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border-2 shadow p-2"
          />
        </div>
        <div className="flex gap-8 justify-center items-center">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 shadow p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 px-3 py-2 rounded text-white w-fit mx-auto"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default Expense;
