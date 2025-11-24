import { useState } from "react";
import "./styles/styl-content-home.css"
import isologo from './assets/isologo.svg'

function App() {

    return (
        <>
            <section className="content-home">
                <header>
                    <img src={isologo} alt="Logo" />
                </header>
                <div className="container">
                    <main className="box-main">
                        <div className="box-title">
                            <h1>
                                SEU AMBIENTE DE <br/> PRÁTICA E APRENDIZADO
                            </h1>
                            <p>
                                Um espaço dedicado para você aprender, praticar e desenvolver suas habilidades com apoio e recursos ideais.
                            </p>
                        </div>
                    </main>
                    <div className="box-navegation">
                        <div className="box-itens">
                            <div className="item">
                                <div className="box-item-title">
                                    <h2>PRIMEIRA AULA</h2>
                                </div>
                                <div className="box-item-description">
                                    <div className="line"></div>
                                    <p>
                                        Um espaço dedicado para você aprender, praticar e desenvolver suas habilidades com apoio e recursos ideais.
                                    </p>
                                </div>
                                <div className="box-item-buttons">
                                    <button>Acessar</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box-item-title">
                                    <h2>PRIMEIRA AULA</h2>
                                </div>
                                <div className="box-item-description">
                                    <div className="line"></div>
                                    <p>
                                        Um espaço dedicado para você aprender, praticar e desenvolver suas habilidades com apoio e recursos ideais.
                                    </p>
                                </div>
                                <div className="box-item-buttons">
                                    <button>Acessar</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box-item-title">
                                    <h2>PRIMEIRA AULA</h2>
                                </div>
                                <div className="box-item-description">
                                    <div className="line"></div>
                                    <p>
                                        Um espaço dedicado para você aprender, praticar e 
                                    </p>
                                </div>
                                <div className="box-item-buttons">
                                    <button>Acessar</button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box-item-title">
                                    <h2>PRIMEIRA AULA</h2>
                                </div>
                                <div className="box-item-description">
                                    <div className="line"></div>
                                    <p>
                                        Um espaço dedicado para você aprender, praticar e desenvolver suas habilidades com apoio e recursos ideais.
                                    </p>
                                </div>
                                <div className="box-item-buttons">
                                    <button>Acessar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
