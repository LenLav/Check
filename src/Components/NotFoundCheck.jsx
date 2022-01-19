import '../App.scss';

const NotFoundCheck = () => {
    return(
        <div>

            <div className='check zig-zag' id='error' hidden>
                <div className='error__div' style={{ marginTop: 0}}>
                    <h1 style={{fontWeight: 300, marginTop: 0}}><hr className='hr-dotted'></hr>Чек скоро появится<hr className='hr-dotted'></hr></h1>
                    <p>если адрес указан верно</p>
                </div>
                <button onClick={reload} className="app__button-error">Повторить попытку</button>
            </div>

        </div>
    )
}

export { NotFoundCheck }