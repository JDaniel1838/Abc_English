const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    Sonido("ABC/a.mp3", ".a");
    Sonido("ABC/b.mp3", ".b");
    Sonido("ABC/c.mp3", ".c");
    Sonido("ABC/d.mp3", ".d");
    Sonido("ABC/e.mp3", ".e");
    Sonido("ABC/f.mp3", ".f");
    Sonido("ABC/g.mp3", ".g");
    Sonido("ABC/h.mp3", ".h");
    Sonido("ABC/i.mp3", ".i");
    Sonido("ABC/j.mp3", ".j");
    Sonido("ABC/k.mp3", ".k");
    Sonido("ABC/l.mp3", ".l");
    Sonido("ABC/m.mp3", ".m");
    Sonido("ABC/n.mp3", ".n");
    Sonido("ABC/o.mp3", ".o");
    Sonido("ABC/p.mp3", ".p");
    Sonido("ABC/q.mp3", ".q");
    Sonido("ABC/r.mp3", ".r");
    Sonido("ABC/s.mp3", ".s");
    Sonido("ABC/t.mp3", ".t");
    Sonido("ABC/u.mp3", ".u");
    Sonido("ABC/v.mp3", ".v");
    Sonido("ABC/w.mp3", ".w");
    Sonido("ABC/x.mp3", ".x");
    Sonido("ABC/y.mp3", ".y");
    Sonido("ABC/z.mp3", ".z");
    slider();
});


function Sonido(sonido, btnPlay) {
    let Temporizador;
    const $audio = d.createElement("audio");
    $audio.src = sonido;

    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            $audio.play();
            let Vocales = e.target.innerText;
            console.log(e.target.innerText);
                    //Aa e.target.innerText 
                    //ei  e.target.name

            setTimeout(() => {
                console.log("Primer intervalo");
                e.target.innerText = `${e.target.name}`;
                }, 0.100); 
                
                setTimeout(() => {
                    e.target.innerText = `${Vocales}`;
                }, 1550);
            
        }

        //para hacer el cambio de letas de ingles a español se guarda con el id del boton
        //el valor que trae en innerText y luego ya que guardaste en  una var ya puedes cambiar
        // el innerText con e.target.name que lo trae el id
        //y luego con un set interval puedes cambiar al valor original en español
    });
    

}



function slider() {
        $slides = d.querySelectorAll(".TitleEnglishSpanish");
    
    let i = 0;
    
    setInterval(() => {
        $slides[i].classList.remove("active");
        i++
        if (i >= $slides.length) {
            i = 0;  
        }
        $slides[i].classList.add("active");
    }, 7000);

        
    
}

