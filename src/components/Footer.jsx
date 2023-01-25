function Footer({ socialHandles }) {

    return (
        <footer className="footer">
            <section className="footer__social-icons">
                {socialHandles.map(({ iconUrl, title, url, }) => (
                    <a key={title} href={url} target='_blank'>
                        <img src={iconUrl} alt={title} />
                    </a>
                ))}
            </section>
        </footer>
    );
}

export default Footer;
