import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Main from "../layouts/Main";

import data from "../data/contact";

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  "hi",
  "hello",
  "hola",
  "you-can-email-us-at-literally-anything! Really",
  "well, not anything. But most things",
  "like-this",
  "or-this",
  "but not this :(  ",
  "you.can.also.email.us.with.specific.topics.like",
  "just-saying-hi",
  "i-have-a-question",
  "help",
  "econ",
  "or-I-want-to-join-your-club",
  "We'll-stop-distracting-you-now",
  "thanks",
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const Contact = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <Main>
      <Helmet title="Contact" />
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can email us at: </p>
          <div
            className="inline-container"
            style={validateText(message) ? {} : { color: "red" }}
            onMouseEnter={() => setIsActive(false)}
            onMouseLeave={() => idx < messages.length && setIsActive(true)}
          >
            <a
              href={validateText(message) ? `mailto:${message}@esascu.com` : ""}
            >
              <span>{message}</span>
              <span>@esascu.com</span>
            </a>
          </div>
        </div>
        <a href="http://eepurl.com/g_T2xf">
          <span>Sign up to recieve important club updates!</span>
        </a>
        <ul className="icons">
          <br></br>
          {data.map((s) => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </Main>
  );
};

export default Contact;
