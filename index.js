
const bigContainer = document.getElementById("large_container");

const bonuses = ["Faster Shiny Pet Lv Up Rate", "Infinite Star Signs", "Total Damage", "Faster REfinery Speed", "Bonuses from All Meals", "Drop Rate", "Infinite Star Signs", "Multikill Per Tier", "Base Efficiency for All Skills", "Infinite Star Signs", "Faster Shiny Pet Lv Up Rate", "Base Efficiency for All Skills", "Base AGI",
 "Base Critters per Trap", "Total Damage", "World 6...?", "Multikill Per Tier", "Class EXP", "Tab 1 Talent Pts", "Skill EXP", "Tab 2 Talent Pts", "Line Width in Lab", "Base STR", "Total Damage", "Base Efficiency for All Skills", "Higher Artifact Find Chance", "Faster Refinery Speed", "Base WIS", "Base Efficiency for All Skills",
 "Tab 4 Talent Pts", "World 6...?", "Base LUK", "Faster Shiny Pet Lv Up Rate", "World6...?", "Bonuses from All Meals", "Tab 3 Talent Pts", "Infinite Star Signs", "Drop Rate", "Base LUK", "Multikill Per Tier", "Higher Artifact Find Chance", "Class EXP", "Infinite Star Signs", "Skill EXP", "Faster Shiny Pet Lv Up Rate", "Star Talent Pts",
 "Base STR", "Base WIS", "World 6...?", "Multikill Per Tier", "World 6...?", "Total Damage", "World 6...?", "Sail Captain EXP Gain", "World 6...?", "Faster Refinery Speed", "Base AGI", "Lower Minimum Travel Time for Sailing", "Higher Artifact Find Chance", "Total Damage", "Drop Rate", "Class EXP", "Base STR", "Skill EXP", "Base Critters per Trap",
 "Base AGI", "Base WIS", "Base LUK"];

const increments = [3, 2, 1, 2, 1, 1, 2, 1, 20, 2, 3, 20, 2, 1, 1, 0, 1,
                    1, 2, 2, 2, 1, 2, 1, 20, 2, 2, 2, 20, 2, 0, 2, 3, 0,
                    1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 3, 2, 2, 2, 0, 1, 0, 1,
                    0, 3, 0, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2];

const bonusType = ["%", "", "%", "%", "%", "%", "", "%", "", "", "%", "", "", "", "%", "", "%",
                    "%", "", "%", "", "%", "", "%", "", "%", "%", "", "", "", "", "", "%", "",
                    "%", "", "", "%", "", "%", "%", "%", "", "%", "%", "", "", "", "", "%", "", "%",
                    "%", "%", "", "%", "", "%", "%", "%", "%", "%", "", "%", "", "", "", ""];

let lv = 10;

for (let i = 0; i < bonuses.length; i++) {
    let elem = document.createElement("div");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    let div3 = document.createElement("div");
    let p1 = document.createElement("p");
    let span = document.createElement("span");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let div4 = document.createElement("div");

    li.setAttribute("id", "item");
    elem.setAttribute("id", "outer_container");
    img.setAttribute("src", "pet_icons/" + i + ".png");
    div2.setAttribute("class", "icons");
    div3.setAttribute("class", "level");
    div4.setAttribute("class", "bonus");
    
    // change all of the below latter
    p1.innerText = "Lv :";
    p2.innerText = i + "/0 days";
    p3.innerText = "+ " + (lv * increments[i])  + bonusType[i] + " " + bonuses[i];
    span.innerText = lv;

    bigContainer.appendChild(elem);
    elem.appendChild(ul);
    ul.appendChild(li);
    elem.appendChild(div2);
    li.appendChild(div2);
    li.appendChild(div3);
    li.appendChild(div4);
    div2.appendChild(img);
    div3.appendChild(p1);
    div3.appendChild(p2);
    p1.appendChild(span);
    div4.appendChild(p3);
}




/*

            <div id="outer_container">
                <ul>
                    <li id="item">
                        <div class="icons">
                            <img src="">
                        </div>
                        <div class="level">
                            <p>Lv: <span id="lv">0</span> </p>
                            <p> 0/0 days</p>
                        </div>
                        <div class="bonus">
                            <p>+% bonus</p>
                        </div>
                    </li>
                </ul>
            </div>

*/

// Faster shiny speed ex: 33% = 1.33 per day per shiny pet
// emerald ulthurite = +30% shiny speed (+45% if spelunker obol is enabled)

// current days / (# of that shiny * (1+(emeraldulthurite + faster shiny speed)))
// ex: 100 days / (1 * (1+(.45+ .33))) = 56.179 days


let test = {
    name: "",
    bonus: "",
    
}