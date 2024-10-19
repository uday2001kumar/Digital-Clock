function clock(){
    const d=new Date();
    let h=d.getHours();
    const m=d.getMinutes().toString().padStart(2,'0');
    const s=d.getSeconds().toString().padStart(2,'0');
    const t=h>=12?"PM":"AM";
    h=h % 12 || 12;
    h=h.toString().padStart(2,'0');
    const time=`${h}:${m}:${s} ${t} `
    document.getElementById("clock").textContent=time;
    setTimeout(clock,1000)
}

clock();