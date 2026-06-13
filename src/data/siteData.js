export const atlasNodes = [
  {
    id: 'technology',
    label: 'Technology',
    short: 'Systems',
    x: 24,
    y: 28,
    color: '#7C8CFF',
    insight: 'Technical fluency turns ideas into repeatable systems. It determines speed, scalability, and what can be tested in public.'
  },
  {
    id: 'design',
    label: 'Design',
    short: 'Experience',
    x: 52,
    y: 44,
    color: '#F1D38A',
    insight: 'Design is where value becomes visible. Interface, flow, and taste decide whether a product feels useful quickly enough to become a habit.'
  },
  {
    id: 'media',
    label: 'Media',
    short: 'Distribution',
    x: 78,
    y: 24,
    color: '#75E0C2',
    insight: 'Media creates attention and context. Distribution changes whether creative work remains private craft or becomes culture.'
  },
  {
    id: 'business',
    label: 'Business',
    short: 'Revenue',
    x: 23,
    y: 72,
    color: '#FF9B73',
    insight: 'Business models decide durability. Revenue design, incentives, and pricing determine whether good creative work can keep existing.'
  },
  {
    id: 'creativity',
    label: 'Creativity',
    short: 'Originality',
    x: 74,
    y: 74,
    color: '#D8A8FF',
    insight: 'Creativity gives the work a reason to exist. It creates the point of view that cannot be reduced to a feature checklist.'
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    short: 'Execution',
    x: 50,
    y: 14,
    color: '#F4F1E8',
    insight: 'Enterprise is the discipline of turning taste into a system: operations, positioning, partnerships, and long-term momentum.'
  }
];

