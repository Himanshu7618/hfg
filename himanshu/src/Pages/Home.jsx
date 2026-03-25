import Hero from "../components/Hero"
import Menu from "../components/Menu"
function Home({ cart, setCart}) {
    return (
        <>
        <Hero />
        <Menu cart={cart} setCart={setCart} />
        </>
    )
}
export default Home