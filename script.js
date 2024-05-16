function navigateTo(section) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    switch (section) {
        case 'songs':
            content.innerHTML = `
                <h2>Songs</h2>
                <ul>
                    <li><button onclick="playSong('song1.mp3')">Baby Shark</button></li>
                    <li><button onclick="playSong('song2.mp3')">Humpty Dumpty</button></li>
                    <li><button onclick="playSong('song3.mp3')">Head, Shoulder, Knees and Toes</button></li>
                    <li><button onclick="playSong('song4.mp3')">Five Little Monkeys</button></li>
                    <li><button onclick="playSong('song5.mp3')">Rain Rain Go Away</button></li>
                </ul>
                <audio id="audioPlayer" controls style="display:none;"></audio>
            `;
            break;
        case 'language':
            content.innerHTML = `
                <h2>Language</h2>
                <p>Select a language:</p>
                <button onclick="showLanguage('english')">English</button>
                <button onclick="showLanguage('tagalog')">Tagalog</button>
                <div id="languageContent"></div>
            `;
            break;
        case 'colors':
            content.innerHTML = `
                <h2>Colors</h2>
                <div class="colors">
                    <div class="color" style="background-color: red;" onclick="speakColor('Red')">Red</div>
                    <div class="color" style="background-color: blue;" onclick="speakColor('Blue')">Blue</div>
                    <div class="color" style="background-color: green;" onclick="speakColor('Green')">Green</div>
                    <div class="color" style="background-color: yellow;" onclick="speakColor('Yellow')">Yellow</div>
                    <div class="color" style="background-color: orange;" onclick="speakColor('Orange')">Orange</div>
                    <div class="color" style="background-color: purple;" onclick="speakColor('Purple')">Purple</div>
                    <div class="color" style="background-color: violet;" onclick="speakColor('Violet')">Violet</div>
                    <div class="color" style="background-color: cyan;" onclick="speakColor('Cyan')">Cyan</div>
                    <div class="color" style="background-color: magenta;" onclick="speakColor('Magenta')">Magenta</div>
                    <div class="color" style="background-color: pink;" onclick="speakColor('Pink')">Pink</div>
                    <div class="color" style="background-color: brown;" onclick="speakColor('Brown')">Brown</div>
                    <div class="color" style="background-color: black;" onclick="speakColor('Black')">Black</div>
                    <div class="color" style="background-color: white; color: black;" onclick="speakColor('White')">White</div>
                    <div class="color" style="background-color: gray;" onclick="speakColor('Gray')">Gray</div>
                    <div class="color" style="background-color: silver;" onclick="speakColor('Silver')">Silver</div>
                    <div class="color" style="background-color: gold;" onclick="speakColor('Gold')">Gold</div>
                    <div class="color" style="background-color: maroon;" onclick="speakColor('Maroon')">Maroon</div>
                    <div class="color" style="background-color: olive;" onclick="speakColor('Olive')">Olive</div>
                    <div class="color" style="background-color: teal;" onclick="speakColor('Teal')">Teal</div>
                    <div class="color" style="background-color: navy;" onclick="speakColor('Navy')">Navy</div>
                    <div class="color" style="background-color: indigo;" onclick="speakColor('Indigo')">Indigo</div>
                    <div class="color" style="background-color: turquoise;" onclick="speakColor('Turquoise')">Turquoise</div>
                    <div class="color" style="background-color: coral;" onclick="speakColor('Coral')">Coral</div>
                    <div class="color" style="background-color: lime;" onclick="speakColor('Lime')">Lime</div>
                </div>
            `; 
            break;
        case 'letters':
            content.innerHTML = `
                <h2>Letters</h2>
                <div class="letters">
                    <div class="letter" onclick="speakLetter('A')">A</div>
                    <div class="letter" onclick="speakLetter('B')">B</div>
                    <div class="letter" onclick="speakLetter('C')">C</div>
                    <div class="letter" onclick="speakLetter('D')">D</div>
                    <div class="letter" onclick="speakLetter('E')">E</div>
                    <div class="letter" onclick="speakLetter('F')">F</div>
                    <div class="letter" onclick="speakLetter('G')">G</div>
                    <div class="letter" onclick="speakLetter('H')">H</div>
                    <div class="letter" onclick="speakLetter('I')">I</div>
                    <div class="letter" onclick="speakLetter('J')">J</div>
                    <div class="letter" onclick="speakLetter('K')">K</div>
                    <div class="letter" onclick="speakLetter('L')">L</div>
                    <div class="letter" onclick="speakLetter('M')">M</div>
                    <div class="letter" onclick="speakLetter('N')">N</div>
                    <div class="letter" onclick="speakLetter('O')">O</div>
                    <div class="letter" onclick="speakLetter('P')">P</div>
                    <div class="letter" onclick="speakLetter('Q')">Q</div>
                    <div class="letter" onclick="speakLetter('R')">R</div>
                    <div class="letter" onclick="speakLetter('S')">S</div>
                    <div class="letter" onclick="speakLetter('T')">T</div>
                    <div class="letter" onclick="speakLetter('U')">U</div>
                    <div class="letter" onclick="speakLetter('V')">V</div>
                    <div class="letter" onclick="speakLetter('W')">W</div>
                    <div class="letter" onclick="speakLetter('X')">X</div>
                    <div class="letter" onclick="speakLetter('Y')">Y</div>
                    <div class="letter" onclick="speakLetter('Z')">Z</div>
                </div>
            `;
            break;
        case 'activity':
            content.innerHTML = `
                <h2>Activity</h2>
                <p>Interactive activities will be available here.</p>
            `;
            break;
        case 'matching':
            content.innerHTML = `
                <h2>Matching Type</h2>
                <p>Matching game will be available here.</p>
            `;
            break;
        default:
            content.innerHTML = `<h2>Welcome to Kindergarten E-Learning</h2>`;
            break;
    }
}
function playSong(song) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = song;
    audioPlayer.style.display = 'block';
    audioPlayer.play();
}

