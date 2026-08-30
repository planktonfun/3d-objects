/*
Better than world x + y by spatial localization:
- Sending the full cell ID only when the player changes cells.
- Using fewer bits for frequent position updates.
- Organizing nearby players/entities together.
- Sending updates only for entities in nearby cells.
- Less delta by sacrificing percision + other benefits
*/

const WORLD_SIZE = 2000;
const CELLS_PER_AXIS = 64; // up to 255 to maintain 8 bits
const OFFSETS_PER_CELL = 64; // up to 255 to maintain 8 bits

const CELL_SIZE = WORLD_SIZE / CELLS_PER_AXIS;

function encodePosition(worldX, worldY) {
  // Find which cell we're in
  const cellX = Math.min(
    CELLS_PER_AXIS - 1,
    Math.floor(worldX / CELL_SIZE)
  );

  const cellY = Math.min(
    CELLS_PER_AXIS - 1,
    Math.floor(worldY / CELL_SIZE)
  );

  // Position within the cell, normalized to 0..1
  const localX = (worldX - cellX * CELL_SIZE) / CELL_SIZE;
  const localY = (worldY - cellY * CELL_SIZE) / CELL_SIZE;

  // Quantize local position to 4 bits (0..15)
  const offsetX = Math.min(
    OFFSETS_PER_CELL - 1,
    Math.round(localX * (OFFSETS_PER_CELL - 1))
  );

  const offsetY = Math.min(
    OFFSETS_PER_CELL - 1,
    Math.round(localY * (OFFSETS_PER_CELL - 1))
  );

  return {
    cellX,
    cellY,
    offsetX,
    offsetY
  };
}

function decodePosition(cellX, cellY, offsetX, offsetY) {
  const worldX =
    cellX * CELL_SIZE +
    (offsetX / (OFFSETS_PER_CELL - 1)) * CELL_SIZE;

  const worldY =
    cellY * CELL_SIZE +
    (offsetY / (OFFSETS_PER_CELL - 1)) * CELL_SIZE;

  return {
    x: worldX,
    y: worldY
  };
}


if(test = true) {

  const encoded = encodePosition(537, 812);

  console.log(encoded);
  // {
  //   cellX: 8,
  //   cellY: 12,
  //   offsetX: 8,
  //   offsetY: 14
  // }

  const decoded = decodePosition(
    encoded.cellX,
    encoded.cellY,
    encoded.offsetX,
    encoded.offsetY
  );

  console.log(decoded);
  // approximately:
  // { x: 533.33, y: 812.5 }
}