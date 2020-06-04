var pic = [
    "https://upload.cc/i1/2020/06/03/if0mPN.jpg",
    "https://upload.cc/i1/2020/06/03/KpUO3q.jpg",
    "https://upload.cc/i1/2020/06/03/SefzF6.jpg",
    "https://upload.cc/i1/2020/06/03/EJIwdH.jpg",
    "https://upload.cc/i1/2020/06/03/sUCyPT.jpg"
]

var lastNum = -1;
$(document).ready(function() {
    $("input").click(function()
    {
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        while(randomChildNumber == lastNum)
        {
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }
        lastNum = randomChildNumber;
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", pic[randomChildNumber]);
        $("img").attr("width", 300);
    });
});