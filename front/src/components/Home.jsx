import { Carousel } from "./Carousel";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Prices } from "./Prices";

export function Home(){
    return (<div>
        <Header></Header>
        <Carousel></Carousel>
        <Prices></Prices>
        <Footer></Footer>
    </div>);
}