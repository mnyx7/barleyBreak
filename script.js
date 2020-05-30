let tbl = document.getElementById("tbl");
let A = [""];
let B = [];
let x, y;
for (i = 1; i <= 15; i++) {
    A[i] = i;
}

for (i = 1; i <= 4; i++) {
    B[i] = []; //!!!!!!!!
    for (j = 1; j <= 4; j++) {
        n = Math.floor(Math.random() * (A.length - 1));
        B[i][j] = A[n];
        if (A[n] == "") { x = i; y = j; }
        A.splice(n, 1);
    }
}
show();
function show() {
    let kod = "";
    for (i = 1; i <= 4; i++) {
        kod += "<tr>";
        for (j = 1; j <= 4; j++) {
            kod += '<td onclick="move(' + i + ',' + j + ')">' + B[i][j] + '</td>';
        }
        kod += "</tr>";
    }
    tbl.innerHTML = kod;
}
function check() {
    let x = 1;
    let count = 0;
    for (i = 1; i <= 4; i++) {
        for (j = 1; j <= 4; j++) {
            if (B[i][j] == x++) count++;
        }
    }
    if (count == 15) alert('Congratulations, You Win!');
}
function move(i, j) {
    if ((i == x && Math.abs(j - y) == 1) ||
        (j == y && Math.abs(i - x) == 1)) {
        B[x][y] = B[i][j];
        B[i][j] = "";
        x = i;
        y = j;
        show();
        check();
    }
}