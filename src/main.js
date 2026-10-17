const buttonSatu = document.getElementById("item1");
const buttonDua = document.getElementById("item2");
const buttonTiga = document.getElementById("item3");
const buttonEmpat = document.getElementById("item4");

const content = document.getElementById("content");

const allButton = [buttonSatu, buttonDua, buttonTiga, buttonEmpat];

function tampilkanTeksTabs(teks, buttonAktif) {
  content.innerHTML = `<p>${teks}</p>`;

  //   hapus kelas .active dari semua button
  allButton.forEach((item) => {
    const btn = item.querySelector("button");
    if (btn) btn.classList.remove("active");
  });

  const buttonDiKlik = buttonAktif.querySelector("button");
  if (buttonDiKlik) return buttonDiKlik.classList.add("active");
}

buttonSatu.addEventListener("click", () => {
  tampilkanTeksTabs("Ini konten tab pertama", buttonSatu);
});
buttonDua.addEventListener("click", () => {
  tampilkanTeksTabs("Ini konten tab kedua", buttonDua);
});
buttonTiga.addEventListener("click", () => {
  tampilkanTeksTabs("Ini konten tab ketiga", buttonTiga);
});
buttonEmpat.addEventListener("click", () => {
  tampilkanTeksTabs("Ini konten tab keempat", buttonEmpat);
});

buttonSatu.click();
