const itemImages = {
    Coin: "img/Coin.webp",
    Banana: "img/Banana.webp",
    GreenShell: "img/GreenShell.webp",
    RedShell: "img/RedShell.webp",
    TripleBanana: "img/TripleBanana.webp",
    TripleGreenShell: "img/TripleGreenShell.webp",
    TripleRedShell: "img/TripleRedShell.webp",
    SpinyShell: "img/SpineyShell.webp",
    Bobomb: "img/Bobomb.webp",
    Mushroom: "img/Mushroom.webp",
    TripleMushroom: "img/TripleMushroom.webp",
    GoldenMushroom: "img/GoldenMushroom.webp",
    BulletBill: "img/BulletBill.webp",
    Blooper: "img/Blooper.webp",
    Lightning: "img/Lightning.webp",
    SuperStar: "img/Superstar.webp",
    FireFlower: "img/FireFlower.webp",
    BoomerangFlower: "img/BoomerangFlower.webp",
    PiranhaPlant: "img/PiranhaPlant.webp",
    SuperHorn: "img/SuperHorn.webp",
    Boo: "img/Boo.webp"
}

const itemDescriptions = {
    Coin: "You got a Coin!\n\nAdd 1 Coin to your wallet",
    Banana: "You got a Banana!\n\nYou may drop a Banana on the track OR protect yourself from Green & Red Shells",
    GreenShell: "You got a Green Shell!\n\nIf you roll 4 or above, move any player in front of you back 2 spaces",
    RedShell: "You got a Red Shell \n\nMove any player in front of you back 3 spaces",
    TripleBanana: "You got 3 Bananas!\n\nYou may drop a Banana on the track OR protect yourself from Green & Red Shells, up to 3 times",
    TripleGreenShell: "You got 3 Green Shells!\n\nIf you roll 4 or above, move any player in front of you back 2 spaces, up to 3 times",
    TripleRedShell: "You got 3 Red Shells!\n\nMove any player in front of you back 3 spaces, up to 3 times",
    SpineyShell: "You got a Blue Shell!\n\n1st place goes back 6 spaces, and you move forward 1 space",
    Bobomb: "You got a Bobomb!\n\nAnyone up to 6 spaces in front of you goes back 2 spaces",
    Mushroom: "You got a Mushroom!\n\nSpeed forward up to 3 spaces",
    TripleMushroom: "You got 3 Mushrooms!\n\nSpeed forward up to 3 spaces, up to 3 times",
    GoldenMushroom: "You got a Golden Mushroom\n\nAdd 6 to your next roll",
    BulletBill: "You got a Bullet Bill!\nOvertake 5 players ahead of you by 1 space",
    Blooper: "You got a Blooper!\n\nOvertake the player in front of you by 1 space",
    Lightning: "You got Lightning!\n\nEveryone in front of you moves back 2 spaces",
    SuperStar: "You got a Super Star!\n\nAdd 3 to your next 3 rolls. You are also invincible for 3 rolls",
    FireFlower: "You got a Fire Flower!\n\nMove 3 players ahead of you back 1 space",
    BoomerangFlower: "You got a Boomerang Flower!\n\nSwap places with the player ahead of you",
    PiranhaPlant: "You got a Piranha Plant!\n\nAdd one to your next 3 rolls. If you pass anyone, move them back 1 space",
    SuperHorn: "You got a Super Horn!\n\nAnyone up to 3 spaces ahead of you move back 3 spaces AND/OR protect yourself from any coloured Shells",
    Boo: "You got a Boo!\n\nSteal the item of the player ahead of you. You are also invincible for 2 rolls"





}

