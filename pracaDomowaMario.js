let hight = 5;
for (i = 1; i <= hight; i++) {
let spaceCount = hight - i;
let hashCount = i;

let space = "";
for (j = 1; j <= spaceCount; j++) {
    space = space + " ";
}

let hash = "";
for (k = 1; k <= hashCount; k++) {
    hash += "#";
}
 console.log(space + hash + " " + hash + space);

}