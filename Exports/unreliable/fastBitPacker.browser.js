
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function seedRandom(seed) {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function lerp(start, end, t) {
    return (1 - t) * start + t * end;
}

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const balls = [];
const triangles = [];
const COUNT = 30;
let ballId = 0;

class Ball {

    constructor(x,y,r){

        this.id = ++ballId;
        this.type = 1;
        this.seed = Math.floor(Math.random()*255);
        this.x = x;
        this.y = y;
        this.radius = r;

        // Random velocity
        this.vx = (seedRandom(this.seed)-0.5)*8;
        this.vy = (seedRandom(this.seed)-0.5)*8;

        // Prevent nearly stationary balls
        if(Math.abs(this.vx)<2) this.vx = this.vx<0?-2:2;
        if(Math.abs(this.vy)<2) this.vy = this.vy<0?-2:2;

        this.color = `hsl(${seedRandom(this.seed)*360},80%,60%)`;
    }

    update(){

        this.x += this.vx;
        this.y += this.vy;

        // Left
        if(this.x-this.radius<0){
            this.x=this.radius;
            this.vx*=-1;
        }

        // Right
        if(this.x+this.radius>canvas.width){
            this.x=canvas.width-this.radius;
            this.vx*=-1;
        }

        // Top
        if(this.y-this.radius<0){
            this.y=this.radius;
            this.vy*=-1;
        }

        // Bottom
        if(this.y+this.radius>canvas.height){
            this.y=canvas.height-this.radius;
            this.vy*=-1;
        }
    }

    draw(){

        ctx.beginPath();
        ctx.arc(
          Math.floor(this.x),
          Math.floor(this.y),
          Math.floor(this.radius)
          ,0,Math.PI*2);
        ctx.fillStyle=this.color;
        ctx.fill();

        ctx.strokeStyle="white";
        ctx.lineWidth=2;
        ctx.stroke();
    }

    serialize() {
      return {
        id: Math.floor(this.id),
        seed: Math.floor(this.seed),
        radius: Math.floor(this.radius),
        x: Math.floor(this.x),
        y: Math.floor(this.y),
        type: Math.floor(this.type),
      }
    }

    deserialize(ball) {
        this.seed = ball.seed;
        this.radius = ball.radius;
        this.x = lerp(this.x, ball.x, 0.45);
        this.y = lerp(this.y, ball.y, 0.45);
        this.color = `hsl(${seedRandom(this.seed)*360},80%,60%)`;
    }
}

class Triangle extends Ball {
  constructor(x,y,r) {
    super(x,y,r);

    this.type = 2;
  }

  draw() {
      const x = Math.floor(this.x);
      const y = Math.floor(this.y);

      ctx.fillStyle = this.color;
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;

      ctx.beginPath();

      // Cursor arrow
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + 24);
      ctx.lineTo(x + 6, y + 18);
      ctx.lineTo(x + 12, y + 30);
      ctx.lineTo(x + 17, y + 27);
      ctx.lineTo(x + 11, y + 15);
      ctx.lineTo(x + 20, y + 15);

      ctx.closePath();

      ctx.fill();
      ctx.stroke();
  }
}

// Create exactly 10 balls
for(let i=0;i<COUNT;i++){

    balls.push(
        new Ball(
            40+Math.random()*(canvas.width-80),
            40+Math.random()*(canvas.height-80),
            15+Math.random()*15
        )
    );
}

triangles.push(new Triangle(0,0,10));

function handleCollisions(){

    for(let i=0;i<balls.length;i++){

        for(let j=i+1;j<balls.length;j++){

            const a=balls[i];
            const b=balls[j];

            const dx=b.x-a.x;
            const dy=b.y-a.y;

            const dist=Math.hypot(dx,dy);
            const minDist=a.radius+b.radius;

            if(dist<minDist){

                const nx=dx/dist;
                const ny=dy/dist;

                // Separate balls
                const overlap=(minDist-dist)/2;

                a.x-=nx*overlap;
                a.y-=ny*overlap;

                b.x+=nx*overlap;
                b.y+=ny*overlap;

                // Elastic collision
                const dvx=a.vx-b.vx;
                const dvy=a.vy-b.vy;

                const impact=dvx*nx+dvy*ny;

                if(impact>0) continue;

                const impulse=impact;

                a.vx-=impulse*nx;
                a.vy-=impulse*ny;

                b.vx+=impulse*nx;
                b.vy+=impulse*ny;
            }
        }
    }
}

