import data from "../resources/data.json"

function PriceCard({item}){
    return <div className="card w-100 m-2">
        <div className="card-header">
            <h4>{item.title}</h4>
        </div>
        <div className="card-body">
            <h5 class="card-title">{item.price}</h5>
            <h3 className="card-text">{item.by}</h3>
            <ul className="list-unstyled">
                {
                    item.features.map((item, index)=>(<li key={index} className="mt-1">
                        {item}
                    </li>))
                }
            </ul>
            <button className="btn btn btn-lg w-100 btn-outline-primary">{item.textButton}</button>
        </div>
    </div>;
}

export function Prices(){
    return (<div className="my-6 d-flex justify-content-between">
        {
            data.prices.map((item,index) => (
            <PriceCard key={`${item.title}_${index}`} item={item}></PriceCard>))
        }
    </div>);
}