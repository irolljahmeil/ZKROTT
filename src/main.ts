import "./styles.css";

type Evidence = { code: string; title: string; copy: string; image: string };
type Phase = { number: string; status: string; title: string; copy: string };

const OPENSEA_URL = "https://opensea.io/collection/zkrott";
const X_URL = "https://x.com/zkrott_labz?s=11";
const CONTRACT_ADDRESS = "0xd0975e560a30c313f9c51ba6127f90058bc47d70";

const records = [3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509, 3510, 3511];

const evidence: Evidence[] = [
  { code: "EV-01", title: "Memory objects", copy: "Mouth traits are physical memories recovered from the streets of Rotwood.", image: "/assets/zkrott-3505.jpg" },
  { code: "EV-02", title: "First death", copy: "Scars and facial damage record how a Rott died before the Key remade them.", image: "/assets/zkrott-3501.jpg" },
  { code: "EV-03", title: "Blackout wear", copy: "Clothing and headwear preserve what they wore when the city went dark.", image: "/assets/zkrott-3508.jpg" },
  { code: "EV-04", title: "Last location", copy: "Every background points to the Rotwood district that Rott still haunts.", image: "/assets/zkrott-3503.jpg" },
];

const phases: Phase[] = [
  { number: "01", status: "COMPLETE", title: "The Remaking", copy: "Artwork, traits, metadata, and the first 1,111 are complete. Public mint is live." },
  { number: "02", status: "NEXT SIGNAL", title: "Enter Rotwood", copy: "A lightweight playable Rotwood opens its first districts. Holders begin collecting Memory Fragments." },
  { number: "03", status: "LOCKED", title: "Permanent Change", copy: "Fragments begin affecting actual Rotts. Repair and corruption paths become permanent choices." },
  { number: "04", status: "UNMAPPED", title: "Deeper Rotwood", copy: "New districts, limited narrative sequences, and the first animated pieces emerge from the city." },
];

const keySymbol = `
  <svg class="zero-key" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="20" cy="20" r="10"></circle>
    <path d="M27 27 52 52M39 39l7-7M46 46l7-7"></path>
    <path class="key-break" d="m28 36 8-8"></path>
  </svg>`;

const recordMarkup = records.map((imageId, index) => {
  const token = String(index + 1).padStart(4, "0");
  const district = ["Ash Ward", "Low Chapel", "Drain Nine", "Dead Market"][index % 4];
  return `
    <article class="record-card">
      <div class="record-image"><img src="/assets/zkrott-${imageId}.jpg" alt="zkRott record ${token}" width="600" height="600" loading="lazy" decoding="async" /></div>
      <div class="record-meta"><span>RECORD / ${token}</span><strong>${district}</strong></div>
    </article>`;
}).join("");

const evidenceMarkup = evidence.map((item) => `
  <article class="evidence-card">
    <div class="evidence-photo"><img src="${item.image}" alt="${item.title} evidence" width="420" height="420" loading="lazy" decoding="async" /><span>${item.code}</span></div>
    <div class="evidence-copy"><p>SCANNED FILE</p><h3>${item.title}</h3><div class="redaction" aria-hidden="true"></div><p>${item.copy}</p></div>
  </article>`).join("");

const phaseMarkup = phases.map((phase) => `
  <article class="phase-card">
    <div class="phase-index">PHASE ${phase.number}</div>
    <div><span>${phase.status}</span><h3>${phase.title}</h3><p>${phase.copy}</p></div>
  </article>`).join("");

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("App root was not found.");

