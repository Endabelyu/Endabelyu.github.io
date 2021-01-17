$('.navlink').on('click', function () {
        
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    console.log(elemenTujuan.offset().top); 

});