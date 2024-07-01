
import PriceTag from "../components/PriceTag";
import TabContent from "../components/HomeComponent/TabContent";

// icons
import { FaAngleDown } from "react-icons/fa6";




export default function HomePage() {
    return <>
                <div className="pt-8 w-[85%] mx-auto">
                    <div className="px-5">
                        <div className="flex gap-3 items-center">
                            <img src="https://app.zerolend.xyz/icons/networks/linea.svg" alt="" className="w-8" />
                            <h1 className="text-white text-3xl font-bold">Linea Market</h1>
                            <FaAngleDown className="text-white text-2xl" />
                        </div>
                        <p className="text-sm text-white opacity-70 font-medium mt-1"> A powerful decentralized lending protocol. Lend/Borrow with high capital efficiency and low interest fees</p>

                        <div className="mt-7 pb-10 flex gap-10">
                            <PriceTag pTitle={"Total market size"} color={"#ffffff96"} pSymbol={"$"} tPrice={"359.20M"} />
                            <PriceTag pTitle={"Total available"} color={"#ffffff96"} pSymbol={"$"} tPrice={"267.20M"} />
                            <PriceTag pTitle={"Total borrows"} color={"#ffffff96"} pSymbol={"$"} tPrice={"91.63M"} />
                            <PriceTag pTitle={"Linea LXP-L Referral Points"} color={"#00ffff"} pSymbol={"0"} tPrice={"Pts"} />
                        </div>
                    </div>
                    <div>
                        <div role="tablist" aria-label="tabs" class="relative w-max  h-12 grid grid-cols-3 items-center px-[3px] bg-gray-500/20 overflow-hidden shadow-2xl shadow-900/20 transition border-lite rounded-sm">
                            <div class="absolute indicator h-11 my-auto top-0 bottom-0 left-0  bg-white shadow-md"></div>
                            <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0" class="relative block h-10 px-2 tab bg-white rounded-sm">
                                <span class="text-[var(--primary-color)] text-sm font-bold">Linea Main Market</span>
                            </button>
                            <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1" class="relative block h-10 px-2 tab rounded-sm">
                                <span class=" text-sm font-bold text-white opacity-40">Crock Market</span>
                            </button>
                            <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1" class="relative block h-10 px-2 tab rounded-sm">
                                <span class=" text-sm font-bold text-white opacity-40">Foxy Market</span>
                            </button>
                        </div>
                        <TabContent />
                    </div>

                </div>

    </>
}