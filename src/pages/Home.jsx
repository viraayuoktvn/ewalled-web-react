import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const [transactions, setTransactions] = useState([
        { date: "20:10 - 30 June 2022", type: "Transfer", from: "Sendy", description: "Fore Coffee", amount: "- 75.000,00" },
        { date: "20:10 - 30 June 2022", type: "Topup", from: "", description: "Topup from Bank Transfer", amount: "+ 1.000.000,00" },
        { date: "20:10 - 30 June 2022", type: "Transfer", from: "Spongebob", description: "Fore Coffee", amount: "- 75.000,00" },
        { date: "20:10 - 30 June 2022", type: "Topup", from: "", description: "Topup from Bank Transfer", amount: "+ 1.000.000,00" },
        { date: "20:10 - 30 June 2022", type: "Transfer", from: "Anwar", description: "Beli barang", amount: "- 75.000,00" },
        { date: "20:10 - 30 June 2022", type: "Transfer", from: "Joko", description: "Transfer", amount: "+ 1.000.000,00" },
        { date: "20:10 - 30 June 2022", type: "Transfer", from: "Joko", description: "Fore Coffee", amount: "- 75.000,00" },
        { date: "20:10 - 30 June 2022", type: "Topup", from: "", description: "Topup from Bank Transfer", amount: "+ 1.000.000,00" },
        { date: "20:10 - 30 June 2022", type: "Transfer", from: "Spongebob", description: "Fore Coffee", amount: "- 75.000,00" },
        { date: "20:10 - 30 June 2022", type: "Topup", from: "", description: "Topup from Bank Transfer", amount: "+ 1.000.000,00" },
    ])

    const [isBalanceHidden, setIsBalanceHidden] = useState(false);
    const navigate = useNavigate();

    return (
        // Header
        <div className="font-['Open_Sans'] px-10 py-7 w-xl mx-7 my-3 items-center">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Good Morning, Chelsea</h1>
                    <p className="text-gray-600 mt-2">Check all your incoming and outgoing transactions here</p>
                </div>
                <div className="flex gap-4">
                    <div className="text-right">
                        <h3 className="font-bold">Chelsea Immanuela</h3>
                        <p className="text-sm">Personal Account</p>
                    </div>
                    <img src="src\assets\avatar.svg" alt="Profile" className="w-12 h-12 rounded-full border-4 border-blue-500" />
                </div>
            </div>

            {/* Account Details */}
            <div className="mt-6 justify-between flex gap-6 items-center h-40">
                <div className="bg-[#0061FF] h-full text-white p-11 rounded-[20px] w-1/6">
                    <p className="text-xl">Account No.</p>
                    <h2 className="text-2xl font-bold">100899</h2>
                </div>
                <div className="p-9 rounded-xl w-5/6 h-full flex justify-between items-center">
                    <div>
                        <p className="text-xl">Balance</p>
                        <div className="flex">
                            <h2 className="text-2xl font-bold">{isBalanceHidden ? "••••••••••••••••••••" : "Rp 10.000.000,00"}</h2>
                            <button onClick={() => setIsBalanceHidden(!isBalanceHidden)}>
                                <img src="src\assets\view.svg" className="px-10"></img>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-5">
                    <button onClick={() => navigate("/topup")}>
                        <img src="src/assets/plus.svg" className="bg-[#0061FF] text-white p-3 rounded-[10px] text-xl shadow-md shadow-[#19918F]" />
                    </button>
                    <button onClick={() => navigate("/transfer")}>
                        <img src="src/assets/share.svg" className="bg-[#0061FF] text-white p-3 rounded-[10px] text-xl shadow-md shadow-[#19918F]" />
                    </button>
                    </div>
                </div>
            </div>

            {/* Filter & Sorting */}
            <div className="flex justify-between items-center mt-6 p-4 rounded-lg">
                <input type="text" placeholder="Search" className="p-3 border rounded-lg w-1/3 shadow-sm focus:outline-none" />
                <div className="flex gap-4 items-center">
                    <label className="text-gray-500">Show</label>
                    <select className="p-3 border rounded-lg shadow-sm text-gray-500">
                        <option>Last 10 transactions</option>
                        <option>Last 20 transactions</option>
                    </select>
                    <label className="text-gray-500">Sort by</label>
                    <select className="p-3 border rounded-lg shadow-sm text-gray-500">
                        <option>Date</option>
                        <option>Amount</option>
                    </select>
                    <select className="p-3 border rounded-lg shadow-sm text-gray-500">
                        <option>Descending</option>
                        <option>Ascending</option>
                    </select>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="mt-6 bg-white shadow-md rounded-lg p-4">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                        <th className="p-2">Date & Time</th>
                        <th className="p-2">Type</th>
                        <th className="p-2">From / To</th>
                        <th className="p-2">Description</th>
                        <th className="p-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((trx, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2">{trx.date}</td>
                                <td className="p-2">{trx.type}</td>
                                <td className="p-2">{trx.from}</td>
                                <td className="p-2">{trx.description}</td>
                                <td className={`p-2 ${trx.amount.includes("-") ? "text-black" : "text-green-500"}`}>{trx.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-start items-center mt-6 border rounded-lg w-fit mx-auto overflow-hidden">
                <button className="px-4 py-2 bg-gray-200 text-gray-500 cursor-not-allowed">First</button>
                <button className="px-4 py-2 bg-white border-x text-[#0061FF] font-bold">1</button>
                <button className="px-4 py-2 bg-blue-500 text-white font-bold">2</button>
                <button className="px-4 py-2 bg-white border-x text-[#0061FF] font-bold">3</button>
                <button className="px-4 py-2 bg-white text-[#0061FF] font-bold">Next</button>
            </div>
        </div>
    )
}
  
export default HomePage