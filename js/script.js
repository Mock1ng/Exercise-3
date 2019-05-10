let tombol = document.querySelector('#tombol');
let hasil = document.getElementById('hasil');
let tinggi = document.getElementById('tinggi');
let berat = document.getElementById('berat');


go = () => {
    let inputan = document.getElementById('inputan').value;
    let linkInput = 'https://swapi.co/api/people/' + inputan;

    if (inputan === 0 || inputan >= 88) {
        hasil.innerText = 'Baca Keterangannya Budjank';
        tinggi.innerText = '';
        berat.innerText = '';
    } else {
        axios.get(linkInput).then(function (response) {
            dataObjek(response.data);
        })
    }
}

dataObjek = (data) => {
    hasil.innerText = data.name;
    tinggi.innerText = 'Tinggi: ' + data.height;
    berat.innerText = 'Berat: ' + data.mass;
}


tombol.addEventListener('click', go);