app.innerHTML = `
  <div class="transmission" data-transmission aria-label="Recovered transmission">
    <div class="transmission-noise" aria-hidden="true"></div>
    <div class="transmission-copy">
      ${keySymbol}
      <p class="signal-code">SIGNAL / ZK-000</p>
      <p class="transmission-line line-one">ZERO KEY FAILURE DETECTED</p>
      <p class="transmission-line line-two">1,111 CONSCIOUS BODIES FOUND</p>
      <p class="transmission-line line-three">RECORDS RECOVERED</p>
      <button type="button" data-skip>Skip transmission</button>
    </div>
  </div>

  <div class="site-shell">
    <header class="site-header" id="top">
      <a class="brand" href="#top" aria-label="zkRott home">
        <img src="/assets/zkrott-logo.jpeg" alt="" width="96" height="96" />
        <span><strong>zkRott</strong><small>ROTWOOD ARCHIVE</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu><span></span><span></span><span></span><span class="sr-only">Open menu</span></button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
        <a href="#records">Records</a><a href="#evidence">Evidence</a><a href="#rotwood">Rotwood</a><a href="#roadmap">Phases</a>
        <a class="nav-cta" href="${OPENSEA_URL}" target="_blank" rel="noopener">Take the memory</a>
      </nav>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-signal"><span></span> RECOVERED TRANSMISSION / PUBLIC MINT LIVE</div>
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">ROTWOOD // FILE 1111</p>
            <h1 id="hero-title">The Key is dead.<br /><em>1,111 remain.</em></h1>
            <p class="hero-lead">Only 1,111 bodies stayed conscious when the Zero Key failed. They became the Rotts—the last living records of everything Rotwood tried to erase.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="${OPENSEA_URL}" target="_blank" rel="noopener">Claim your unfinished face</a>
              <a class="button button-ghost" href="#rotwood">Enter Rotwood ↓</a>
            </div>
            <div class="signal-strip"><span>CHAIN / ROBINHOOD</span><span>PRICE / $1.24</span><span>STATUS / LIVE</span></div>
          </div>

          <aside class="mint-notice" aria-label="Public mint details">
            <div class="notice-pin" aria-hidden="true"></div>
            <div class="notice-header"><span>PERSONS OF INTEREST</span><strong>ACTIVE FILE</strong></div>
            <div class="notice-portrait">
              <img src="/assets/zkrott-hero.jpg" alt="A recovered zkRott portrait" width="900" height="900" fetchpriority="high" decoding="async" />
              <div class="portrait-stamp">REMADE</div>
            </div>
            <div class="notice-title"><span>SUBJECT CLASS</span><h2>zkRott</h2><p>Last seen: Rotwood</p></div>
            <dl class="mint-data"><div><dt>Fixed supply</dt><dd>1,111</dd></div><div><dt>Mint</dt><dd>$1.24</dd></div><div><dt>Stage</dt><dd>Public / Live</dd></div></dl>
            <a class="button button-dark" href="${OPENSEA_URL}" target="_blank" rel="noopener">Take the memory ↗</a>
            <button class="contract-copy" type="button" data-copy><span>OFFICIAL CONTRACT</span><code>${CONTRACT_ADDRESS}</code><strong>Copy</strong></button>
          </aside>
        </div>
      </section>

      <section class="manifesto section-shell" aria-label="Collection rules">
        <div class="section-label">ARCHIVE NOTE / 001</div>
        <div class="manifesto-grid">
          <h2>Not a collection of faces.<br />A record of what was erased.</h2>
          <div class="manifesto-copy"><p>The Key had enough power to remake exactly 1,111 bodies. The number is final. No second supply. No replacements.</p><p>Lower token numbers woke first. <strong>#1111 is the last incomplete one.</strong></p></div>
        </div>
        <div class="rule-line"><span>01 / FIXED</span><span>02 / CONSCIOUS</span><span>03 / UNREPEATABLE</span><span>04 / STILL REMEMBERING</span></div>
      </section>

      <section class="records section-shell" id="records" aria-labelledby="records-title">
        <div class="section-heading"><div><p>THE LIVING RECORDS</p><h2 id="records-title">First to wake</h2></div><p class="section-intro">Every face is a case file. Every number marks when consciousness returned.</p></div>
        <div class="records-grid">${recordMarkup}</div>
        <a class="text-link" href="${OPENSEA_URL}" target="_blank" rel="noopener">Open all 1,111 records on OpenSea ↗</a>
      </section>

      <section class="evidence section-shell" id="evidence" aria-labelledby="evidence-title">
        <div class="section-heading"><div><p>FORENSIC INDEX</p><h2 id="evidence-title">Traits are evidence</h2></div><p class="section-intro">Nothing here is decoration. The body remembers even when the mind cannot.</p></div>
        <div class="evidence-board">${evidenceMarkup}</div>
        <article class="incomplete-file"><div class="incomplete-mark">BROKEN<br />/ INCOMPLETE</div><div><p>RARE CLASSIFICATION</p><h3>Only partially remade.</h3><p>Some Rotts ran out of signal before the Key finished its work. Missing color, exposed construction, broken features—the unfinished state is intentional and permanent.</p></div>${keySymbol}</article>
      </section>

      <section class="rotwood" id="rotwood" aria-labelledby="rotwood-title">
        <div class="rotwood-inner section-shell">
          <div class="rotwood-copy">
            <p class="eyebrow">PLAYABLE WORLD / ACCESS PENDING</p>
            <h2 id="rotwood-title">Rotwood remembers what you lose.</h2>
            <p>Your zkRott is your character. Enter the dead city, recover Memory Fragments, and decide whether to repair what remains—or corrupt it further.</p>
            <div class="game-loop" aria-label="Rotwood game loop"><div><span>01</span><strong>Explore</strong><p>Walk the first dead districts.</p></div><div><span>02</span><strong>Recover</strong><p>Find broken pieces of history.</p></div><div><span>03</span><strong>Choose</strong><p>Repair or corrupt your Rott.</p></div></div>
          </div>
          <div class="fragment-terminal">
            <div class="terminal-top"><span>MEMORY RUN / 00:00</span><span class="terminal-live">SIGNAL WEAK</span></div>
            <div class="fragment-visual">${keySymbol}<span>FRAGMENT<br />NOT FOUND</span></div>
            <div class="terminal-log"><p>&gt; Hollow Crown proximity unknown</p><p>&gt; Collected memories: 00</p><p>&gt; Deep district access: HOLDER LOCKED</p></div>
            <div class="terminal-warning">GETTING CAUGHT ERASES EVERY FRAGMENT FROM THAT RUN.</div>
          </div>
        </div>
      </section>

      <section class="story section-shell" aria-labelledby="story-title">
        <div class="story-key">${keySymbol}<span>ZERO KEY / OFFLINE</span></div>
        <div class="story-copy"><p>ORIGIN RECORD</p><h2 id="story-title">The city forgot.<br />The Rotts did not.</h2><p>When the blackout hit, almost everyone lost their name. The survivors woke with long skulls, hollow noses, torn necks, and uneven grins—carrying pieces of lives that no longer existed.</p><p>Now the Hollow Crown hunts those pieces. The Rotts cannot truly die, but every return costs part of themselves.</p></div>
      </section>

      <section class="roadmap section-shell" id="roadmap" aria-labelledby="roadmap-title">
        <div class="section-heading"><div><p>RECOVERY SEQUENCE</p><h2 id="roadmap-title">Four signals remain</h2></div><p class="section-intro">The world opens in phases. Permanent changes begin only after Rotwood is live.</p></div>
        <div class="phase-list">${phaseMarkup}</div>
      </section>

      <section class="final-cta section-shell"><div class="final-symbol">${keySymbol}</div><p>FINAL TRANSMISSION</p><h2>Claim your unfinished face.</h2><p>The Key is dead. Public mint is live. Only 1,111 living records can exist.</p><div class="hero-actions"><a class="button button-primary" href="${OPENSEA_URL}" target="_blank" rel="noopener">Take the memory</a><a class="button button-ghost" href="${X_URL}" target="_blank" rel="noopener">Follow the signal on X ↗</a></div></section>
    </main>

    <footer class="site-footer">
      <div class="footer-brand"><img src="/assets/zkrott-logo.jpeg" alt="" width="72" height="72" /><div><strong>zkRott × Rotwood</strong><span>STAY ROTTEN.</span></div></div>
      <div class="footer-links"><a href="${OPENSEA_URL}" target="_blank" rel="noopener">OpenSea</a><a href="${X_URL}" target="_blank" rel="noopener">X / @zkrott_labz</a></div>
      <button type="button" class="footer-contract" data-copy><span>CONTRACT</span><code>${CONTRACT_ADDRESS}</code></button>
    </footer>
  </div>`;

