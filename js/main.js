document.querySelector('button').addEventListener('click', getAdvice)

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            //console.log(data.slip.advice)
            //console.log(data.slip.id)

            document.getElementById('adviceText').innerText = `"${data.slip.advice}"`
            document.getElementById('adviceId').innerText = data.slip.id
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}