const itemOdds = [
    //1st
    { Banana: 0.325, GreenShell: 0.25, RedShell: 0.025, Mushroom: 0.025, SuperHorn: 0.025, Coin: 0.35 },
    //2nd
    { Banana: 0.1, GreenShell: 0.125, RedShell: 0.25, Mushroom: 0.1, Bobomb: 0.05, FireFlower: 0.05, PiranhaPlant: 0.05, SuperHorn: 0.025, BoomerangFlower: 0.025, Coin: 0.075, TripleBanana: 0.075, TripleGreenShell: 0.05, TripleRedShell: 0.025 },
    //3rd
    { Banana: 0.05, GreenShell: 0.1, RedShell: 0.15, Mushroom: 0.125, Bobomb: 0.075, TripleMushroom: 0.075, FireFlower: 0.05, PiranhaPlant: 0.075, SuperHorn: 0.025, BoomerangFlower: 0.05, Coin: 0.025, TripleBanana: 0.05, TripleGreenShell: 0.05, TripleRedShell: 0.075, Boo: 0.025 },
    //4th
    { Banana: 0.05, GreenShell: 0.1, RedShell: 0.15, Mushroom: 0.125, Bobomb: 0.075, TripleMushroom: 0.075, FireFlower: 0.05, PiranhaPlant: 0.075, SuperHorn: 0.025, BoomerangFlower: 0.05, Coin: 0.025, TripleBanana: 0.05, TripleGreenShell: 0.05, TripleRedShell: 0.075, Boo: 0.025 },
    //5th
    { GreenShell: 0.075, RedShell: 0.1, Mushroom: 0.25, Bobomb: 0.025, Blooper: 0.025, TripleMushroom: 0.3, FireFlower: 0.025, PiranhaPlant: 0.025, BoomerangFlower: 0.05, TripleGreenShell: 0.05, TripleRedShell: 0.05, Boo: 0.025 },
    //6th
    { RedShell: 0.05, Mushroom: 0.15, Blooper:0.025, SpinyShell: 0.025, TripleMushroom: 0.425, SuperStar:0.125, BulletBill: 0.05, GoldenMushroom: 0.125, Boo: 0.025},
    //7th
    { Mushroom: 0.05, SpinyShell: 0.025, TripleMushroom: 0.325, SuperStar: 0.2, BulletBill: 0.15, Lightning: 0.025, GoldenMushroom: 0.2, Boo: 0.025 },
    //8th
    { Mushroom: 0.05, SpinyShell: 0.025, TripleMushroom: 0.325, SuperStar: 0.2, BulletBill: 0.15, Lightning: 0.025, GoldenMushroom: 0.2, Boo: 0.025 },
    //9th
    { SpinyShell: 0.025, TripleMushroom: 0.175, SuperStar: 0.175, BulletBill: 0.3, Lightning: 0.05, GoldenMushroom: 0.225 },
    //10th
    { TripleMushroom: 0.05, SuperStar: 0.15, BulletBill: 0.425, Lightning: 0.075, GoldenMushroom: 0.3 },
    //11th
    { TripleMushroom: 0.15, SuperStar: 0.2, BulletBill: 0.35, GoldenMushroom: 0.3 },
    //12th and behind
    { TripleMushroom: 0.15, SuperStar: 0.2, BulletBill: 0.35, GoldenMushroom: 0.3 }
]

function GetRandomItem(position) {
    const pos = Math.max(1, Math.min(position, itemOdds.length));
    const odds = itemOdds[pos - 1];
    const items = Object.keys(odds);
    const weights = Object.values(odds);
    
    let total = weights.reduce((a,b) => a + b, 0);
    let rnd = Math.random() * total;

    for (let i = 0; i < items.length; i++) {
        if (rnd < weights[i]) {
            return items[i];
        }
        rnd -= weights[i];
    }

    return items[items.length - 1];
}

function RollItemBox(pos) {

    document.getElementById("position-container").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const realItem = GetRandomItem(pos);
    const strip = document.getElementById('item-strip');
    const itemKeys = Object.keys(itemImages);
    strip.innerHTML = "";

    for (let i = 0; i < 21; i++) {
        const randItem = itemKeys[Math.floor(Math.random() * itemKeys.length)];
        const img = document.createElement("img");
        img.src = itemImages[randItem];
        img.className = "item-img";
        strip.appendChild(img);
    }

    const finalImg = document.createElement("img");
    finalImg.src = itemImages[realItem];
    finalImg.className = "item-img";
    strip.appendChild(finalImg);

    const icon = document.getElementById("item-box");
    const iconStyle = window.getComputedStyle(icon);
    const iconHeight = iconStyle.width.substring(0,3);
    console.log(iconHeight);
    strip.style.transition = "none";
    strip.style.transform = "translateY(0px)";
    void strip.offsetWidth;

    setTimeout(() => {
        strip.style.transition = "transform 2.2s cubic-bezier(.15,1.3,.43,1)";
        strip.style.transform = `translateY(-${21 * iconHeight}px)`;
      }, 50);
    
    setTimeout(() => {
        const desc = document.getElementById('description');
        desc.innerText = itemDescriptions[realItem] || "";
        desc.style.opacity = 1;
    }, 2300);
}