const transmission = document.querySelector<HTMLElement>("[data-transmission]");
const dismissTransmission = () => {
  if (!transmission || transmission.classList.contains("is-gone")) return;
  transmission.classList.add("is-leaving");
  window.setTimeout(() => transmission.classList.add("is-gone"), 520);
  try { sessionStorage.setItem("zkrott-transmission-seen", "true"); } catch { /* storage may be unavailable */ }
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let transmissionSeen = false;
try { transmissionSeen = sessionStorage.getItem("zkrott-transmission-seen") === "true"; } catch { /* storage may be unavailable */ }
if (transmissionSeen || reduceMotion) transmission?.classList.add("is-gone");
else window.setTimeout(dismissTransmission, 3100);
document.querySelector("[data-skip]")?.addEventListener("click", dismissTransmission);

const menuButton = document.querySelector<HTMLButtonElement>("[data-menu]");
const nav = document.querySelector<HTMLElement>("#site-nav");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav?.classList.toggle("is-open", !open);
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuButton?.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
}));

document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      button.classList.add("is-copied");
      const label = button.querySelector("strong");
      if (label) label.textContent = "Copied";
      window.setTimeout(() => { button.classList.remove("is-copied"); if (label) label.textContent = "Copy"; }, 1800);
    } catch { window.getSelection()?.selectAllChildren(button.querySelector("code") ?? button); }
  });
});
