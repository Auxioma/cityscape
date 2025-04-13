import About from "../../components/Pages/Home/About";
import BlogHome from "../../components/Pages/Home/BlogHome";
import CounterHome from "../../components/Pages/Home/CounterHome";
import MessageHome from "../../components/Pages/Home/MessageHome";
import PortFollioHome from "../../components/Pages/Home/PortFollioHome";
import PropertyHome from "../../components/Pages/Home/property";
import PropertyHomeStart from "../../components/Pages/Home/PropertyHomeStart";
import Slider from "../../components/Pages/Home/Slider";
import TestimonialHome from "../../components/Pages/Home/TestimonialHome";

function Home () {
    return (
        <>
        <Slider />
        <About />
        <PropertyHome />
        <PropertyHomeStart />
        <CounterHome />
        <MessageHome />
        <PortFollioHome />
        <TestimonialHome />
        <BlogHome />
        </>
    )
}

export default Home;