function showLanguage(language) {
    const languageContent = document.getElementById('languageContent');
    if (language === 'english') {
        languageContent.innerHTML = `
            <h3>English Words</h3>
            <ul>
                <li>Apple</li>
                <li>House</li>
                <li>Car</li>
                <li>Table</li>
                <li>Chair</li>
                <li>Dog</li>
                <li>Cat</li>
                <li>Book</li>
                <li>Pencil</li>
                <li>Computer</li>
                <li>Phone</li>
                <li>Door</li>
                <li>Window</li>
                <li>Shirt</li>
                <li>Shoes</li>
                <li>Sun</li>
                <li>Moon</li>
                <li>Star</li>
                <li>Cloud</li>
                <li>Rain</li>
                <li>Tree</li>
                <li>Grass</li>
                <li>Chair</li>
                <li>Table</li>
                <li>Ball</li>
                <li>Chair</li>
                <li>Bed</li>
                <li>Window</li>
                <li>Door</li>
                <li>Street</li>
                <li>House</li>
                <li>Beach</li>
                <li>Mountain</li>
                <li>River</li>
                <li>Bridge</li>
                <li>Park</li>
                <li>Library</li>
                <li>Store</li>
                <li>Museum</li>
                <li>Restaurant</li>
            </ul>
        `;
    } else if (language === 'tagalog') {
        languageContent.innerHTML = `
            <h3>Tagalog Words</h3>
            <ul>
                <li>Bahay (House)</li>
                <li>Kotse (Car)</li>
                <li>Mesa (Table)</li>
                <li>Litrato (Picture)</li>
                <li>Upuan (Chair)</li>
                <li>Aso (Dog)</li>
                <li>Pusa (Cat)</li>
                <li>Araw (Sun)</li>
                <li>Buwan (Moon)</li>
                <li>Bituin (Star)</li>
                <li>Ulap (Cloud)</li>
                <li>Ulan (Rain)</li>
                <li>Saging (Banana)</li>
                <li>Mansanas (Apple)</li>
                <li>Lapis (Pencil)</li>
                <li>Libro (Book)</li>
                <li>Telepono (Phone)</li>
                <li>Pinto (Door)</li>
                <li>Bintana (Window)</li>
                <li>Sapatos (Shoes)</li>
                <li>Punongkahoy (Tree)</li>
                <li>Tasa (Cup)</li>
                <li>Kama (Bed)</li>
                <li>Ilaw (Light)</li>
                <li>Pangalan (Name)</li>
                <li>Daan (Road)</li>
                <li>Ilalim (Under)</li>
                <li>Tulay (Bridge)</li>
                <li>Palengke (Market)</li>
                <li>Lungsod (City)</li>
                <li>Barangay (Village)</li>
            </ul>
        `;
    }
}


function speakColor(color) {
    const msg = new SpeechSynthesisUtterance(color);
    window.speechSynthesis.speak(msg);
}

function speakLetter(letter) {
    const msg = new SpeechSynthesisUtterance(letter);
    window.speechSynthesis.speak(msg);
}
