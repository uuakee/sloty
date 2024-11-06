import { Menu } from "lucide-react";
import logoDefault from "../../assets/sloty-default.svg";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-dark-900">
            <div className="mx-4 flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                <Menu className="text-white"/>
                <img src={logoDefault} width="102" alt="logo" />
                </div>
                <div className="flex gap-2">
                    <button
                    className="text-white">
                        Acesse
                    </button>
                    <button
                    className="text-dark bg-brand font-medium px-3 py-2 rounded-lg shadow-md shadow-brand"
                    >
                        Seja membro
                    </button>
                </div>
            </div>
            
        </header>
    )
}

export default Header