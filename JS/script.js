function generateQR(){
    const text = document.getElementById("qrText").value.trim();
    if (text === "") {
        alert("Please enter text.");
        return;
    }
    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: text,
        width: 250,
        height: 250
    });
    document.getElementById("downloadBtn").style.display = "block";
}
function downloadQR(){
    const img = document.querySelector("#qrcode img");
    const canvas = document.querySelector("#qrcode canvas");
    let url = "";
    if (img) {
        url = img.src;
    } else if (canvas){
        url = canvas.toDataURL("image/png");
    }
    const link= document.createElement("a");
    link.href= url;
    link.download= "QRCode.png";
    link.click();
}