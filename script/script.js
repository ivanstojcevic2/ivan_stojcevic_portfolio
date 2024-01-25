html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

h1 {
  color: white;
  font-weight: bolder;
  padding-bottom: 20px;
  font-size: 48px;
}

header {
  background-color: rgba(
    0,
    76,
    255,
    0.235
  ); /*Plava pozadina za navigacijsku traku */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  width: 100%; /* Puni širina ekrana */
  z-index: 1000;
  border-radius: 100px;
  display: flex;
  justify-content: center; /* Centriranje trake */
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

li {
  display: inline-block;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 6px;
  padding-right: 6px;
}

header a {
  text-decoration: none;
  color: #fff; /* Bijeli tekst za linkove */
  font-weight: bold;
  font-size: 14pt;
  padding: 10px 15px;
  border-radius: 100px; /* Zaobljeni rubovi */
  transition: background-color 0.3s ease-in-out;
}

header a:hover,
header a.active {
  background-color: #fff; /* Bijela pozadina za hover ili aktivan link */
  color: #007bff; /* Plavi tekst za hover ili aktivan link */
}

#arrow-down-container {
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 100px;
  background-color: rgba(0, 76, 255, 0.235);
  border: 5px solid #007bff;
  overflow: hidden;
  display: inline-block;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

#arrow-down-container:hover {
  border: 5px solid white;
}

#arrow-down-icon {
  padding-top: 2px;
  vertical-align: middle;
  backdrop-filter: blur(20px);
  scale: 2.5;
  overflow: hidden;
  width: 20px;
  height: 20px;
}

#navigacija-desktop {
  padding-top: 2%;
  text-align: center;
  display: flex;
  justify-content: center;
}

#content {
  text-align: center;
  background-color: white;
}

.page h2 {
  padding-top: 2%;
}

.video-container {
  padding-top: 2%;
}

.video-source {
  width: 350px;
  height: 350px;
  margin: auto;
}

.video-source-vertical {
  width: 350px;
  height: 350px;
  margin: auto;
}

.container {
  width: 100%;
  overflow: hidden;
}

.page {
  display: none;
}

.gallery-container {
  padding-top: 5%;
  padding-bottom: 32%;
  background-color: white;
}

.text-container {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.website-gallery-column {
  width: 400px;
  height: 190px;
  overflow: hidden;
}
.website-gallery-column img {
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.website-gallery-column img:hover {
  transform: scale(1.1);
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  video {
    right: 0;
    position: fixed;
    width: 100%;
    height: auto;
    z-index: -100;
    background-size: cover;
  }

  header a {
    font-size: 7pt;
  }

  li {
    padding-top: 9px;
    padding-bottom: 13px;
    padding-left: 6px;
    padding-right: 6px;
  }

  #header {
    position: absolute;
    text-align: center;
    top: 2%;
    left: 50%;
    transform: translate(-50%, 2%);
    z-index: 1000;
  }

  #arrow-down-container {
    display: none;
  }

  #blank {
    padding-top: 50%;
  }

  #navigacija-desktop {
    display: none;
  }

  .website-gallery-column {
    width: 350px;
    height: 200px;
    overflow: hidden;
    display: inline-block;
  }
}

@media only screen and (min-width: 768px) {
  #mobile-header {
    display: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1079px) {
  video {
    right: 0;
    position: fixed;
    width: 100%;
    height: auto;
    z-index: -100;
    background-size: cover;
  }

  #header {
    position: absolute;
    text-align: center;
    top: 2%;
    left: 50%;
    transform: translate(-50%, 2%);
    z-index: 1000;
  }

  #arrow-down-container {
    display: none;
  }

  #blank {
    padding-top: 50%;
  }

  .gallery-container {
    top: 7%;
    left: 50%;
    padding-bottom: 52%;
    transform: translate(-50%, 7%);
  }

  .website-gallery-column {
    padding-top: 5%;
  }

  #gallery-container-left {
    min-width: 402px;
    width: 40%;
    padding-left: 92%;
    position: absolute;
  }
  #gallery-container-right {
    width: 40%;
    padding-top: 10%;
    padding-left: 55%;
    position: absolute;
  }
}

@media only screen and (min-width: 1080px) and (max-width: 1279px) {
  .website-gallery-column {
    position: absolute;
  }

  #gallery-image-1 {
    margin-left: 5%;
    margin-top: 0%;
  }

  #gallery-image-2 {
    margin-left: 28%;
    margin-top: -2%;
  }

  #gallery-image-3 {
    margin-left: 59%;
    margin-top: -1%;
  }

  #gallery-image-4 {
    margin-left: 3%;
    margin-top: 18%;
  }

  #gallery-image-8 {
    margin-left: 33%;
    margin-top: 15%;
  }

  #gallery-image-5 {
    margin-left: 60%;
    margin-top: 16%;
  }

  #gallery-image-7 {
    margin-left: 20%;
    margin-top: 32%;
  }
  #gallery-image-6 {
    margin-left: 50%;
    margin-top: 32%;
  }
}

@media only screen and (min-width: 1080px) {
  video {
    right: 0;
    position: fixed;
    width: 100%;
    height: auto;
    z-index: -100;
    background-size: cover;
  }

  #header {
    position: absolute;
    text-align: center;
    top: 15%;
    left: 50%;
    transform: translate(-50%, 15%);
    z-index: 1000;
  }

  #blank {
    padding-top: 50%;
  }

  .text-container {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
}

@media only screen and (min-width: 1280px) {
  .website-gallery-column {
    position: absolute;
  }

  #gallery-image-1 {
    margin-left: 5%;
    margin-top: 0%;
  }

  #gallery-image-3 {
    margin-left: 26%;
    margin-top: -2%;
  }

  #gallery-image-2 {
    margin-left: 47%;
    margin-top: -1%;
  }

  #gallery-image-4 {
    margin-left: 67%;
    margin-top: -2%;
  }

  #gallery-image-8 {
    margin-left: 7%;
    margin-top: 12.5%;
  }

  #gallery-image-5 {
    margin-left: 27%;
    margin-top: 9%;
  }

  #gallery-image-7 {
    margin-left: 46%;
    margin-top: 10.5%;
  }
  #gallery-image-6 {
    margin-left: 66%;
    margin-top: 13%;
  }
}
