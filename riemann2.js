function showRiemann(value) {
    value = Math.min(value, 20);
    value = Math.max(value, 2);
    var n = value;
    document.getElementById('rects').src='riemann/rects' + value + '.svg';
    $('#rects').attr('data-src', 'riemann/rects' + value + '.svg');
    
    eqdivs = document.getElementsByClassName("riemann_sum");		
    for (var i = 0; i < eqdivs.length; i++) {				
	eqdivs[i].style.display = "none";
    }
    
    samplesdivs = document.getElementsByClassName("samples");
    for (var i = 0; i < samplesdivs.length; i++) {
	samplesdivs[i].style.display = "none";
    }

    document.getElementById("riemann_sum" + n).style.display = "block";
    document.getElementById("samples" + n).style.display = "block";
}

var riemannMath = document.getElementById('riemann_math');
var samples = document.getElementById('samples');

for (var k = 0; k < 19; k++) {

    var n = k + 2;
    var eqdiv = document.createElement("div");
    var samplesdiv = document.createElement("div");

    eqdiv.className = "riemann_sum";
    samplesdiv.className = "samples";
    eqdiv.id = "riemann_sum" + n;
    samplesdiv.id = "samples" + n;
    
    var sum = 0;
    for (i = 0; i < n; i++) {
	var x = 0 + (2/n)*i;
	sum += Math.pow(x, 2) - x + 1;
    }

    sum = Math.round((2/n)*sum * 100)/100;

    sumTex = '\\[\\begin{split}LS_{' + n + '}(f) &= \\sum_{k = 0}^{' + (n - 1) + '}f\\left(0 + k\\cdot\\frac{2}{' + n + '}\\right) \\frac{2}{' + n + '}\\\\';

    if (n > 5)
	sumTex += '&= \\frac{2}{' + n + '} \\left[f\\left(0\\right) + f\\left(1\\cdot\\frac{2}{'+n+'}\\right) + f\\left(2\\cdot\\frac{2}{'+n+'}\\right) + \\cdots + f\\left('+(n-1)+'\\cdot\\frac{2}{'+n+'}\\right)\\right]\\\\';
    else {
	sumTex += '&= \\frac{2}{' + n + '} \\left[f\\left(0\\right)';
	for (i = 1; i < n; i++) {
	    sumTex += ' + f\\left(' + i + ' \\cdot \\frac{2}{'+n+'}\\right)';
	}
	sumTex += '\\right]\\\\';
    }
    sumTex += '&=' + sum + '\\end{split}\\]';
    eqdiv.innerHTML = sumTex;
    samplesdiv.innerHTML = '\\[n = '+n+',\\quad \\Delta x = \\frac{b - a}{n} = \\frac{2}{'+n+'}.\\]';

    riemannMath.appendChild(eqdiv);
    samples.appendChild(samplesdiv);
    eqdiv.style.display = "none";
    samplesdiv.style.display = "none";
}
MathJax.Hub.Queue(["Typeset", MathJax.Hub, riemannMath]);
MathJax.Hub.Queue(["Typeset", MathJax.Hub, samples]);

document.getElementById("samples2").style.display = "block";
document.getElementById("riemann_sum2").style.display = "block";
