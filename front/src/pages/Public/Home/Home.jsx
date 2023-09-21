import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import datafeatures from "@/assets/api/featuresinfo.json";

const Home = () => {
    return (
        <div>
            <Hero />
            <section className='features'>
            {
                datafeatures.map((value) =>
                <Features key={value.id} image={value.image} alt={value.alt} title={value.title} description={value.content} />
                )
            }
            </section>
        </div>
    );
};

export default Home;