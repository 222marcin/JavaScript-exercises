let hight = 4;
for (i = 0; i < hight; i++) {
    let hashCount = hight - i;
    let spaceCount = i;

let hash = "";
for (j = 0; j < hashCount; j++) {
    hash = hash + "#";
}

let space = "";
for (k = 0; k < spaceCount; k++) {
    space = space + ".";
}
console.log(space + hash);

}