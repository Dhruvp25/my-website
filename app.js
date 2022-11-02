function reveal() {
  var reveals = document.querySelectorAll(".torvlabt, .torvlme, .animate-enter, .animate-enter-me, .animate-enterimg1, .animate-enterimg2, .animate-enterimg3, .animate-enterLI, .animate-enterGT, .animate-enterIS, .animate-enterTWR, .animate-enter-imgworks, .animate-enterq3d, .animate-enter-works, .animate-enter-projects, .animate-enter-imgproj, .animate-enter-ultra, .animate-enter-cloud, .animate-enter-myper, .animate-enter-drive");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("activestate");
    } else {
      reveals[i].classList.remove("activestate");
    }
  }
}

window.addEventListener("scroll", reveal);
