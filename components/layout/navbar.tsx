"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
    ArrowRight,
    ArrowUpRight,
    ChevronDown,
    CodeXml,
    Headset,
    Layers3,
    Menu,
    Monitor,
    X,
} from "lucide-react";

import ThemeToggle from "@/components/theme-toggle";

/* Navigation */

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Technologies", href: "/technologies" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blogs" },
    { name: "Careers", href: "/careers" },
];

const services = [
    {
        name: "Web Development",
        description: "Fast, accessible websites built to perform.",
        href: "/services/web-development",
        icon: Monitor,
    },
    {
        name: "Software Development",
        description: "Custom solutions for your business.",
        href: "/services/software-development",
        icon: Layers3,
    },
    {
        name: "IT Support",
        description: "Reliable support to keep you running.",
        href: "/services/it-support",
        icon: Headset,
    },
];

/* Navbar */

export default function Navbar() {
    const pathname = usePathname();

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const servicesRef = useRef<HTMLDivElement>(null);
    const servicesButtonRef = useRef<HTMLButtonElement>(null);
    const drawerRef = useRef<HTMLDialogElement>(null);
    const mobileServicesRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 20);
        }

        function handlePointerDown(event: PointerEvent) {
            if (
                event.target instanceof Node &&
                !servicesRef.current?.contains(event.target)
            ) {
                setServicesOpen(false);
            }
        }

        function handleResize() {
            if (window.innerWidth >= 1280) {
                setMobileOpen(false);
            } else {
                setServicesOpen(false);
            }
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);
        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, []);

    useEffect(() => {
        const drawer = drawerRef.current;

        if (!drawer || !mobileOpen) return;

        drawer.showModal();

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            drawer.close();
            document.body.style.overflow = previousOverflow;

            if (mobileServicesRef.current) {
                mobileServicesRef.current.open = false;
            }
        };
    }, [mobileOpen]);

    function closeMenus() {
        setMobileOpen(false);
        setServicesOpen(false);
    }

    function isActive(href: string) {
        return href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);
    }

    function desktopLinkClass(href: string) {
        return `group relative inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium transition-colors hover:text-heading ${
            isActive(href) ? "text-primary" : "text-body"
        }`;
    }

    function underlineClass(active: boolean) {
        return `absolute right-3 bottom-0 left-3 h-0.5 rounded-full bg-primary transition-transform ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`;
    }

    function mobileLinkClass(href: string) {
        return `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-surface hover:text-primary ${
            isActive(href)
                ? "bg-primary/10 text-primary"
                : "text-heading"
        }`;
    }

    const solidHeader = scrolled || mobileOpen || pathname !== "/";

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
                    solidHeader
                        ? "border-line bg-background/95 shadow-sm backdrop-blur-xl"
                        : "border-transparent bg-transparent"
                }`}
            >
                <div className="site-container">
                    <div className="flex h-20 items-center justify-between gap-4">
                        {/* Brand */}
                        <Link
                            href="/"
                            onClick={closeMenus}
                            aria-label="Dhopkol home"
                            className="group flex shrink-0 items-center gap-2.5"
                        >
                            <span className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                                <CodeXml size={22} aria-hidden="true" />
                            </span>

                            <span className="text-[23px] font-bold tracking-[-0.06em] text-heading">
                                dhopkol<span className="text-primary">.</span>
                            </span>
                        </Link>

                        {/* Desktop navigation */}
                        <nav
                            aria-label="Main navigation"
                            className="hidden items-center gap-1 xl:flex"
                        >
                            <Link
                                href="/"
                                onClick={closeMenus}
                                aria-current={isActive("/") ? "page" : undefined}
                                className={desktopLinkClass("/")}
                            >
                                Home

                                <span
                                    aria-hidden="true"
                                    className={underlineClass(isActive("/"))}
                                />
                            </Link>

                            {/* Services dropdown */}
                            <div
                                ref={servicesRef}
                                className="relative"
                                onPointerEnter={(event) => {
                                    if (event.pointerType === "mouse") {
                                        setServicesOpen(true);
                                    }
                                }}
                                onPointerLeave={(event) => {
                                    if (
                                        event.pointerType === "mouse" &&
                                        !event.currentTarget.contains(
                                            document.activeElement
                                        )
                                    ) {
                                        setServicesOpen(false);
                                    }
                                }}
                                onBlur={(event) => {
                                    if (
                                        !event.currentTarget.contains(
                                            event.relatedTarget as Node | null
                                        )
                                    ) {
                                        setServicesOpen(false);
                                    }
                                }}
                                onKeyDown={(event) => {
                                    if (event.key === "Escape") {
                                        event.preventDefault();
                                        setServicesOpen(false);
                                        servicesButtonRef.current?.focus();
                                    }

                                    if (
                                        event.key === "ArrowDown" &&
                                        event.target === servicesButtonRef.current
                                    ) {
                                        event.preventDefault();
                                        setServicesOpen(true);

                                        requestAnimationFrame(() => {
                                            servicesRef.current
                                                ?.querySelector<HTMLAnchorElement>(
                                                    "#desktop-services a"
                                                )
                                                ?.focus();
                                        });
                                    }
                                }}
                            >
                                <button
                                    ref={servicesButtonRef}
                                    type="button"
                                    aria-expanded={servicesOpen}
                                    aria-controls="desktop-services"
                                    onClick={() =>
                                        setServicesOpen((previous) => !previous)
                                    }
                                    className={desktopLinkClass("/services")}
                                >
                                    Services

                                    <ChevronDown
                                        size={14}
                                        aria-hidden="true"
                                        className={`transition-transform duration-200 ${
                                            servicesOpen ? "rotate-180" : ""
                                        }`}
                                    />

                                    <span
                                        aria-hidden="true"
                                        className={underlineClass(
                                            isActive("/services") || servicesOpen
                                        )}
                                    />
                                </button>

                                {/* Padding bridges the gap for pointer movement */}
                                <div
                                    id="desktop-services"
                                    hidden={!servicesOpen}
                                    className="absolute top-full left-0 w-[360px] pt-5"
                                >
                                    <div className="overflow-hidden rounded-2xl border border-line bg-background shadow-[0_20px_60px_-15px_rgb(0_0_0/0.25)]">
                                        <div className="p-2">
                                            {services.map((service) => {
                                                const Icon = service.icon;

                                                return (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href}
                                                        onClick={closeMenus}
                                                        className="group/service flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                                                    >
                                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-primary">
                                                            <Icon
                                                                size={19}
                                                                aria-hidden="true"
                                                            />
                                                        </span>

                                                        <span className="min-w-0 pt-0.5">
                                                            <span className="block text-sm font-semibold text-heading transition-colors group-hover/service:text-primary">
                                                                {service.name}
                                                            </span>

                                                            <span className="mt-1 block text-xs leading-5 text-body">
                                                                {service.description}
                                                            </span>
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>

                                        <Link
                                            href="/services"
                                            onClick={closeMenus}
                                            className="flex items-center justify-between border-t border-line bg-surface px-5 py-4 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
                                        >
                                            Explore all services
                                            <ArrowRight
                                                size={15}
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenus}
                                    aria-current={
                                        isActive(item.href) ? "page" : undefined
                                    }
                                    className={desktopLinkClass(item.href)}
                                >
                                    {item.name}

                                    <span
                                        aria-hidden="true"
                                        className={underlineClass(
                                            isActive(item.href)
                                        )}
                                    />
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                            <Link
                                href="/contact"
                                onClick={closeMenus}
                                className="hidden text-[13px] font-medium text-body transition-colors hover:text-primary xl:inline-flex"
                            >
                                Contact
                            </Link>

                            <span
                                aria-hidden="true"
                                className="mx-1 hidden h-5 w-px bg-line xl:block"
                            />

                            <ThemeToggle />

                            <div className="hidden sm:block">
                                <Link
                                    href="/contact"
                                    onClick={closeMenus}
                                    className="btn-animated"
                                >
                                    <span className="btn-animated-content">
                                        <span>Start a Project</span>

                                        <ArrowUpRight
                                            size={15}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Link>
                            </div>

                            <button
                                type="button"
                                aria-label="Open navigation"
                                aria-expanded={mobileOpen}
                                aria-controls="mobile-drawer"
                                onClick={() => {
                                    setMobileOpen(true);
                                    setServicesOpen(false);
                                }}
                                className="inline-flex size-11 items-center justify-center rounded-full border border-line text-heading transition-colors hover:bg-surface xl:hidden"
                            >
                                <Menu size={20} aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile drawer */}
            <dialog
                ref={drawerRef}
                id="mobile-drawer"
                aria-labelledby="mobile-drawer-title"
                onCancel={(event) => {
                    event.preventDefault();
                    closeMenus();
                }}
                onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        closeMenus();
                    }
                }}
                className="mobile-drawer m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-transparent p-0 text-heading backdrop:bg-black/45 backdrop:backdrop-blur-sm"
            >
                <div className="mobile-drawer-panel flex h-full w-[min(340px,85vw)] flex-col border-r border-line bg-background shadow-xl">
                    {/* Drawer header */}
                    <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-5">
                        <Link
                            href="/"
                            onClick={closeMenus}
                            aria-label="Dhopkol home"
                            className="flex items-center gap-2.5"
                        >
                            <span className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                                <CodeXml size={22} aria-hidden="true" />
                            </span>

                            <span className="text-[23px] font-bold tracking-[-0.06em]">
                                dhopkol<span className="text-primary">.</span>
                            </span>
                        </Link>

                        <h2 id="mobile-drawer-title" className="sr-only">
                            Main navigation
                        </h2>

                        <button
                            type="button"
                            autoFocus
                            onClick={closeMenus}
                            aria-label="Close navigation"
                            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-heading transition-colors hover:bg-surface"
                        >
                            <X size={20} aria-hidden="true" />
                        </button>
                    </div>

                    {/* Drawer links */}
                    <nav
                        aria-label="Mobile navigation"
                        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-6"
                    >
                        <p className="mb-4 px-4 text-[10px] font-semibold tracking-[0.18em] text-body uppercase">
                            Navigation
                        </p>

                        <div className="space-y-1">
                            <Link
                                href="/"
                                onClick={closeMenus}
                                aria-current={isActive("/") ? "page" : undefined}
                                className={mobileLinkClass("/")}
                            >
                                Home
                            </Link>

                            <details
                                ref={mobileServicesRef}
                                className="group rounded-lg"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-heading hover:bg-surface [&::-webkit-details-marker]:hidden">
                                    Services

                                    <ChevronDown
                                        size={16}
                                        aria-hidden="true"
                                        className="transition-transform group-open:rotate-180"
                                    />
                                </summary>

                                <div className="my-2 ml-4 space-y-1 border-l border-line pl-3">
                                    {services.map((service) => {
                                        const Icon = service.icon;

                                        return (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                onClick={closeMenus}
                                                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-body transition-colors hover:bg-surface hover:text-primary"
                                            >
                                                <Icon
                                                    size={17}
                                                    aria-hidden="true"
                                                    className="shrink-0 text-primary"
                                                />

                                                {service.name}
                                            </Link>
                                        );
                                    })}

                                    <Link
                                        href="/services"
                                        onClick={closeMenus}
                                        className="flex items-center gap-2 px-3 py-3 text-xs font-semibold text-primary"
                                    >
                                        All services
                                        <ArrowRight
                                            size={14}
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>
                            </details>

                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenus}
                                    aria-current={
                                        isActive(item.href) ? "page" : undefined
                                    }
                                    className={mobileLinkClass(item.href)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <Link
                                href="/contact"
                                onClick={closeMenus}
                                aria-current={
                                    isActive("/contact") ? "page" : undefined
                                }
                                className={mobileLinkClass("/contact")}
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>

                    {/* Drawer footer */}
                    <div className="shrink-0 border-t border-line px-5 pt-5 pb-[max(20px,env(safe-area-inset-bottom))]">
                        <div className="mb-5 flex items-center justify-between">
                            <span className="text-sm font-medium text-body">
                                Appearance
                            </span>

                            <ThemeToggle />
                        </div>

                        <Link
                            href="/contact"
                            onClick={closeMenus}
                            className="btn-animated w-full"
                        >
                            <span className="btn-animated-content">
                                <span>Start a Project</span>

                                <ArrowUpRight
                                    size={15}
                                    aria-hidden="true"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </dialog>
        </>
    );
}