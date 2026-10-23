"use client";

import {
    useEffect,
    useId,
    useRef,
    useState,
    type FormEvent,
} from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { MessageCircle, Send, X } from "lucide-react";

type Message = {
    id: string;
    sender: "visitor" | "support";
    text: string;
};

const inputClass =
    "w-full rounded-xl border border-line bg-background px-3.5 py-3 text-sm text-heading placeholder:text-body/60 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus:border-primary dark:focus:border-[#71bbaa] transition-colors";

export default function SupportChat() {
    const chatId = useId();
    const reduceMotion = useReducedMotion();

    const [isOpen, setIsOpen] = useState(false);
    const [started, setStarted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [draft, setDraft] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const launcherRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);

    function closeChat() {
        setIsOpen(false);
        launcherRef.current?.focus();
    }

    useEffect(() => {
        if (!isOpen) return;

        panelRef.current?.focus();
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !started) return;

        const history = historyRef.current;

        if (history) {
            history.scrollTop = history.scrollHeight;
        }
    }, [isOpen, started, messages]);

    function startChat(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const visitorName = name.trim();

        setMessages([
            {
                id: "welcome",
                sender: "support",
                text: `${
                    visitorName ? `Hi ${visitorName}!` : "Hi there!"
                } Welcome to Dhopkol. Tell us about your project or how we can help.`,
            },
        ]);

        setStarted(true);
    }

    function sendMessage(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const text = draft.trim();

        if (!text) return;

        setMessages((current) => [
            ...current,
            {
                id: crypto.randomUUID(),
                sender: "visitor",
                text,
            },
        ]);

        setDraft("");
        messageRef.current?.focus();
    }

    return (
        <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[60] sm:right-6 sm:bottom-6">
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        ref={panelRef}
                        id={chatId}
                        role="dialog"
                        aria-modal="false"
                        aria-labelledby={`${chatId}-title`}
                        aria-describedby={`${chatId}-description`}
                        tabIndex={-1}
                        initial={{
                            opacity: 0,
                            y: reduceMotion ? 0 : 18,
                            scale: reduceMotion ? 1 : 0.97,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: reduceMotion ? 0 : 12,
                            scale: reduceMotion ? 1 : 0.98,
                        }}
                        transition={{
                            duration: reduceMotion ? 0 : 0.25,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        onKeyDown={(event) => {
                            if (event.key === "Escape") {
                                event.stopPropagation();
                                closeChat();
                            }
                        }}
                        className="absolute right-0 bottom-[72px] flex h-[520px] max-h-[calc(100dvh-112px-env(safe-area-inset-bottom))] w-[calc(100vw-2rem)] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-line bg-background shadow-[0_20px_70px_-20px_rgba(0,0,0,0.4)] outline-none focus-visible:outline-none sm:w-[370px]"
                    >
                        {/* Header */}
                        <div className="flex shrink-0 items-center gap-3 bg-linear-to-r from-[#2a6b9b] to-[#5089a3] px-5 py-4 text-white">
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                                <MessageCircle
                                    size={20}
                                    aria-hidden="true"
                                />
                            </span>

                            <div className="min-w-0 flex-1">
                                <h2
                                    id={`${chatId}-title`}
                                    className="text-sm font-semibold tracking-normal text-white"
                                >
                                    Dhopkol Support
                                </h2>

                                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/80">
                                    <span
                                        aria-hidden="true"
                                        className="size-1.5 rounded-full bg-amber-200"
                                    />
                                    Frontend preview
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={closeChat}
                                aria-label="Close support chat"
                                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-white"
                            >
                                <X size={18} aria-hidden="true" />
                            </button>
                        </div>

                        <p
                            id={`${chatId}-description`}
                            className="shrink-0 border-b border-line bg-surface px-5 py-2.5 text-[11px] leading-5 text-body"
                        >
                            Demo chat — messages stay on this page and
                            are not sent to our team.
                        </p>

                        {!started ? (
                            <>
                                {/* Visitor details */}
                                <form
                                    onSubmit={startChat}
                                    className="space-y-3 border-b border-line p-5"
                                >
                                    <p className="text-xs leading-6 text-body">
                                        Let us know who you are (optional)
                                    </p>

                                    <div>
                                        <label
                                            htmlFor={`${chatId}-name`}
                                            className="sr-only"
                                        >
                                            Your name
                                        </label>

                                        <input
                                            id={`${chatId}-name`}
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Your name"
                                            maxLength={80}
                                            value={name}
                                            onChange={(event) =>
                                                setName(event.target.value)
                                            }
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor={`${chatId}-email`}
                                            className="sr-only"
                                        >
                                            Your email
                                        </label>

                                        <input
                                            id={`${chatId}-email`}
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="Your email"
                                            maxLength={254}
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            className={inputClass}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#2a6b9b] to-[#5089a3] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    >
                                        Start Chat

                                        <MessageCircle
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </form>

                                <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 py-6 text-center">
                                    <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/8 text-primary dark:text-[#86b6cb]">
                                        <MessageCircle
                                            size={26}
                                            strokeWidth={1.5}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <p className="text-sm font-medium text-heading">
                                        Let’s talk about your ideas
                                    </p>

                                    <p className="max-w-[240px] text-xs leading-6 text-body">
                                        Have a project in mind or need IT
                                        support? Start a conversation.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Conversation */}
                                <div
                                    ref={historyRef}
                                    data-lenis-prevent
                                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4"
                                >
                                    <div
                                        role="log"
                                        aria-label="Support conversation"
                                        aria-live="polite"
                                        aria-relevant="additions"
                                        className="space-y-4"
                                    >
                                        {messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`flex ${
                                                    message.sender ===
                                                    "visitor"
                                                        ? "justify-end"
                                                        : "justify-start"
                                                }`}
                                            >
                                                <div className="max-w-[85%]">
                                                    <p
                                                        className={`mb-1 text-[10px] text-body ${
                                                            message.sender ===
                                                            "visitor"
                                                                ? "text-right"
                                                                : ""
                                                        }`}
                                                    >
                                                        {message.sender ===
                                                        "visitor"
                                                            ? "You"
                                                            : "Demo welcome"}
                                                    </p>

                                                    <p
                                                        className={`rounded-2xl px-3.5 py-2.5 text-sm leading-6 whitespace-pre-wrap wrap-anywhere ${
                                                            message.sender ===
                                                            "visitor"
                                                                ? "rounded-br-md bg-[#2a6b9b] text-white"
                                                                : "rounded-bl-md border border-line bg-surface text-heading"
                                                        }`}
                                                    >
                                                        {message.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Message composer */}
                                <form
                                    onSubmit={sendMessage}
                                    className="flex shrink-0 items-center gap-2 border-t border-line bg-background p-3"
                                >
                                    <label
                                        htmlFor={`${chatId}-message`}
                                        className="sr-only"
                                    >
                                        Your message
                                    </label>

                                    <input
                                        ref={messageRef}
                                        id={`${chatId}-message`}
                                        name="message"
                                        type="text"
                                        placeholder="Write a message..."
                                        autoComplete="off"
                                        maxLength={2000}
                                        value={draft}
                                        onChange={(event) =>
                                            setDraft(event.target.value)
                                        }
                                        className={`${inputClass} min-w-0 flex-1`}
                                    />

                                    <button
                                        type="submit"
                                        disabled={!draft.trim()}
                                        aria-label="Send demo message"
                                        className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#2a6b9b] text-white transition-colors hover:bg-[#20557e] disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <Send
                                            size={17}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </form>
                            </>
                        )}

                        <div className="shrink-0 border-t border-line bg-surface px-4 py-2 text-center text-[10px] text-body">
                            Powered by Dhopkol
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating launcher */}
            <button
                ref={launcherRef}
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                aria-label={
                    isOpen ? "Close support chat" : "Open support chat"
                }
                aria-expanded={isOpen}
                aria-controls={isOpen ? chatId : undefined}
                aria-haspopup="dialog"
                className="flex size-14 items-center justify-center rounded-full bg-linear-to-br from-[#2a6b9b] to-[#5089a3] text-white shadow-lg transition-transform duration-200 hover:scale-105 motion-reduce:transform-none"
            >
                {isOpen ? (
                    <X size={23} aria-hidden="true" />
                ) : (
                    <MessageCircle size={24} aria-hidden="true" />
                )}
            </button>
        </div>
    );
}