function knightlOnAChessboard(n) {
    let result = [];
    function minMoves(a, b) {
        let directions = [
            [a, b], [a, -b], [-a, b], [-a, -b],
            [b, a], [b, -a], [-b, a], [-b, -a]
        ];
        let queue = [[0, 0, 0]];
        let visited = new Set(["0,0"]);
        while (queue.length > 0) {
            let [x, y, moves] = queue.shift();
            if (x === n - 1 && y === n - 1) return moves;
            for (let [dx, dy] of directions) {
                let nx = x + dx, ny = y + dy;
                let key = `${nx},${ny}`;
                if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited.has(key)) {
                    visited.add(key);
                    queue.push([nx, ny, moves + 1]);
                }
            }
        }
        return -1;
    }
    for (let a = 1; a < n; a++) {
        let row = [];
        for (let b = 1; b < n; b++) {
            row.push(minMoves(a, b));
        }
        result.push(row);
    }
    return result;
}