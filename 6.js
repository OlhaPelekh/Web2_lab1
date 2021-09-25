function QuickSort(mas, L, R){
	if(L==undefined)L=0;
	if(R==undefined)R=mas.length-1;
	var iter = L, jter = R, middle = parseInt((R+L)/2), x = mas[middle], tmp;

	do{
		while(mas[iter]<x){iter++;}
		while(x<mas[jter]){jter--;}
		if(iter<=jter){
			tmp = mas[iter];
			mas[iter] = mas[jter];
			mas[jter] = tmp;
			iter++;
			jter--;
		}
	}while(iter<jter);

if(L<jter) QuickSort(mas, L, jter); 
if(iter<R) QuickSort(mas, iter, R);
return mas;
}

const arr = [1, -1, 0, 5, 2, 12, 7];
console.log(QuickSort(arr));

