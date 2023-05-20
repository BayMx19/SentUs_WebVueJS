<script setup>

</script>

<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div class="container px-5">
            <a class="navbar-brand fw-bold" href="#page-top">
                <img src="/assets/image/Logo-panjang.png">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li class="nav-item active"><a class="nav-link me-lg-3" href="#home">Home</a></li>

                    <li class="nav-item"><a class="nav-link me-lg-3" href="#about">Tentang Kami</a></li>
                    <li class="nav-item"><a class="nav-link me-lg-3" href="#contact">Hubungi Kami</a></li>
                </ul>

                <router-link to="/login" tag="button" class="btn btn-primary px-3 mb-2 mb-lg-0">
                    Bergabung Sekarang!
                </router-link>
                
            </div>
        </div>
    </nav>
    <header class="masthead" id="home">
        <div class="container px-2">
            <div class="row gx-5 align-items-center">
                <div class="col-sm-6">
                    <div class="mb-5 mb-lg-0 text-lg-start">
                        <h1 class="header-text1 lh-1 mb-3">Welcome to SentUs!</h1>
                        <p class="header-text2 mb-5">Website Layanan Percetakan untuk Efisiensi Anda</p>
                        <div class="d-grid gap-2 col-6  flex-column flex-lg-row align-items-center">
                            <router-link to="/login" tag="button" class="btn-header">
                    Bergabung Sekarang!
                </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 img-header">
                    <!-- Masthead device mockup feature-->
                    <img class="header-lp" src="/assets/image/header-lp.png">
                </div>
            </div>
        </div>
    </header>

    <aside class="text-center" id="benefit">
        <div class="container">
            <div class="row">
                <h1 class="txt-section2">Mengapa harus bergabung dengan kami?</h1>
            </div>
            <div class="row mt-5 container-card">

                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body shadow">
                            <div class="card-container">
                                <div class="row mt-5">
                                    <div class="img-card">
                                        <img class="img-card-inside" src="/assets/image/card-img-1.png">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="txt-card mt-3">
                                        <p class="txt-card-inside">Jangkauan Luas</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body shadow">
                            <div class="card-container">
                                <div class="row mt-5">
                                    <div class="img-card">
                                        <img class="img-card-inside" src="/assets/image/card-img-2.png">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="txt-card mt-3">
                                        <p class="txt-card-inside">Hemat Waktu</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body shadow">
                            <div class="card-container">
                                <div class="row mt-5">
                                    <div class="img-card">
                                        <img class="img-card-inside" src="/assets/image/card-img-3.png">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="txt-card mt-3">
                                        <p class="txt-card-inside">Layanan Efisien</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    </aside>

    <section id="about">
        <div class="container px-2">
            <div class="row gx-5 align-items-center">
                <div class="col-sm-6">
                    <img class="header-lp" src="/assets/image/footer-lp.png">

                </div>
                <div class="col-lg-6 img-header">
                    <div class="mb-5 mb-lg-0 text-lg-start">
                        <h1 class="footer-text lh-1 mb-3">#mudahcepatSentUs</h1>
                        <p class="footer-text2 mb-5"><b>SentUs</b> merupakan sebuah platform bagi para pengguna yang ingin
                            mencetak dokumen mereka dengan cepat dan efisien.</p>
                        <div class="d-grid gap-2 col-6  flex-column flex-lg-row align-items-center">

                            <router-link to="/login" tag="button" class="btn-footer">
                    Bergabung Sekarang!
                </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-gradient-primary-to-secondary" id="contact">
        <div class="container px-5">
            <div class="row">
                <div class="col-sm-6">

                    <div class="container-before-footer">
                        <h2 class="header-text1 text-center lh-1 mb-5">- Contact Info -</h2>
                        <h6 class="contact-info text-white mt-2"><a class="a" href="https://wa.me/+62882003365621"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path
                                        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>&nbsp;&nbsp;+62882003365621</a></h6>
                        <h6 class="contact-info text-white"><a class="a" href="https://instagram.com/sentus.id"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>&nbsp;&nbsp;@sentus.id</a></h6>
                        <h6 class="contact-info text-white"><a class="a" href="https://goo.gl/maps/THbKPf5wQeMtyJu49?coh=178573&entry=tt"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg>&nbsp;&nbsp;Universitas Negeri Surabaya - Kampus Ketintang</a></h6>
                    </div>
                </div>
                <div class="col-sm-6 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3489569319318!2d112.72481921477528!3d-7.314639444720972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb7081be4f83%3A0xa9c00ebea3e64b3d!2sSurabaya%20State%20University%20-%20Ketintang%20Campus!5e0!3m2!1sen!2sid!4v1684298083411!5m2!1sen!2sid"
                        width="400" height="300" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    </section>

    <footer class="bg-black text-center py-1">
            <div class="container px-5">
                <div class="text-white small">
                    <div class="mt-1 mb-1">&copy; SentUs 2023. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
  </main>
</template>


<style scoped>
@charset "UTF-8";

*,
*::before,
*::after {
    box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
    :root {
        scroll-behavior: smooth;
    }
}

