import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            {/* check w-full */}
            <h1 className="head_text text-center">
                quotes
                <br className="max-md:hidden" />
                <span className="green_gradient text-center">sharing</span>
            </h1>
            <p className="desc text-center">
                quest-for-quotes is platform to share quotes / dialogue from novels
                that spoke to you meaningfully
            </p>
        </section>
    )
}

export default Home