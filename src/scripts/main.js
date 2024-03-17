AOS.init();

const dataDoEvento = new Date("nov 15, 2023 00:00:00")
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampAtual - timeStampDoEvento;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 3600 * 24))
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 3600 * 24)) / (1000 * 60 * 60))
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 *60))
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 *60)) / 1000)

    console.log(diasAteOEvento)
    console.log(horasAteOEvento)
    console.log(minutosAteOEvento)
    console.log(segundosAteOEvento)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
    document.getElementById('contador-texto').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
},1000)