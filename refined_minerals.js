/**
 * REFINED MINERALS
 *
 * Purchased from the Mineral Trader using raw minerals (5 raw → 1 refined).
 * Used as currency at The Forger to craft equipment.
 */

const REFINED_MINERALS = [
    // Scrapyard (Tier 1)
    { name: "Refined Aetherite", desc: "Purified aetherite, compressed and ready for forging.", image: "images/IMAGE.gif", mineralCost: { mineral: "Aetherite", category: "tier1", count: 5 }, refinedMineral: true },
    { name: "Refined Bronzewisp", desc: "Dense, smooth bronzewisp stripped of impurities.", image: "images/IMAGE.gif", mineralCost: { mineral: "Bronzewisp", category: "tier1", count: 5 }, refinedMineral: true },
    { name: "Refined Cindergem", desc: "Polished cindergem, its ember shimmer stabilized.", image: "images/IMAGE.gif", mineralCost: { mineral: "Cindergem", category: "tier1", count: 5 }, refinedMineral: true },

    // Old Battlefield (Tier 2)
    { name: "Refined Duskquartz", desc: "Crystal-clear duskquartz, precision-cut for components.", image: "images/IMAGE.gif", mineralCost: { mineral: "Duskquartz", category: "tier2", count: 5 }, refinedMineral: true },
    { name: "Refined Emberlith", desc: "Processed emberlith suitable for high-grade alloys.", image: "images/IMAGE.gif", mineralCost: { mineral: "Emberlith", category: "tier2", count: 5 }, refinedMineral: true },
    { name: "Refined Frostveil", desc: "Reactive frostveil powder, ground to molecular precision.", image: "images/IMAGE.gif", mineralCost: { mineral: "Frostveil", category: "tier2", count: 5 }, refinedMineral: true },

    // Downtown (Tier 3)
    { name: "Refined Gloomstone", desc: "Luminous gloomstone, polished to a perfect lattice.", image: "images/IMAGE.gif", mineralCost: { mineral: "Gloomstone", category: "tier3", count: 5 }, refinedMineral: true },
    { name: "Refined Hexsilica", desc: "Transparent hexsilica, cleaved along perfect planes.", image: "images/IMAGE.gif", mineralCost: { mineral: "Hexsilica", category: "tier3", count: 5 }, refinedMineral: true },
    { name: "Refined Iridionite", desc: "Paper-thin iridionite sheets, ideal for insulation layers.", image: "images/IMAGE.gif", mineralCost: { mineral: "Iridionite", category: "tier3", count: 5 }, refinedMineral: true },

    // Orbital Station (Tier 4)
    { name: "Refined Jetspinel", desc: "Iron-rich jetspinel, smelted to a mirror finish.", image: "images/IMAGE.gif", mineralCost: { mineral: "Jetspinel", category: "tier4", count: 5 }, refinedMineral: true },
    { name: "Refined Kryptoglass", desc: "Magnetically aligned kryptoglass, humming with charge.", image: "images/IMAGE.gif", mineralCost: { mineral: "Kryptoglass", category: "tier4", count: 5 }, refinedMineral: true },
    { name: "Refined Lumenore", desc: "Color-shifting lumenore, its lattice perfectly aligned.", image: "images/IMAGE.gif", mineralCost: { mineral: "Lumenore", category: "tier4", count: 5 }, refinedMineral: true },

    // Wasteland (Tier 5)
    { name: "Refined Moonshardite", desc: "Lightweight moonshardite, strong and resilient.", image: "images/IMAGE.gif", mineralCost: { mineral: "Moonshardite", category: "tier5", count: 5 }, refinedMineral: true },
    { name: "Refined Nightpyre", desc: "Dark nightpyre, separated and purified.", image: "images/IMAGE.gif", mineralCost: { mineral: "Nightpyre", category: "tier5", count: 5 }, refinedMineral: true },
    { name: "Refined Obsidryl", desc: "Dense obsidryl, chemically stable.", image: "images/IMAGE.gif", mineralCost: { mineral: "Obsidryl", category: "tier5", count: 5 }, refinedMineral: true },

    // Undercity (Tier 6)
    { name: "Refined Prismalune", desc: "Prismalune ore, separated into pure components.", image: "images/IMAGE.gif", mineralCost: { mineral: "Prismalune", category: "tier6", count: 5 }, refinedMineral: true },
    { name: "Refined Quellium", desc: "Pure quellium, bright and malleable.", image: "images/IMAGE.gif", mineralCost: { mineral: "Quellium", category: "tier6", count: 5 }, refinedMineral: true },
    { name: "Refined Riftmarble", desc: "Volatile riftmarble, sealed in a containment vial.", image: "images/IMAGE.gif", mineralCost: { mineral: "Riftmarble", category: "tier6", count: 5 }, refinedMineral: true },

    // Industrial Zone (Tier 7)
    { name: "Refined Starvitrine", desc: "Chromium-plated starvitrine ingot, corrosion-proof.", image: "images/IMAGE.gif", mineralCost: { mineral: "Starvitrine", category: "tier7", count: 5 }, refinedMineral: true },
    { name: "Refined Thorncrystal", desc: "Thorncrystal concentrate, dense and heat-resistant.", image: "images/IMAGE.gif", mineralCost: { mineral: "Thorncrystal", category: "tier7", count: 5 }, refinedMineral: true },
    { name: "Refined Umbracite", desc: "Refined umbracite, glowing faintly under UV.", image: "images/IMAGE.gif", mineralCost: { mineral: "Umbracite", category: "tier7", count: 5 }, refinedMineral: true },

    // Frozen Reach (Tier 8)
    { name: "Refined Vortexium", desc: "Smelted vortexium bar, 99.9% pure. Worth a fortune.", image: "images/IMAGE.gif", mineralCost: { mineral: "Vortexium", category: "tier8", count: 5 }, refinedMineral: true },
    { name: "Refined Wyrmstone", desc: "Wyrmstone ingot, impossibly dense and heat-resistant.", image: "images/IMAGE.gif", mineralCost: { mineral: "Wyrmstone", category: "tier8", count: 5 }, refinedMineral: true },
    { name: "Refined Xanthryx", desc: "Faceted xanthryx, cut to amplify energy flow.", image: "images/IMAGE.gif", mineralCost: { mineral: "Xanthryx", category: "tier8", count: 5 }, refinedMineral: true },

    // Neon Strip (Tier 9)
    { name: "Refined Yonderite", desc: "Stabilized yonderite compound. Handle with extreme care.", image: "images/IMAGE.gif", mineralCost: { mineral: "Yonderite", category: "tier9", count: 5 }, refinedMineral: true },
    { name: "Refined Zephyrsalt", desc: "Zephyrsalt alloy, shimmering blue-black.", image: "images/IMAGE.gif", mineralCost: { mineral: "Zephyrsalt", category: "tier9", count: 5 }, refinedMineral: true },
    { name: "Refined Isotope Lace", desc: "Isotope lace sheets, rated for extreme temperatures.", image: "images/IMAGE.gif", mineralCost: { mineral: "Isotope Lace", category: "tier9", count: 5 }, refinedMineral: true },

    // Dead Zone (Tier 10)
    { name: "Refined Archive Shard", desc: "Flawless archive shard. Harder than anything known.", image: "images/IMAGE.gif", mineralCost: { mineral: "Archive Shard", category: "tier10", count: 5 }, refinedMineral: true },
    { name: "Refined Strata-Null", desc: "Perfect strata-null crystal, resonating with strange energy.", image: "images/IMAGE.gif", mineralCost: { mineral: "Strata-Null", category: "tier10", count: 5 }, refinedMineral: true },
    { name: "Refined Compound 33", desc: "Pure compound 33, cut to channel raw power.", image: "images/IMAGE.gif", mineralCost: { mineral: "Compound 33", category: "tier10", count: 5 }, refinedMineral: true },
];
