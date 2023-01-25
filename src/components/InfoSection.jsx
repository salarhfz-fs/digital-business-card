function InfoSection({ desc, title }) {
    return (
        <section className='info-section'>
            <h2 className='info-section__title'>{title}</h2>
            <p className='info-section__desc'>{desc}</p>
        </section>
    );
}

export default InfoSection;
