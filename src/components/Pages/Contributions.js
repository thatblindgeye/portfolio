import React, { useEffect } from 'react';
import work from '../../work.json';

function ContributionCard({ contribution }) {
    const { name, contributee, link, description, accomplishments } =
        contribution;
    return (
        <div className='contribution__card card elevation--01dp'>
            <h2 className='contribution__name'>
                <a className='link' href={link}>
                    {name}
                </a>
                {contributee ? (
                    <div className='contribution__contributee'>
                        {contributee}
                    </div>
                ) : null}
            </h2>
            <div className='contribution__description'>{description}</div>
            {accomplishments.length ? (
                <ul className='contribution__list'>
                    {accomplishments.map((item, index) => {
                        return (
                            <li key={index} className='list-item--bullet'>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
}

export default function Contributions() {
    const contributions = work.contributions;

    useEffect(() => {
        document.title = 'Contributions | Eric Olkowski';
    }, []);

    return (
        <>
            <h1 className='page__header'>Contributions</h1>
            <div className='contributions-container'>
                {contributions.map((contribution, index) => {
                    return (
                        <ContributionCard
                            key={index}
                            contribution={contribution}
                        />
                    );
                })}
                <div className='contribution__card card elevation--01dp'>
                    <h2 className='contribution__name'>
                        Additional Contributions
                    </h2>

                    <ul className='contribution__list'>
                        <li className='list-item--bullet'>
                            Conducted an accessibility audit and opened issues
                            for the{' '}
                            <a
                                className='link'
                                href='https://github.com/hhhrrrttt222111/developer-portfolio'
                            >
                                Developer Portfolio
                            </a>{' '}
                            and{' '}
                            <a
                                className='link'
                                href='https://github.com/yashchaudhari008/drawit'
                            >
                                Drawit
                            </a>{' '}
                            repositories, in addition to submitting PR's to fix
                            some of the issues, as part of Hacktoberfest 2021.
                            This process included looking into the documentation
                            for and utilizing styled-components, Material-UI,
                            and P5.js.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
