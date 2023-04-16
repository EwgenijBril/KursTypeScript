const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
	const data = JSON.parse(response);
	return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number) {
	if (available) {
		let res = fetchCurr(currRate) * amount * commission;
		console.log(res);
		// Или запись в элемент на странице вместо консоли
	} else {
		console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd(false, 500, 1.05);
