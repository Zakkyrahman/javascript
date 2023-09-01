// let a=2;
// let b=3;
// let c=a+b;
// console.log(c);

// 3+2*4/2*3*3+2-5

// let d=2;
// let e=3;
// let f=4;
// let g=5;
// let h= ((e+d)*f)/(d*e*e)+(d-g);
// console.log(h)


// let x=6;
// let y=5;
// // let hasil=x>y;
// if(x>y){
//     console.log("Benar");
// }else{
//     console.log("Salah");
// }


// let nilai=81;
// let kkm=80;


// if(nilai>kkm){
//     console.log("Lulus")
// }else{
//     console.log("Tidak Lulus")
// }

let bulan=1;
let tanggal=20;
let zodiak="belum dibuat";

if(bulan==1){
    if(tanggal>0 && tanggal<20){
        zodiak="aquarius";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="capricon";
    }
}

if(bulan==2){
    if(tanggal>0 && tanggal<20){
        zodiak="gemini";
    }
    if(tanggal>19 && tanggal<29){
        zodiak="taurus";
    }
}

if(bulan==3){
    if(tanggal>0 && tanggal<20){
        zodiak="agos";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="yunus";
    }
}

if(bulan==4){
    if(tanggal>0 && tanggal<20){
        zodiak="muklis";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="titiw";
    }
}
if(bulan==5){
    if(tanggal>0 && tanggal<20){
        zodiak="buas";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="cuopu";
    }
}

if(bulan==6){
    if(tanggal>0 && tanggal<20){
        zodiak="dapo";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="gembeng";
    }
}

if(bulan==7){
    if(tanggal>0 && tanggal<20){
        zodiak="uranus";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="abuy";
    }
}
if(bulan==8){
    if(tanggal>0 && tanggal<20){
        zodiak="ikan";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="lele";
    }
}
if(bulan==9){
    if(tanggal>0 && tanggal<20){
        zodiak="galung";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="pio";
    }
}
if(bulan==10){
    if(tanggal>0 && tanggal<20){
        zodiak="hevenu";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="arauf";
    }
}
if(bulan==11){
    if(tanggal>0 && tanggal<20){
        zodiak="jepri";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="nanda";
    }
}
if(bulan==12){
    if(tanggal>0 && tanggal<20){
        zodiak="seno";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="pramudito";
    }
}

console.log(zodiak);