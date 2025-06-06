export default function title(t){
    let style = `
        {
            font-size:15px;
            padding:2px 5px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            text-wrap:nowrap;
            width:100%;
        }
        :responsive{
            font-size:12px;
        }`
    
    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}