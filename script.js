// Sayfa yüklendikten sonra çalışacak kod
window.onload = function() {
    alert("Welcome to my website!");
};

// Basit bir etkileşim: Butona tıklanıldığında içerik değiştirme
function changeContent() {
    document.getElementById("home").innerHTML = "<h2>New Content Added!</h2><p>This is the updated home section.</p>";
}
