'use client';

import { useEffect, useRef, useState } from 'react';
import { articleStatus } from '@/data/content';
import { rankArticles } from '@/lib/searchArticles';
import { articleHref, formatDate } from '@/lib/articles';

// AIFA chatbot: a floating assistant on every page.
// Rule-based for now — it answers by searching the site's published fact-checks.
// To connect a real AI service later, replace `getReply` with a call to an API route.

const GREETING = {
  from: 'bot',
  text: "Hi, I'm AIFA. Ask me about a message or claim you've seen, and I'll look for related fact-checks on Sebenarnya.my.",
};

const SUGGESTIONS = ['Bantuan tunai WhatsApp', 'Amaran hujan lebat', 'How do I submit a claim?'];

const DISCLAIMER = 'AIFA helps you find published information. It is not the final authority on whether a claim is true.';

const has = (text, words) => words.some((w) => text.includes(w));

function getReply(input) {
  const text = input.toLowerCase();

  if (/^(hi|hello|hey|hai|helo|salam|assalamualaikum)\b/.test(text)) {
    return { text: 'Hello! Type a few keywords from the message or claim you want to check.' };
  }

  if (has(text, ['submit', 'report', 'lapor', 'hantar', 'aduan'])) {
    return {
      text: "If you can't find a fact-check, send the claim to our team and they'll verify it.",
      links: [{ label: 'Submit a claim', href: '/submit-claim/' }],
    };
  }

  if (has(text, ['thank', 'terima kasih', 'tq'])) {
    return { text: "You're welcome. Remember to check before you share!" };
  }

  const found = rankArticles(input);
  if (found.length) {
    return {
      text: found.length === 1 ? 'I found a related fact-check:' : `I found ${found.length} related fact-checks:`,
      articles: found,
    };
  }

  return {
    text: "I couldn't find a published fact-check on that yet. Try other keywords, browse all fact-checks, or submit the claim for checking.",
    links: [
      { label: 'Browse fact-checks', href: '/article/' },
      { label: 'Submit a claim', href: '/submit-claim/' },
    ],
  };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const toggleRef = useRef(null);
  const timer = useRef(null);

  // Focus the input when opened; close on Escape
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Keep the newest message in view
  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const send = (value) => {
    const question = value.trim();
    if (!question || typing) return;
    setMessages((m) => [...m, { from: 'user', text: question }]);
    setInput('');
    setTyping(true);
    // Short pause so the reply doesn't feel instant/robotic
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', ...getReply(question) }]);
      setTyping(false);
    }, 600);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className={open ? 'aifa open' : 'aifa'}>
      <section id="aifa-panel" className="aifa-panel" role="dialog" aria-label="AIFA Chatbot" hidden={!open}>
        <header className="aifa-head">
          <span className="aifa-avatar" aria-hidden="true">AI</span>
          <div className="aifa-title">
            <strong>AIFA Chatbot</strong>
            <span>Smart fact assistant</span>
          </div>
          <button
            type="button"
            className="aifa-close"
            aria-label="Close chat"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="aifa-log" ref={logRef} role="log" aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`aifa-msg ${m.from}`}>
              <p>{m.text}</p>

              {m.articles && (
                <ul className="aifa-results">
                  {m.articles.map((a) => (
                    <li key={a.slug}>
                      <a href={articleHref(a)}>
                        <span className="aifa-status" style={{ '--status': articleStatus[a.status].color }}>
                          {articleStatus[a.status].label}
                        </span>
                        <span className="aifa-result-title">{a.title}</span>
                        <span className="aifa-result-date">{formatDate(a.date)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {m.links && (
                <div className="aifa-links">
                  {m.links.map((l) => (
                    <a key={l.href} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {typing && (
            <div className="aifa-msg bot aifa-typing" aria-label="AIFA is typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        {messages.length === 1 && (
          <div className="aifa-suggest">
            {SUGGESTIONS.map((s) => (
              <button key={s} type="button" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <form className="aifa-form" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about a claim…"
            aria-label="Message AIFA"
            maxLength={300}
          />
          <button type="submit" aria-label="Send" disabled={!input.trim() || typing}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M4 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>

        <p className="aifa-note">{DISCLAIMER}</p>
      </section>

      <button
        ref={toggleRef}
        type="button"
        className="aifa-toggle"
        aria-label={open ? 'Close AIFA Chatbot' : 'Open AIFA Chatbot'}
        aria-expanded={open}
        aria-controls="aifa-panel"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M8.5 9.5h7M8.5 12.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className="aifa-toggle-label">Ask AIFA</span>
          </>
        )}
      </button>
    </div>
  );
}
