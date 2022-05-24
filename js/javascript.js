$(document).ready(function(){

	$('#header2').hide();
	$('#nama').focusin(function(){
		$('#snama').html('Contoh : Ketut krisna sanjaya');
		$('#snama').show();
		$('#stgl').hide();
		$('#sgenre').hide();
	});
	// $('#nama').focusout(function(){
	// 	$('#snama').text('Isi nama lengkap anda');
	// 	$('#stgl').text('Isi tanggal lahir anda');
	// 	$('#sgenre').text('Isi jenis kelamin anda');
	// });
	$('#tgl').focusin(function(){
		$('#stgl').html('Contoh : Tanggal/Bulan/Tahun');
		$('#stgl').show();
		$('#snama').hide();
		$('#sgenre').hide();
	});
	// $('#tgl').focusout(function(){
	// 	$('#snama').text('Isi nama lengkap anda');
	// 	$('#stgl').text('Isi tanggal lahir anda');
	// 	$('#sgenre').text('Isi jenis kelamin anda');
	// });
	$('#genre').focusin(function(){
		$('#sgenre').html('Pilih : Laki laki / Perempuan');
		$('#sgenre').show();
		$('#snama').hide();
		$('#stgl').hide();
	});
	$('#genre,#tgl,#nama').focusout(function(){
		$('#snama').hide();
		$('#stgl').hide();
		$('#sgenre').hide();
	});

	var date= new Date();
	var jam=date.getHours();
	var isikan=$('#isikan')[0];
	

	var suara1=$('#suara1')[0];
	var suara2=$('#suara2')[0];
	var otak=$('#otak')[0];
	var ok=$('#ok')[0];
	var coba=$('#coba')[0];
	

	var c1 = $('#c1')[0];
	var c2 = $('#c2')[0];
	var c3 = $('#c3')[0];
	var c4 = $('#c4')[0];
	var c5 = $('#c5')[0];
	var c6 = $('#c6')[0];
	var c7 = $('#c6')[0];
	var c8 = $('#c6')[0];

	var ce1 = $('#ce1')[0];
	var ce2 = $('#ce2')[0];
	var ce3 = $('#ce3')[0];
	var ce4 = $('#ce4')[0];
	var ce5 = $('#ce5')[0];
	var ce6 = $('#ce6')[0];
	var ce7 = $('#ce6')[0];
	var ce8 = $('#ce6')[0];

	
	var audio1=$('#a1')[0];
	var audio2=$('#a2')[0];
	var audio3=$('#a3')[0];




	$('input[type="text"],input[type="date"]').focusin(function(){
		audio2.play();
	});
	$('#lihat').click(function(){
		audio1.play();
	});
	$('#lihatgambar').click(function(){
		audio3.play();
	});
	$('#ramallagi').click(function(){
		audio1.play();
	});


	jama(jam);
	function jama(jam){
		var pagi=$('#pagi')[0];
		var siang=$('#siang')[0];
		var sore=$('#sore')[0];
		var malam=$('#malam')[0];
		var tengah=$('#tengah')[0];

		var mpagi=$('#mpagi')[0];
		var msiang=$('#msiang')[0];
		var msore=$('#msore')[0];
		var petang=$('#petang')[0];
		var mtengah=$('#mtengah')[0];
		var msubuh=$('#msubuh')[0];
	

		if(jam>=6 && jam<=9){
			//selamat pagi
			pagi.play();			
		}else if(jam==10){
			//selamat menjelang siang
			msiang.play();			
		}else if(jam>=11 && jam<=13){
			//selamat siang
			siang.play();			
		}else if(jam==14){
			//selamat menjelang sore
			msore.play();			
		}else if(jam>=15 && jam<=17){
			//selamat sore
			sore.play();			
		}else if(jam==18){
			//selamat menjelang malam
			petang.play();			
		}else if(jam>=19 && jam<=22){
			//selamat malam
			malam.play();			
		}else if(jam==23){
			//selamat menjelang tengah malam
			mtengah.play();			
		}else if(jam>=0 && jam<=1){
			//selamat tengah malam
			tengah.play();			
		}else if(jam==2){
			//selamat menjelang subuh
			msubuh.play();			
		}else if(jam>=3 && jam<=5){
			//selamat subuh
			mpagi.play();			
		}

	}
		

	
	



	$('#lihat').click(function(){
		var nama=$('#nama').val().toUpperCase();
		var tgl=$('#tgl').val().toUpperCase();
		var genre=$('#genre').val().toUpperCase();
		// var laki=$('#laki').val();
		// var perempuan=$('#perempuan').val();

		var acak=Math.floor(Math.random()*15);
		var acakaudio=Math.floor(Math.random()*8);

		
			if(nama.length==0 || tgl.length==0 || genre.length==0){	
				// $('#snama').show();
				// $('#stgl').show();
				// $('#sgenre').show();			
				$('#snama').html('Nama belum diisi');
				$('#stgl').html('Tanggal lahir belum diisi');
				$('#sgenre').html('Jenis kelamin belum diisi');
			}else if(tgl.length==0 && nama.length==nama.length && genre.length==genre.length){
				$('#sstgl').show();
				$('#sstgl').html('Isikan tanggal');

			}else if(nama.length==0 && tgl.length==tgl.length && genre.length==genre.length){
				// $('#ssnama').show();
				$('#ssnama').html('Isikan nama anda');

			}else if(genre.length==0 && nama.length==nama.length && tgl.length==tgl.length){
				// $('#ssgenre').show();
				$('#ssgenre').html('Isikan jenis kelamin anda');

			}else if(tgl.length ==0){
				$('#stgl').show();
				$('#stgl').text('Isikan tanggal sesuai contoh');
				setTimeout(function() {
					suara1.play();
				}, 500);				
			}else{

				if(genre!=="LAKI LAKI" && genre!=="PEREMPUAN"){
					$('#sgenre').show();
					$('#sgenre').text('masukan jenis kelamin sesuai contoh');
					setTimeout(function() {
					suara2.play();
				}, 600);
					
				}else if(genre=="LAKI LAKI"){
					setTimeout(function() {
						ok.play();
					}, 500);

					if(acak==1){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r1.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
						
					}else if(acak==2){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r2.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');

								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==3){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r3.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');

								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==4){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r4.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');

								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==5){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r5.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==6){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r6.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==7){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r7.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==8){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r8.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==9){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r9.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==10){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r10.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);

					}else if(acak==11){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r12.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);

					}else if(acak==12){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r13.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);

					}else if(acak==13){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r14.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);

					}else if(acak==14){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r15.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);

					}else if(acak==0){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria wanita yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/r11.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');

							});

							$('#image').click(function(){
								
									if(acakaudio==1){
										c1.play();
									}else if(acakaudio==2){
										c2.play();
									}else if(acakaudio==3){
										c3.play();
									}else if(acakaudio==4){
										c4.play();
									}else if(acakaudio==5){
										c5.play();
									}else if(acakaudio==6){
										c6.play();
									}else if(acakaudio==7){
										c7.play();
									}else if(acakaudio==0){
										c8.play();
									}
								
							});

							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);


					}
					
					
				}else if(genre=="PEREMPUAN"){
					setTimeout(function() {
						ok.play();
					}, 500);

					if(acak==1){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c10.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
						
					}else if(acak==2){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c9.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==3){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c8.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==4){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c7.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==5){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c6.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==6){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c5.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==7){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c4.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==8){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c3.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==9){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c2.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==0){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c11.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==11){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c12.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==12){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c13.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==13){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c14.jpg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==14){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c15.jpeg)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
					}else if(acak==10){
						$('#lihat').text('Please wait..');
						setTimeout(function() {

							$('#header').hide();
							$('#header2').show();
							$('#ramalan').html('<p><b>Hello!!! '+nama+'</b></p> Anda adalah seorang <b><i>'+genre+'</i></b> yang lahir pada tanggal <b><i>'+tgl+'</i></b>, berdasarkan data diatas kriteria pasangan yang pas untuk anda adalah sebagai berikut.<br>Silahkan klik tombol <b>lihat</b> dibawah untuk melihat kriteria laki-laki yang cocok untuk anda!!!');
							$('#image').hide();
							$('#lihatgambar').click(function(){
								
								$('#image').slideToggle('slow');
								$('#image').css('background-image','url(images/c1.png)');
								$('#image').css('background-size','cover');
								$('#image').css('background-position','center');
								$('#image').show();
								$('#lihatgambar').text('LIHAT / TUTUP');
								});

								$('#image').click(function(){
								
									if(acakaudio==1){
										ce1.play();
									}else if(acakaudio==2){
										ce2.play();
									}else if(acakaudio==3){
										ce3.play();
									}else if(acakaudio==4){
										ce4.play();
									}else if(acakaudio==5){
										ce5.play();
									}else if(acakaudio==6){
										ce6.play();
									}else if(acakaudio==7){
										ce7.play();
									}else if(acakaudio==0){
										ce8.play();
									}
								
							});
							$('#ramallagi').click(function(){
								$('#ramallagi').text('tunggu..');
								setTimeout(function() {
									
									$('#header').show();
									window.location.reload();									
								}, 3000);
							});

						}, 4000);
				

					}
				}
				
				



			}

	});


});
