
// Asumsi
// 1. Persegi panjang harus terdiri dari 4 koordinat
// 2. Kubus bukan persegi panjang


const isRectangle = points => {
    if (points.length > 4) {
        console.log('not a rectangle');
        return;
    }    
    else {
        let countX = 0;
        let tempX = points[0].x;
        let countY = 0;
        let tempY = points[0].y;
        let width = 0;
        let height = 0;

        for (let point of points) {
            if (tempX !== point.x) {
                if ( width === 0) {
                    width = Math.abs(tempX-point.x);
                }
                countX++;
            }
            if (tempY !== point.y) {
                if ( height === 0) {
                    height = Math.abs(tempY-point.y);
                }
                countY++;
            }
        }

        if (countX === 2 && countY === 2 && width !== height ) {
            console.log('a rectangle')
        }
        else {
            console.log('not a rectangle')
        }
        return;
    }

}

isRectangle([{'x':0,'y':0}, {'x':4,'y':0}, {'x':0,'y':4}, {'x':4,'y':4}]);