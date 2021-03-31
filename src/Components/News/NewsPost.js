import React from 'react';
import '../Global/Brush.css'
export default function NewsPost() {
    const test = () => {
        console.log('haha')
    }
    return (
        <div className="brush container-fluid " style={{backgroundImage:`url(./img/section-bg.png)`}}>
            <div className="bg-brush-top" style={{ backgroundImage: "url(./img/brush-dec.png)" }}></div>
        
            <div className="container ">
            <div className="foodlist_content row m-auto pb-5">
                <div className="col-md-8">
                    <h2>The Secret Ingredient</h2>       
                    <button onClick={()=>test()}>asdasd</button>
                </div>
                <div className="col-4">
asdasd  
                </div>
            </div>
            </div>

            <div
                style={{ backgroundImage: "url(./img/brush-dec_2.png)", height: 50 }}
                className="bg-brush-bottom"
            ></div>
        </div>
    )
}
