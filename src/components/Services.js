import Title from "../Title";

const Services = ({ data }) => {
    return (
        <section className="section services" id="services">
            <Title
                title="our"
                subTitle="services"
            ></Title>

            <div className="section-center services-center">
                {
                    data.map((element) => {
                        const {id , icon , title , text} = element;
                        return (
                            <article className="service" key={id}>
                                <span className="service-icon">
                                    <i className={icon}></i>
                                </span>
                                <div className="service-info">
                                    <h4 className="service-title">{title}</h4>
                                    <p className="service-text">{text}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services;