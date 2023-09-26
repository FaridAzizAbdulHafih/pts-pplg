let pilihan = true;

alert ('Selamat datang di Game Batu, Gunting, Kertas')

while(pilihan){

    

    let p = prompt ('pilih Batu, Gunting, atau Kertas');
    let com = Math.random();

    if ( com < 0.34){
        com = 'kertas'
    } else if (com >= 0.34 && com < 0.67 ) {
        com = 'batu'
    } else (com = 'gunting')

    let hasil='';
    if (p == com) {
        hasil = 'Seri'
    } else if ( p == 'kertas'){
        hasil = (com == 'batu') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'batu'){
        hasil = (com == 'gunting') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'gunting'){
        hasil = (com == 'kertas') ? 'Anda Menang' : 'Komputer Menang';
    } else {
        hasil = 'BISA MAIN GAK!!';
    }

    alert('Anda pilih : ' + p + '\nKomputer pilih : ' + com + '\nHasilnya: ' + hasil)

    pilihan = confirm('Mau main Lagi?')
}      
