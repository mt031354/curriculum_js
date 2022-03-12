class Taiyaki {
    constructor(name) {
        this.name = name;
    }
    Taiyakiname(){
        console.log('中身は'+ this.name+'です');
    }
}

let anko = new Taiyaki('あんこ')
anko.Taiyakiname();
let cream = new Taiyaki('クリーム')
cream.Taiyakiname();
let cheese = new Taiyaki('チーズ')
cheese.Taiyakiname();