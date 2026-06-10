/**
 * Curated Unsplash photography for the site.
 *
 * HOW THIS WORKS
 * - Values are base Unsplash CDN URLs (no query string). The <Photo> component
 *   appends sizing params (`auto=format&fit=crop&w=…&q=…`) via a custom loader,
 *   so images are served responsively straight from Unsplash's CDN.
 * - Every <Photo> sits on top of a branded gradient fallback, so if any single
 *   image is unavailable the layout still looks intentional and on-brand.
 * - Images are fetched by the browser at request time (not during the build),
 *   so they render in any deployment with normal outbound network access.
 *
 * To use your own photography, drop files in /public and replace the URLs here
 * (e.g. "/photos/hero.jpg"), or swap in different Unsplash photo IDs.
 */

const U = "https://images.unsplash.com/photo-";

export const photos = {
  // Hero + atmospheric scenes
  heroSmile: `${U}1629909613654-28e377c37b09`, // bright dental visit
  heroPatient: `${U}1588776814546-1ffcf47267a5`, // modern clinic detail
  clinicInterior: `${U}1606811971618-4486d14f3f99`, // bright treatment room
  careDetail: `${U}1609840114035-3c981b782dfe`, // gentle care close-up
  reception: `${U}1631815588090-d4bfec5b1ccb`, // welcoming reception

  // Section imagery
  comfort: `${U}1581585095917-2d5cd1b2d6d0`,
  technology: `${U}1571772996211-2f02c9727629`,
  family: `${U}1595152772835-219674b2a8a6`,

  // CTA background
  ctaBackdrop: `${U}1629909615184-74f495363b67`,

  // Doctor portraits (professional headshots — replace with real team photos)
  doctors: {
    "dr-kapil-mangla": `${U}1612349317150-e413f6a5b16d`,
    "dr-sushmita-rath": `${U}1559839734-2b71ea197ec2`,
    "dr-kamran-shaikh": `${U}1622253692010-333f2da6031d`,
  } as Record<string, string>,

  // Reviewer avatars (stable Unsplash portraits)
  reviewers: [
    `${U}1517841905240-472988babdf9`,
    `${U}1507003211169-0a1dd7228f2d`,
    `${U}1438761681033-6461ffad8d80`,
    `${U}1463453091185-61582044d556`,
    `${U}1534528741775-53994a69daeb`,
    `${U}1506794778202-cad84cf45f1d`,
    `${U}1487412720507-e7ab37603c6f`,
  ],

  // Service imagery, keyed by slug
  services: {
    "general-dentistry": `${U}1609840114035-3c981b782dfe`,
    "cosmetic-dentistry": `${U}1607619056574-7b8d3ee536b2`,
    orthodontics: `${U}1593022357180-3f6f9d6e9b3e`,
    "oral-surgery": `${U}1581595219315-a187dd40c322`,
    "pediatric-dentistry": `${U}1595152772835-219674b2a8a6`,
    "teeth-cleaning": `${U}1606265752439-1f18756aa5fc`,
    "crowns-bridges": `${U}1598256989800-fe5f95da9787`,
  } as Record<string, string>,
};

export const getDoctorPhoto = (slug: string) => photos.doctors[slug];
export const getServicePhoto = (slug: string) => photos.services[slug];
export const getReviewerPhoto = (i: number) => photos.reviewers[i % photos.reviewers.length];
