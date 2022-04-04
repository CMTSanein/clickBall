const stage = document.getElementById("stage");

const renderBall = () => {
	const ball = document.createElement("div");
	ball.classList.add("ball");
	ball.style.backgroundImage = "url(./ball.png)";
	stage.appendChild(ball);
};

renderBall();
