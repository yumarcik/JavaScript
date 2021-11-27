// 1st - Finding the prime numbers
function findPrime(...numbers) {
    let isPrime = true
    for(let i = 0; i < numbers.length; i++) {
        isPrime = true
        if(numbers[i] == 0 || numbers[i] == 1) {
            console.log(numbers[i] + " asal sayı değildir.")
            continue
        }
        for(let j = 2; j <= numbers[i] / 2; j++){
            if(numbers[i] % j == 0) {
                isPrime = false                
                break
            }
        }
        if(isPrime == true) {
            console.log(numbers[i] + " asal sayıdır.")
        }
        else {
            console.log(numbers[i] + " asal sayı değildir.")
        }
    }
}

findPrime(1,2,19,4,2,14, 93, 87, 89)

// 2nd - Arkadas Sayilar
function arkadasSayiMi(num1, num2) {
    let total1 = 0
    let total2 = 0
    for(let i = 1; i < num1; i++) {
        if(num1 % i == 0) {
            total1 = total1 + i
        }
    }
    for(let i = 1; i < num2; i++) {
        if(num2 % i == 0) {
            total2 = total2 + i
        }
    }
    if(num1 == total2 && num2 == total1) {
        console.log(num1 + " ve " + num2 + " Arkadaş Sayılardır.")
    }
    else {
        console.log(num1 + " ve " + num2 + " Arkadaş Sayılar Değildir.")
    }
}

arkadasSayiMi(1184, 1210)

// 3rd - Mukemmel Sayilar
function mukemmelSayiListele() {
    for(let i = 1; i < 1000; i++) {
        let total = 0
        for(let j = 1; j <= i; j++) {
            if(i % j == 0){
                total += j
            }
        }
        if (2 * i == total) {
            console.log(i + " sayısı mükemmel sayıdır.")
        }
    }
}

mukemmelSayiListele()

// 4th - Prime Sayilar
function asalSayiListele() {
    for(let i = 2; i < 1000; i++) {        
        let asalMi = true
        for(let j = 2; j < i; j++) {
            
            if(i % j == 0) {
                asalMi = false
            }            
        }
        if (asalMi == true) {
            console.log(i + " sayısı asaldır")    
        }
    }
    
}

asalSayiListele()

