"use client";
import { useState } from "react";
import { Menu, X, Zap, ArrowRight, Globe, ShoppingCart, Smartphone, Palette, Search, Rocket, ArrowUpRight, Phone, Mail, MapPin, Send, CheckCircle, Cpu, ShieldCheck, Timer, Sparkles, Orbit } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [wa, setWa] = useState("");
  const [msg, setMsg] = useState("");

  const MON_NUMERO = "242065646577";
  const MON_EMAIL = "gyllmagnoungou@gmail.com";

  const envoyerWA = (e: any) => {
    e.preventDefault();
    const texte = `Salut SMART DEV ! Je suis ${nom}, mon WhatsApp : ${wa}. Mon projet : ${msg}`;
    window.open(`https://wa.me/${MON_NUMERO}?text=${encodeURIComponent(texte)}`, "_blank");
  };

  const services = [
    { icon: Globe, t: "Site Vitrine", d: "Un site pro qui presente ton entreprise et attire des clients 24h/24.", p: "150.000 FCFA" },
    { icon: ShoppingCart, t: "E-commerce", d: "Ta boutique en ligne avec paiement Mobile Money et livraison.", p: "350.000 FCFA" },
    { icon: Smartphone, t: "Application Web", d: "Application sur mesure pour gerer ton business simplement.", p: "Sur devis" },
    { icon: Palette, t: "Branding & Logo", d: "Logo, charte graphique et identite qui marque les esprits.", p: "75.000 FCFA" },
    { icon: Search, t: "SEO & Reseaux", d: "Sois premier sur Google et visible sur TikTok, Instagram.", p: "50.000 FCFA" },
    { icon: Rocket, t: "Landing Page", d: "Une page qui convertit pour lancer ton produit ou evenement.", p: "90.000 FCFA" },
  ];

  const projets = [
    { t: "Restaurant Le Delice", c: "Site Vitrine + Menu", col: "from-orange-500 to-red-600", n: "01" },
    { t: "Boutique Afro Chic", c: "E-commerce", col: "from-pink-500 to-violet-600", n: "02" },
    { t: "Cabinet Dentaire BZV", c: "Site + Prise RDV", col: "from-cyan-400 to-blue-600", n: "03" },
    { t: "Ecole La Reussite", c: "Site + Inscription", col: "from-emerald-400 to-green-600", n: "04" },
    { t: "Immobilier Congo", c: "Plateforme Annonces", col: "from-amber-400 to-orange-600", n: "05" },
    { t: "Studio Fit BZV", c: "Landing + Abonnement", col: "from-violet-500 to-fuchsia-600", n: "06" },
  ];

  return (
    <main className="min-h-screen bg-[#020014] text-white overflow-x-hidden font-sans selection:bg-cyan-400 selection:text-black">

      {/* BACKGROUND FUTURISTE */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-600/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 h-14 flex items-center justify-between shadow-[0_0_40px_rgba(139,92,246,0.3)]">
        <div className="flex items-center gap-2 font-black text-lg tracking-widest"><span className="bg-gradient-to-r from-cyan-400 to-violet-600 p-2 rounded-full shadow-[0_0_20px_#22d3ee]"><Zap size={16} /></span>SMART<span className="text-cyan-300">DEV</span><span className="hidden md:block text-[10px] bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-400/30">v2.0 FUTURE</span></div>
        <nav className="hidden md:flex gap-7 text-[13px] text-gray-300"><a href="#services" className="hover:text-cyan-300">SERVICES</a><a href="#projets" className="hover:text-cyan-300">PROJETS</a><a href="#apropos" className="hover:text-cyan-300">A PROPOS</a><a href="#contact" className="hover:text-cyan-300">CONTACT</a></nav>
        <a href={`https://wa.me/${MON_NUMERO}?text=${encodeURIComponent("Salut SMART DEV ! Je veux lancer un projet.")}`} target="_blank" className="hidden md:block bg-gradient-to-r from-cyan-400 to-violet-600 text-black font-black text-xs px-4 py-2.5 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.6)]">LANCER UN PROJET</a>
        <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </header>
      {open && <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] z-50 bg-[#0a0a2e]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-3 md:hidden"><a href="#services">Services</a><a href="#projets">Projets</a><a href="#apropos">A Propos</a><a href="#contact">Contact</a></div>}

      {/* HERO */}
      <section className="relative pt-40 pb-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-4 py-1.5 rounded-full text-[11px] tracking-widest"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> SYSTEME EN LIGNE • BRAZZAVILLE - CONGO</span>
          <h1 className="text-[52px] leading-[1.05] md:text-[84px] font-black tracking-tight mt-6">ON CONSTRUIT<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">LE FUTUR DIGITAL</span><br />DU CONGO.</h1>
          <p className="text-gray-400 text-base md:text-lg mt-6 max-w-2xl mx-auto">Sites ultra-rapides, e-commerce, applications web. Design futuriste qui fait dire <span className="text-white font-bold">WOW</span> a tes clients.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href={`https://wa.me/${MON_NUMERO}?text=${encodeURIComponent("Salut SMART DEV ! Je veux lancer un projet.")}`} target="_blank" className="bg-gradient-to-r from-cyan-400 to-violet-600 text-black px-7 py-3.5 rounded-full font-black flex items-center gap-2 shadow-[0_0_30px_rgba(34,211,238,0.5)]">LANCER MON PROJET <ArrowRight size={18} /></a>
            <a href="#projets" className="bg-white/5 border border-white/20 backdrop-blur px-7 py-3.5 rounded-full font-bold">EXPLORER LES PROJETS</a>
          </div>
          <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mt-12">
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-4"><p className="text-2xl font-black text-cyan-300">50+</p><p className="text-[11px] text-gray-400">PROJETS LIVRES</p></div>
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-4"><p className="text-2xl font-black text-violet-300">98%</p><p className="text-[11px] text-gray-400">CLIENTS SATISFAITS</p></div>
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-4"><p className="text-2xl font-black text-fuchsia-300">24H</p><p className="text-[11px] text-gray-400">REPONSE RAPIDE</p></div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6 text-[11px] text-gray-400"><span className="flex gap-1 items-center bg-white/5 px-3 py-1.5 rounded-full border border-white/10"><Cpu size={12} className="text-cyan-300" /> IA READY</span><span className="flex gap-1 items-center bg-white/5 px-3 py-1.5 rounded-full border border-white/10"><Timer size={12} className="text-violet-300" /> LIVRAISON 7-14 JOURS</span><span className="flex gap-1 items-center bg-white/5 px-3 py-1.5 rounded-full border border-white/10"><ShieldCheck size={12} className="text-green-400" /> 100% SECURISE</span></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between"><div><p className="text-cyan-300 text-xs tracking-[0.3em]">// 01 - SERVICES</p><h2 className="text-3xl md:text-5xl font-black mt-2">Nos Super-Pouvoirs</h2></div><Sparkles className="text-violet-400 hidden md:block" /></div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">{services.map((x, i) => (<div key={i} className="group bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.07] backdrop-blur rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"><div className="flex justify-between"><div className="bg-gradient-to-br from-cyan-400/20 to-violet-600/20 w-12 h-12 rounded-2xl flex items-center justify-center text-cyan-300 border border-white/10"><x.icon size={22} /></div><span className="text-white/20 font-black">0{i + 1}</span></div><h3 className="font-bold text-xl mt-5">{x.t}</h3><p className="text-gray-400 text-sm mt-2 leading-relaxed">{x.d}</p><div className="flex justify-between items-center mt-5"><p className="text-cyan-300 font-black text-sm">A partir de {x.p}</p><a href={`https://wa.me/${MON_NUMERO}?text=${encodeURIComponent(`Salut SMART DEV ! Je veux un devis pour : ${x.t}`)}`} target="_blank"><ArrowUpRight className="text-gray-500 group-hover:text-cyan-300" /></a></div></div>))}</div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="relative py-16 px-6 max-w-7xl mx-auto">
        <p className="text-cyan-300 text-xs tracking-[0.3em]">// 02 - PROJETS</p>
        <h2 className="text-3xl md:text-5xl font-black mt-2">Projets Recents</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">{projets.map((x, i) => (<div key={i} className="group bg-white/[0.04] border border-white/10 hover:border-violet-400/50 rounded-3xl overflow-hidden transition-all hover:-translate-y-1"><div className={`h-48 bg-gradient-to-br ${x.col} relative flex items-end p-5`}><span className="absolute top-4 right-4 text-5xl font-black text-white/30">{x.n}</span><div className="w-12 h-12 bg-black/30 backdrop-blur rounded-full flex items-center justify-center"><Orbit size={22} /></div></div><div className="p-5 flex justify-between items-center"><div><h3 className="font-bold">{x.t}</h3><p className="text-xs text-gray-400 mt-1">{x.c}</p></div><a href={`https://wa.me/${MON_NUMERO}?text=${encodeURIComponent(`Salut ! Je veux un projet comme : ${x.t}`)}`} target="_blank" className="bg-white/10 px-3 py-1 rounded-full text-[11px] text-cyan-300 border border-white/10">JE VEUX CA →</a></div></div>))}</div>
      </section>

      {/* A PROPOS */}
      <section id="apropos" className="relative py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-violet-600/20 to-cyan-500/10 border border-white/10 backdrop-blur rounded-[2rem] p-8 md:p-10">
            <p className="text-cyan-300 text-xs tracking-[0.3em]">// 03 - A PROPOS</p>
            <h2 className="text-3xl md:text-4xl font-black mt-3 leading-tight">On ne cree pas des sites.<br /><span className="text-cyan-300">On cree des machines a clients.</span></h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">SMART DEV est une agence digitale basee a Brazzaville, fondee par Gyll Magnoungou. Notre mission : donner aux entreprises congolaises un niveau digital digne des plus grandes villes du monde.</p>
            <div className="space-y-2.5 mt-6 text-sm"><p className="flex gap-2"><CheckCircle className="text-green-400 shrink-0" size={18} /> Livraison en 7 a 14 jours, pas 3 mois</p><p className="flex gap-2"><CheckCircle className="text-green-400 shrink-0" size={18} /> Paiement Mobile Money - Airtel / MTN</p><p className="flex gap-2"><CheckCircle className="text-green-400 shrink-0" size={18} /> Support apres livraison inclus</p><p className="flex gap-2"><CheckCircle className="text-green-400 shrink-0" size={18} /> Design qui fait vendre, pas juste joli</p></div>
            <a href={`https://wa.me/${MON_NUMERO}?text=${encodeURIComponent("Salut Gyll ! Parlons de mon projet.")}`} target="_blank" className="inline-block mt-7 bg-white text-black font-black text-sm px-6 py-3 rounded-full">Discuter avec Gyll →</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cyan-400 text-black rounded-[2rem] p-6 flex flex-col justify-end"><p className="text-4xl font-black">50+</p><p className="text-xs font-bold">PROJETS LIVRES</p></div>
            <div className="bg-white/[0.05] border border-white/10 rounded-[2rem] p-6 flex flex-col justify-end"><p className="text-4xl font-black">3 ANS</p><p className="text-xs text-gray-400">EXPERIENCE</p></div>
            <div className="bg-white/[0.05] border border-white/10 rounded-[2rem] p-6 flex flex-col justify-end"><p className="text-4xl font-black">100%</p><p className="text-xs text-gray-400">SUR MESURE</p></div>
            <div className="bg-violet-600 rounded-[2rem] p-6 flex flex-col justify-end"><p className="text-4xl font-black">24H</p><p className="text-xs">REPONSE GARANTIE</p></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-500 via-violet-600 to-fuchsia-600 rounded-[2rem] p-1">
          <div className="bg-[#0a0a2e]/90 backdrop-blur rounded-[1.9rem] p-8 md:p-10 grid md:grid-cols-2 gap-8">
            <div><p className="text-cyan-300 text-xs tracking-[0.3em]">// 04 - CONTACT</p><h2 className="text-3xl md:text-4xl font-black mt-3 leading-tight">Pret a passer<br />au niveau superieur ?</h2><p className="text-gray-400 text-sm mt-4">Reponse en moins de 24h. Devis gratuit, sans engagement.</p>
              <div className="space-y-3 mt-6 text-sm">
                <a href={`https://wa.me/${MON_NUMERO}`} target="_blank" className="flex gap-3 bg-[#25D366]/10 border border-green-400/30 rounded-xl px-4 py-3 hover:bg-[#25D366]/20"><Phone size={18} className="text-green-400 shrink-0" /> <span><b>+242 06 564 65 77</b><br /><span className="text-xs text-gray-400">Cliquer pour discuter sur WhatsApp</span></span></a>
                <a href={`mailto:${MON_EMAIL}`} className="flex gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-cyan-400"><Mail size={18} className="text-cyan-300 shrink-0" /> <span><b>gyllmagnoungou@gmail.com</b><br /><span className="text-xs text-gray-400">Cliquer pour envoyer un email</span></span></a>
                <p className="flex gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"><MapPin size={18} className="text-cyan-300 shrink-0" /> Brazzaville, Congo</p>
              </div>
            </div>
            <form onSubmit={envoyerWA} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 space-y-3">
              <input value={nom} onChange={(e) => setNom(e.target.value)} required placeholder="Ton nom" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none text-sm focus:border-cyan-400" />
              <input value={wa} onChange={(e) => setWa(e.target.value)} required placeholder="Ton WhatsApp" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none text-sm focus:border-cyan-400" />
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} required placeholder="Parle-nous de ton projet..." rows={3} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none text-sm focus:border-cyan-400"></textarea>
              <button type="submit" className="w-full bg-[#25D366] text-black font-black py-3.5 rounded-xl flex items-center justify-center gap-2">ENVOYER SUR WHATSAPP <Send size={16} /></button>
              <p className="text-center text-[11px] text-gray-500">Ca ouvre ton WhatsApp avec le message deja ecrit pour Gyll.</p>
            </form>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs mt-8 tracking-widest">© 2026 SMART DEV — BRAZZAVILLE, CONGO • CONCU POUR LE FUTUR</p>
      </section>

      {/* BOUTON WHATSAPP FLOTTANT */}
      <a href={`https://wa.me/${MON_NUMERO}?text=${encodeURIComponent("Salut SMART DEV ! Je veux lancer un projet.")}`} target="_blank" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.7)] animate-bounce"><Phone size={26} className="text-white" /></a>

    </main>
  );
}