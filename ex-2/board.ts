const createDesk = (chessSize: number) => {
    const size: number = chessSize;
    let chess: string = '';

    for (let i = 1; i <= size; i++){
        if(i % 2 === 1) {
            for (let j = 1; j <= size; j++){
                if (j % 2 === 1){
                    chess += '  ';
                } else if(j === size) {
                    chess += '██\n';
                } else {
                    chess += '██';
                }
            }
        } else if(i === size) {
            return chess;
        } else {
            for (let j = 1; j <= size; j++){
                if (j % 2 === 1){
                    chess += '██';
                } else if (j === size) {
                    chess += '  \n';
                } else {
                    chess += '  ';
                }
            }
        }
    }
};

console.log(createDesk(8));