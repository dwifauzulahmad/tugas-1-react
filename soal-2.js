const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const hewan = () => [...hewanBuas, ...hewanJinak];

const makananKesukaan = ["Ikan", "Sayuran", "Pur"];

const pemetaan = (m, b) => {
    let objekHewan = {}
        for(let a = 0; a < m.length; a++){
            objekHewan[m[a]] = b[a];
        }
    return(objekHewan);
}

console.log(pemetaan(hewanJinak, makananKesukaan));
setTimeout(() => {
    console.log(hewan());
}, 5000);