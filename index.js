function calculateAaya() {
  const length = document.getElementById("length").value;
  const width = document.getElementById("width").value;
  console.log(length);
  console.log(width);

  const lb = length*width;
  const b = lb*9;
  const aayaNumber = b%8;
  const varaPhala = b%7;

  document.getElementById("aayaNumber").innerHTML = aayaNumber;
  document.getElementById("varaPhala").innerHTML = varaPhala;
}
