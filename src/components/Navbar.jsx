import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavIcon = ({ id }) => {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (id === "home") return <svg {...common}><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" /><path d="M9 21v-6h6v6" /></svg>;
  if (id === "features") return <svg {...common}><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><path d="M14 17h6M17 14v6" /></svg>;
  if (id === "product") return <svg {...common}><path d="M4 18.5 9 13l3 3 8-9" /><path d="M16 7h4v4" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="M4.6 9h14.8M4.6 15h14.8M12 4c2.1 2.2 3.2 4.9 3.2 8S14.1 17.8 12 20c-2.1-2.2-3.2-4.9-3.2-8S9.9 6.2 12 4Z" /></svg>;
};

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const selectLink = (title) => { setActive(title); setToggle(false); };

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-cyan-300/10 bg-[#020611]/95 sm:border-transparent sm:bg-transparent">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-5 sm:px-16 sm:py-6">
        <img src={logo} alt="CTO Web" className="h-[44px] w-[150px] object-contain object-left" />
        <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins cursor-pointer text-[16px] font-normal ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`} onClick={() => selectLink(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="relative z-[110] flex flex-1 items-center justify-end sm:hidden">
          <button type="button" aria-label={toggle ? "Cerrar menú" : "Abrir menú"} aria-expanded={toggle} className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/15 bg-white/[0.03] text-white transition hover:border-cyan-300/45" onClick={() => setToggle((value) => !value)}>
            <img src={toggle ? close : menu} alt="" className="h-[25px] w-[25px] object-contain" />
          </button>
          <div className={`${toggle ? "flex" : "hidden"} fixed inset-x-0 bottom-0 z-[120] border-t border-cyan-200/20 bg-[#07101f]/95 px-4 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-16px_42px_rgba(0,0,0,0.4),0_0_25px_rgba(15,218,234,0.1)] backdrop-blur-2xl`}>
            <ul className="grid w-full grid-cols-4 gap-2 list-none">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a href={`#${nav.id}`} aria-label={nav.title} onClick={() => selectLink(nav.title)} className={`flex items-center justify-center rounded-xl py-1.5 transition ${active === nav.title ? "bg-cyan-300/10 text-cyan-100" : "text-dimWhite hover:bg-white/[0.06] hover:text-white"}`}>
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-200"><NavIcon id={nav.id} /></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
