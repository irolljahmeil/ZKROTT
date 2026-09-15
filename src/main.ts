import "./styles.css";

type NftItem = { id: string; name: string; image: string };
type Trait = { index: string; title: string; values: string };
type RoadmapItem = { phase: string; status: string; title: string; copy: string };

const OPENSEA_URL = "https://opensea.io/collection/zkrott";
const X_URL = "https://x.com/zkrott_labz?s=11";
const CONTRACT_ADDRESS = "0x506588ac3c426468092e7ddb640d2bb1a429cd03";

const nftImageIds = [
  3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509,
  3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519,
  3520, 3521, 3522, 3523, 3525, 3528,
];

const nftItems: NftItem[] = nftImageIds.map((imageId, index) => {
  const tokenNumber = String(index + 1).padStart(4, "0");
  return { id: tokenNumber, name: `zkRott #${tokenNumber}`, image: `/assets/zkrott-${imageId}.jpg` };
});

const traits: Trait[] = [
  { index: "01", title: "Background", values: "Purple · Beige · Teal · Mint · Terracotta · Navy" },
  { index: "02", title: "Skin", values: "Pale · Yellow · Marble · Slime · Carbon · Gold" },
  { index: "03", title: "Eyes", values: "Sleepy · Angry · Spiral · Pearl · Scope · Electric" },
  { index: "04", title: "Hair", values: "Dreadlocks · Spikes · Curls · Seaweed · None" },
  { index: "05", title: "Headwear", values: "Caps · Crowns · Helmets · Bandanas · Headphones" },
  { index: "06", title: "Mouth", values: "Matches · Cigarettes · Gum · Relics · Tools" },
  { index: "07", title: "Clothing", values: "Hoodies · Jackets · Vests · Toga · Diving suit" },
  { index: "08", title: "Face", values: "Drool · Slime · Scopes · Tears · Glowing effects" },
];

const roadmap: RoadmapItem[] = [
  { phase: "01", status: "Complete", title: "Build the Rott", copy: "Artwork, traits, metadata, lore and the first home for the hoard." },
  { phase: "02", status: "Live", title: "The Awakening", copy: "The 1,111 collection is live on OpenSea for $2.26 per mint." },
  { phase: "03", status: "Next", title: "Holder Access", copy: "Partner spots, raffles and selected community opportunities for holders." },
  { phase: "04", status: "Future", title: "Beyond the PFP", copy: "Limited 3D characters, animation and more stories from Rotwood." },
];

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("App root was not found.");

const galleryMarkup = nftItems.map((item) => `
  <article class="pfp-card">
    <img src="${item.image}" alt="${item.name}" width="560" height="560" loading="lazy" decoding="async" />
    <div class="pfp-meta"><span>${item.name}</span><span>Genesis</span></div>
  </article>
`).join("");

const traitsMarkup = traits.map((trait) => `
  <article class="trait-row">
    <span class="trait-index">${trait.index}</span>
    <div><h3>${trait.title}</h3><p>${trait.values}</p></div>
  </article>
`).join("");

const roadmapMarkup = roadmap.map((item) => `
  <article class="roadmap-row">
    <div class="roadmap-number">${item.phase}</div>
    <div class="roadmap-copy">
      <div class="roadmap-topline"><h3>${item.title}</h3><span class="status status-${item.status.toLowerCase()}">${item.status}</span></div>
      <p>${item.copy}</p>
    </div>
  </article>
`).join("");

const accountHeader = (time: string) => `
  <div class="account-line">
    <img class="account-avatar" src="/assets/zkrott-logo.jpeg" alt="" width="96" height="96" />
    <div class="account-copy">
      <div><strong>zkRott</strong><span class="official-mark" aria-label="Official">ZK</span></div>
      <span>@zkrott_labz · ${time}</span>
    </div>
  </div>
`;

