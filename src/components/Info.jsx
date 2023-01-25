import salarAvatar from '../assets/salar.jpeg';

function Info({ fullName, profession, website, email }) {
    return (
        <div className='info'>
            <img src={salarAvatar} alt='Salar Hafezi' className='info__avatar' />
            <h2 className='info__title'>{fullName}</h2>
            <h3 className='info__profession'>{profession}</h3>
            <h4 className='info__website'>
                <a href="https://salar-hafezi.ir" className='info__website__link'>{website}</a>
            </h4>
            <a className='info__email' href={`mailto:${email}`}>
                <img src='/email-icon.svg' alt='Email me' className='info__email__icon' />
                <span className='info__email__text'>Email</span>
            </a>
        </div>
    )
}

export default Info;
