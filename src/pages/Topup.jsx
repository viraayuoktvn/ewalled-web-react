import { useState } from "react";

function Topup() {
    const [selectedMethod, setSelectedMethod] = useState("Credit Card");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const paymentMethods = ["BYOND Pay", "Bank Transfer", "Credit Card"];
    return (
        <div className="flex flex-col items-center justify-center pt-1 min-h-[80vh]">
            <div className="w-[400px]">
                <h1 className="text-2xl text-left font-bold mb-3">Topup</h1>
                <div className="w-[400px] p-6 bg-white rounded-2xl shadow-lg">

                    {/* Amount Section */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-1">Amount</label>
                        <input
                            type="text"
                            className="text-2xl font-bold w-full border-b border-black outline-none focus:ring-0"
                            placeholder="IDR 150.000,00"
                        />
                    </div>

                    {/* From Section with Dropdown */}
                    <div className="mb-6 relative">
                        <div 
                            className="flex items-center justify-between p-3 rounded-[20px] border cursor-pointer"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span className="h-full flex items-center font-semibold bg-gray-200 px-3 py-1 rounded-[20px]">From</span>
                            <span className="ml-2 flex-1 text-gray-700">{selectedMethod}</span>
                            <img src="src/assets/arrow down.svg" className="h-3" />
                        </div>

                        {isDropdownOpen && (
                            <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-md z-10">
                                {paymentMethods.map((method) => (
                                    <div
                                        key={method}
                                        className="p-3 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setSelectedMethod(method);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {method}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Notes Section */}
                    <div className="mb-6 flex items-center space-x-3 w-full p-4 bg-[#FAFBFD] rounded-xl">
                        <label className="text-gray-700 font-semibold">Notes:</label>
                        <input
                            type="text"
                            className="w-full bg-transparent focus:outline-none border-none"
                        />
                    </div>

                    {/* Transfer Button */}
                    <button className="w-full p-4 text-lg font-bold bg-[#0061FF] hover:bg-blue-700 text-white rounded-xl shadow-md shadow-[#19918F]">
                        Transfer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Topup;