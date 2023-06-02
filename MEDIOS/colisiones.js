function intersectanBoxes(areapincel, mochila) {
	// comprueba si area1 se superpone area2
	// variables del primer objeto
	var X1Min = areapincel.X-(areapincel.Width/2.0);
	var Y1Min = areapincel.Y-(areapincel.Height/2.0);
	var X1Max =X1Min+ areapincel.Width;
	var Y1Max = Y1Min + areapincel.Height;
	// variables del segundo objeto
	var X2Min = areamochila.X-(areamochila.Width/2);
	var Y2Min = areamochila.Y-(mochila.Height/2);
	var X2Max = X2Min + areamochila.Width;
	var Y2Max = Y2Min + areamochila.Height;

 	// comparaciÃ³n horizontal de las dos esquinas
	var condX = (X1Min>= X2Min) &&  (X1Min <= X2Max);
	condX = condX || ((X1Max >= X2Min) &&  (X1Max <= X2Max));
 	// comparaciÃ³n vertical de las dos esquinas
	var condY = (Y1Min >= Y2Min) &&  (Y1Min <= Y2Max);
	condY = condY || ((Y1Max >= Y2Min) &&  (Y1Max <= Y2Max));
	// si se cumplen alguna de la condiciones, intersecta

	if (condX && condY){
		return true;}
	else{
		return false;}
}
