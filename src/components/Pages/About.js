import React, { useEffect } from 'react';
import Skills from '../Skills/Skills';
import aboutPhoto from '../../assets/images/about-photo.jpg';

export default function About() {
    useEffect(() => {
        document.title = 'About | Eric Olkowski';
    }, []);

    return (
        <>
            <h1 className='page__header'>About</h1>
            <div className='about-container'>
                <section className='about__section'>
                    <h2 className='about__title'>Who I Am</h2>
                    <div className='about__content'>
                        <div className='about__side'>
                            <div className='about__photo-container'>
                                <img
                                    className='about__photo elevation--02dp'
                                    src={aboutPhoto}
                                    alt='Eric Olkowski'
                                />
                            </div>
                            <div className='about__pronouns'>he/him</div>
                        </div>
                        <div className='about__main'>
                            <p>
                                I'm a Front-End Developer that is dedicated to
                                creating websites and apps that are as
                                accessible, responsive, and semantically correct
                                as possible.
                            </p>
                            <p>
                                I was born with an eye disease called Retinitis
                                Pigmentosa, which has affected my night and
                                peripheral vision, and has caused deteriorating
                                vision loss overall. While not completely blind
                                currently, I began using the "thatblindgeye"
                                moniker in social media and other mediums as a
                                means of overcoming the power I used to feel the
                                disease had over me.
                            </p>
                            <p>
                                In September 2020, I started my journey to
                                become a developer by going through{' '}
                                <a
                                    className='link'
                                    href='https://www.theodinproject.com'
                                >
                                    The Odin Project
                                </a>
                                , an open-source curriculum that helps people
                                self-learn how to become a programmer via web
                                development. Thanks to their amazing,
                                project-based curriculum, I not only discovered
                                a set of skills I'm passionate about putting to
                                use, but I learned how to better use my eye
                                disease as a strength for myself and others.
                            </p>
                            <p>
                                In September 2021, I was invited to become one
                                of The Odin Project's maintainers, with the
                                purpose of the role being to moderate their
                                Discord server as well as manage issues and PR's
                                on the community's GitHub repositories.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='about__section'>
                    <h2 className='about__title'>What I Do</h2>
                    <div className='about__content'>
                        <div className='about__side'>
                            <Skills />
                        </div>
                        <div className='about__main'>
                            <p>
                                In addition to my skills as Front-End Developer,
                                I also:{' '}
                            </p>
                            <ul className='about__list'>
                                <li className='list-item--bullet'>
                                    Aid other members on The Odin Project's
                                    Discord server
                                </li>
                                <li className='list-item--bullet'>
                                    Enjoy reading and learning from books on
                                    programming, including You Don't Know
                                    JavaScript Yet
                                </li>
                                <li className='list-item--bullet'>
                                    Play and run TTRPG's such as Dungeons &
                                    Dragons, including homebrew content I
                                    created based on the animated TV shows
                                    Avatar: The Last Airbender and The Legend of
                                    Korra{' '}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='about__section'>
                    <h2 className='about__title'>Where I'll Be</h2>
                    <div className='about__content'>
                        <div className='about__main'>
                            <p>
                                Whenever someone used to ask,{' '}
                                <q>where do you see yourself in X years?</q>, my
                                response would tend to be in an "I hope to
                                be..." tone. Since starting my journey to become
                                a developer, I'm able to answer this sort of
                                question with complete confidence.
                            </p>

                            <p>
                                I'm going to become a Full-Stack Developer, as
                                well as further help others implement
                                accessibility in their own work.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
