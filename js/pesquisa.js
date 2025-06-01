document.getElementById('pesquisa-botao').addEventListener('click', function() {
    let termoBusca = document.getElementById('pesquisa-input').value;
    if (!termoBusca) return;


    document.querySelectorAll('.highlight').forEach(function(item) {
        item.classList.remove('highlight');
    });


    let regex = new RegExp(`(${termoBusca})`, 'gi');

   
    function highlightText(element) {
        if (element.nodeType === 3) { 
            let match = element.data.match(regex);
            if (match) {
                let span = document.createElement('span');
                span.innerHTML = element.data.replace(regex, `<span class="highlight">$1</span>`);
                element.replaceWith(span);
            }
        } else if (element.nodeType === 1 && element.childNodes) { 
            element.childNodes.forEach(highlightText);
        }
    }

    highlightText(document.body);
});
