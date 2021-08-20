class world{
    constructor(canvasWidth, canvasHeight, scale){
        this.worldWidth = canvasWidth / scale;
        this.worldHeight = canvasHeight / scale;
        this.scale = scale;
        this.cells = [];
        for(let i = 0; i < this.worldWidth; i++){
            this.cells.push([]);
            for(let j = 0; j < this.worldHeight; j++){
                this.cells[i].push({
                    status: "empty",
                    particle: null
                });
            }
        }
        this.particles = [];
    }

    addSand(x, y){
        if(this.cells[x][y].status == "ocupied"){
            return;
        }
        this.particles.push({
            cell: new Vec2(x, y),
            type: "sand",
            status: "active"
        });
        this.cells[x][y].status = "ocupied";
        this.cells[x][y].particle = "sand";
    }

    render(){
        for(let i = 0; i < this.particles.length; i++){
            let cell = this.particles[i].cell;
            let color = "rgb(255, 255, 100)"
            let pos = new Vec2(cell.x * this.scale  + this.scale / 2, cell.y * this.scale + this.scale / 2)
            rectangle(pos, this.scale / 2, this.scale / 2, {fill: color}, {rend:"fill"});
        }

        for(let i = 0; i < this.worldWidth; i++){

        }
    }

    particleUpdate(i){
        if(this.particles[i].status == "inactive"){
            return;
        }
        let x = this.particles[i].cell.x;
        let y = this.particles[i].cell.y;
        this.particles[i].cell.x = clamp(0, this.worldWidth - 1, x);
        this.particles[i].cell.y = clamp(0, this.worldHeight - 1, y);
        if(y + 1 > this.worldHeight - 1){
            this.particles[i].status = "inactive";
            return;
        }
        if(this.cells[x][y + 1].status == "empty"){
            this.particles[i].cell.y ++;
            this.cells[x][y + 1].status = "ocupied";
            this.cells[x][y + 1].particle = this.particles[i].type;
            this.cells[x][y].status = "empty";
            this.cells[x][y].particle = null;
            this.particles[i].status = "active";
            return;
        }
        if(x - 1 < 0){
            this.particles[i].status = "inactive";
            return;
        } 
        if(x + 1 > this.cells.length - 1){
            this.particles[i].status = "inactive";
            return;
        }
        if(y + 2 <= this.worldHeight - 1){
            if(this.cells[x][y + 2].status == "empty"){
                return;
            }
        }
        
        if(this.cells[x - 1][y + 1].status == "empty"){
            this.particles[i].cell.y ++;
            this.particles[i].cell.x --;
            this.cells[x - 1][y + 1].status = "ocupied";
            this.cells[x - 1][y + 1].particle = this.particles[i].type;
            this.cells[x][y].status = "empty";
            this.cells[x][y].particle = null;
            this.particles[i].status = "active";
            return;
        } else if(this.cells[x + 1][y + 1].status == "empty"){
            this.particles[i].cell.y ++;
            this.particles[i].cell.x ++;
            this.cells[x + 1][y + 1].status = "ocupied";
            this.cells[x + 1][y + 1].particle = this.particles[i].type;
            this.cells[x][y].status = "empty";
            this.cells[x][y].particle = null;
            this.particles[i].status = "active";
            return;
        }

    }

    update(){
        for(let i = 0; i < this.particles.length; i++){
            let a = this.particleUpdate(i); 
        }
    }
};
