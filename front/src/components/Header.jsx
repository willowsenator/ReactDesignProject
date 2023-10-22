import { Logo } from "./Logo";
import data from "../resources/data.json";

export function Header(){
    return (<div className="my-2 text-dark d-flex justify-content-between">
        <div className="d-flex">
            <Logo></Logo>
            <p className="fs-1">{data.header.name}</p>
        </div>
        <div>
            {
                data.header.links.map((item, index) => 
                <a key={index} href={item.url} className="mx-3 text-decoration-none">{item.text}</a>)
            }
        </div>
    </div>);
}