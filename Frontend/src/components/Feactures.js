import React from 'react'

const Feactures = () => {

    const feactureData = [
        {
            iconClass:'fa-solid fa-truck-moving',
            name:'Free Shipping',
            feacture:'On all orders of $150'

        },
        {
            iconClass:"fa-solid fa-headphones",
            name:'24/7 Support',
            feacture:'Get help when you need'

        },        {
            iconClass:"fa-solid fa-arrows-rotate",
            name:'100% Money Back',
            feacture:'30 day money back gaurntee'

        }
    
    ]
    return (
        <div>
            <div className='feactures'>
                {feactureData.map((data, index) =>(
                    
                <div key = {index} className='feacture-card'>
                    <div className='icon'>
                        <i className= {data.iconClass}></i>
                    </div>
                    <div className='feacture-content'>        
                        <h5>{data.name}</h5>
                        <p>{data.feacture}</p>
                    </div>
                    {index !== feactureData.length - 1 && <span></span>}

                </div>
            ))}

            </div>
        </div>
    )
}

export default Feactures