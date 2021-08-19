class world{
    constructor(gravity, worldWidth, worldHeight, step, scale){
        this.gravity = gravity;
        this.worldWidth = worldWidth;
        this.worldHeight = worldHeight;
        this.scale = scale;
        this.step = step;
        this.frame = 0;
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
            type: "sand"
        });
        this.cells[x][y].status = "ocupied";
        this.cells[x][y].particle = "sand";
    }

    render(){
        for(let i = 0; i < this.particles.length; i++){
            let cell = this.particles[i].cell;
            let pos = new Vec2(cell.x * this.scale  + this.scale / 2, cell.y * this.scale + this.scale / 2)
            rectangle(pos, this.scale / 2, this.scale / 2, {fill: "rgb(255, 255, 160)"}, {rend:"fill"});
        }

        for(let i = 0; i < this.worldWidth; i++){

        }
    }

    particleUpdate(i){
        let x = this.particles[i].cell.x;
        let y = this.particles[i].cell.y;
        if(x == this.worldWidth - 1 || x == -1){
            return;
        }
        if(y == this.worldHeight - 1 || y == -1){
            return;
        }

        if(this.cells[x][y + 1].status == "empty"){
            this.particles[i].cell.y ++;
            this.cells[x][y + 1].status = "ocupied";
            this.cells[x][y + 1].particle = this.particles[i].type;
            this.cells[x][y].status = "empty";
            this.cells[x][y].particle = null;
            return;
        }
        if(x - 1 < 0){
            return;
        } 
        if(x + 1 > this.cells.length - 1){
            return;
        } 
        if(this.cells[x - 1][y + 1].status == "empty"){
            this.particles[i].cell.y ++;
            this.particles[i].cell.x --;
            this.cells[x - 1][y + 1].status = "ocupied";
            this.cells[x - 1][y + 1].particle = this.particles[i].type;
            this.cells[x][y].status = "empty";
            this.cells[x][y].particle = null;
        } else if(this.cells[x + 1][y + 1].status == "empty"){
            this.particles[i].cell.y ++;
            this.particles[i].cell.x ++;
            this.cells[x + 1][y + 1].status = "ocupied";
            this.cells[x + 1][y + 1].particle = this.particles[i].type;
            this.cells[x][y].status = "empty";
            this.cells[x][y].particle = null;
        }
    }

    update(){
        this.frame++;
        if(this.frame > this.step){
            for(let i = 0; i < this.particles.length; i++){
                this.particleUpdate(i);
            }
            this.frame = 0;
        }
    }
};