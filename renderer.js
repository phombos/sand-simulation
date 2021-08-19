function clear(){
    ctx.clearRect(0, 0, 1000, 600);
}

function background(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1000, 600);
}

function circle(pos, rad, color, op){
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, rad, 0, 2 * Math.PI, false);
    if(op.rend = "fill"){
        ctx.fillStyle = color.fill;
        ctx.fill();
    } else{
        ctx.lineWidth = op.lineWidth;
        ctx.strokeStyle = color.stroke;
        ctx.stroke();
    }
}

function segment(a, b, color, lineWidth){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
}

function polygon(v, color, op){
    ctx.fillStyle = color.fill;
    ctx.beginPath();
    ctx.moveTo(v[0].x, v[0].y);
    for(let i = 1; i < v.length; i++){
        ctx.lineTo(v[i].x, v[i].y);
    }

    if(option.rend = "fill"){
        ctx.fillStyle = color.fill;
        ctx.fill();
    } else{
        ctx.lineTo(v[0].x, v[0].y);
        ctx.lineWidth = op.lineWidth;
        ctx.strokeStyle = color.stroke;
        ctx.stroke();
    }
}

function rectangle(pos, width, height, color, op){
    ctx.fillStyle = color.fill;
    ctx.beginPath();
    ctx.moveTo(pos.x + width, pos.y + height);
    ctx.lineTo(pos.x + width, pos.y - height);
    ctx.lineTo(pos.x - width, pos.y - height);
    ctx.lineTo(pos.x - width, pos.y + height);

    if(op.rend = "fill"){
        ctx.fillStyle = color.fill;
        ctx.fill();
    } else{
        ctx.lineWidth = op.lineWidth;
        ctx.strokeStyle = color.stroke;
        ctx.stroke();
    }
}

function printText(x, y, text, size, color){
ctx.fillStyle = color ;
    ctx.font = size + "px Arial";
    ctx.fillText(text , x, y);
}