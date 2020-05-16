const works = [
    {
        author: "Micheal Jackson",
        lifetime: "1022-1055",
        tips: "Human",
        photos: ["human1.jpg", "human2.jpg", "human3.jpg"]
    },
    {author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"]},
    {
        author: "John Herry UY",
        lifetime: "1894-1928",
        tips: "Abstract",
        photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]
    },
    {author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"]}
];

for (let i = 0; i < works.length; i++) {
    document.write("<div class='item'>" +
        "<p><h4>Genre:" + works[i].tips + "</h4></p>" +
        "<div class='inner-box'>" +
        "<h3 style='display: inline'>" + works[i].author + "</h3>" +
        "<b style='display: inline;margin-left: 15px'>" +
        "<small>lifetime:" + works[i].lifetime + "</small>" +
        "</b>" + "</div>" +
        "<div class='inner-box'><h3>Popular Photos</h3>" + (function () {
            let str = "";
            let len = works[i].photos.length;
            for (let j = 0; j < len; j++) {
                str += "<img class='photo' src='" + works[i].photos[j] + "'>";
            }
            return str;
        })() + "</div>" +
        "<button>Visit</button>" +
        "</div>");
}



