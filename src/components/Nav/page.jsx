import React from 'react';
import { Home, Wallet, Ticket, User, Pyramid } from 'lucide-react';

const Nav = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full flex justify-around bg-dark-900 py-4 border-t border-transparent">
            <div className="flex flex-col items-center text-brand">
                <Home className="w-5 h-5" />
                <span className="text-xs mt-1">Início</span>
            </div>
            <div className="flex flex-col items-center text-white">
                <Pyramid className="w-5 h-5" />
                <span className="text-xs mt-1">Agência</span>
            </div>
            <div className="flex flex-col items-center text-white">
                <Wallet className="w-5 h-5" />
                <span className="text-xs mt-1">Depósito</span>
            </div>
            <div className="flex flex-col items-center text-white">
                <Ticket className="w-5 h-5" />
                <span className="text-xs mt-1">Check-in</span>
            </div>
            <div className="flex flex-col items-center text-white">
                <User className="w-5 h-5" />
                <span className="text-xs mt-1">Perfil</span>
            </div>
        </div>
    );
};

export default Nav;
