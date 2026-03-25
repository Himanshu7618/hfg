import heroImg from "../assets/hero.jpg"
function Hero(){
    return(
        <section className="h-[70vh] flex flex-col justify-center items-center text-purple-500 bg-cover bg-center bg-gray-100 text-center"
        style={{
            backgroundImage:`url(${heroImg})`
        }}
        >
            <h2 className="text-5xl font-bold mb-4">
                Tasty Food Delivered
            </h2>
            <p className="text-purple-800 mb-4">
                Order your favourite meals anytime
            </p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
                Order Now
            </button>
            
        </section>
    )
}
export default Hero;