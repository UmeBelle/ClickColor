import './Main.css';

function Logo() {
    return (
        <div className="App">
            <header className="App-header">
                <section className="logoWrapper">
                    <section className='appLogo'>
                        <section className="logoSquareOne"></section>
                        <section className="logoSquareTwo"></section>
                        <section className="logoSquareThree"></section>
                        <section className="logoSquareFour"></section>
                    </section>    
                </section>
                <button className='startBtn'>START!</button>
            </header>
        </div>
    );
}

export default Logo;