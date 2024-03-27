var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var imgslide = document.getElementsByClassName("img-slidebanner");
  if (n > imgslide.length) slideIndex = 1;
  if (n < 1) slideIndex = imgslide.length;

  for (i = 0; i < imgslide.length; i++) {
    imgslide[i].style.display = "none";
  }
  imgslide[slideIndex - 1].style.display = "block";
}