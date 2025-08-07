import React from 'react'
import Button from './Button'

const Main = () => {
    return (
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>The stock prediction application utilizes Machine learning technology , Specially employee keras, and LSTM model,integrated within the django framework.It forecast future stock prediction by 100-days or 200-days moving average , essential indicator widely used by stock analyst to inform trading and investment decisions.</p>
                <Button text='Login' class='btn-outline-info'/>
            </div>
        </div>
    )
}

export default Main