function buildCharacterSchema() {
  var slots = 0;
  var schema = [];

  // Core vitals keep bits ≤ 31
  var fields = [
    ['id', 8],
    ['radius', 8],
    ['seed', 8],
    ['x', 16],
    ['y', 16],
    ['type', 8],
  ];

  fields.forEach(function(f) {
    var id = f[0];
    var bits = f[1];
    if(bits > 31) throw new Error('keep bits ≤ 31');
    schema.push({
      id: id,
      bits: bits,
      path: 's.' + id,
      getValue: function(s) { return s[id]; },
      setValue: function(s, v) { s[id] = v; }
    });
  });

  // Inventory
  for (var i = 0; i < slots; i++) {
    schema.push({
      id: 'inv_id_' + i,
      bits: 6,
      path: 's.inventory[' + i + '].itemId',
      getValue: function(s) { return s.inventory[i].itemId; },
      setValue: function(s, v) { s.inventory[i].itemId = v; }
    });
    schema.push({
      id: 'inv_cnt_' + i,
      bits: 4,
      path: 's.inventory[' + i + '].count',
      getValue: function(s) { return s.inventory[i].count; },
      setValue: function(s, v) { s.inventory[i].count = v; }
    });
  }
  return schema;
}

// Create default state
function defaultCharacterState() {
  var inv = [];
  var slots = 0;
  for (var i = 0; i < slots; i++) inv.push({ itemId: 0, count: 0 });

  return {
    id:0, radius: 0, seed:0, x:0, y:0, type:0
  };
}

// ── Pack an array of states into one Uint8Array ──
function packMany(states, packerFn) {
  packerFn = packerFn || packer.packFast || packer.packTable;
  var totalBytes = states.length * packer.totalBytes; // 25 bytes each
  // console.log(totalBytes, packer)
  var result = new Uint8Array(totalBytes);
  var offset = 0;
  for (var i = 0; i < states.length; i++) {
    var packed = packerFn(states[i]);
    result.set(packed, offset);
    offset += packed.length;
  }
  return result;
}

// ── Unpack a combined buffer back into an array of states ──
function unpackMany(buffer, count, unpackerFn) {
  unpackerFn = unpackerFn || packer.unpackFast || packer.unpackTable;
  var states = [];
  var bytesPerState = packer.totalBytes; // 25
  for (var i = 0; i < count; i++) {
    var slice = buffer.slice(i * bytesPerState, (i + 1) * bytesPerState);
    states.push(unpackerFn(slice));
  }
  return states;
}

// Usage
var schema = buildCharacterSchema();
var packer = createFastPacker(schema, defaultCharacterState);

const userCount = balls.length;

 // 1. Create 1000 random states
var states = [];
for (var i = 0; i < balls.length; i++) {
  states.push(balls[i].serialize());
}
const buffer = packMany(states, packer.packFast);
const budget = (5_000_000/60); // 5 mbps upload connection
const resultbits = buffer.byteLength*8;
function getMaxUserCount(bufferByteLength) {
    const budget = 5_000_000 / 60; // 83333.33

    // Quadratic coefficients: au^2 + bu + c = 0
    const a = 8 * bufferByteLength;
    const b = 560 - a;
    const c = -(budget + 560);

    // Apply quadratic formula: (-b + sqrt(b^2 - 4ac)) / 2a
    const discriminant = (b * b) - (4 * a * c);

    if (discriminant < 0) return 0; // No valid user count possible

    const maxUsers = (-b + Math.sqrt(discriminant)) / (2 * a);

    // Use Math.floor because userCount must be a whole number
    return Math.floor(maxUsers);
}

console.table({
    userCount,
    maxUserCount: getMaxUserCount(buffer.byteLength/balls.length),
    snapshotBits: buffer.byteLength*8,
});