const NotFoundCheck = () => {
    
    return(
        // <div>
            <div className='error__div check zig-zag' >
                <h1 style={{fontWeight: 300, marginTop: 0}}><hr className='hr-dotted'></hr>Чек скоро появится<hr className='hr-dotted'></hr></h1>
                <p>если адрес указан верно</p>

                <button onClick={() => window.location.reload()} className="app__button-error">Повторить попытку</button>
            </div>            
        // </div>
    )
}

export { NotFoundCheck }