function confetti () {
    console.log('joy')
    window.location.href = 'https://publuu.com/flip-book/743887/1648965'
    // Pass in the id of an element
    let confetti = new Confetti('demo');

    // Edit given parameters
    confetti.setCount(75);
    confetti.setSize(1);
    confetti.setPower(25);
    confetti.setFade(false);
    confetti.destroyTarget(true);
}