app.innerHTML = `
  <div class="site-shell">
    <header class="topbar" id="top">
      <a class="brand" href="#top" aria-label="zkRott home">
        <img src="/assets/zkrott-logo.jpeg" alt="" width="128" height="128" />
        <span>zkRott</span>
      </a>
      <div class="top-symbol" aria-hidden="true">ZK</div>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="#gallery">Art</a><a href="#lore">Lore</a><a href="#traits">Traits</a><a href="#roadmap">Roadmap</a>
      </nav>
      <a class="top-mint" href="${OPENSEA_URL}" target="_blank" rel="noopener">Mint $2.26</a>
    </header>

    <nav class="feed-tabs" aria-label="Explore zkRott">
      <a class="is-active" href="#mint">Mint Live</a><a href="#gallery">Art</a><a href="#lore">Story</a><a href="#traits">Traits</a><a href="#roadmap">Roadmap</a>
    </nav>

    <div class="page-grid">
      <main class="feed" aria-label="zkRott collection feed">
        <section class="feed-post hero-post" id="mint">
          ${accountHeader("LIVE")}
          <div class="post-content">
            <p class="post-announcement"><span>●</span> Public mint is live. 1,111 Rotts are waiting on OpenSea.</p>
            <div class="featured-card">
              <div class="featured-intro">
                <div class="featured-title">
                  <img src="/assets/zkrott-logo.jpeg" alt="" width="80" height="80" />
                  <div><strong>zkRott Genesis</strong><span>Official collection</span></div>
                </div>
                <h1>Rotten.<br />Still moving.</h1>
                <p class="lead">Born from the Zero Key blackout. Every crooked face carries something the dead city forgot.</p>
              </div>
              <div class="hero-media">
                <img src="/assets/zkrott-hero.jpg" alt="Featured zkRott character" width="900" height="900" fetchpriority="high" decoding="async" />
                <div class="media-stamp">GENESIS / 1,111</div>
              </div>
              <div class="featured-footer">
                <div class="mint-facts" aria-label="Mint details">
                  <div><span>Price</span><strong>$2.26</strong></div><div><span>Chain</span><strong>Robinhood</strong></div>
                  <div><span>Supply</span><strong>1,111</strong></div><div><span>Status</span><strong class="live-value">Live</strong></div>
                </div>
                <div class="contract-block">
                  <div><span>Official contract</span><code>${CONTRACT_ADDRESS}</code></div>
                  <button class="copy-button" type="button" data-copy-contract>Copy</button>
                </div>
              </div>
            </div>
            <div class="post-actions">
              <a class="primary-action" href="${OPENSEA_URL}" target="_blank" rel="noopener">Mint on OpenSea</a>
              <a class="secondary-action" href="${X_URL}" target="_blank" rel="noopener">Follow @zkrott_labz</a>
            </div>
            <p class="safety-note">Mint only through the official OpenSea collection linked here.</p>
          </div>
        </section>

        <section class="feed-post" id="gallery">
          ${accountHeader("ART DROP")}
          <div class="post-content">
            <div class="section-heading"><p>From the hoard</p><h2>Collection preview</h2></div>
            <div class="pfp-grid">${galleryMarkup}</div>
          </div>
        </section>

        <section class="feed-post" id="lore">
          ${accountHeader("TRANSMISSION")}
          <div class="post-content lore-copy">
            <div class="section-heading"><p>Transmission recovered</p><h2>Born in the noise</h2></div>
            <p>zkRott woke beneath a city with no name, no pulse, and one memory trapped between his teeth.</p>
            <p>His long skull, hollow nose, torn neck and uneven grin mark him as a first Rott—survivors remade by the Zero Key blackout.</p>
            <p>Every outfit, scar and mouth relic carries proof of the life he lost. Now he walks from district to district, collecting broken memories before the Hollow Crown steals them.</p>
            <blockquote>He cannot truly die. But every return costs part of himself.</blockquote>
          </div>
        </section>

        <section class="feed-post" id="traits">
          ${accountHeader("TRAIT LOG")}
          <div class="post-content">
            <div class="section-heading"><p>Built different</p><h2>Traits and rarity</h2></div>
            <div class="traits-list">${traitsMarkup}</div>
          </div>
        </section>

        <section class="feed-post" id="roadmap">
          ${accountHeader("ROADMAP")}
          <div class="post-content">
            <div class="section-heading"><p>No fake promises</p><h2>Where the hoard goes</h2></div>
            <div class="roadmap-list">${roadmapMarkup}</div>
          </div>
        </section>

        <section class="feed-post final-post">
          ${accountHeader("NOW")}
          <div class="post-content">
            <h2>Join the hoard.</h2><p>Public mint is live on Robinhood Chain.</p>
            <div class="post-actions">
              <a class="primary-action" href="${OPENSEA_URL}" target="_blank" rel="noopener">Mint on OpenSea</a>
              <a class="secondary-action" href="${X_URL}" target="_blank" rel="noopener">Open X</a>
            </div>
          </div>
        </section>
      </main>

      <aside class="side-card" aria-label="Mint summary">
        <img src="/assets/zkrott-logo.jpeg" alt="zkRott logo" width="220" height="220" />
        <span class="side-kicker">Public mint live</span><h2>1,111 Rotts</h2><p>$2.26 · Robinhood Chain</p>
        <a href="${OPENSEA_URL}" target="_blank" rel="noopener">Mint on OpenSea</a>
        <small>Official contract</small><code>${CONTRACT_ADDRESS}</code>
      </aside>
    </div>

    <nav class="mobile-dock" aria-label="Quick navigation">
      <a href="#mint"><span>⌂</span>Home</a><a href="#gallery"><span>▦</span>Art</a>
      <a class="dock-mint" href="${OPENSEA_URL}" target="_blank" rel="noopener"><span>ZK</span>Mint</a>
      <a href="#lore"><span>◎</span>Lore</a><a href="${X_URL}" target="_blank" rel="noopener"><span>𝕏</span>X</a>
    </nav>

    <footer><span>© 2026 zkRott</span><span>Rotten misfits on Robinhood Chain</span></footer>
  </div>
`;

const copyButton = document.querySelector<HTMLButtonElement>("[data-copy-contract]");
copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    copyButton.textContent = "Copied";
    window.setTimeout(() => { copyButton.textContent = "Copy"; }, 1800);
  } catch {
    copyButton.textContent = "Select address";
  }
});

const feedTabLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.feed-tabs a[href^="#"]'));
const feedSections = feedTabLinks
  .map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") ?? ""))
  .filter((section): section is HTMLElement => Boolean(section));

const updateActiveFeedTab = () => {
  const readingLine = window.scrollY + window.innerHeight * 0.3;
  let activeSection = feedSections[0]?.id ?? "mint";

  feedSections.forEach((section) => {
    if (section.offsetTop <= readingLine) activeSection = section.id;
  });

  feedTabLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeSection}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
};

let feedTabFrame = 0;
window.addEventListener("scroll", () => {
  if (feedTabFrame) return;
  feedTabFrame = window.requestAnimationFrame(() => {
    feedTabFrame = 0;
    updateActiveFeedTab();
  });
}, { passive: true });

updateActiveFeedTab();
