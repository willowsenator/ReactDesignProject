import { Logo } from "./Logo";
import data from "../resources/data.json";

export function Header(){
    return (<div className="my-2 text-dark d-flex justify-content-between">
        <div className="d-flex mx-3">
            <Logo></Logo>
            <p className="fs-4">{data.header.name}</p>
        </div>
        <div>
            {
                data.header.links.map((item, index) => 
                <a key={index} target="_blank" href={item.url} className="mx-3 text-decoration-none">{item.text}</a>)
            }
        </div>
    </div>);
}