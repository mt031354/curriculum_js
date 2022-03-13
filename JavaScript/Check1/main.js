//問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。
let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(num) {
    console.log(num + 'は偶数です');
}

let number = isEven('2,12,18,22');


//問2:以下の要件を満たすように実装してください。
//【要件】
//・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する
//・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する
class car {
    constructor(Gass, Num){
        this.Gass = Gass;
        this.Num = Num;
    }
    getNumGas(){
        console.log(`ガソリンは${this.Gass}です。ナンバーは${this.Num}です`);   
    }
}

let maebuchicar = new car('○○','△△');
maebuchicar.getNumGas();