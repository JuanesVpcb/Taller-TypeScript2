// Information with which to work
const singers: Singer[] = [
    new Singer('Ariana Grande', './images/ariana.jpg', 
    `Ariana Grande es una destacada cantante, compositora y actriz estadounidense nacida el 26 de junio de 1993 en Boca Ratón, Florida. Se hizo famosa 
    por su increíble rango vocal, su estilo pop y su presencia carismática en el escenario. Comenzó su carrera como actriz en la serie de Nickelodeon 
    "Victorious" y su spin-off "Sam & Cat", antes de lanzarse como cantante en solitario. Su álbum debut, 
    "<a href="https://open.spotify.com/album/6WQzwx2a6Wq6rDoEU3TaNE?si=5G21MUN_R3ai8QeDtSqSiw">Yours Truly</a>" en 2013, le otorgó reconocimiento mundial 
    y desde entonces ha lanzado varios álbumes exitosos, incluidos <a href="https://open.spotify.com/album/6EVYTRG1drKdO8OnIQBeEj?si=lw4Sm_W5S86kkN1s2dwzxg">
    "My Everything"</a> y <a href="https://open.spotify.com/album/2fYhqwDWXjbpjaIJPEfKFw?si=HMpywBjeSWGa0HfTNGUiig">"thank u, next"</a>. Con éxitos como 
    "Problem", "Break Free" y "7 Rings", Ariana se ha convertido en una de las artistas pop más influyentes de la década.\nAdemás de su éxito musical, Ariana 
    Grande ha sido reconocida por su activismo social, abogando por los derechos LGBTQ+, el control de armas y el apoyo a organizaciones benéficas. Ha 
    recibido numerosos premios, incluidos varios premios Grammy y MTV Video Music Awards, y su influencia en la cultura popular la ha convertido en un ícono 
    para millones de fanáticos en todo el mundo.)`,
    ['7 Rings', 'thank u, next', 'Save Your Tears (With Ariana Grande) (Remix)', 'One Last Time', 'Side to Side'], 
    [2210000000, 1848000000, 1487000000, 1420000000, 1400000000]),

    new Singer('Billie Eilish', './images/billie.jpg',
    `Billie Eilish es una cantante y compositora estadounidense nacida el 18 de diciembre de 2001 en Los Ángeles, California. Conocida por su estilo
    musical único y su actitud rebelde, Billie se convirtió en una sensación de la noche a la mañana con su sencillo "Ocean Eyes" en 2016. Su álbum
    debut, "<a href="https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh?si=8n9X4C5vQ5a7t7e5LpZQ0A">When We All Fall Asleep, Where Do We Go?</a>",
    lanzado en 2019, la consolidó como una de las artistas más influyentes de la industria musical actual.\nBillie Eilish es conocida por su estilo
    distintivo, que combina elementos de pop, electrónica y música alternativa. Sus letras honestas y emotivas han resonado con millones de fanáticos
    en todo el mundo, y su presencia en las redes sociales la ha convertido en un ícono de la generación Z.\nAdemás de su éxito musical, Billie Eilish
    ha sido reconocida por su activismo en temas como la salud mental, el cambio climático y los derechos de los animales. Ha ganado varios premios
    Grammy, incluido el premio al Álbum del Año en 2020, y su influencia en la cultura popular la ha convertido en una de las artistas más influyentes
    de la década.`,
    ['Bad Guy', 'Therefore I Am', 'Lovely', 'Bellyache', 'You Should See Me In A Crown'],
    [1970000000, 1000000000, 500000000, 400000000, 300000000]),

    new Singer('Ed Sheeran', './images/ed.jpg',
    `Ed Sheeran es un cantante, compositor y músico británico nacido el 17 de febrero de 1991 en Halifax, West Yorkshire. Conocido por su estilo
    musical único que combina elementos de pop, folk y hip-hop, Ed Sheeran se ha convertido en uno de los artistas más exitosos y reconocidos de la
    industria musical actual. Comenzó su carrera musical en la década de 2000, lanzando varios EPs y álbumes independientes antes de firmar un
    contrato con una discográfica importante.\nEl álbum debut de Ed Sheeran, "<a href="https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu?si=3O3z1LWzQ0Gw2yLpJ7F7Jg">
    +</a>", lanzado en 2011, le otorgó reconocimiento mundial y desde entonces ha lanzado varios álbumes exitosos, incluidos <a href="https://open.spotify.com/album/1xn54DMo2qIqBuMqHtUsFd?si=9f4a4b5f2d3b4b6f">
    "x"</a> y <a href="https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu?si=3O3z1LWzQ0Gw2yLpJ7F7Jg">"÷"</a>. Con éxitos como "Shape of You",
    "Thinking Out Loud" y "Castle on the Hill", Ed Sheeran ha ganado varios premios Grammy y ha sido reconocido por su talento musical y su
    habilidad para contar historias a través de sus canciones.\nAdemás de su éxito musical, Ed Sheeran es conocido por su activismo social y su
    apoyo a organizaciones benéficas. Ha recibido varios premios por su labor humanitaria y su influencia en la cultura popular lo ha convertido en
    un ícono para millones de fanáticos en todo el mundo.`,
    ['Shape of You', 'Perfect', 'Castle on the Hill', 'Thinking Out Loud', 'Photograph'],
    [4140200000, 2032020000, 1900300000, 820100000, 640600000]),

    new Singer('Taylor Swift', './images/taylor.jpg',
    `Taylor Swift es una cantante, compositora y actriz estadounidense nacida el 13 de diciembre de 1989 en Reading, Pennsylvania. Conocida por su
    estilo musical único que combina elementos de pop, country y rock, Taylor Swift se ha convertido en una de las artistas más exitosas y
    reconocidas de la industria musical actual. Comenzó su carrera musical en la década de 2000, lanzando varios álbumes independientes antes de
    firmar un contrato con una discográfica importante.\nEl álbum debut de Taylor Swift, "<a href="https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=7b9a5e2d0b8f4d0e">
    Taylor Swift</a>", lanzado en 2006, le otorgó reconocimiento mundial y desde entonces ha lanzado varios álbumes exitosos, incluidos <a href="https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=7b9a5e2d0b8f4d0e">
    "Fearless"</a> y <a href="https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv?si=7b9a5e2d0b8f4d0e">"1989"</a>. Con éxitos como "Shake It Off",
    "Love Story" y "Blank Space", Taylor Swift ha ganado varios premios Grammy y ha sido reconocida por su talento musical y su habilidad para contar
    historias a través de sus canciones.\nAdemás de su éxito musical, Taylor Swift es conocida por su activismo social y su apoyo a organizaciones
    benéficas. Ha recibido varios premios por su labor humanitaria y su influencia en la cultura popular la ha convertido en un ícono para millones de
    fanáticos en todo el mundo.`,
    ['Love Story', 'Shake It Off', 'Blank Space', 'You Belong With Me', 'Bad Blood'],
    [3560700000, 2802100000, 1959000000, 876000000, 682300000]),

    new Singer('BTS', './images/bts.jpg',
    `BTS es un grupo de música pop surcoreano formado por Big Hit Entertainment. El grupo está compuesto por siete miembros: RM, Jin, Suga, J-Hope,
    Jimin, V y Jungkook. Conocidos por su estilo musical único que combina elementos de pop, hip-hop y R&B, BTS se ha convertido en uno de los grupos
    más exitosos y reconocidos de la industria musical actual. Debutaron en 2013 con el sencillo "No More Dream" y desde entonces han lanzado varios
    álbumes exitosos, incluidos "<a href="https://open.spotify.com/album/2qehskW9lYGWfYb0xPZkrS?si=3c4b7b4c5b7b4c5b">Love Yourself: Tear</a>" y
    "<a href="https://open.spotify.com/album/2qehskW9lYGWfYb0xPZkrS?si=3c4b7b4c5b7b4c5b">Map of the Soul: 7</a>". Con éxitos como "Dynamite
    "Butter" y "Life Goes On", BTS ha ganado varios premios Grammy y ha sido reconocido por su talento musical y su habilidad para contar historias a
    través de sus canciones.\nAdemás de su éxito musical, BTS es conocido por su activismo social y su apoyo a organizaciones benéficas. Han recibido
    varios premios por su labor humanitaria y su influencia en la cultura popular los ha convertido en un ícono para millones de fanáticos en todo el
    mundo.`,
    ['Dynamite', 'Butter', 'Life Goes On', 'Boy With Luv', 'Fake Love'],
    [1830000000, 902100000, 898000000, 745000000, 610400000])
];

// Elements
const nameElement: HTMLElement | null = document.getElementById('singer-name');
const imageElement: HTMLElement | null = document.getElementById('singer-image');
const bioElement: HTMLElement | null = document.getElementById('singer-bio');
const songsElement: HTMLElement | null = document.getElementById('singer-songs');
const buttonElement: HTMLElement | null = document.getElementById('singer-button');
let index: number = 0;

// Add event listener to the button element
if (buttonElement)
    buttonElement.addEventListener('click', () => {
        index = (index + 1) % singers.length;
        const singer: Singer = singers[index];
        if (nameElement)
            nameElement.innerHTML = singer.name;
        if (imageElement)
            imageElement.innerHTML = singer.getImagen;
        if (bioElement)
            bioElement.innerHTML = singer.bio;
        if (songsElement)
            songsElement.innerHTML = singer.getSongs;
    });

// Initial rendering
if (nameElement)
    nameElement.innerHTML = singers[0].name;
if (imageElement)
    imageElement.innerHTML = singers[0].getImagen;
if (bioElement)
    bioElement.innerHTML = singers[0].bio;
if (songsElement)
    songsElement.innerHTML = singers[0].getSongs;