function verificarTriangulo() {
    var ladoA = parseFloat(document.getElementById("LadoA").value)
    var ladoB = parseFloat(document.getElementById("LadoB").value)
    var ladoC = parseFloat(document.getElementById("LadoC").value)

    if (ladoA == ladoB || ladoB == ladoC) {
        document.getElementById("Out2").value = "Equilatero"
    } if (ladoA != ladoB && ladoB != ladoC && ladoB != ladoA) {
        document.getElementById("Out2").value = "Escaleno"
    } else {
        document.getElementById("Out2").value = "Isoceles"
    }
}