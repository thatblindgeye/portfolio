/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import githubDark from "../../assets/images/logos/GitHub-White-Mark-64px.png";
import githubLight from "../../assets/images/logos/GitHub-Black-Mark-64px.png";
import linkedinDark from "../../assets/images/logos/linkedin-white.png";
import linkedinLight from "../../assets/images/logos/linkedin-blue.png";
import emailDark from "../../assets/images/icons/email_white_24dp.png";
import emailLight from "../../assets/images/icons/email_black_24dp.png";

export default function Contact({ theme }) {
  const contacts = [
    {
      url: "https://github.com/thatblindgeye",
      icon: theme === "dark" ? githubDark : githubLight,
      alt: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/ericolkowski/",
      icon: theme === "dark" ? linkedinDark : linkedinLight,
      alt: "LinkedIn",
    },
    {
      url: "mailto:eric.contact@thatblindgeye.dev",
      icon: theme === "dark" ? emailDark : emailLight,
      alt: "Email",
    },
  ];

  return (
    <div className='contact__container'>
      <ul role='list' className='contact__list' aria-label='contact'>
        {contacts.map((contact, index) => {
          const { url, icon, alt } = contact;

          return (
            <li key={index} className='contact__item'>
              <a className='contact__link' href={url}>
                <img className='contact__icon' src={icon} alt={alt} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
