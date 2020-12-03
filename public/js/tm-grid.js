//PEOPLE GRID
let peopleContainer = document.querySelector('#team-members-grid .people') || document.querySelector('#give-feedback .people');
let card = document.querySelector('#team-members-grid .content-card') || document.querySelector('#give-feedback .content-card');

function peopleGrid() {
    let allPeople = document.querySelectorAll('.people .person');
    if (allPeople.length) {
        let personWidth = allPeople[0].clientWidth;
        let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

        if (card.clientWidth > (allPeople.length * personWidth * 2) || allPeople.length <= 8) {
            peopleContainer.style.maxWidth = `100%`;
        } else {
            peopleContainer.style.width = `${Math.ceil(allPeople.length / 2) * (personWidth / rem)}em`;
        }
    }
}

peopleGrid();

// let addPeople = document.querySelector('.test-add-person');

// if (addPeople) {
//     addPeople.addEventListener('click', function () {
//         peopleContainer.innerHTML = `${peopleContainer.innerHTML}                         
//         <div class="person">
//         <div class="person-main">
//             <img
//             src="../public/img/p-03.png"
//             alt="User's profile image"
//             class="person-main-img"
//             />
//             <div class="person-main-icon">
//             <span class="ok">OK</span>
//             </div>
//         </div>
//         <div class="person-info">
//             <p class="person-info-name">John Brown</p>
//             <p class="person-info-position">Sales Africa</p>
//         </div>
//         </div>`

//         peopleGrid();
//     });
// }