body {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.text-center {
    text-align: center !important;
}
.col-sm-6{
  text-align: center;
}
#mainNav {
    /* padding-top: 1rem;
  padding-bottom: 1rem; */
    background-color: #fff;
}

#mainNav .navbar-brand {
    font-family: "Kanit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

#mainNav .navbar-brand:hover,
#mainNav .navbar-brand:active {
    color: #2937f0;
}

#mainNav .navbar-toggler {
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    color: #212529;
}

#mainNav .navbar-nav .nav-item .nav-link {
    color: #212529;
}

#mainNav .navbar-nav .nav-item .nav-link:hover {
    color: #00337C;
    font-weight: bold;
}

#mainNav .navbar-nav .nav-item .nav-link.active {
    color: #2937f0;
}

html {
    scroll-padding-top: 4.5rem;
}

.contact-info h6{
  margin-top: 5px;
}
.btn {
    background-color: #00337C;
    border: none;
    border-radius: 10px;
    color: white;
}

.btn:hover {
    background-color: white;
    border: 2px solid #00337C;
    color: #00337C;
}

h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    line-height: 1.2;
}


h1,
.h1 {
    font-size: calc(1.375rem + 1.5vw);
}

@media (min-width: 1200px) {

    h1,
    .h1 {
        font-size: 2.5rem;
    }
}

h2,
.h2 {
    font-size: calc(1.325rem + 0.9vw);
}

@media (min-width: 1200px) {

    h2,
    .h2 {
        font-size: 2rem;
    }
}

h3,
.h3 {
    font-size: calc(1.3rem + 0.6vw);
}

@media (min-width: 1200px) {

    h3,
    .h3 {
        font-size: 1.75rem;
    }
}

h4,
.h4 {
    font-size: calc(1.275rem + 0.3vw);
}

@media (min-width: 1200px) {

    h4,
    .h4 {
        font-size: 1.5rem;
    }
}

h5,
.h5 {
    font-size: 1.25rem;
}

h6,
.h6 {
    font-size: 1rem;
}


button:focus:not(:focus-visible) {
    outline: 0;
}
input,
button,
select,
optgroup,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button,
[type=button],
[type=reset],
[type=submit] {
    -webkit-appearance: button;
}
img {
position: none;
height: auto;
width: 150px;
left: 117px;
top: 12px;
border-radius: 0px;
}

.navbar-nav a {
margin-right: 45px;
font-family: 'poppins', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 45px;
color: #00337C;
}

.img-header {
  padding: 0 !important;
}
.header-lp {
  height: 250px !important;
  width: auto !important;
}

.footer-lp {
  height: 250px !important;
  width: auto !important;
  position: relative;
}

.header-text {
  font-family: "Nunito", sans-serif !important;
  color: white;
  font-size: 16px !important;
}
.header-text1 {
  font-family: "Nunito", sans-serif !important;
  color: white;
  font-size: 2.5rem !important;
}
.header-text2 {
  font-family: "Nunito", sans-serif !important;
  color: white;
  font-size: 16px !important;
}


.footer-text {
  font-family: "Nunito", sans-serif !important;
  color: #00337C;
  font-size: 2.5rem;

}
.footer-text2 {
  font-family: "Nunito", sans-serif !important;
  color: #00337C;
  font-size: 16px;

}



.btn-header {
  color: #00337C;
  background-color: white;
  border: none ;
  padding: 10px;
  border-radius: 1rem !important;
  font-weight: 700;
  text-decoration: none !important;
  text-align: center;
}

.btn-header:hover{
  color: white;
  background-color: #00337C;
}

.btn-footer {
  color: white;
  background-color: #00337C;
  border: none ;
  padding: 10px;
  border-radius: 1rem !important;
  font-weight: 700;
  text-decoration: none !important;
  text-align: center;
}

.btn-footer:hover{
  color: #00337C;
  background-color: white;
  border: 2px solid #00337C;
}

.txt-section2{
  color: #00337C;
  font-family: "Nunito", sans-serif !important;

}
aside {
  background-color: #ECF2FF;
}
aside,
section {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.masthead {
    background: #005c97;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #005c97, #363795);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #005c97, #363795);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding-top: 15.5rem;
    padding-bottom: 10rem;
}
.bg-gradient-primary-to-secondary {
    background: #005c97;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #005c97, #363795);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #005c97, #363795);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}


footer a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
}

footer a:hover,
footer a:active,
footer a:focus {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: underline;
}
router-link {
  text-decoration: none !important;
}
.container-before-footer {
  justify-content: center;
  text-align: left;
  margin: 4rem 0px !important;
}

.img-card-inside{
  height: 75px;
  width: auto;
}

.txt-card-inside{
  color: #00337C;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0 !important;
}

.text-white{
  color: white;
}

.card {
  height: 250px !important;
  border-radius: 1rem !important;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.card-body{
  justify-content: center !important;
  border-radius: 1rem !important;
  display: flex;
}

.card:hover{
  box-shadow: 7px 7px 5px #00347c5b;
}

.a {
  text-decoration: none;
  color: white;
}
</style>