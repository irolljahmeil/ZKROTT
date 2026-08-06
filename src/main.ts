import "./styles.css";

type Stat = { value: string; label: string };
type Trait = { index: string; title: string; values: string[] };
type RoadmapItem = { phase: string; title: string; items: string[] };
type NftItem = { id: string; name: string; image: string };

const collectionStats: Stat[] = [
  { value: "2,000", label: "Genesis NFTs" },
  { value: "120+", label: "Trait Layers" },
  { value: "1", label: "Rotten Pack" },
];

const nftImageIds = [
  3500, 3501, 3502, 3503, 3504, 3505, 3506, 3507, 3508, 3509,
  3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519,
  3520, 3521, 3522, 3523, 3525, 3528,
];

const nftItems: NftItem[] = nftImageIds.map((imageId, index) => {
  const tokenNumber = String(index + 1).padStart(4, "0");

  return {
    id: tokenNumber,
    name: `ZkRott #${tokenNumber}`,
    image: `/assets/zkrott-${imageId}.jpg`,
  };
});

const traits: Trait[] = [
  { index: "01", title: "Background", values: ["Dark purple", "Beige", "Teal", "Mint green", "Terracotta", "Navy blue", "Dark grey", "Dusty pink", "Burnt orange", "Aqua"] },
  { index: "02", title: "Skin", values: ["Pale", "Yellow", "Dark purple", "Pink", "Marble", "Slime-covered", "Carbon-fibre", "Stained-glass", "Gold", "Iridescent"] },
  { index: "03", title: "Eyes", values: ["Sleepy", "Angry", "Wide", "Spiral", "Pearl", "Scope eye", "Half-covered", "Orange", "Electric blue", "Crying bloodshot"] },
  { index: "04", title: "Hair", values: ["Black dreadlocks", "Brown dreadlocks", "Seaweed dreadlocks", "Orange hair", "Purple hair", "Marble curls", "Black spiky hair", "No visible hair"] },
  { index: "05", title: "Headwear", values: ["Skull bandana", "Backward cap", "Beanie", "Laurel crown", "Diving helmet", "Witch hat", "Broken crown", "Headphones", "None"] },
  { index: "06", title: "Mouth", values: ["Lit matchstick", "Cigarette", "Bubblegum", "Olive branch", "Octopus tentacle", "Knife", "Fish skeleton", "Wrench", "Harmonica", "None"] },
  { index: "07", title: "Clothing", values: ["Camouflage vest", "Leather jacket", "Orange hoodie", "Black hoodie", "Roman toga", "Diving suit", "Tactical hoodie", "Black tank top", "Denim vest", "Torn orange shirt"] },
  { index: "08", title: "Face Accessories", values: ["Drool", "Face covering", "Scope monocle", "Barnacles", "Slime", "Glowing effects", "Tears", "None"] },
  { index: "09", title: "Expression", values: ["Tired", "Angry", "Shocked", "Hypnotised", "Blank", "Suspicious", "Sad", "Unbothered"] },
  { index: "10", title: "Branding", values: ["ZK chest logo", "ZK badge", "Metal ZK letters", "Glowing ZK logo", "No visible logo"] },
  { index: "11", title: "Base Character", values: ["Long zombie skull", "Hollow black nose", "Uneven exposed teeth", "Damaged stretched neck", "Shoulder-up portrait", "Solid-colour background", "Thick cartoon outline"] },
];

const roadmap: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Build the Rott",
    items: [
      "Complete all ZkRott characters and rarity distribution",
      "Finalise artwork, traits, metadata and collection details",
      "Launch the official website and community pages",
      "Publish the ZkRott origin story",
    ],
  },
  {
    phase: "Phase 2",
    title: "The Awakening",
    items: [
      "Announce supply, mint price and launch date",
      "Open early-access opportunities",
      "Launch the collection on OpenSea",
      "Reveal every ZkRott with its complete traits and lore",
    ],
  },
  {
    phase: "Phase 3",
    title: "Holder Access",
    items: [
      "Secure NFT whitelist spots for ZkRott holders",
      "Partner with selected NFT projects and Web3 communities",
      "Run collaborative giveaways, raffles and community events",
      "Give holders early access to selected partner launches and opportunities",
    ],
  },
  {
    phase: "Phase 4",
    title: "ZkRott in 3D",
    items: [
      "Introduce 3D versions of selected ZkRott NFTs",
      "Preserve each character's original face, traits and personality",
      "Release limited 3D collectibles and holder rewards",
      "Use the 3D characters for animations, digital avatars and future storytelling",
    ],
  },
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

const statsMarkup = collectionStats
  .map(
    (stat) => `
      <div class="stat">
        <div class="stat-number">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `,
  )
  .join("");

const nftCarouselSetMarkup = nftItems
  .map(
    (item) => `
      <div class="nft-card">
        <img src="${item.image}" alt="${item.name}" />
        <div class="nft-card-meta">
          <span>${item.name}</span>
          <strong>Genesis</strong>
        </div>
      </div>
    `,
  )
  .join("");

const traitsMarkup = traits
  .map(
    (trait) => `
      <div class="trait">
        <div class="trait-icon">${trait.index}</div>
        <h3>${trait.title}</h3>
        <p>${trait.values.join(" / ")}</p>
      </div>
    `,
  )
  .join("");

