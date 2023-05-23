const data = {
    nama : 'Dwi Fauzul Ahmad Tanjung',
    nim : '02042111015',
    email : 'fauzultanjung05@gmail.com'
};
const {nama, nim, email} = data;

console.log(nama, nim, email);

const teman1 = ["Dimas", "Rey"];
const teman2 = ["Ali", "Toyyib"];
const teman3 = ["Wahyu", "Akbar"];

const cetakNama = [...teman1, ...teman2, ...teman3];
console.log(cetakNama);