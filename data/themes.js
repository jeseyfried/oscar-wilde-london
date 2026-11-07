/* The ten themes of the map, explained. Shown in the full-width "Themes" carousel at the top of the page.
   id      = the map layer (see LAYERS in js/core.js)
   ch      = where the theme comes from in von Eckardt, Gilman and Chamberlin (1987)
   lede    = one sentence on the theme's geography
   body    = paragraphs (plain text; *asterisks* become italics)
   stops   = places to start with: [place id, short label]
   img     = background: the place whose picture to use (n = which of its pictures), a large image URL,
             the part of the picture to keep in view (CSS background-position), and an optional zoom to crop edges */
window.OWL_THEMES = [
  {
    id: 'wilde',
    ch: "Introduction and chapter 1, 'Art and Life' (pp. 1–27)",
    lede: "Wilde's London was a westward arc, from rooms off the Strand to a house in Chelsea, with a daily round through Piccadilly, St James's and the West End theatres. In 1895 the same map turned into a route through police courts and prisons.",
    body: [
      "He arrived in the autumn of 1879 and took rooms with the painter Frank Miles at 13 Salisbury Street, a lane running down from the Strand to the river, among the theatres and a short walk from the newspapers of Fleet Street. Within a year the two men had moved west to Tite Street in Chelsea, where Whistler, Godwin and Sargent were building and painting beside the Thames. Wilde married Constance Lloyd in 1884 at St James's, Sussex Gardens, near her family's home at Lancaster Gate in Bayswater, and the couple settled at 16 Tite Street, his home until 1895. His mother lived nearby in Oakley Street. From Chelsea his day ran east: the Café Royal on Regent Street, the clubs and hotels of St James's and Albemarle Street, and the St James's and Haymarket theatres, where his four society comedies opened between 1892 and 1895.",
      "In the spring of 1895 the map turns inside out. The card the Marquess of Queensberry left at the Albemarle Club led to Queensberry's committal at Marlborough Street police court and to the libel trial at the Old Bailey. Wilde was then arrested at the Cadogan Hotel, charged at Bow Street and held on remand in Holloway. After the two criminal trials he went to Pentonville and Wandsworth, and in November he stood in convict dress on the platform at Clapham Junction on his way to Reading. These were the institutions on the city's edge, far from the West End front doors he knew. On 19 May 1897 he walked out of Pentonville to Stewart Headlam's house in Bloomsbury, and that night he took the boat to Dieppe."
    ],
    stops: [
      ['salisbury-st', "First rooms, shared with Frank Miles, 1879"],
      ['tite-16', "The family home, 1884–95"],
      ['st-james-theatre', "Lady Windermere's Fan and Earnest"],
      ['albemarle-club', "Queensberry's card, February 1895"],
      ['cadogan-hotel', "Wilde's arrest, 5 April 1895"],
      ['clapham-junction', "Mocked on the platform, November 1895"]
    ],
    img: { place: 'royal-academy', n: 0, pos: '62% 35%',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Frith_A_Private_View.jpg/1920px-Frith_A_Private_View.jpg' }
  },
  {
    id: 'queer',
    ch: "Chapter 12, 'Juliets of a Night' (pp. 238–261), with the histories of queer London in the bibliography",
    lede: "Queer London had a geography before it had a name: the promenades, arcades, restaurants and baths of the West End, all within a walk of Wilde's clubs and theatres, and the courts and newspapers that exposed them.",
    body: [
      "Men who desired men met in plain sight. The colonnade of the Quadrant on Regent Street, Piccadilly, Burlington Arcade, the promenade of the Empire in Leicester Square and the paths of Hyde Park near the Knightsbridge Barracks, where guardsmen made extra money, were all known meeting grounds. The Jermyn Street Turkish bath was a male world of its own. The 1895 trials gave this map its best-known addresses: the private rooms of Kettner's and the Solferino in Soho, where Alfred Taylor introduced Wilde to young men, the Savoy and Albemarle hotels, and Taylor's curtained rooms in Little College Street, behind Westminster Abbey.",
      "The layer also traces how the law closed in. Ernest Boulton and Frederick Park were arrested in women's dress at the Strand Theatre in 1870. The painter Simeon Solomon was arrested off Oxford Street in 1873. The Cleveland Street scandal of 1889 ran from a house in Fitzrovia to the Central Telegraph Office in the City and the Marlborough Club on Pall Mall. In 1885 Parliament had passed the Labouchère amendment, which made any 'gross indecency' between men a crime, in public or in private, and which was used to convict Wilde. After 1895 queer London went quieter: in 1897 George Ives founded the secret Order of Chaeronea from Primrose Hill. Women's networks, such as the poet Amy Levy's in Bloomsbury, left fainter traces on the map."
    ],
    stops: [
      ['regent-quadrant', "A meeting ground under the colonnade"],
      ['kettners', "Private rooms and the Parker brothers"],
      ['little-college', "Behind Westminster Abbey, 1892–93"],
      ['strand-theatre', "An arrest in women's dress, 1870"],
      ['cleveland-st', "The telegraph boys' scandal, 1889"],
      ['chaeronea', "A secret society, 1897"]
    ],
    img: { place: 'regent-quadrant', n: 0, pos: '50% 55%',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/John_Woods_-_Quadrant%2C_Regent_Street_-_B1977.14.17991_-_Yale_Center_for_British_Art.jpg' }
  },
  {
    id: 'stage',
    ch: "Chapter 3, 'Call of the Stage' (pp. 54–79), and chapter 9, 'Sounds of London' (pp. 178–199)",
    lede: "London's theatres crowded into about a square mile between the Strand and Leicester Square. Wilde set out to conquer them, and he was competing with the music halls for the same evening crowds.",
    body: [
      "The Strand and the streets off it held the Lyceum, where Henry Irving and Ellen Terry played Shakespeare and melodrama; the Gaiety, home of burlesque and then of musical comedy; and the Savoy, built for Gilbert and Sullivan and the first public building in London lit entirely by electricity (1881). Patience, the opera that mocked Wilde's Aestheticism in 1881, ran at the Opera Comique nearby. West of Charing Cross, society drama gathered at the St James's and the Haymarket, where Wilde's comedies opened. The new Shaftesbury Avenue and Charing Cross Road added more theatres at the end of the 1880s, among them the Palace, where Salome was banned in rehearsal in 1892. Ibsen arrived at small houses on the margins: A Doll's House at the Novelty in Great Queen Street, Ghosts at the Royalty in Soho.",
      "Around Leicester Square the Alhambra and the Empire offered ballet and variety, and in their promenades a good deal more. Further out, the music halls served their own neighbourhoods: the Canterbury in Lambeth, the first building designed as a music hall (1852); Sadler's Wells in Clerkenwell; and Emma Cons's temperance music hall at the Old Vic. On the map the West End's stalls and the working-class halls are a short walk apart, and Wilde's first nights shared the city with Dan Leno and Marie Lloyd."
    ],
    stops: [
      ['lyceum', "Irving and Terry"],
      ['savoy-theatre', "Gilbert and Sullivan, and electric light"],
      ['haymarket', "A Woman of No Importance; An Ideal Husband"],
      ['palace-theatre', "Bernhardt in rehearsal, June 1892"],
      ['empire', "Ballet, variety and the promenade"],
      ['canterbury', "The first music hall, 1852"]
    ],
    img: { place: 'gattis', n: 0, pos: '50% 45%',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Walter_Sickert_-_Gatti%E2%80%99s_Hungerford_Palace_of_Varieties._Second_Turn_of_Katie_Lawrence_-_1960.43_-_Yale_University_Art_Gallery.jpg' }
  },
  {
    id: 'aesthetic',
    ch: "Chapter 2, 'Lilies and Sunflowers' (pp. 28–53)",
    lede: "Aestheticism lived in the west of the city. The artists lived in Chelsea and Kensington, and the galleries and shops that sold the look to everyone else were on Bond Street, Regent Street and Oxford Street.",
    body: [
      "Chelsea's riverside was the movement's home. Rossetti and Swinburne lived at Tudor House on Cheyne Walk and Carlyle in Cheyne Row. Whistler painted the river from Lindsey Row, turning old Battersea Bridge and the fireworks at Cremorne into nocturnes. Godwin built Whistler the White House in Tite Street, and Wilde followed them into the street. In Kensington and Holland Park, successful painters built studio palaces, such as Leighton's house with its Arab Hall. In Prince's Gate, Whistler painted the Peacock Room for the shipowner Frederick Leyland. The South Kensington Museum served as the nation's school of design.",
      "The West End was where Aestheticism became a style anyone could buy. The Grosvenor Gallery on New Bond Street showed Burne-Jones and Whistler from 1877, and Wilde reviewed its opening exhibition as an undergraduate. Liberty's on Regent Street sold the fabrics and the blue-and-white china, and Morris & Co. kept a showroom on Oxford Street. The suburbs built the look in red brick at Bedford Park, the first garden suburb, at Turnham Green. Upriver at Hammersmith, William Morris joined art to socialism at Kelmscott House. Nothing in this layer lies east of St Paul's."
    ],
    stops: [
      ['white-house', "Godwin's house for Whistler"],
      ['lindsey-row', "Where the nocturnes were painted"],
      ['grosvenor-gallery', "'Greenery-yallery', from 1877"],
      ['liberty', "The art warehouse, 1875"],
      ['leighton-house', "A painter's palace"],
      ['kelmscott', "Morris, socialism and the Press"]
    ],
    img: { place: 'lindsey-row', n: 0, pos: '50% 50%',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/James_McNeill_Whistler_-_Nocturne-_Battersea_Bridge_-_Google_Art_Project.jpg/1920px-James_McNeill_Whistler_-_Nocturne-_Battersea_Bridge_-_Google_Art_Project.jpg' }
  },
  {
    id: 'letters',
    ch: "Chapter 4, 'Readers and Writers' (pp. 80–96)",
    lede: "Literary London ran along one line, the Strand and Fleet Street, from the publishers of the West End to the presses of Ludgate Hill. In the 1890s the newest writing moved west, to Vigo Street and Bloomsbury.",
    body: [
      "Wilde made his living from print long before his plays paid. He reviewed for the Pall Mall Gazette, whose offices stood just off the Strand. From 1887 to 1889 he edited The Woman's World for Cassell's at La Belle Sauvage on Ludgate Hill. He published The Picture of Dorian Gray as a book with Ward, Lock, off Fleet Street. Fleet Street was the newspaper industry's own street, and in Wine Office Court the Cheshire Cheese was where Yeats, Dowson, Lionel Johnson and the Rhymers' Club read their poems to each other. The Strand had the bookshops, and Holywell Street behind it had the trade in pornography.",
      "In the 1890s the new literature moved west. John Lane and Elkin Mathews's Bodley Head in Vigo Street, off Regent Street, published Wilde's Salome and The Sphinx, and then The Yellow Book. Leonard Smithers sold decadence and erotica from the Royal Arcade off Bond Street. Bloomsbury supplied the readers and the New Women writers: the British Museum Reading Room was where Amy Levy, Eleanor Marx and Bernard Shaw worked. The new Charing Cross Road, opened in 1887, filled with secondhand booksellers. Reading this layer from east to west traces the shift from Victorian journalism to the little magazines of the fin de siècle."
    ],
    stops: [
      ['pall-mall-gazette', "Wilde's reviews and Stead's campaigns"],
      ['woman-world', "Wilde as editor, 1887–89"],
      ['cheshire-cheese', "Where Yeats, Dowson and Johnson read"],
      ['bodley-head', "Salome, The Sphinx and Beardsley"],
      ['british-museum', "Where the New Women wrote"],
      ['holywell-st', "The pornography trade"]
    ],
    img: { place: 'fleet-street', n: 1, pos: '50% 45%', zoom: 1.32,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Gezicht_op_Fleet_Street_te_Londen%2C_RP-F-00-8439.jpg/1920px-Gezicht_op_Fleet_Street_te_Londen%2C_RP-F-00-8439.jpg' }
  },
  {
    id: 'growth',
    ch: "Chapter 5, 'London's Growth' (pp. 97–125), and chapter 6 (pp. 126–145)",
    lede: "Between 1879 and 1897 London rebuilt itself, with new streets, new railways under and over the ground, and suburbs for the millions who could now travel to work. This layer shows how the places in the other themes were joined up, and how fast they were changing.",
    body: [
      "Wilde's London was a building site. The Victoria Embankment (1870) and the Chelsea Embankment (1874) walled in the Thames and carried Bazalgette's new sewers. Shaftesbury Avenue and Charing Cross Road were driven through the slums of St Giles and Soho in the late 1880s, and Northumberland Avenue filled with six-hundred-room hotels. Electric light came to the Savoy Theatre in 1881. Tower Bridge, opened in 1894, wrapped modern steel in Gothic stone. In 1889 the new London County Council gave the metropolis its first elected government.",
      "Transport redrew the map. The Metropolitan Railway (1863) had opened the first underground line, and the Cheap Trains Act of 1883 required cheap workmen's fares, which carried working families out to new suburbs like Walthamstow and Tottenham. In 1890 the City and South London Railway opened the world's first deep electric tube, running from the City to Stockwell. The middle classes shopped at the new department stores, Whiteley's in Bayswater (where Wilde himself shopped) and Harrods in Knightsbridge. The ceremonial heart of the city, from Trafalgar Square to Buckingham Palace and Westminster Abbey, staged Victoria's two Jubilees, in 1887 and 1897."
    ],
    stops: [
      ['embankment', "Bazalgette's river wall"],
      ['northumberland-ave', "The Grand, the Victoria, the Metropole"],
      ['baker-street', "The first underground, 1863"],
      ['stockwell', "The City and South London Railway, 1890"],
      ['tower-bridge', "Steel in Gothic dress, 1894"],
      ['whiteleys', "The Universal Provider"]
    ],
    img: { place: 'tower-bridge', n: 0, pos: '50% 55%',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Tower_bridge_works_1892.jpg' }
  },
  {
    id: 'shame',
    ch: "Chapter 6, '…And London's Shame' (pp. 126–145), and chapter 7, 'The Lower Classes' (pp. 146–166)",
    lede: "Slums lay a few hundred yards behind the West End's theatres. Two miles east was a city of docks, sweatshops and lodging houses, which the West End discovered with horror in the 1880s.",
    body: [
      "Poverty was not only an East End matter. Seven Dials and Bedfordbury sat directly behind the theatres of Covent Garden, Lisson Grove behind Marylebone, and Fore Street in Lambeth across the river from Westminster. But the East End, from Whitechapel and Spitalfields to the docks at Poplar, became the great subject of the period. George Sims's How the Poor Live and Andrew Mearns's The Bitter Cry of Outcast London both appeared in 1883, and Charles Booth's survey coloured London street by street from wealth to want. Then came the Whitechapel murders of 1888, which turned these streets into a national spectacle.",
      "The map also shows the responses. Jewish refugees from Eastern Europe landed at the river stairs and found shelter in Leman Street. From 1884 Toynbee Hall in Commercial Street brought university men to live among the poor, and from 1887 the People's Palace on the Mile End Road offered concerts and a library. Dr Barnardo photographed the children he took in at Stepney. Workers organised: the matchgirls struck at Bryant & May in Bow in 1888 and the dockers in 1889. In 1891 Wilde published his own answer, The Soul of Man under Socialism. The new London County Council cleared the Old Nichol in Shoreditch and built its first great housing estate on the site."
    ],
    stops: [
      ['seven-dials', "The rookery behind the theatres"],
      ['commercial-st', "The university settlement, 1884"],
      ['leman-street', "Shelter for immigrants from Eastern Europe"],
      ['bryant-may', "The matchgirls' strike, 1888"],
      ['docks', "The dockers' tanner, 1889"],
      ['old-nichol', "Slum clearance and the first council estate"]
    ],
    img: { place: 'seven-dials', n: 0, pos: '50% 40%',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Dudley_St.%2C_Seven_Dials_Wellcome_L0000881.jpg' }
  },
  {
    id: 'night',
    ch: "Chapter 12, 'Juliets of a Night' (pp. 238–261)",
    lede: "After dark the most fashionable streets in London became its most notorious market for sex. How that market was policed, and how it was reported, set the terms for Wilde's own prosecution.",
    body: [
      "The guidebooks of the day, as the book shows, found 'Juliets of a night' all over the city. They were in Bond Street and Burlington Arcade; in the Haymarket, which smelled of hay by day; on the Strand; in the promenades of the Empire and the Alhambra; and down at the docks along the Ratcliffe Highway. Prostitution was the city's open secret, and it occupied the same West End streets as the theatres, restaurants and clubs. Contemporary estimates of the numbers involved ran as high as 80,000 women, and the figures themselves were weapons in moral campaigns.",
      "In July 1885 W. T. Stead's 'Maiden Tribute of Modern Babylon' in the Pall Mall Gazette described the purchase of a thirteen-year-old girl in Marylebone. The outcry pushed through the Criminal Law Amendment Act, which raised the age of consent to sixteen and, through the Labouchère amendment, also criminalised sex between men. In 1888 the Whitechapel murders turned the poorest women of Spitalfields into a national spectacle. A year later the Cleveland Street scandal showed how the same laws, the same police and the same newspapers would treat men."
    ],
    stops: [
      ['haymarket-street', "Hay by day, sex by night"],
      ['burlington-arcade', "A double life upstairs"],
      ['empire', "The promenade behind the circle"],
      ['pall-mall-gazette', "A campaign that changed the law, 1885"],
      ['ratcliffe-highway', "The sailors' high street"],
      ['millers-court', "The last Whitechapel murder, 1888"]
    ],
    img: { place: 'embankment', n: 0, pos: '50% 50%',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Reflections_on_the_Thames%2C_Westminster_-_Grimshaw%2C_John_Atkinson.jpg/1920px-Reflections_on_the_Thames%2C_Westminster_-_Grimshaw%2C_John_Atkinson.jpg' }
  },
  {
    id: 'pleasure',
    ch: "Chapter 10, 'Virtues of Sport' (pp. 200–218), and chapter 11, 'Jumbo and Sundry Diversions' (pp. 219–237)",
    lede: "Leisure had its own map. Clubs and restaurants filled St James's and the West End, while sport and mass entertainment went to the parks and suburbs, often at the end of a railway line.",
    body: [
      "For a man of Wilde's set, pleasure meant St James's. There was clubland along Pall Mall and St James's Street, and the Marlborough Club for the Prince of Wales's circle. For dinner there were the Café Royal, Kettner's and Romano's. The Pelican Club in Gerrard Street, where Queensberry boxed, gave way in 1891 to the National Sporting Club in Covent Garden, which made prize-fighting respectable under the rules that bore Queensberry's name. Rotten Row in Hyde Park was the Season's parade ground for horses, carriages and courtesans, and in 1895 it filled with bicycles.",
      "Sport and spectacle moved out along the railways and omnibus routes. W. G. Grace drew crowds to Lord's in St John's Wood, Test cricket came to the Oval in Kennington, lawn tennis began at Wimbledon in 1877, and the Boat Race started from Putney. Excursion trains carried crowds to the Crystal Palace at Sydenham, and omnibuses took families to the Zoo in Regent's Park, where the sale of Jumbo the elephant to Barnum in 1882 caused a national uproar. Wilde stood for aesthetics against athletics, a contrast the cartoonists enjoyed. Queensberry's world of the ring and the turf ran through the same streets, and it would bring him down."
    ],
    stops: [
      ['st-james-st', "White's, Brooks's and Pall Mall"],
      ['national-sporting-club', "Boxing under the Queensberry Rules"],
      ['rotten-row', "The Season's parade, and bicycles"],
      ['lords', "W. G. Grace"],
      ['crystal-palace', "Fireworks, concerts and the Cup Final"],
      ['zoo', "The elephant sold to Barnum, 1882"]
    ],
    img: { place: 'oval', n: 0, pos: '50% 50%',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Kennington_oval_1891.jpg/1920px-Kennington_oval_1891.jpg' }
  },
  {
    id: 'faith',
    ch: "Chapter 8, 'Religion, Spirits, and Hosanna' (pp. 167–177)",
    lede: "The Church of England had lost the poor. London filled the gap with giant chapels, street armies, settlements, séances and Theosophy, each with its own corner of the map.",
    body: [
      "Westminster Abbey and St Paul's staged the rituals of state, including Victoria's Jubilee services of 1887 and 1897, but the religious energy of the period lay elsewhere. South of the river, Charles Spurgeon preached to congregations of some six thousand at the Metropolitan Tabernacle by the Elephant and Castle. From headquarters in Queen Victoria Street, William Booth's Salvation Army marched with brass bands into the East End. Hawksmoor's Christ Church in Spitalfields stood among the lodging houses, where the homeless slept on the churchyard seats, and Barnardo ran his homes in Stepney.",
      "The western and northern suburbs had their own seekers. Madame Blavatsky's Theosophical Society made its London headquarters at Annie Besant's house in Avenue Road, St John's Wood. Constance Wilde joined the Society, and Gandhi, a law student at the Inner Temple, met Blavatsky and Besant in London. Spiritualist séances were held in middle-class drawing rooms. Wilde's own path led to the Catholic Church: on the day of his release in 1897 he wrote to the Jesuits at Farm Street in Mayfair asking to make a retreat, and was refused. He was received into the Church on his deathbed in Paris in 1900."
    ],
    stops: [
      ['westminster-abbey', "The Jubilee services"],
      ['metropolitan-tabernacle', "Spurgeon's six thousand"],
      ['salvation-army', "General Booth's army"],
      ['spitalfields', "Hawksmoor's church among the lodging houses"],
      ['avenue-road', "Blavatsky and Besant"],
      ['farm-street', "Wilde's request, 1897"]
    ],
    img: { place: 'spitalfields', n: 0, pos: '50% 30%',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Christ_Church_exterior%2C_Spitalfields%2C_London%2C_UK_-_Diliff.jpg/1920px-Christ_Church_exterior%2C_Spitalfields%2C_London%2C_UK_-_Diliff.jpg' }
  }
];