const roadmapMarkup = roadmap
  .map(
    (item) => `
      <div class="roadmap-item">
        <span class="phase">${item.phase}</span>
        <h3>${item.title}</h3>
        <ul>
          ${item.items.map((roadmapItem) => `<li>${roadmapItem}</li>`).join("")}
        </ul>
      </div>
    `,
  )
  .join("");

app.innerHTML = `
  <div class="goo-layer" aria-hidden="true">
    <span class="goo-stream goo-top"></span>
    <span class="goo-stream goo-right"></span>
    <span class="goo-stream goo-bottom"></span>
    <span class="goo-stream goo-left"></span>
    <span class="goo-blob blob-one"></span>
    <span class="goo-blob blob-two"></span>
    <span class="goo-blob blob-three"></span>
    <span class="goo-blob blob-four"></span>
  </div>
  <div class="shell">
    <header>
      <a class="logo" href="#top" aria-label="ZkRott home">
        <img class="logo-image" src="/assets/zkrott-logo.png" alt="" />
        <span>ZkRott</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#collection">Collection</a>
        <a href="#gallery">Gallery</a>
        <a href="#lore">Lore</a>
        <a href="#traits">Traits</a>
        <a href="#roadmap">Roadmap</a>
        <a class="nav-mint" href="#mint">Mint</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero" id="mint">
        <div class="wrap hero-grid">
          <div>
            <div class="eyebrow"><span class="status-dot"></span> Genesis mint opening soon</div>
            <h1>ZkRott</h1>
            <p class="hero-copy">
              A dark-chain NFT collection of corrupted guardians, forged for collectors who like their art loud,
              strange, and impossible to tame.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary" type="button" disabled>Mint Soon</button>
              <a class="btn" href="#gallery">View Collection</a>
            </div>
          </div>

          <aside class="mint-card" aria-label="Featured ZkRott NFT">
            <div class="art-frame">
              <img class="hero-nft" src="/assets/zkrott-hero.jpg" alt="ZkRott zombie NFT character wearing headphones" />
            </div>
            <div class="mint-details">
              <div class="detail-row"><span>Supply</span><strong>2,000</strong></div>
              <div class="detail-row"><span>Chain</span><strong>Robinhood</strong></div>
              <div class="detail-row"><span>Mint Price</span><strong>TBA</strong></div>
              <div class="detail-row"><span>Allowlist</span><strong>Opening Soon</strong></div>
            </div>
          </aside>
        </div>
      </section>

      <section id="collection">
        <div class="wrap">
          <div class="section-head">
            <h2>The Collection</h2>
          </div>
          <div class="stats">${statsMarkup}</div>
        </div>
      </section>

      <section id="gallery">
        <div class="wrap">
          <div class="section-head">
            <h2>Collection Preview</h2>
          </div>

          <div class="carousel-bleed">
            <div class="carousel-shell">
              <div class="nft-carousel" data-nft-carousel>
                <div class="nft-track">${nftCarouselSetMarkup}</div>
                <div class="nft-track" aria-hidden="true">${nftCarouselSetMarkup}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="story" id="lore">
        <div class="wrap story-grid">
          <div>
            <div class="eyebrow"><span class="status-dot"></span> Transmission recovered</div>
            <h2>Born In The Noise</h2>
          </div>
          <div class="terminal">
            <p>ZkRott woke beneath a city with no name, no pulse, and one memory trapped between his teeth.</p>
            <p>His long skull, hollow nose, torn neck, and uneven grin mark him as a first Rott, survivors remade by the Zero Key blackout.</p>
            <p>Every outfit, eye, scar, and mouth relic carries proof of the life he lost.</p>
            <p>Some versions remember war, music, hunger, rebellion, or flooded tunnels. Others remember nothing.</p>
            <p>The ZK mark on his chest binds him to the machine that killed the city and brought him back.</p>
            <p>Now he walks from district to district, collecting broken memories before the Hollow Crown steals them.</p>
            <p>He cannot truly die, but each return costs part of himself. When the last memory fades, only the grin remains.</p>
          </div>
        </div>
      </section>

      <section id="traits">
        <div class="wrap">
          <div class="section-head">
            <h2>Traits And Rarity</h2>
          </div>
          <div class="traits">${traitsMarkup}</div>
        </div>
      </section>

      <section id="roadmap">
        <div class="wrap">
          <div class="section-head">
            <h2>Roadmap</h2>
          </div>
          <div class="roadmap">${roadmapMarkup}</div>
        </div>
      </section>

      <section class="final-cta">
        <div class="wrap">
          <h2>Join The Hoard</h2>
          <p>ZkRott is getting ready for its genesis mint.</p>
          <div class="hero-actions centered">
            <a class="btn" href="https://x.com/0x_zkrott?s=11" target="_blank" rel="noopener">X / Twitter</a>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-row">
        <p>&copy; 2026 ZkRott. All rights reserved.</p>
        <div class="socials">
          <a href="https://x.com/0x_zkrott?s=11" target="_blank" rel="noopener">X</a>
          <a href="#mint">Mint</a>
        </div>
      </div>
    </footer>
  </div>
`;
