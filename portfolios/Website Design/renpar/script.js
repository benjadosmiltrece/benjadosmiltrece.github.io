// Fetches productos.csv, parses it, and populates .productos-container
document.addEventListener('DOMContentLoaded', () => {
  animarCintas();

  const CSV_PATH = 'productos.csv';
  const productosContainer = document.querySelector('.productos-container');
  if (!productosContainer) return console.warn('No .productos-container found in DOM.');

  fetch(CSV_PATH)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch ${CSV_PATH}: ${res.status}`);
      return res.text();
    })
    .then(text => {
      const rows = parseCSV(text);
      if (!rows.length) return;
      const headers = rows[0].map(h => h.trim());
      const items = rows.slice(1).map(r => {
        const obj = {};
        for (let i = 0; i < headers.length; i++) {
          obj[headers[i]] = (r[i] ?? '').trim();
        }
        return obj;
      });

      // Group by categoria (preserve order of first appearance)
      const catGroups = {};
      const catOrder = [];
      for (const it of items) {
        const cat = it.categoria || 'uncategorized';
        if (!catGroups[cat]) { catGroups[cat] = []; catOrder.push(cat); }
        catGroups[cat].push(it);
      }

      // Clear existing children (so script can regenerate)
      productosContainer.innerHTML = '';

      for (const categoria of catOrder) {
        const group = catGroups[categoria];

        // Create tab <div class="tab {categoria}">
        const tab = document.createElement('div');
        tab.className = `tab ${cssSafe(categoria)}`;

        // Within this category, group by tipo in order of first appearance
        const tipoGroups = {};
        const tipoOrder = [];
        for (const it of group) {
          const tipo = it.tipo || '';
          if (!tipoGroups[tipo]) { tipoGroups[tipo] = []; tipoOrder.push(tipo); }
          tipoGroups[tipo].push(it);
        }

        // Track last empresa used so we don't duplicate marca img if same empresa repeats
        let lastEmpresa = null;

        // For each tipo create its own marca image + headers + productos-lista
        for (const tipo of tipoOrder) {
          const tipoItems = tipoGroups[tipo];

          // Brand image (uses empresa from first product in this tipo)
          const empresa = (tipoItems[0] && tipoItems[0].empresa) || '';

          // Only append a new marca image if empresa changed (and only try to append when empresa is truthy)
          if (empresa !== lastEmpresa) {
            if (empresa) {
              const brandImg = createImgWithFallback(`assets/images/marcas/${empresa}`, ['png','jpg','jpeg','svg']);
              brandImg.className = 'producto-marcas';
              brandImg.alt = empresa || tipo || categoria;
              tab.appendChild(brandImg);
              tab.appendChild(document.createElement('br'));
            }
            // update lastEmpresa even if empresa is falsy so equal-empty types won't re-append
            lastEmpresa = empresa;
          }

          // Separator + Tipo header
          const sep1 = h4Inline('————————————————————');
          const headerTipo = h4Inline(tipo || '');
          const sep2 = h4Inline('————————————————————');

          tab.appendChild(sep1);
          tab.appendChild(headerTipo);
          tab.appendChild(sep2);

          // productos-lista
          const lista = document.createElement('div');
          lista.className = 'productos-lista';

          tipoItems.forEach((p, idx) => {
            // product image
            const pid = p.id || '';
            const prodImg = createImgWithFallback(`assets/images/productos/${pid}`, ['png','jpg','jpeg']);
            lista.appendChild(prodImg);

            // info block
            const info = document.createElement('div');
            info.className = 'inline-block';

            const nombre = document.createElement('h3');
            nombre.className = 'nombre';
            nombre.innerHTML = escapeHtml(p.nombre || '').replace(/\n/g, '<br>');
            info.appendChild(nombre);

            const subt = document.createElement('h4');
            subt.className = 'subtitulo';
            subt.textContent = p.subtitulo || '';
            info.appendChild(subt);

            const det = document.createElement('p');
            det.className = 'detalle';
            det.textContent = p.detalle || '';
            info.appendChild(det);

            lista.appendChild(info);

            // divider between items
            if (idx !== tipoItems.length - 1) {
              const brdiv = document.createElement('div');
              brdiv.className = 'new-line';
              lista.appendChild(brdiv);
            }
          });

          tab.appendChild(lista);
        }

        productosContainer.appendChild(tab);
      }
    })
    .catch(err => {
      console.error(err);
    });

});
// -- helpers --
function h4Inline(text) {
  const el = document.createElement('h4');
  el.className = 'inline-block';
  el.textContent = text;
  return el;
}
function cssSafe(name) {
  return String(name).toLowerCase().trim().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'');
}
function createImgWithFallback(basePath, exts = ['png']) {
  const img = document.createElement('img');
  let tryIndex = 0;
  const tryNext = () => {
    if (tryIndex >= exts.length) return;
    img.src = `${basePath}.${exts[tryIndex]}`;
    tryIndex++;
  };
  img.addEventListener('error', function onErr() {
    if (tryIndex < exts.length) tryNext();
    else {
      img.removeEventListener('error', onErr);
      // optional: provide a 1x1 transparent fallback to avoid broken icon
      // img.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
    }
  });
  tryNext();
  return img;
}
// Simple CSV parser that supports quoted fields with commas and newlines
function parseCSV(text) {
  const rows = [];
  let cur = '';
  let row = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i+1] === '"') { cur += '"'; i++; } // escaped quote
        else inQuotes = false;
      } else {
        cur += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        row.push(cur);
        cur = '';
      } else if (ch === '\r') {
        continue;
      } else if (ch === '\n') {
        row.push(cur);
        rows.push(row);
        row = [];
        cur = '';
      } else {
        cur += ch;
      }
    }
  }
  // push last
  if (cur !== '' || row.length) {
    row.push(cur);
    rows.push(row);
  }
  // remove empty trailing row if the file ends with newline
  if (rows.length && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === '') {
    rows.pop();
  }
  return rows;
}
function escapeHtml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


const cintaMarcas = document.getElementById('cinta-marcas');

function animarCintas() {
  // reset instantly
  cintaMarcas.style.transition = '0ms';
  cintaMarcas.style.transform = 'translateX(0)';

  // force the browser to apply the reset
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // animate smoothly
      cintaMarcas.style.transition = '30000ms linear';
      cintaMarcas.style.transform = 'translateX(-2285px)';
    });
  });
}

animarCintas();

cintaMarcas.addEventListener('transitionend', (event) => {
  if (event.propertyName === 'transform') {
    animarCintas();
  }
});

