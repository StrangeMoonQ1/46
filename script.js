let p1 = true
let p2 = false

let info = document.querySelector(".info")
let cp1 = document.querySelector(".choice-player-1")
let cp2 = document.querySelector(".choice-player-2")

let p1_h = null
let p2_h = null

let score1 = document.querySelector(".score1")
let score2 = document.querySelector(".score2")
let point1 = 0  
let point = 0

let round = document.querySelector(".round")
let rscore = 0  



document.addEventListener("keydown", function (e) {
	if(p1 == true && p2 == false){
		if(e.code == "KeyA"){
			console.log("kamen")
			p1 = false
			p2 = true
			info.innerHTML = "ХОДИТ 2 ИГРОК"
			p1_h = "kamen"
		}else if(e.code == "KeyD"){
			console.log("bumaga")
			p1 = false
			p2 = true
			info.innerHTML = "ХОДИТ 2 ИГРОК"
			p1_h = "bumaga"
		}else if(e.code == "KeyS"){
			console.log("knifeni")
			p1 = false
			p2 = true
			info.innerHTML = "ХОДИТ 2 ИГРОК"
			p1_h = "knifeni"
		}
	}
	if(p1 == false && p2 == true){
		if(e.code == "KeyJ"){
			console.log("kamen")
			p2 = false
			info.innerHTML = "игра закончена"
			p2_h = "kamen"
			setTimeout(pon, 1)
			setTimeout(finish,1)
			setTimeout(newround, 2000)

		}else if(e.code == "KeyL"){
			console.log("bumaga")
			p2 = false
			info.innerHTML = "игра закончена"
			p2_h = "bumaga"
			setTimeout(pon, 1)
			setTimeout(finish,1)
			setTimeout(newround, 2000)

		}else if(e.code == "KeyK"){
			console.log("knifeni")
			p2 = false
			info.innerHTML = "игра закончена"
			p2_h = "knifeni"
			setTimeout(pon, 1)
			setTimeout(finish,1)
			setTimeout(newround, 2000)

		}
	}
})
let pon = function () {
	if(p1_h == "kamen"){
		cp1.style.background = "grey"
	}else if(p1_h == "bumaga"){
		cp1.style.background = "white"
	}else if(p1_h == "knifeni"){
		cp1.style.background = "orange"
	}
	if(p2_h == "kamen"){
		cp2.style.background = "grey"
	}else if(p2_h == "bumaga"){
		cp2.style.background = "white"
	}else if(p2_h == "knifeni"){
		cp2.style.background = "orange"
	}
}
let finish = function () {
	if(p1_h == p2_h){
		info.innerHTML = "draw"
	}else if(p1_h == "kamen" && p2_h == "knifeni"){
		info.innerHTML = "plauer1 win"
		point1 = point1 + 1
		score1.innerHTML = point1
	}else if(p1_h == "knifeni" && p2_h == "bumaga"){
		info.innerHTML = "plauer1 win"
		point1 = point1 + 1
		score1.innerHTML = point1
	}else if(p1_h == "bumaga" && p2_h == "kamen"){
		info.innerHTML = "plauer1 win"
		point1 = point1 + 1
		score1.innerHTML = point1
	}else{
		info.innerHTML = "plauer2 win"
		point = point + 1
		score2.innerHTML = point
	}
}
let newround = function () {
	p1 = true
	p2 = false
	cp1.style.background = "black"
	cp2.style.background = "black"
	rscore = rscore + 1
	round.innerHTML = rscore

}