export const cases = [
  {
    slug: 'spotify',
    name: 'Spotify',
    category: 'Subscription Music',
    headline: 'Spotify as an audio operating system.',
    deck: 'A piracy-era utility became a daily audio habit through access, personalisation, and ritualised listening identity.',
    gradient: 'spotify',
    tags: ['Freemium', 'Music Rights', 'Retention', 'Audio Platform'],
    stats: [
      ['Core Model', 'Free-to-paid subscriptions plus advertising'],
      ['Primary Habit', 'Daily listening and discovery loops'],
      ['Strategic Tension', 'Loved product, rights-heavy economics']
    ],
    summary: 'Spotify made legal listening more convenient than piracy and then deepened the product through algorithmic discovery, playlists, social sharing, and expansion into podcasts and audiobooks.',
    businessModel: [
      'The free tier reduces acquisition friction and teaches the product before asking for payment.',
      'Premium monetises removed friction: fewer ads, offline listening, higher control, and better mobility.',
      'Advertising keeps non-paying users economically useful while keeping the top of the funnel wide.'
    ],
    growthEngine: [
      'Personalised discovery creates a sense that the product understands the listener.',
      'Wrapped-style rituals turn private behaviour into social identity and organic distribution.',
      'Creator and podcast expansion increases time spent beyond licensed music.'
    ],
    visualSystem: 'Dark audio-console energy, neon green accents, playlist layers, and motion that feels like sound waves turning into strategy.',
    moat: 'Brand habit, personalisation data, playlists, cross-device ubiquity, and catalogue access.',
    risk: 'Music rights keep gross margins pressured and limit how much value the platform can fully capture.',
    takeaway: 'Access wins the first adoption battle. Habit, identity, and personalisation decide whether the product becomes infrastructure.',
    chapters: [
      {
        title: 'The product promise',
        body: 'Spotify removed the moral and practical friction around music access. The promise was not ownership, files, or even discovery at first. It was immediate listening without the mess: no downloads, no broken libraries, no searching across illegal sources, no device anxiety.'
      },
      {
        title: 'The conversion architecture',
        body: 'The free tier is a carefully designed compromise. It gives enough value to build habit, but preserves enough friction to make premium feel rational rather than luxurious. Ads, skip limits, offline listening, and mobility become the economic pressure points.'
      },
      {
        title: 'The retention layer',
        body: 'Spotify compounds through memory. Playlists, liked songs, listening history, recommendations, and yearly rituals make the product feel increasingly personal. Leaving is not just switching a utility; it is abandoning a record of taste.'
      },
      {
        title: 'The strategic constraint',
        body: 'Spotify owns the interface and the data, but not the most essential input: music rights. That creates a fascinating business tension where the product experience can be world-class while the economics remain structurally compressed.'
      }
    ],
    principles: [
      'Make the legal behaviour more convenient than the illegal one.',
      'Use free access to create habit, then price the removal of friction.',
      'Turn personal data into emotional memory, not just recommendation accuracy.',
      'Expand the category when supplier economics limit margin.'
    ]
  },
  {
    slug: 'patreon',
    name: 'Patreon',
    category: 'Creator Membership',
    headline: 'Patreon and the membership layer.',
    deck: 'A platform for turning audience affection into predictable creator income, community, and deeper fan relationships.',
    gradient: 'patreon',
    tags: ['Membership', 'Creator Economy', 'Community', 'Recurring Revenue'],
    stats: [
      ['Core Model', 'Platform fees on recurring memberships'],
      ['Primary Habit', 'Creator updates and community belonging'],
      ['Strategic Tension', 'Creator independence versus platform reliance']
    ],
    summary: 'Patreon is strongest when it feels like creator infrastructure rather than a social network: tiers, payments, private posts, and recurring audience relationships.',
    businessModel: [
      'The platform earns when creators earn, aligning revenue with membership growth.',
      'Creators bring their existing audiences, which makes distribution both powerful and uneven.',
      'Tiering converts emotional closeness into different levels of economic support.'
    ],
    growthEngine: [
      'Creators promote membership through YouTube, podcasts, newsletters, and social platforms.',
      'Community rewards make fans feel like participants rather than passive consumers.',
      'Stable monthly income gives creators confidence to invest in better work.'
    ],
    visualSystem: 'Deep charcoal, warm coral signals, membership-card layouts, and intimate editorial pacing.',
    moat: 'Creator trust, payment workflows, audience migration, and the emotional cost of moving paying members.',
    risk: 'Creators want ownership and may resist dependence if the platform feels too controlling.',
    takeaway: 'Creative businesses do not always need massive reach. A smaller audience with high commitment can become a stronger enterprise.',
    chapters: [
      {
        title: 'The product promise',
        body: 'Patreon gives creators a business layer that sits beside their public platforms. The user does not come to Patreon for entertainment discovery first; they come because a creator has earned enough trust elsewhere to invite deeper support.'
      },
      {
        title: 'The conversion architecture',
        body: 'The membership tier is the core design object. It translates intangible closeness into concrete offers: early access, private posts, community, behind-the-scenes process, recognition, or direct participation.'
      },
      {
        title: 'The retention layer',
        body: 'Retention depends on emotional continuity. The member needs to feel that support sustains the work and that membership creates a closer relationship than passive following.'
      },
      {
        title: 'The strategic constraint',
        body: 'Patreon must be useful without feeling like it owns the creator. If the platform becomes too visible, too restrictive, or too expensive, its best creators may look for more independent infrastructure.'
      }
    ],
    principles: [
      'Monetise depth of relationship, not just audience size.',
      'Let creators bring demand; make the platform excellent at conversion and operations.',
      'Design tiers as emotional products, not only pricing tables.',
      'Protect creator ownership as part of the value proposition.'
    ]
  },
  {
    slug: 'canva',
    name: 'Canva',
    category: 'Product-Led Design',
    headline: 'Canva and the template economy.',
    deck: 'A design platform that expanded the market by making professional-looking output fast, collaborative, and non-intimidating.',
    gradient: 'canva',
    tags: ['PLG', 'Templates', 'Collaboration', 'Design Access'],
    stats: [
      ['Core Model', 'Freemium software with paid teams and assets'],
      ['Primary Habit', 'Fast visual creation for everyday communication'],
      ['Strategic Tension', 'Accessibility versus professional depth']
    ],
    summary: 'Canva moved expertise into defaults, templates, and guided workflows. It does not ask everyone to become a designer; it helps more people produce designed communication.',
    businessModel: [
      'Free creation builds volume and familiarity before paid conversion.',
      'Premium assets, brand kits, teams, and workflow features monetise deeper use.',
      'Education and small-business adoption create broad bottom-up distribution.'
    ],
    growthEngine: [
      'Templates create instant time-to-value and search-driven intent capture.',
      'Collaboration turns individual designs into shared team workflows.',
      'Published outputs carry the product into social, business, and education contexts.'
    ],
    visualSystem: 'Dark studio base with cyan, violet, and gold swatches that feel creative without becoming playful clutter.',
    moat: 'Template supply, usability, brand workflows, collaboration, and everyday design habit.',
    risk: 'As Canva moves upmarket, it must keep simplicity while serving more complex professional needs.',
    takeaway: 'Creative tools scale when they package expertise into systems that make users feel more capable immediately.',
    chapters: [
      {
        title: 'The product promise',
        body: 'Canva promises confidence. It does not tell non-designers to become experts before they can make something good. It packages visual taste into templates, constraints, defaults, and editing patterns that make the user feel capable within minutes.'
      },
      {
        title: 'The conversion architecture',
        body: 'The free product creates creation volume. Premium conversion happens when users need brand consistency, better assets, collaboration, export control, or repeated professional use.'
      },
      {
        title: 'The retention layer',
        body: 'Retention grows as Canva becomes a visual operating system for schools, teams, small businesses, and creators. Brand kits, shared folders, templates, and recurring formats make it part of everyday communication.'
      },
      {
        title: 'The strategic constraint',
        body: 'Canva has to move upmarket without becoming intimidating. The company must preserve the emotional simplicity that made it powerful while adding depth for teams and professional workflows.'
      }
    ],
    principles: [
      'Do not sell tools; sell the feeling of being capable.',
      'Move expertise into defaults, templates, and guided constraints.',
      'Let collaboration turn a personal utility into team infrastructure.',
      'Protect simplicity even when the product becomes more powerful.'
    ]
  },
  {
    slug: 'substack',
    name: 'Substack',
    category: 'Direct Publishing',
    headline: 'Substack and the writer-owned audience.',
    deck: 'A publishing system built around trust, email, paid newsletters, and the unbundling of media brands into individual voices.',
    gradient: 'substack',
    tags: ['Publishing', 'Subscriptions', 'Audience Ownership', 'Media Unbundling'],
    stats: [
      ['Core Model', 'Platform fees on paid newsletter subscriptions'],
      ['Primary Habit', 'Reading trusted writers directly'],
      ['Strategic Tension', 'Ownership promise versus network dependence']
    ],
    summary: 'Substack turns expertise, voice, and reader trust into a paid media product. Its power is simplicity: write, publish, email, charge.',
    businessModel: [
      'The platform benefits when individual writers convert loyal readers into subscribers.',
      'Email gives creators a portable, high-intent relationship that feels more owned than social reach.',
      'Paid subscriptions make editorial depth economically meaningful even at smaller scale.'
    ],
    growthEngine: [
      'Writers bring reputation and audience from other platforms.',
      'Recommendations add discovery to the direct publishing model.',
      'The inbox creates repeat contact without depending entirely on feeds.'
    ],
    visualSystem: 'Ink-dark publishing room, amber highlights, narrow reading columns, and subscription-led emphasis.',
    moat: 'Writer identity, reader trust, payment simplicity, email lists, and recommendation loops.',
    risk: 'Independent publishing still needs discovery, and platform-level moderation or policy choices can affect brand trust.',
    takeaway: 'The most valuable media asset can be a direct relationship with a specific audience that trusts a specific voice.',
    chapters: [
      {
        title: 'The product promise',
        body: 'Substack promises writers a direct publishing business without the operational burden of building one from scratch. The emotional offer is independence: your voice, your readers, your revenue.'
      },
      {
        title: 'The conversion architecture',
        body: 'The free newsletter builds trust and cadence. Paid conversion happens when the reader believes the writer offers unusual insight, access, consistency, or identity value that deserves direct support.'
      },
      {
        title: 'The retention layer',
        body: 'Retention is built through rhythm. The inbox creates recurring presence, and the writer-reader relationship becomes stronger when the work feels personal, useful, and hard to substitute.'
      },
      {
        title: 'The strategic constraint',
        body: 'Substack sits between tool and network. The more it becomes a discovery platform, the more it gains growth power; the more it behaves like a platform, the more it complicates its independence story.'
      }
    ],
    principles: [
      'Trust can be a stronger media moat than scale.',
      'Use free publishing to prove value before asking for subscription.',
      'Make payment feel like patronage and access, not only content purchase.',
      'Treat audience portability as a product feature.'
    ]
  },
  {
    slug: 'notion',
    name: 'Notion',
    category: 'Flexible Productivity',
    headline: 'Notion and the user-made system.',
    deck: 'A workspace product whose flexibility lets users define its meaning, from personal dashboards to company operating systems.',
    gradient: 'notion',
    tags: ['Freemium', 'Productivity', 'Templates', 'Community'],
    stats: [
      ['Core Model', 'Freemium with team, enterprise, and AI upgrades'],
      ['Primary Habit', 'Organising personal and team knowledge'],
      ['Strategic Tension', 'Flexibility can become complexity']
    ],
    summary: 'Notion is a modular environment rather than a narrow tool. Documents, databases, tasks, and wikis combine into systems users feel they own.',
    businessModel: [
      'Free personal use creates attachment before team-level expansion.',
      'Paid plans monetise collaboration, permissions, administration, and AI assistance.',
      'The more a workspace stores, the harder it becomes to casually replace.'
    ],
    growthEngine: [
      'Templates reduce blank-page friction and make expert workflows reusable.',
      'Community creators teach use cases that expand the product without centralised marketing alone.',
      'Individual adoption spreads into teams when personal systems become shared infrastructure.'
    ],
    visualSystem: 'Black-and-white editorial base with electric blue and paper-gray layers, like a living operating manual.',
    moat: 'Workspace data, custom systems, community templates, and team workflows.',
    risk: 'The product must keep flexibility legible so new users do not feel abandoned in an empty canvas.',
    takeaway: 'A product becomes powerful when users can project their own operating model onto it.',
    chapters: [
      {
        title: 'The product promise',
        body: 'Notion promises a workspace that adapts to the user instead of forcing a single workflow. It becomes notes, tasks, databases, wikis, dashboards, and operating manuals depending on the user’s ambition.'
      },
      {
        title: 'The conversion architecture',
        body: 'Personal use creates attachment and experimentation. Paid conversion happens when the workspace becomes collaborative, permissioned, automated, or business-critical.'
      },
      {
        title: 'The retention layer',
        body: 'Retention comes from accumulated structure. Once a user has built a system of pages, databases, templates, and team knowledge, the product becomes part of how they think and coordinate.'
      },
      {
        title: 'The strategic constraint',
        body: 'Flexibility is both the magic and the risk. Notion must keep the blank canvas inspiring rather than overwhelming, especially for users who want outcomes more than configuration.'
      }
    ],
    principles: [
      'Give users building blocks, then let them create meaning.',
      'Use community templates to teach the product at scale.',
      'Convert when personal systems become shared infrastructure.',
      'Balance expressive power with strong onboarding examples.'
    ]
  },
  {
    slug: 'netflix',
    name: 'Netflix',
    category: 'Streaming Content',
    headline: 'Netflix and the attention engine.',
    deck: 'A media company operating like software: recommendation, global distribution, original content, and retention economics.',
    gradient: 'netflix',
    tags: ['Streaming', 'Content Strategy', 'Recommendation', 'Retention'],
    stats: [
      ['Core Model', 'Tiered subscriptions and advertising-supported plans'],
      ['Primary Habit', 'Evening entertainment and continuous discovery'],
      ['Strategic Tension', 'Content spend versus subscriber retention']
    ],
    summary: 'Netflix turned entertainment into a software system. The shows matter, but the interface, recommendation layer, release strategy, and global infrastructure determine durability.',
    businessModel: [
      'Subscriptions monetise ongoing access, while ad-supported tiers widen the addressable market.',
      'Original content reduces reliance on licensing and creates exclusive reasons to stay.',
      'Global scale spreads content investment across many markets.'
    ],
    growthEngine: [
      'Recommendations convert catalogue depth into personalised front doors.',
      'Original releases create global cultural moments and reduce churn.',
      'Product polish removes friction from choosing, watching, and continuing.'
    ],
    visualSystem: 'Cinema-black, red signal lighting, title-card stacks, and motion that feels like browsing a premium content slate.',
    moat: 'Brand, recommendation data, global distribution, original library, and viewing habit.',
    risk: 'Content investment is expensive, and competition makes attention harder to retain.',
    takeaway: 'Modern media businesses are creative systems plus software systems. Distribution and personalisation are part of the product.',
    chapters: [
      {
        title: 'The product promise',
        body: 'Netflix promises effortless entertainment. The value is not simply a library; it is the confidence that something worth watching is close, available, and easy to continue across devices.'
      },
      {
        title: 'The conversion architecture',
        body: 'The subscription model asks users to pay for ongoing access and convenience. Tiering, profiles, device support, and ad-supported options allow Netflix to price different levels of tolerance and household behaviour.'
      },
      {
        title: 'The retention layer',
        body: 'Retention is driven by a constant supply of perceived novelty, personalised recommendations, and cultural moments that make cancellation feel premature.'
      },
      {
        title: 'The strategic constraint',
        body: 'Netflix’s moat requires expensive renewal. Original content, global licensing, and marketing sustain attention, but each also raises the cost of staying essential.'
      }
    ],
    principles: [
      'Make choice feel easier, not larger.',
      'Use personalisation to turn a catalogue into a front door.',
      'Invest in exclusivity when licensed supply becomes fragile.',
      'Treat content strategy and product experience as one system.'
    ]
  }
];

export const journey = [
  ['Foundations', 'Computer Science Undergraduate', 'Algorithms, systems thinking, and the discipline of turning complex problems into clean architectures.'],
  ['Craft', 'UI/UX Designer', 'Translating logic into experience, and learning how interface decisions shape adoption.'],
  ['Synthesis', 'Product Thinker', 'Connecting design choices to acquisition, retention, monetisation, and strategic positioning.'],
  ['Inquiry', 'Researcher', 'Studying creator economies, platform dynamics, and media businesses shaping digital culture.'],
  ['Direction', 'Aspiring Creative Entrepreneur', 'Building toward ventures at the intersection of media, technology, and culture.']
];
