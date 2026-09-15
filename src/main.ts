import "./styles.css";

type Stat = { value: string; label: string };
type Trait = { index: string; title: string; values: string[] };
type RoadmapItem = { phase: string; status: string; title: string; items: string[] };
type NftItem = { id: string; name: string; image: string };

const collectionStats: Stat[] = [
  { value: "1,111", label: "Total Supply" },
  { value: "$2.26", label: "Mint Price" },
  { value: "Live", label: "Public Mint" },
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
    status: "Complete",
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
    status: "Live",
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
    status: "Next",
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
    status: "Future",
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
        <img src="${item.image}" alt="${item.name}" width="560" height="560" loading="lazy" decoding="async" />
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
        <div class="trait-copy">${trait.values.join(" / ")}</div>
      </div>
    `,
  )
  .join("");

const roadmapMarkup = roadmap
  .map(
    (item) => `
      <div class="roadmap-item">
        <span class="phase">${item.phase} · ${item.status}</span>
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
    <div class="site-header">
      <a class="logo" href="#top" aria-label="ZkRott home">
        <img class="logo-image" src="/assets/zkrott-logo.jpeg" alt="" width="128" height="128" />
        <span>ZkRott</span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-nav">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="site-nav" id="primary-nav" aria-label="Primary navigation">
        <a href="#collection">Collection</a>
        <a href="#gallery">Gallery</a>
        <a href="#lore">Lore</a>
        <a href="#traits">Traits</a>
        <a href="#roadmap">Roadmap</a>
        <a class="nav-mint" href="https://opensea.io/collection/zkrott" target="_blank" rel="noopener">Mint</a>
      </div>
    </div>

    <div class="site-main" id="top">
      <div class="hero" id="mint">
        <div class="wrap hero-grid">
          <div>
            <div class="eyebrow"><span class="status-dot"></span> Public mint live on OpenSea</div>
            <h1>ZkRott</h1>
            <div class="hero-copy">
              1,111 rotten misfits born from the Zero Key blackout. Every crooked face carries a lost memory
              from a city that refused to stay dead.
            </div>
            <div class="hero-actions">
              <a class="btn btn-primary" href="https://opensea.io/collection/zkrott" target="_blank" rel="noopener">Mint on OpenSea</a>
              <a class="btn" href="#gallery">View Collection</a>
            </div>
            <div class="mint-note">Official mint only: opensea.io/collection/zkrott</div>
          </div>

          <div class="mint-card" aria-label="Featured ZkRott NFT">
            <div class="art-frame">
              <img class="hero-nft" src="/assets/zkrott-hero.jpg" alt="ZkRott zombie NFT character wearing headphones" width="900" height="900" decoding="async" fetchpriority="high" />
            </div>
            <div class="mint-details">
              <div class="detail-row"><span>Supply</span><strong>1,111</strong></div>
              <div class="detail-row"><span>Chain</span><strong>Robinhood</strong></div>
              <div class="detail-row"><span>Mint Price</span><strong>$2.26</strong></div>
              <div class="detail-row"><span>Status</span><strong>Public Mint Live</strong></div>
            </div>
            <div class="contract-details">
              <span>Contract Address</span>
              <code>0x506588ac3c426468092e7ddb640d2bb1a429cd03</code>
            </div>
          </div>
        </div>
      </div>

      <div id="collection">
        <div class="wrap">
          <div class="section-head">
            <h2>The Collection</h2>
          </div>
          <div class="stats">${statsMarkup}</div>
        </div>
      </div>

      <div id="gallery">
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
      </div>

      <div class="story" id="lore">
        <div class="wrap story-grid">
          <div>
            <div class="eyebrow"><span class="status-dot"></span> Transmission recovered</div>
            <h2>Born In The Noise</h2>
          </div>
          <div class="terminal">
            <div class="story-line">ZkRott woke beneath a city with no name, no pulse, and one memory trapped between his teeth.</div>
            <div class="story-line">His long skull, hollow nose, torn neck, and uneven grin mark him as a first Rott, survivors remade by the Zero Key blackout.</div>
            <div class="story-line">Every outfit, eye, scar, and mouth relic carries proof of the life he lost.</div>
            <div class="story-line">Some versions remember war, music, hunger, rebellion, or flooded tunnels. Others remember nothing.</div>
            <div class="story-line">The ZK mark on his chest binds him to the machine that killed the city and brought him back.</div>
            <div class="story-line">Now he walks from district to district, collecting broken memories before the Hollow Crown steals them.</div>
            <div class="story-line">He cannot truly die, but each return costs part of himself. When the last memory fades, only the grin remains.</div>
          </div>
        </div>
      </div>

      <div id="traits">
        <div class="wrap">
          <div class="section-head">
            <h2>Traits And Rarity</h2>
          </div>
          <div class="traits">${traitsMarkup}</div>
        </div>
      </div>

      <div id="roadmap">
        <div class="wrap">
          <div class="section-head">
            <h2>Roadmap</h2>
          </div>
          <div class="roadmap">${roadmapMarkup}</div>
        </div>
      </div>

      <div class="final-cta">
        <div class="wrap">
          <h2>Join The Hoard</h2>
          <div class="cta-copy">Public mint is live on Robinhood Chain. Mint only through the official OpenSea collection.</div>
          <div class="hero-actions centered">
            <a class="btn btn-primary" href="https://opensea.io/collection/zkrott" target="_blank" rel="noopener">Mint on OpenSea</a>
            <a class="btn" href="https://x.com/zkrott_labz?s=11" target="_blank" rel="noopener">Follow on X</a>
          </div>
        </div>
      </div>
    </div>

    <div class="site-footer">
      <div class="footer-row">
        <div>&copy; 2026 ZkRott. All rights reserved.</div>
        <div class="socials">
          <a href="https://x.com/zkrott_labz?s=11" target="_blank" rel="noopener">X</a>
          <a href="https://opensea.io/collection/zkrott" target="_blank" rel="noopener">Mint</a>
        </div>
      </div>
    </div>
  </div>
`;
const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const primaryNav = document.querySelector<HTMLElement>("#primary-nav");

const setMenuOpen = (isOpen: boolean) => {
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
};

menuToggle?.addEventListener("click", () => {
  setMenuOpen(!document.body.classList.contains("menu-open"));
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});
const carousel = document.querySelector<HTMLElement>("[data-nft-carousel]");
const firstCarouselTrack = carousel?.querySelector<HTMLElement>(".nft-track");

const waitForCarouselImages = async () => {
  const images = Array.from(firstCarouselTrack?.querySelectorAll<HTMLImageElement>("img") ?? []);

  await Promise.all(
    images.map(async (image) => {
      if (image.complete) {
        return;
      }

      if ("decode" in image) {
        try {
          await image.decode();
          return;
        } catch {
          // Fall through to load/error listeners so one bad image cannot stop the carousel.
        }
      }

      await new Promise<void>((resolve) => {
        if (image.complete) {
          resolve();
          return;
        }

        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      });
    }),
  );
};

let carouselDistance = 0;
let carouselFrame = 0;

const updateCarouselMotion = () => {
  carouselFrame = 0;

  if (!carousel || !firstCarouselTrack) {
    return;
  }

  const distance = Math.round(firstCarouselTrack.scrollWidth);

  if (distance <= 0) {
    carousel.classList.remove("is-ready");
    return;
  }

  if (carousel.classList.contains("is-ready") && Math.abs(distance - carouselDistance) < 2) {
    return;
  }

  carouselDistance = distance;

  const pixelsPerSecond = 38;
  const duration = Math.max(42, distance / pixelsPerSecond);

  carousel.style.setProperty("--carousel-distance", `${distance}px`);
  carousel.style.setProperty("--carousel-duration", `${duration.toFixed(2)}s`);
  carousel.classList.add("is-ready");
};

const scheduleCarouselUpdate = () => {
  if (carouselFrame) {
    return;
  }

  carouselFrame = window.requestAnimationFrame(updateCarouselMotion);
};

void waitForCarouselImages().then(scheduleCarouselUpdate);

window.addEventListener("load", scheduleCarouselUpdate);
window.addEventListener("resize", scheduleCarouselUpdate);

if ("ResizeObserver" in window && firstCarouselTrack) {
  new ResizeObserver(scheduleCarouselUpdate).observe(firstCarouselTrack);
}
