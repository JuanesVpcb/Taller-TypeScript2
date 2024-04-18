// Elements
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
    [2210000000, 1848000000, 1487000000, 1420000000, 1400000000],
    30),

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
    [1970000000, 1000000000, 500000000, 400000000, 300000000],
    22),

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
    [4140200000, 2032020000, 1900300000, 820100000, 640600000],
    33),

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
    [3560700000, 2802100000, 1959000000, 876000000, 682300000],
    34),

    new Singer('Olivia Rodrigo', './images/olivia.jpg', 
    `Olivia Rodrigo es una cantante y actriz estadounidense nacida el 20 de febrero de 2003 en Temecula, California. Conocida por su papel en la serie
    de Disney "High School Musical: The Musical: The Series" y su sencillo "Drivers License", Olivia Rodrigo se ha convertido en una de las artistas
    más prometedoras de la industria musical actual. Su estilo musical único que combina elementos de pop, rock y música alternativa ha resonado con
    millones de fanáticos en todo el mundo.\nEl sencillo debut de Olivia Rodrigo, "<a href="https://open.spotify.com/album/7xapw9Oy21WpfEcib2ErSA?si=2f9c9e0b0d9c4e3f">
    Drivers License</a>", lanzado en 2021, se convirtió en un éxito mundial y desde entonces ha lanzado varios sencillos exitosos, incluidos <a href="https://open.spotify.com/album/7xapw9Oy21WpfEcib2ErSA?si=2f9c9e0b0d9c4e3f">
    "Good 4 U"</a> y <a href="https://open.spotify.com/album/7xapw9Oy21WpfEcib2ErSA?si=2f9c9e0b0d9c4e3f">"Deja Vu"</a>. Con letras honestas y emotivas,
    Olivia Rodrigo ha sido reconocida por su talento musical y su habilidad para contar historias a través de sus canciones.\nAdemás de su éxito musical,
    Olivia Rodrigo es conocida por su activismo social y su apoyo a organizaciones benéficas. Ha ganado varios premios por su labor humanitaria y su
    influencia en la cultura popular la ha convertido en una de las artistas más influyentes de la década.`,
    ['Drivers License', 'Good 4 U', 'Deja Vu', 'Traitor', 'Brutal'],
    [1000000000, 500000000, 300000000, 200000000, 100000000],
    21)
];
const singerList: HTMLElement | null = document.getElementById('singers');

// Add event listener to the button element
for (let i = 0; i < singers.length; i++) {
    console.log('doing');
    const singer = singers[i];
    const singerElement = document.createElement('tr');
    const nameElement = document.createElement('th');
    nameElement.id = singer.name;
    nameElement.className = 'table-primary text-dark';
    nameElement.innerHTML = singer.name;

    const ageElement = document.createElement('td');
    ageElement.innerHTML = String(singer.age);

    const songsElement = document.createElement('td');
    songsElement.innerHTML = singer.getListedSongs;

    singerElement.appendChild(nameElement);
    singerElement.appendChild(ageElement);
    singerElement.appendChild(songsElement);

    // Add event listener to the name elements
    nameElement.addEventListener('click', () => {
        const card = document.getElementById('card');
        if (card) {
            card.innerHTML = `
            <img src="${singer.image}" class="card-img-top" alt="${singer.name}">
            <div class="card-body">
                <h5 class="card-title
                ">${singer.name}</h5>
                <p class="card-text">${singer.bio}</p>
                <p class="card-text">Top Songs:</p>
                ${singer.getSongs}
            </div>
            `;
        }
    });

    console.log('done');

    singerList?.appendChild(singerElement);
}