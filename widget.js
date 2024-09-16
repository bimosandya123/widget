// Membuat elemen widget
var widgetDiv = document.createElement('div');
widgetDiv.classList.add('widget');
widgetDiv.innerHTML = 'Bold';
widgetDiv.style.position = 'fixed';
widgetDiv.style.bottom = '20px';
widgetDiv.style.right = '20px';
widgetDiv.style.width = '60px';
widgetDiv.style.height = '60px';
widgetDiv.style.backgroundColor = '#4CAF50';
widgetDiv.style.borderRadius = '50%';
widgetDiv.style.display = 'flex';
widgetDiv.style.justifyContent = 'center';
widgetDiv.style.alignItems = 'center';
widgetDiv.style.color = 'white';
widgetDiv.style.fontSize = '16px';
widgetDiv.style.cursor = 'pointer';
widgetDiv.style.zIndex = '1000';
widgetDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

widgetDiv.onclick = function() {
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.fontWeight = 'bold';
    });
};

document.body.appendChild(widgetDiv);
