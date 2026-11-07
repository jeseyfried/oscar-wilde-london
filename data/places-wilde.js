/* Wilde's footsteps: homes, haunts, premieres, hotels, courts and prisons.
   Keys: id, n name, a address, ll [lat,lng], L layers (first = primary), y [from,to] years the place
   matters on the timeline, st survives|site|approx, s one-line summary, t paragraphs,
   ev [[year,date,text]] events, b pages in the book, r further-reading keys (sources.js),
   p people (people.js), q Wikimedia Commons search terms for illustrations. */
window.OWL_PLACES = (window.OWL_PLACES || []).concat([
{
  id: "salisbury-st", n: "13 Salisbury Street", a: "Salisbury Street, off the Strand (demolished; site near Shell Mex House)",
  ll: [51.5094, -0.1212], L: ["wilde"], y: [1879, 1880], st: "site",
  s: "Wilde's first London rooms, shared with the painter Frank Miles in the autumn of 1879.",
  t: ["The authors open their book at this address. In the fall of 1879, fresh from Oxford with a first in Greats and the Newdigate Prize, Wilde took rooms here with his Oxford friend Frank Miles, a fashionable portraitist of society beauties. The house, called Thames House, stood in a narrow street sloping from the Strand down to the river, a district the book calls fashionable at the time.",
  "Miles was sketching Lillie Langtry and other 'professional beauties', and through his studio Wilde met them all. He had little money, sold a poem now and then, and set about making his own life a work of art. The book's whole frame, from 1879 to 1897, runs from this house to Pentonville."],
  ev: [[1879, "autumn", "Wilde and Frank Miles take rooms at 13 Salisbury Street."]],
  b: ["ix", 6, 7], r: ["ellmann", "sturgis"], p: ["miles", "langtry"],
  q: "Salisbury Street Strand London|Adelphi Strand 19th century"
},
{
  id: "tite-1", n: "1 Tite Street (Keats House)", a: "1 Tite Street, now 44 Tite Street, Chelsea",
  ll: [51.4847, -0.1625], L: ["wilde", "aesthetic"], y: [1880, 1881], st: "survives",
  s: "Frank Miles's Godwin-designed studio house, where Wilde lodged in 1880–81 and met London society.",
  t: ["E. W. Godwin designed this studio house for Frank Miles, and the book reproduces his drawing of its Aesthetic, 'vegetable' facade, much modified before it was built. Miles and Wilde moved here from Salisbury Street in 1880, and Wilde named the house after Keats.",
  "Here the young aesthete received the beauties Miles painted, including Lillie Langtry, and prepared his first volume, Poems (1881). The arrangement ended in 1881, after Miles's father objected to the book's sensuality. Three years later Wilde was back on the same street, at No. 16, as a married man. The book notes that the street sat in a district of artists' studios, with Chelsea's slums close by."],
  ev: [[1880, "August", "Wilde and Miles move to Tite Street."], [1881, "", "Wilde leaves Miles's house after the row over Poems."]],
  b: [11, 13, 14], r: ["ellmann", "soros", "sturgis"], p: ["miles", "godwin", "langtry"],
  q: "44 Tite Street Chelsea|Keats House Tite Street"
},
{
  id: "tite-16", n: "16 Tite Street: the Wildes' house", a: "16 Tite Street, now 34 Tite Street, Chelsea (blue plaque)",
  ll: [51.4854, -0.1627], L: ["wilde", "aesthetic"], y: [1884, 1895], st: "survives",
  s: "Oscar and Constance Wilde's 'House Beautiful', decorated by Godwin, and auctioned off while Wilde awaited trial.",
  t: ["After their marriage in May 1884 the Wildes took this narrow red-brick 'Queen Anne' row house and, with Constance's allowance from her grandfather, had Godwin (helped by Whistler) transform it. The book walks through it: Wilde's red-and-yellow study on the ground floor, with a cast of the Hermes of Praxiteles, a Simeon Solomon, a Monticelli, Beardsley's drawing of Mrs Patrick Campbell and Thomas Carlyle's writing desk. Upstairs was a white drawing room, then bedrooms and nurseries for Cyril (born 1885) and Vyvyan (1886).",
  "Guests included John Bright, Arthur Balfour, Browning, Swinburne, Mark Twain, Ellen Terry, Sarah Bernhardt and Lillie Langtry. In 1891 Lionel Johnson brought Lord Alfred Douglas to tea here, and in June 1894 the Marquess of Queensberry came to the door to threaten Wilde in person. The book points out that Justice Wills, who would sentence him, lived on the same street.",
  "On 24 April 1895, with Wilde in Holloway, the bailiffs held a chaotic sale of the contents to satisfy his creditors. Pictures, manuscripts, presentation copies and the boys' toys went for almost nothing, and souvenir hunters carried off what they could."],
  ev: [[1884, "May", "Oscar and Constance move in after their honeymoon."], [1885, "5 June", "Cyril Wilde born."], [1886, "3 November", "Vyvyan Wilde born."], [1891, "", "Lionel Johnson brings Lord Alfred Douglas to meet Wilde."], [1894, "30 June", "Queensberry confronts Wilde in his own house."], [1895, "24 April", "Bankruptcy sale of the house's contents."]],
  b: [13, 14, 15, 16, 17, 97, 256, 257], r: ["ellmann", "moyle", "soros", "sturgis"], p: ["constance", "godwin", "whistler", "douglas", "queensberry", "johnson", "wills"],
  q: "34 Tite Street Oscar Wilde|Tite Street Chelsea Oscar Wilde plaque"
},
{
  id: "white-house", n: "The White House (Whistler's house)", a: "35 Tite Street, Chelsea (demolished 1960s)",
  ll: [51.4850, -0.1621], L: ["aesthetic", "wilde"], y: [1878, 1879], st: "site",
  s: "Godwin's radical white-brick house for Whistler, lost to bankruptcy after the Ruskin trial.",
  t: ["Godwin designed this severe, asymmetrical house with a green slate roof for Whistler in 1877–78. The Metropolitan Board of Works disliked its plainness and forced changes. The book mentions it as an example of Godwin's Japanese-influenced work.",
  "Whistler had barely moved in when the Ruskin libel trial ruined him. He won a farthing in damages, went bankrupt in 1879, and the house was sold. The street became an artists' colony: Whistler kept studios nearby, John Singer Sargent worked there, and in 1884 the Wildes arrived at No. 16."],
  ev: [[1878, "", "Whistler moves into Godwin's White House."], [1879, "", "Whistler bankrupt; house sold."]],
  b: [13, 34, 49], r: ["soros", "lambourne"], p: ["whistler", "godwin", "sargent"],
  q: "White House Tite Street Whistler Godwin"
},
{
  id: "charles-st", n: "9 Charles Street, Mayfair", a: "9 Charles Street, off Berkeley Square",
  ll: [51.5087, -0.1478], L: ["wilde"], y: [1883, 1884], st: "survives",
  s: "Wilde's bachelor lodgings after America and Paris, where he lived during his engagement.",
  t: ["Back from his American lecture tour and from Paris (where, the book notes, he met Hugo, Verlaine, Zola and Mallarmé), Wilde took rooms here in 1883. He lectured round the provinces on his 'Impressions of America' and on house decoration, and courted Constance Lloyd, who lived across the park at Lancaster Gate.",
  "The address is a reminder that between 1879 and 1884 Wilde lived in lodgings, borrowed rooms and other people's houses. He had a West End address but very little money."],
  ev: [[1883, "", "Wilde takes rooms at 9 Charles Street."]],
  b: [13], r: ["ellmann", "sturgis"], p: [], q: "Charles Street Mayfair"
},
{
  id: "lancaster-gate", n: "100 Lancaster Gate", a: "Lancaster Gate, Bayswater",
  ll: [51.5118, -0.1777], L: ["wilde"], y: [1881, 1884], st: "survives",
  s: "Home of Constance Lloyd's grandfather, where Wilde courted the woman he married.",
  t: ["Constance Mary Lloyd lived here with her grandfather, the barrister John Horatio Lloyd. Her allowance from him paid for the decoration of Tite Street, as the book records. Wilde first called on her in 1881 and they became engaged in Dublin in November 1883.",
  "Constance was not only Wilde's wife. She took up the causes of the day, including the Rational Dress Society and Liberal women's politics, and the book notes that she joined the Theosophical Society. Her biographer Franny Moyle has made the case for her as an independent figure."],
  ev: [[1883, "November", "Wilde and Constance become engaged."]],
  b: [13, 14, 167], r: ["moyle", "ellmann"], p: ["constance"], q: "Lancaster Gate Bayswater"
},
{
  id: "st-james-sussex", n: "St James's Church, Sussex Gardens", a: "Sussex Gardens, Paddington",
  ll: [51.5134, -0.1758], L: ["wilde"], y: [1884, 1884], st: "survives",
  s: "Where Oscar Wilde married Constance Lloyd on 29 May 1884.",
  t: ["The parish church of the Lloyds' Bayswater neighbourhood. The wedding on 29 May 1884 drew a crowd of the curious; the press reported Constance's dress, designed with Wilde's input. After a Paris honeymoon the couple moved into Tite Street.",
  "The book dates the move and the marriage to May 1884, the start of what it treats as Wilde's settled, prosperous decade."],
  ev: [[1884, "29 May", "Oscar Wilde marries Constance Lloyd."]],
  b: [13], r: ["moyle", "ellmann"], p: ["constance"], q: "St James Church Sussex Gardens Paddington"
},
{
  id: "ovington-sq", n: "1 Ovington Square", a: "Ovington Square, Knightsbridge",
  ll: [51.4966, -0.1655], L: ["wilde"], y: [1879, 1886], st: "survives",
  s: "Lady Wilde ('Speranza') and Willie Wilde's first London home.",
  t: ["The book notes that Oscar's elder brother Willie was already in London as a journalist and that their widowed mother had followed him, hoping to recreate the literary salon she had kept in Dublin. Jane Francesca Wilde, the nationalist poet 'Speranza', held Saturday receptions here, in dim rooms crowded with writers, actors and the hopeful.",
  "The Wildes were Irish arrivals in a city the book describes as home to more Irishmen than Dublin. Lady Wilde's salons gave Oscar an early London platform, but the family was never secure and was always short of money."],
  ev: [[1879, "", "Lady Wilde and Willie settle in Knightsbridge."]],
  b: [1, 126], r: ["ellmann", "sturgis"], p: ["ladywilde", "williewilde"], q: "Ovington Square Knightsbridge"
},
{
  id: "oakley-st", n: "146 Oakley Street", a: "146 Oakley Street, Chelsea",
  ll: [51.4847, -0.1681], L: ["wilde"], y: [1887, 1896], st: "survives",
  s: "Lady Wilde's last home. Oscar took refuge here, 'a wounded stag', when hotels turned him away on bail.",
  t: ["Lady Wilde moved here with Willie in 1887, a short walk from Oscar's house in Tite Street. On 7 May 1895, released on bail between his trials, Wilde was hounded from hotel to hotel by Queensberry's men until he arrived here late at night, exhausted. Willie said he had come like a wounded stag.",
  "Lady Wilde urged him not to flee: if he stayed, even if he went to prison, she said, he would always be her son. She died here in February 1896 while he was in Reading Gaol. The prison authorities refused his request to visit her."],
  ev: [[1887, "", "Lady Wilde moves to Oakley Street."], [1895, "7 May", "Wilde, on bail, takes refuge with his mother and brother."], [1896, "3 February", "Lady Wilde dies."]],
  b: [1], r: ["ellmann", "bristow", "sturgis"], p: ["ladywilde", "williewilde"], q: "Oakley Street Chelsea"
},
{
  id: "grosvenor-gallery", n: "Grosvenor Gallery", a: "135–137 New Bond Street (facade survives)",
  ll: [51.5130, -0.1460], L: ["aesthetic", "wilde"], y: [1877, 1890], st: "survives",
  s: "Sir Coutts Lindsay's 'greenery-yallery' gallery, home of Aestheticism, which Wilde reviewed as an undergraduate.",
  t: ["Opened in 1877 as an alternative to the Royal Academy, the Grosvenor showed Burne-Jones, Whistler and the painters of the Aesthetic movement. Wilde, still at Oxford, wrote a long review of the first exhibition and wore a coat cut like a cello to the private view.",
  "By 1881 the gallery stood for the whole Aesthetic craze. Gilbert's 'greenery-yallery, Grosvenor Gallery, foot-in-the-grave young man' in Patience pointed straight at it, and the book quotes Labouchère's Truth calling Ellen Terry the actress the Grosvenor age 'must necessarily adore'. Whistler's Nocturne in Black and Gold, the painting that started the Ruskin trial, hung here in 1877."],
  ev: [[1877, "May", "Grosvenor Gallery opens; Whistler's nocturnes provoke Ruskin."], [1881, "", "Patience mocks the 'Grosvenor Gallery' young man."]],
  b: [32, 49, 63], r: ["lambourne", "ellmann"], p: ["whistler", "ruskin", "burnejones"],
  q: "Grosvenor Gallery Bond Street 1877|Grosvenor Gallery interior engraving"
},
{
  id: "royal-academy", n: "Royal Academy, Burlington House", a: "Burlington House, Piccadilly",
  ll: [51.5094, -0.1394], L: ["aesthetic", "wilde"], y: [1879, 1897], st: "survives",
  s: "Every May the Academy's summer exhibition opened the Season, and in 1881 Frith painted Wilde holding court at its private view.",
  t: ["The book lists the Royal Academy exhibitions among the fixtures of the London Season. W. P. Frith's satirical painting A Private View at the Royal Academy, 1881 puts Wilde at its centre, lecturing a cluster of admirers on art while Gladstone, Browning, Trollope and Lillie Langtry look on. Frith said he meant to mock the 'craze for aestheticism'.",
  "The book reproduces a similar scene, The Private View from the World's 1882 Christmas issue, with Wilde leaning on his elbow in the corner, Whistler near him and the Prince of Wales at the centre. For a young man with one slim book of poems, Wilde had made himself remarkably easy to recognise."],
  ev: [[1881, "May", "Wilde at the Academy private view, as painted by Frith."]],
  b: [50, 116], r: ["lambourne", "mendelssohn"], p: ["langtry"],
  q: "Frith Private View Royal Academy 1881|Burlington House Royal Academy 19th century"
},
{
  id: "opera-comique", n: "Opera Comique: Patience", a: "Strand / Wych Street (demolished 1902; site under Aldwych)",
  ll: [51.5128, -0.1165], L: ["stage", "wilde"], y: [1878, 1881], st: "site",
  s: "The ramshackle 'theatre in a tunnel' where Gilbert and Sullivan's Patience, the great satire of Aestheticism, opened in April 1881.",
  t: ["Reached by underground passages from the Strand, the Opera Comique housed the first four Gilbert and Sullivan operas, as the book notes: The Sorcerer, H.M.S. Pinafore, The Pirates of Penzance and Patience. Patience opened on 23 April 1881. Its poet Bunthorne, 'a most intense young man', was taken by the public as Wilde (and by others as Swinburne or Whistler).",
  "The book argues that Patience fixed the middle-class image of Aestheticism, and that D'Oyly Carte spotted its publicity value. He sent Wilde to America in 1882 as a living advertisement for the New York production. Wilde turned the joke into a career."],
  ev: [[1881, "23 April", "Patience opens at the Opera Comique."]],
  b: [12, 54, 178, 180], r: ["mander", "mendelssohn"], p: ["gilbert", "sullivan", "doylycarte"],
  q: "Patience Gilbert Sullivan 1881 poster|Opera Comique Strand theatre"
},
{
  id: "adelphi", n: "Adelphi Theatre: Vera cancelled", a: "Strand",
  ll: [51.5105, -0.1235], L: ["stage", "wilde"], y: [1881, 1881], st: "survives",
  s: "Wilde's first play, Vera, or the Nihilists, was announced here for December 1881 and quietly withdrawn.",
  t: ["Wilde's melodrama of Russian revolutionaries was due at the Adelphi in December 1881. After the assassination of Tsar Alexander II that year, and with a Danish-born princess of Wales whose sister was the new Tsarina, the production was dropped. The play reached the stage only in New York in 1883, where it failed.",
  "The book is unsparing about Vera and The Duchess of Padua. It calls them old-fashioned melodramas in stilted, oratorical language, and says Wilde needed another decade to find 'the key to the theater of his day'. He sent Ellen Terry a copy of Vera bound with her name stamped in gold."],
  ev: [[1881, "December", "Vera withdrawn before its London premiere."]],
  b: [58], r: ["powell", "ellmann"], p: ["terry"], q: "Adelphi Theatre Strand 19th century"
},
{
  id: "princes-hall", n: "Prince's Hall, Piccadilly", a: "190–195 Piccadilly (Royal Institute of Painters in Water Colours building)",
  ll: [51.5089, -0.1370], L: ["wilde", "aesthetic"], y: [1883, 1885], st: "survives",
  s: "Hall of the Royal Institute of Painters in Water Colours, where Wilde lectured on America and Whistler gave his 'Ten O'Clock'.",
  t: ["Wilde gave his first London lecture on his 'Impressions of America' here in July 1883. In 1883 the hall also housed the Rational Dress Society's exhibition, a cause close to Constance and, later, to Wilde as editor of The Woman's World.",
  "On 20 February 1885 Whistler gave his 'Ten O'Clock' lecture here, so called because it began late enough not to spoil dinner. It was a manifesto for art for art's sake and a barely veiled attack on Wilde. Wilde reviewed it, admiringly and mischievously, in the Pall Mall Gazette. The book quotes their sniping in the World: 'A poor thing, Oscar—but for once, I suppose, your own.'"],
  ev: [[1883, "July", "Wilde lectures on his Impressions of America."], [1885, "20 February", "Whistler's 'Ten O'Clock' lecture."]],
  b: [34, 211, 266], r: ["ellmann", "moyle"], p: ["whistler", "constance"], q: "Royal Institute of Painters in Water Colours Piccadilly building"
},
{
  id: "woman-world", n: "Cassell & Co.: The Woman's World", a: "La Belle Sauvage Yard, Ludgate Hill (destroyed 1941)",
  ll: [51.5140, -0.1040], L: ["letters", "wilde"], y: [1887, 1889], st: "site",
  s: "Wilde's only salaried job: editor of Cassell's magazine The Woman's World, 1887–89.",
  t: ["From 1887 Wilde went to Cassell's offices off Ludgate Hill two or three mornings a week to edit The Lady's World, which he renamed The Woman's World and turned into a magazine of women's opinion as well as fashion. He commissioned work from women writers, including Amy Levy, Olive Schreiner and Marie Corelli, and wrote his own 'Literary and Other Notes'.",
  "The book quotes his praise there for the working dress of the London milkwoman and the North-Country factory girl: 'only the idle classes who dress badly'. It is evidence of a practical, reforming side to Wilde's Aestheticism."],
  ev: [[1887, "November", "First issue of The Woman's World under Wilde."], [1889, "", "Wilde gives up the editorship."]],
  b: [211], r: ["ellmann", "dncj", "sturgis"], p: ["levy", "corelli"], q: "Woman's World magazine Cassell 1888|La Belle Sauvage Ludgate Hill"
},
{
  id: "langham", n: "The Langham Hotel", a: "1c Portland Place, Langham Place",
  ll: [51.5179, -0.1440], L: ["letters", "wilde"], y: [1889, 1889], st: "survives",
  s: "Scene of the 1889 dinner that produced both The Picture of Dorian Gray and The Sign of Four.",
  t: ["On 30 August 1889 J. M. Stoddart, managing editor of the Philadelphia monthly Lippincott's, gave a dinner here for Arthur Conan Doyle and Oscar Wilde. The book tells the story from Doyle's side. It was 'a golden evening' for him, because Wilde had read and admired Micah Clarke.",
  "Both men promised Stoddart a story. Doyle delivered The Sign of the Four, Sherlock Holmes's second case, and Wilde The Picture of Dorian Gray, published in Lippincott's in July 1890. The book places the dinner among the 'carefully arranged' literary encounters of Wilde's London. The hotel is not named in the book. The venue comes from the biographies."],
  ev: [[1889, "30 August", "Stoddart's dinner for Wilde and Conan Doyle."]],
  b: [94], r: ["ellmann", "sturgis"], p: ["doyle", "stoddart"], q: "Langham Hotel London 19th century"
},
{
  id: "ward-lock", n: "Ward, Lock & Co.", a: "Warwick House, Salisbury Square, off Fleet Street",
  ll: [51.5139, -0.1076], L: ["letters", "wilde"], y: [1890, 1891], st: "site",
  s: "London publishers of Lippincott's Monthly, and of Dorian Gray in book form in 1891.",
  t: ["Ward, Lock distributed Lippincott's in Britain, so the July 1890 Dorian Gray went out from Salisbury Square. The reviews were savage. The book quotes Charles Whibley in Henley's Scots Observer asking 'Why go grubbing in muck heaps?' and calling the novel's interest 'medico-legal', and another reviewer sneering that Wilde wrote for 'outlawed noblemen and perverted telegraph boys', an allusion to Cleveland Street.",
  "Wilde answered in letters to the papers and in the famous preface, published in the expanded book edition of April 1891: 'There is no such thing as a moral or an immoral book.' The book notes that the attacks prefigured the case made against him in court."],
  ev: [[1890, "July", "Dorian Gray appears in Lippincott's."], [1891, "April", "Revised Dorian Gray published in book form."]],
  b: [83, 94, 261], r: ["ellmann", "frankel"], p: ["henley"], q: "Salisbury Square Fleet Street"
},
{
  id: "osgood", n: "Osgood, McIlvaine & Co.", a: "45 Albemarle Street, Mayfair",
  ll: [51.5093, -0.1423], L: ["letters", "wilde"], y: [1891, 1891], st: "survives",
  s: "Publishers of Wilde's annus mirabilis of 1891: Intentions, Lord Arthur Savile's Crime and A House of Pomegranates.",
  t: ["In a single year this Albemarle Street firm brought out Intentions (with 'The Decay of Lying' and 'The Critic as Artist'), the story collection Lord Arthur Savile's Crime and the fairy tales A House of Pomegranates. The book quotes from all three. Its pages on Covent Garden at dawn come from 'Lord Arthur Savile's Crime', and its thoughts on Chopin from 'The Critic as Artist'.",
  "Albemarle Street was Wilde's corner of Mayfair. His club, the Albemarle, the hotel where he stayed in 1892, and Queensberry's hotel were all within a few doors."],
  ev: [[1891, "", "Intentions, Lord Arthur Savile's Crime and A House of Pomegranates published."]],
  b: [28, 97, 199], r: ["ellmann"], p: [], q: "Albemarle Street London"
},
{
  id: "bogue", n: "David Bogue: Poems (1881)", a: "3 St Martin's Place, Trafalgar Square",
  ll: [51.5091, -0.1279], L: ["letters", "wilde"], y: [1881, 1881], st: "site",
  s: "Publisher of Wilde's first book, Poems, printed at the author's expense in 1881.",
  t: ["Wilde paid for the printing of Poems, published by Bogue in June 1881. It sold respectably and went through several editions, but critics mocked it and the Oxford Union refused a presented copy as derivative.",
  "Beerbohm, quoted by the book, called the volume a kind of 'decoy to the shy artificers of Chelsea'. It was a way into the world of Rossetti, Swinburne and Whistler. The book reprints 'Impression du Matin', Wilde's Whistlerian Thames nocturne, and finds it 'at once precious in its romanticism and precise in its realism'."],
  ev: [[1881, "June", "Wilde's Poems published."]],
  b: [6, 8], r: ["ellmann"], p: [], q: "St Martin's Place Trafalgar Square 19th century"
},
{
  id: "st-james-theatre", n: "St James's Theatre", a: "King Street, St James's (demolished 1957)",
  ll: [51.5067, -0.1366], L: ["stage", "wilde"], y: [1879, 1895], st: "site",
  s: "George Alexander's theatre: Lady Windermere's Fan (1892) and The Importance of Being Earnest (1895).",
  t: ["Under Hare and the Kendals in the 1880s the St James's staged Pinero's early plays, and the book tells of the 1881 row over whether Pinero's The Squire had lifted its plot from Hardy's Far from the Madding Crowd. Under George Alexander it became the home of the well-made society play: Pinero's The Second Mrs Tanqueray (1893), with Mrs Patrick Campbell, and Wilde's comedies.",
  "Lady Windermere's Fan opened here on 20 February 1892, with Wilde's curtain speech congratulating the audience on its good taste. Henry James's Guy Domville flopped here in January 1895 and was replaced by The Importance of Being Earnest on 14 February 1895. The book quotes Allan Aynesworth, the first Algernon: in 53 years of acting he never remembered 'a greater triumph'.",
  "That night Queensberry tried to get in with a bouquet of carrots and turnips. Police turned him away. Weeks later, as the scandal broke, Wilde's name was pasted over on the playbills, and the play soon came off."],
  ev: [[1892, "20 February", "Lady Windermere's Fan opens."], [1893, "27 May", "Pinero's The Second Mrs Tanqueray opens."], [1895, "5 January", "Henry James's Guy Domville fails."], [1895, "14 February", "The Importance of Being Earnest opens; Queensberry barred."], [1895, "April", "Wilde's name removed from the bills."]],
  b: [65, 67, 69, 72, 73, 74], r: ["powell", "mander", "ellmann"], p: ["alexander", "queensberry", "pinero", "campbell", "james"],
  q: "St James's Theatre King Street London|St James's Theatre 1895"
},
{
  id: "haymarket", n: "Theatre Royal, Haymarket", a: "Haymarket",
  ll: [51.5085, -0.1318], L: ["stage", "wilde"], y: [1880, 1895], st: "survives",
  s: "The Bancrofts' house, where Lillie Langtry debuted in 1881, and where Wilde's A Woman of No Importance and An Ideal Husband opened.",
  t: ["The Bancrofts took over the Haymarket in 1880 and had it remodelled. The book describes how abolishing the cheap pit for expensive stalls set off a protest that held up the first night for twenty minutes. Lillie Langtry made her stage debut here in She Stoops to Conquer in December 1881. The book links her new career to the Prince of Wales's persuading his mother back to the theatre.",
  "Under Herbert Beerbohm Tree, A Woman of No Importance opened here on 19 April 1893. An Ideal Husband followed on 3 January 1895, with the Prince of Wales in the royal box. The book quotes his advice to Wilde about cuts: 'Cut not a single word.'"],
  ev: [[1881, "December", "Lillie Langtry's stage debut."], [1893, "19 April", "A Woman of No Importance opens."], [1895, "3 January", "An Ideal Husband opens."]],
  b: [63, 72, 73, 180], r: ["powell", "davis"], p: ["langtry", "bancrofts", "tree"],
  q: "Theatre Royal Haymarket 19th century|Haymarket Theatre London"
},
{
  id: "palace-theatre", n: "Palace Theatre: Salome banned", a: "Cambridge Circus (opened 1891 as the Royal English Opera House)",
  ll: [51.5130, -0.1288], L: ["stage", "wilde", "queer"], y: [1892, 1892], st: "survives",
  s: "Salome, with Sarah Bernhardt, was in rehearsal here when the Lord Chamberlain banned it in June 1892.",
  t: ["Wilde wrote Salome in French for Sarah Bernhardt, and rehearsals began in June 1892 in D'Oyly Carte's new opera house at Cambridge Circus. The Lord Chamberlain's Examiner of Plays refused a licence under the old rule against showing biblical characters on stage, and the production collapsed.",
  "Wilde threatened to become a French citizen. The play appeared in print instead, in French in 1893 and in English in 1894 with Beardsley's drawings, in a translation by Lord Alfred Douglas that Wilde heavily corrected. The book reproduces Beardsley's illustrations and Wilde's complaint that they were 'too Japanese, while my play is Byzantine'. One of them caricatures Wilde's face."],
  ev: [[1892, "June", "Salome banned during rehearsals."]],
  b: [37, 52, 53, 73, 74], r: ["powell", "ellmann", "calloway"], p: ["bernhardt", "beardsley", "douglas"],
  q: "Palace Theatre London Cambridge Circus|Royal English Opera House 1891"
},
{
  id: "st-james-place", n: "10–11 St James's Place", a: "St James's Place, off St James's Street",
  ll: [51.5060, -0.1405], L: ["wilde"], y: [1893, 1894], st: "survives",
  s: "The rooms Wilde rented to write in, 1893–94, where An Ideal Husband took shape.",
  t: ["From October 1893 Wilde kept rooms here, a short walk from his clubs, the St James's Theatre and the Haymarket. He came most mornings to write and worked on An Ideal Husband here.",
  "The arrangement suited a double life: a family home in Chelsea and a set of rooms in clubland. Under cross-examination in April 1895 Wilde himself dated the chambers from October 1893 to April 1894. Visits by young men to these rooms were part of the case against him."],
  ev: [[1893, "October", "Wilde takes rooms in St James's Place."]],
  b: [], r: ["sfu", "ellmann", "holland"], p: [], q: "St James's Place London"
},
{
  id: "cafe-royal", n: "Café Royal", a: "68 Regent Street",
  ll: [51.5100, -0.1356], L: ["wilde", "pleasure", "queer"], y: [1879, 1897], st: "survives",
  s: "The gilded Domino Room was Wilde and Bosie's daily haunt in the early 1890s, and where Frank Harris begged Wilde to flee.",
  t: ["The book counts the Café Royal among the café-restaurants of Wilde's London, with Verrey's, Gatti's and Romano's, and says Wilde and Lord Alfred Douglas frequented it in the early 1890s. It quotes Max Beerbohm's description of the Domino Room, all gilding, crimson velvet, mirrors and caryatids under a painted ceiling, with dominoes clattering on marble tables: 'This indeed is life!'",
  "William Rothenstein, whose sketch of the ageing Wilde the book reproduces, belonged to the circle of artists and writers who met here. In late March 1895, at lunch here with Bernard Shaw present, Frank Harris told Wilde he would lose the libel action and urged him to go abroad. Douglas arrived and pushed him on."],
  ev: [[1895, "March", "Frank Harris urges Wilde, at lunch here, to abandon the case."]],
  b: [27, 231], r: ["ellmann", "walkowitzN", "holland"], p: ["douglas", "beerbohm", "rothenstein", "fharris", "shaw"],
  q: "Cafe Royal Regent Street Domino Room|Cafe Royal London 1890s"
},
{
  id: "kettners", n: "Kettner's", a: "29 Romilly Street (then Church Street), Soho",
  ll: [51.5134, -0.1310], L: ["queer", "wilde", "pleasure"], y: [1893, 1895], st: "survives",
  s: "The Soho restaurant where, by Wilde's own testimony, Alfred Taylor introduced him to Charles and William Parker.",
  t: ["The book explains that the drinking places of the upper classes were 'places of assignation', and that the trial testimony placed Wilde's meetings with working-class youths not in pubs but in Soho restaurants with private dining rooms.",
  "Contemporary reports of the libel trial have Wilde telling Carson that he first met Charles Parker at Kettner's, at a dinner for Alfred Taylor's birthday to which Taylor brought the two Parker brothers. Carson's question, whether the wine was Kettner's best, got a laugh in court. William Parker repeated the Kettner's version at the second criminal trial. The book instead quotes Charles Parker naming the Solferino in Rupert Street (see that entry), so the sources disagree on where the dinner took place.",
  "In 1898, the book adds, Soho had one drinking house for every two hundred people."],
  ev: [[1895, "4 April", "Wilde tells the court he first met Charles Parker at Kettner's."]],
  b: [143, 225, 241], r: ["sfu", "holland", "cook", "walkowitzN"], p: ["taylor", "parker"], q: "Kettner's restaurant Soho|Romilly Street Soho"
},
{
  id: "solferino", n: "The Solferino, Rupert Street", a: "Rupert Street, Soho",
  ll: [51.5109, -0.1336], L: ["queer", "wilde"], y: [1893, 1895], st: "approx",
  s: "In the testimony the book prints, Charles Parker names the Solferino as the place where Taylor introduced him to Wilde. Other reports name Kettner's.",
  t: ["The book prints part of Charles Parker's evidence at the 1895 trials. Parker, an unemployed valet, said Alfred Taylor took him and his brother William to a restaurant in Rupert Street, 'I think it was the Solferino', and up to a private room with dinner laid for four. Wilde arrived, paid for champagne, brandy and coffee, and afterwards took Parker by cab to the Savoy.",
  "The book uses the episode to show that sex across class lines was organised through the restaurants of Soho. Reports of the libel trial, however, have Wilde (and later William Parker) placing that first dinner at Kettner's, so this marker shows the version the book prints. The disagreement is a reminder that trial testimony, and the reconstructions published decades later, do not always agree."],
  ev: [[1893, "", "Parker meets Wilde here, by his account."], [1895, "April–May", "Parker testifies at the Old Bailey."]],
  b: [143, 144, 158], r: ["hyde", "sfu", "holland", "cook"], p: ["parker", "taylor"], q: "Rupert Street Soho London"
},
{
  id: "savoy-hotel", n: "Savoy Hotel", a: "Strand",
  ll: [51.5104, -0.1203], L: ["wilde", "queer", "growth"], y: [1889, 1895], st: "survives",
  s: "D'Oyly Carte's luxury hotel of 1889, where Wilde and Douglas stayed in 1893, as the trials laid bare.",
  t: ["Built by Richard D'Oyly Carte beside his theatre and opened in 1889, the Savoy had electric light and lifts, and more bathrooms than any hotel in London. The book describes the new 'monster' hotels catering to 'the idlers of the globe'.",
  "In March 1893 Wilde and Douglas took rooms here. At the trials, chambermaids and a masseur gave evidence about what they had seen, and the prosecution leaned on it heavily. The book reprints Charles Parker's testimony that Wilde took him from the Solferino to his sitting room and bedroom at the Savoy."],
  ev: [[1889, "August", "Savoy Hotel opens."], [1893, "March", "Wilde and Douglas stay at the Savoy."]],
  b: [124, 125, 144], r: ["holland", "bristow", "ellmann"], p: ["douglas", "parker", "doylycarte"], q: "Savoy Hotel London 1890s|Savoy Hotel Strand"
},
{
  id: "albemarle-hotel", n: "Albemarle Hotel", a: "Albemarle Street at Piccadilly",
  ll: [51.5078, -0.1420], L: ["wilde", "queer"], y: [1892, 1893], st: "site",
  s: "Wilde stayed here in 1892–93. Edward Shelley, a Bodley Head clerk, testified to visits.",
  t: ["Wilde used this hotel at the foot of Albemarle Street in late 1892 and early 1893. Edward Shelley, a young clerk at the Bodley Head (Wilde's publisher), said in 1895 that Wilde had invited him here. Shelley was one of the most damaging and also most fragile witnesses.",
  "The hotel shows how closely Wilde's literary and sexual lives were woven into the same few Mayfair streets."],
  ev: [[1892, "", "Wilde stays at the Albemarle Hotel."]],
  b: [], r: ["holland", "hyde"], p: ["shelley"], q: "Albemarle Street Piccadilly 19th century"
},
{
  id: "avondale", n: "Hotel Avondale", a: "68 Piccadilly",
  ll: [51.5075, -0.1416], L: ["wilde"], y: [1895, 1895], st: "site",
  s: "Wilde's base in February 1895, from which he went to the Albemarle Club and found Queensberry's card.",
  t: ["Wilde was staying at the Avondale with Douglas in February 1895, piling up a bill he could not pay. From here he went round to his club on 28 February and was handed Queensberry's card. That night he wrote to Robert Ross that he saw nothing for it but a criminal prosecution.",
  "When Wilde tried to leave the Avondale, the hotel held his luggage against the unpaid bill. It was a small sign of how little money he had for the case he was about to bring."],
  ev: [[1895, "28 February", "Wilde, staying here, collects Queensberry's card."]],
  b: [], r: ["ellmann", "letters"], p: ["douglas", "ross"], q: "Piccadilly London 1890s"
},
{
  id: "albemarle-club", n: "Albemarle Club", a: "13 Albemarle Street",
  ll: [51.5085, -0.1418], L: ["wilde", "queer"], y: [1895, 1895], st: "survives",
  s: "Where Queensberry left his card 'For Oscar Wilde posing as a somdomite', the start of Wilde's fall.",
  t: ["Unusually, the Albemarle admitted women as well as men, and both Oscar and Constance were members. On 18 February 1895 the Marquess of Queensberry, staying at Carter's Hotel a few doors up the street, left his card with the hall porter, scrawled 'For Oscar Wilde posing as somdomite' (his spelling). The porter put it in an envelope, and Wilde received it on 28 February.",
  "The book notes the misspelling twice. On Douglas's urging, Wilde swore out a warrant for criminal libel. Within three months the case had turned into his own prosecution."],
  ev: [[1895, "18 February", "Queensberry leaves his card at the club."], [1895, "28 February", "Wilde receives the card."]],
  b: [73, 230], r: ["holland", "ellmann", "bristow"], p: ["queensberry", "constance", "douglas"], q: "Albemarle Street Mayfair London"
},
{
  id: "marlborough-st", n: "Marlborough Street Police Court", a: "21 Great Marlborough Street (now a hotel)",
  ll: [51.5146, -0.1395], L: ["wilde"], y: [1895, 1895], st: "survives",
  s: "Queensberry was arrested and charged with criminal libel here on 2 March 1895.",
  t: ["On 1 March 1895 Wilde, with Douglas, applied for a warrant. The next day Queensberry was arrested and brought here, then committed for trial at a hearing on 9 March. He filed a plea of justification: the libel was true and published in the public interest.",
  "His solicitors then had private detectives assemble the names of young men connected with Wilde. The book compresses all this into a sentence: Wilde sued, lost and was arrested."],
  ev: [[1895, "2 March", "Queensberry charged with criminal libel."], [1895, "9 March", "Queensberry committed for trial."]],
  b: [73, 74], r: ["holland", "bristow"], p: ["queensberry"], q: "Great Marlborough Street police court"
},
{
  id: "old-bailey", n: "Central Criminal Court (Old Bailey) and Newgate", a: "Old Bailey (rebuilt 1902–07 on the site of Newgate Prison)",
  ll: [51.5157, -0.1019], L: ["wilde", "queer"], y: [1895, 1895], st: "survives",
  s: "Scene of all three trials: the libel case against Queensberry (3–5 April) and Wilde's two criminal trials (April–May 1895).",
  t: ["In the old Sessions House beside Newgate Prison, Edward Carson cross-examined Wilde in the libel trial. Wilde was brilliant on literature, then fatally flippant about a servant boy he had not kissed because he was 'too ugly'. The prosecution withdrew on 5 April and Queensberry was acquitted. The book reproduces the Illustrated Police News's crude strip of the trial: Wilde in the dock beside the renters who testified, his American lecture days, and the sale at Tite Street.",
  "Arrested that evening, Wilde stood trial here with Alfred Taylor from 26 April. The jury failed to agree on 1 May. At a second trial before Mr Justice Wills he was convicted on 25 May 1895 of gross indecency under the 1885 Labouchère amendment and sentenced to two years' hard labour, the maximum. (The book misprints the year as 1889.) The book likens watching the Wilde trials to the public executions abolished a generation earlier. It also reproduces an engraving of a London prison exercise yard, the kind of place the sentence led to."],
  ev: [[1895, "3–5 April", "Wilde v. Queensberry: the libel case collapses."], [1895, "26 April–1 May", "First criminal trial; jury disagrees."], [1895, "22–25 May", "Second trial; Wilde convicted and sentenced to two years' hard labour."]],
  b: [74, 237, 256, 257, 260], r: ["holland", "bristow", "hyde", "cohen"], p: ["carson", "queensberry", "wills", "taylor", "parker"],
  q: "Old Bailey Sessions House 19th century|Newgate Prison exterior|Wilde trial Illustrated Police News"
},
{
  id: "holborn-viaduct-hotel", n: "Holborn Viaduct Hotel", a: "Holborn Viaduct (destroyed)",
  ll: [51.5170, -0.1047], L: ["wilde", "growth"], y: [1895, 1895], st: "site",
  s: "Where Wilde retreated with Douglas and Ross on 5 April 1895 after the libel case collapsed, and wrote to the Evening News.",
  t: ["Leaving the Old Bailey on the morning of 5 April, Wilde went with Douglas and Robert Ross to this railway hotel a few hundred yards away. There he wrote to the Evening News that he had withdrawn to spare Douglas from appearing in the witness box against his father.",
  "The viaduct itself was a showpiece of mid-Victorian engineering. The book reproduces an advertisement from a neighbouring address for the 'Electropathic Belt', a cure-all sold from 21 Holborn Viaduct."],
  ev: [[1895, "5 April", "Wilde writes to the Evening News from the hotel."]],
  b: [176], r: ["ellmann", "holland"], p: ["douglas", "ross"], q: "Holborn Viaduct 19th century"
},
{
  id: "cadogan-hotel", n: "Cadogan Hotel", a: "75 Sloane Street",
  ll: [51.497, -0.1596], L: ["wilde", "queer"], y: [1895, 1895], st: "survives",
  s: "Wilde was arrested in Room 118 here on the evening of 5 April 1895.",
  t: ["Douglas had rooms here. Through the afternoon of 5 April, while friends urged him to catch the boat train to France, Wilde sat drinking hock and seltzer and did not move. At about 6.30 pm two detectives arrived with a warrant, and he was taken to Scotland Yard and then to Bow Street.",
  "John Betjeman's poem 'The Arrest of Oscar Wilde at the Cadogan Hotel' (1937) made the moment famous. The book points to another escape route: if Wilde had followed Lord Arthur Somerset's example after Cleveland Street, he would never have gone to Reading Gaol."],
  ev: [[1895, "5 April", "Wilde arrested at the Cadogan Hotel."]],
  b: [261], r: ["ellmann", "bristow"], p: ["douglas", "ross"], q: "Cadogan Hotel Sloane Street"
},
{
  id: "bow-street", n: "Bow Street Police Court", a: "28 Bow Street, Covent Garden (court closed 2006)",
  ll: [51.5128, -0.1227], L: ["wilde", "queer"], y: [1870, 1895], st: "survives",
  s: "London's chief magistrates' court, where Boulton and Park appeared in 1870 and Wilde was committed for trial in April 1895.",
  t: ["Wilde spent the night of his arrest in the cells here. Over the following days, hearings in the crowded courtroom committed him and Alfred Taylor for trial, and bail was refused. Crowds outside jeered.",
  "Bow Street had seen a famous queer case before. In 1870 the cross-dressing young men Ernest Boulton and Frederick Park were brought here in their gowns after their arrest at the Strand Theatre. Their acquittal in 1871 showed how hard sodomy was to prove, and that difficulty is part of why the 1885 'gross indecency' offence mattered so much."],
  ev: [[1870, "29 April", "Boulton and Park brought before the magistrate."], [1895, "6 April", "Wilde charged at Bow Street; bail refused."], [1895, "19 April", "Wilde and Taylor committed for trial."]],
  b: [], r: ["bristow", "kaplan", "upchurch"], p: ["taylor", "boultonpark"], q: "Bow Street Police Court London"
},
{
  id: "holloway", n: "Holloway Prison", a: "Parkhurst Road, Holloway (closed 2016)",
  ll: [51.5531, -0.1215], L: ["wilde"], y: [1895, 1895], st: "site",
  s: "Wilde was held on remand here in April–May 1895, between his arrest and his first trial.",
  t: ["Holloway was then a men's as well as a women's prison. Wilde was held here on remand from April 1895. Douglas visited him almost daily until Wilde's friends persuaded him to go abroad before the trial. Wilde wrote of him from here with great tenderness.",
  "While he waited in his cell, the contents of his house in Tite Street were sold."],
  ev: [[1895, "April–May", "Wilde on remand in Holloway."]],
  b: [16], r: ["bristow", "letters"], p: ["douglas"], q: "Holloway Prison castellated|HM Prison Holloway 19th century"
},
{
  id: "midland-hotel", n: "St Pancras Station and Midland Grand Hotel", a: "Euston Road",
  ll: [51.5299, -0.1255], L: ["growth", "wilde"], y: [1873, 1895], st: "survives",
  s: "Scott's Gothic railway palace, painted in 1884 at sunset, and one of the hotels that turned Wilde away on bail.",
  t: ["The book opens with John O'Connor's 1884 painting of St Pancras from Pentonville Road at sunset, horse trams in the damp street. It calls Gilbert Scott's Midland Grand Hotel a 'huge Gothic Revival castle' assembled from no fewer than fifty sketchbooks of ornament. Its 300-foot clock tower was meant to convince the Midland Railway's shareholders of its power.",
  "On 7 May 1895, released on bail, Wilde took a room here. Queensberry's hired men told the management who he was and he was asked to leave. The same happened elsewhere until he ended the night at his mother's house in Oakley Street."],
  ev: [[1884, "", "O'Connor paints St Pancras at sunset."], [1895, "7 May", "Wilde, on bail, is turned out of the hotel."]],
  b: [2, 140], r: ["ellmann", "white"], p: ["queensberry"], q: "John O'Connor St Pancras Pentonville Road sunset|Midland Grand Hotel St Pancras"
},
{
  id: "courtfield", n: "2 Courtfield Gardens: the Leversons", a: "Courtfield Gardens, South Kensington",
  ll: [51.4935, -0.1890], L: ["wilde"], y: [1895, 1895], st: "survives",
  s: "Ada 'Sphinx' Leverson and her husband gave Wilde shelter here between his trials.",
  t: ["The novelist and wit Ada Leverson, Wilde's 'Sphinx', and her husband Ernest took him in when no hotel would have him. They told their servants he could stay or leave as he wished. He spent the weeks before his second trial here, keeping to the nursery floor and dining with the family.",
  "From here he went each day to the Old Bailey in May 1895. On the eve of the verdict, friends again urged him to flee, and again he stayed."],
  ev: [[1895, "May", "Wilde stays with the Leversons before his second trial."]],
  b: [], r: ["ellmann", "sturgis"], p: ["leverson"], q: "Courtfield Gardens Kensington"
},
{
  id: "pentonville", n: "Pentonville Prison", a: "Caledonian Road, Islington",
  ll: [51.5446, -0.1159], L: ["wilde"], y: [1895, 1897], st: "survives",
  s: "Where Wilde began his sentence in May 1895, and from which he was released on 19 May 1897.",
  t: ["Sentenced on 25 May 1895, Wilde was taken here to begin two years' hard labour: the treadmill, picking oakum, a plank bed and enforced silence. The model prison of the 1840s was built on the 'separate system', designed to isolate prisoners from one another. In July he was moved to Wandsworth.",
  "He came back here at the end of his sentence, brought from Reading so that he could be released quietly in London. The book frames all of Wilde's London between two departures: arriving in 1879, and walking out of Pentonville in the spring of 1897 to take the night boat to Dieppe, 'never to return to England'."],
  ev: [[1895, "25 May", "Wilde begins his sentence at Pentonville."], [1897, "19 May", "Wilde released from Pentonville."]],
  b: ["ix", 96], r: ["ellmann", "frankel"], p: [], q: "Pentonville Prison 19th century engraving|Pentonville Prison"
},
{
  id: "wandsworth", n: "Wandsworth Prison", a: "Heathfield Road, Wandsworth",
  ll: [51.4510, -0.1771], L: ["wilde"], y: [1895, 1895], st: "survives",
  s: "Wilde's prison from July to November 1895, where his health broke down.",
  t: ["Moved here in July 1895, Wilde suffered from hunger, dysentery and sleeplessness. He collapsed in chapel and injured his ear, an injury that may have contributed to his death five years later. Richard Haldane, a Liberal MP who sat on a prison reform committee, visited him and arranged for him to have books.",
  "On 20 November 1895 he was taken from here to Reading Gaol."],
  ev: [[1895, "4 July", "Wilde transferred to Wandsworth."], [1895, "20 November", "Wilde leaves Wandsworth for Reading."]],
  b: [], r: ["ellmann", "frankel"], p: [], q: "Wandsworth Prison"
},
{
  id: "clapham-junction", n: "Clapham Junction", a: "St John's Hill, Battersea",
  ll: [51.4643, -0.1704], L: ["wilde", "growth"], y: [1895, 1895], st: "survives",
  s: "On 20 November 1895, on his way to Reading, Wilde stood in convict dress on the platform here while a crowd mocked him.",
  t: ["Changing trains on the journey from Wandsworth to Reading, Wilde was made to wait on the central platform for half an hour, in convict clothes and handcuffs, in the rain. As word spread, a crowd gathered to laugh, and one man spat at him.",
  "He wrote about it in De Profundis: for a year afterwards he wept every day at the same hour. Clapham Junction, the busiest railway junction in Britain, was a monument of the railway age the book describes. For Wilde it became the place of his worst public humiliation."],
  ev: [[1895, "20 November", "Wilde mocked on the platform at Clapham Junction."]],
  b: [], r: ["ellmann", "letters"], p: [], q: "Clapham Junction station 19th century"
},
{
  id: "carey-street", n: "Bankruptcy Court, Carey Street", a: "Bankruptcy Buildings, Carey Street, Lincoln's Inn",
  ll: [51.5150, -0.1140], L: ["wilde"], y: [1895, 1895], st: "survives",
  s: "Wilde was brought here from prison for his bankruptcy examinations in September and November 1895.",
  t: ["Queensberry petitioned for Wilde's bankruptcy to recover his costs of some £600. Wilde was brought from Wandsworth for hearings here in September and November 1895. In a corridor, Robert Ross waited to raise his hat as Wilde passed in handcuffs, and Wilde never forgot it.",
  "'Being in Carey Street' was already slang for being bankrupt. The book describes the forced sale at Tite Street that came before these hearings."],
  ev: [[1895, "24 September", "First bankruptcy examination; Ross raises his hat."], [1895, "12 November", "Second public examination in bankruptcy."]],
  b: [16], r: ["ellmann", "letters"], p: ["ross", "queensberry"], q: "Carey Street Lincoln's Inn bankruptcy"
},
{
  id: "upper-bedford", n: "31 Upper Bedford Place: Stewart Headlam's house", a: "Upper Bedford Place, Bloomsbury",
  ll: [51.5222, -0.1270], L: ["wilde", "faith"], y: [1897, 1897], st: "survives",
  s: "Wilde's first stop as a free man, early on 19 May 1897, at the home of the radical clergyman who had stood bail for him.",
  t: ["The Christian Socialist priest Stewart Headlam had put up half of Wilde's bail in 1895, though he barely knew him, on principle. Collected from Pentonville at dawn on 19 May 1897, Wilde came here to change and talk, and wrote asking to go on retreat with the Jesuits. He was refused.",
  "That evening he left for Newhaven and the night boat to Dieppe. He never came back to London."],
  ev: [[1897, "19 May", "Wilde, freed, spends the day at Headlam's house and leaves for Dieppe."]],
  b: ["ix", 96], r: ["ellmann", "frankel"], p: ["headlam", "adey"], q: "Upper Bedford Place Bloomsbury"
},
{
  id: "willis-rooms", n: "Willis's Rooms", a: "King Street, St James's (site of the former Almack's)",
  ll: [51.5065, -0.1371], L: ["wilde", "pleasure"], y: [1890, 1895], st: "site",
  s: "Fashionable restaurant in the old Almack's assembly rooms, a favourite of Wilde's in his years of success.",
  t: ["The old Almack's Assembly Rooms, once the most exclusive ballroom in Regency London, became Willis's Rooms and in the 1890s a fashionable restaurant. Wilde dined here often when his plays were running at the St James's, a few doors along King Street.",
  "In De Profundis he reckoned what he had spent on dinners and suppers with Douglas in such places. It came to a great deal of money."],
  ev: [], b: [], r: ["letters", "ellmann"], p: ["douglas"], q: "Almack's Willis's Rooms King Street"
},
{
  id: "little-college", n: "13 Little College Street: Alfred Taylor's rooms", a: "Little College Street, Westminster",
  ll: [51.4975, -0.1271], L: ["queer", "wilde"], y: [1892, 1893], st: "approx",
  s: "Alfred Taylor's curtained, perfumed rooms behind Westminster Abbey, central to the prosecution's case.",
  t: ["Alfred Taylor, a public-school man who had run through his inheritance, kept rooms here lit by coloured lamps and heavily curtained, with incense burning. Young men met here, and Taylor introduced several, including the Parker brothers, to Wilde.",
  "Taylor refused to turn Queen's evidence, was tried alongside Wilde and received the same sentence. In the book's account he is the go-between in Charles Parker's testimony."],
  ev: [[1895, "April–May", "Taylor tried with Wilde."]],
  b: [143, 144], r: ["holland", "cook", "bristow"], p: ["taylor", "parker"], q: "Little College Street Westminster"
},
{
  id: "fitzroy-st", n: "20 Fitzroy Street: the 'Fitzroy settlement'", a: "Fitzroy Street, Fitzrovia",
  ll: [51.5220, -0.1385], L: ["letters", "wilde"], y: [1889, 1895], st: "approx",
  s: "The Century Guild house of Herbert Horne and Arthur Mackmurdo, where Lionel Johnson lived and the Rhymers sometimes met.",
  t: ["The book describes the Rhymers' Club, a dozen poets who read their verses aloud in alphabetical order from Dowson to Yeats. It says Wilde came only when they met in a private house. This was one of those houses, the Arts and Crafts household of the Century Guild, where the poet Lionel Johnson had rooms.",
  "Johnson, the book notes, introduced Wilde to Lord Alfred Douglas in 1891. He later wrote a poem, 'The Destroyer of a Soul', that is usually read as aimed at Wilde."],
  ev: [[1891, "", "Lionel Johnson, of this circle, introduces Wilde to Douglas."]],
  b: [27, 94, 95], r: ["beckson", "ellmann"], p: ["johnson", "dowson", "yeats"], q: "Fitzroy Street London"
}
]);
