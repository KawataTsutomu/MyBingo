'use strict';

{
    function createColumn(col) {
        const source = [];
        for (let i = 0; i < 15; i++) {
            source[i] = i + 1 + 15 * col;
        }
    
        const colomn = [];
        for (let i = 0; i < 5; i++) {
            colomn[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }
        
        return colomn;
    }

    const colomns = [];
    colomns[0] = createColumn(0);
    colomns[1] = createColumn(1);
    colomns[2] = createColumn(2);
    colomns[3] = createColumn(3);
    colomns[4] = createColumn(4);
    colomns[2][2] = 'FREE';

    const bingo = [];
    for (let row = 0; row < 5; row++) {
        bingo[row] = [];
        for (let col = 0; col < 5; col++) {
            bingo[row][col] = colomns[col][row];
        }
    }
    console.table(bingo);
}