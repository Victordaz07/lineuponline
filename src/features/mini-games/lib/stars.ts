/** Calcula estrellas (1–3) según tiempo y pistas usadas. Compartido por el reto diario y el Camino. */
export function calcStars(seconds: number, hintsUsed: number, starTimes: [number, number]): number {
  let stars = seconds <= starTimes[0] ? 3 : seconds <= starTimes[1] ? 2 : 1
  if (hintsUsed >= 3) stars = Math.min(stars, 1)
  else if (hintsUsed >= 1) stars = Math.min(stars, 2)
  return stars
}
