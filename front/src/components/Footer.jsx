import data from "../resources/data.json"
function Section({item}){

    return <div>
      <h5>{item.name}</h5>
      <ul className="nav flex-column">
        {item.links.map((item, index) => <li key={`${item.name}_${index}`}>

            <a target="_blank" className="text-decoration-none" href={item.url}>{item.text}</a>
        </li>)}
      </ul>
    </div>;
}
export function Footer(){
    return (<div className="mx-3 d-flex mt-4 justify-content-between">
        <div className="fs-4">
            {data.header.name}
        </div>
        {
            data.footer.map((item, index) => <Section key={`${item.name}_${index}`} item={item}>

            </Section>
           )
        }
    </div>);
}