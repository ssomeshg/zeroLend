import Badge from "../Badge";

export default function CryptoTab() {
    return <>
        <div className="grid grid-cols-3 gap-5 ">
            <div className="bg-white rounded-md col-span-2 px-6 py-3">
                <div className="flex justify-between items-center ">
                    <h2 class="text-lg font-semibold text-[var(--secondary-color)]">Reserve status & configuration</h2>

                </div>
                <div className="grid grid-cols-4 mt-10 pb-10 border-b">
                    <div className="col-span-1">
                        <p className="text-sm font-semibold text-[var(--secondary-color)]">Supply Info</p>
                    </div>
                    <div className="col-span-3 grid grid-rows-2 gap-5">
                        <div className="flex gap-10">
                            <div>
                                <p>Total supplied</p>
                                <p className="text-base font-semibold text-[var(--primary-color)]">22.92K</p>
                                <p className="text-xs font-medium text-[var(--secondary-color)]">$79.20M</p>
                            </div>
                            <div>
                                <p>Total supplied</p>
                                <p className="text-base font-semibold text-[var(--primary-color)]">2.59%</p>
                                <p className="text-xs font-medium text-[var(--secondary-color)]">0.23%</p>
                                <Badge title={"2x Gravity Points"} />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--secondary-color)]">Collateral usage</p>
                            <div className="flex flex-wrap gap-4 text-sm mt-3">
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-4 mt-10 pb-10 border-b">
                    <div className="col-span-1">
                        <p className="text-sm font-semibold text-[var(--secondary-color)]">Borrow info</p>
                    </div>
                    <div className="col-span-3 grid grid-rows-2 gap-5">
                        <div className="flex gap-10">
                            <div>
                                <p>Total supplied</p>
                                <p className="text-base font-semibold text-[var(--primary-color)]">22.92K</p>
                                <p className="text-xs font-medium text-[var(--secondary-color)]">$79.20M</p>
                            </div>
                            <div>
                                <p>Total supplied</p>
                                <p className="text-base font-semibold text-[var(--primary-color)]">2.59%</p>
                                <p className="text-xs font-medium text-[var(--secondary-color)]">0.23%</p>
                                <Badge title={"2x Gravity Points"} />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--secondary-color)]">Collector Info</p>
                            <div className="flex flex-wrap gap-4 text-sm mt-3">
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-span-1  rounded-md h-full">
                <div className="bg-white px-6 py-3">
                    <h2 class="text-lg font-semibold text-[var(--secondary-color)]">Your info</h2>
                    <div className="mt-10">
                        <p>Please connect a wallet to view your personal information here.</p>

                        <div className="mt-10">
                            <button className="bg-[var(--primary-color)] py-2  px-3 rounded-md text-white font-medium text-sm flex gap-1 items-center">Connect Wallet</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}