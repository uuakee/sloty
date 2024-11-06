import React, { useEffect, useRef } from 'react';
import Header from './components/Header/page';
import './App.css';
import { Search } from 'lucide-react';
import Nav from './components/Nav/page';

function App() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Header />
            <Nav />
            <div
                ref={carouselRef}
                className="mt-20 mx-4 rounded-lg overflow-x-auto flex scrollbar-hide"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                <img src="/banner-default.gif" alt="banner" className="carousel-image w-full h-auto object-cover" style={{ scrollSnapAlign: 'center' }} />
                <img src="/banner-default.gif" alt="banner" className="carousel-image w-full h-auto object-cover" style={{ scrollSnapAlign: 'center' }} />
                <img src="/banner-default.gif" alt="banner" className="carousel-image w-full h-auto object-cover" style={{ scrollSnapAlign: 'center' }} />
            </div>

            {/* Barra de navegação de categorias com rolagem horizontal */}
            <div className="flex items-center mt-4 mx-4">
                <button className="text-white flex items-center justify-center bg-dark-900 p-2 rounded-lg mr-2">
                    <Search className="text-white w-4" />
                </button>
                <div className="flex-1 overflow-x-auto scrollbar-hide">
                    <nav className="flex scrollbar-hide whitespace-nowrap gap-6 whitespace-nowrap bg-[#111] py-3 px-4 rounded-lg text-[14px]">
                        <span className="text-lime-400 font-semibold cursor-pointer relative">
                            Todos jogos
                            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-lime-400"></span>
                        </span>
                        <span className="text-white font-medium cursor-pointer">Novos</span>
                        <span className="text-white font-medium cursor-pointer">PG Soft</span>
                        <span className="text-white font-medium cursor-pointer">Ao Vivo</span>
                        <span className="text-white font-medium cursor-pointer">Casino</span>
                        <span className="text-white font-medium cursor-pointer">E-sports</span>
                        <span className="text-white font-medium cursor-pointer">Futebol</span>
                    </nav>
                </div>
            </div>

            {/* Jogos Populares */}
            <div>
                <div className="mt-8 mx-4">
                    <h2 className="text-white font-semibold text-lg">Jogos Populares</h2>
                </div>
                <div className="mt-4 mx-4 grid grid-cols-3 gap-4">
                    <img src="/game1.png" alt="Game 1" className="rounded-lg shadow-lg" />
                    <img src="/game2.png" alt="Game 2" className="rounded-lg shadow-lg" />
                    <img src="/game3.png" alt="Game 3" className="rounded-lg shadow-lg" />
                    <img src="/game4.png" alt="Game 4" className="rounded-lg shadow-lg" />
                    <img src="/game5.png" alt="Game 5" className="rounded-lg shadow-lg" />
                    <img src="/game6.png" alt="Game 6" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
}

export default App;
