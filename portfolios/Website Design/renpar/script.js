// script.js
// Fetches productos.csv, parses it, and populates .productos-container
// Expects CSV with header: id,categoria,nombre,subtitulo,detalle,empresa,tipo

document.addEventListener('DOMContentLoaded', () => {
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
      const groups = {};
      const order = [];
      for (const it of items) {
        const cat = it.categoria || 'uncategorized';
        if (!groups[cat]) { groups[cat] = []; order.push(cat); }
        groups[cat].push(it);
      }

      // Clear existing children (so script can regenerate)
      productosContainer.innerHTML = '';

      for (const categoria of order) {
        const group = groups[categoria];

        // Create tab <div class="tab {categoria}">
        const tab = document.createElement('div');
        tab.className = `tab ${cssSafe(categoria)}`;

        // Brand image (uses empresa from first product)
        const empresa = group[0].empresa || '';
        const brandImg = createImgWithFallback(`assets/images/marcas/${empresa}`, ['png','jpg','jpeg','svg']);
        brandImg.className = 'producto-marcas';
        brandImg.alt = empresa || categoria;
        tab.appendChild(brandImg);

        tab.appendChild(document.createElement('br'));

        // Separator + Tipo header (use first product tipo, or join unique tipos)
        const tipos = Array.from(new Set(group.map(g => g.tipo).filter(Boolean)));
        const tipoText = tipos.length ? tipos.join(' / ') : '';

        const sep1 = h4Inline('————————————————————');
        const headerTipo = h4Inline(tipoText);
        const sep2 = h4Inline('————————————————————');

        tab.appendChild(sep1);
        tab.appendChild(headerTipo);
        tab.appendChild(sep2);

        // productos-lista
        const lista = document.createElement('div');
        lista.className = 'productos-lista';

        group.forEach((p, idx) => {
          // product image
          const pid = p.id || '';
          const prodImg = createImgWithFallback(`assets/images/productos/${pid}`, ['png','jpg','jpeg']);
          lista.appendChild(prodImg);

          // info block
          const info = document.createElement('div');
          info.className = 'inline-block';

          const nombre = document.createElement('h3');
          nombre.className = 'nombre';
          // CSV may contain newlines inside name; preserve them as <br>
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

          // new-line divider between items (mimic original structure)
          if (idx !== group.length - 1) {
            const brdiv = document.createElement('div');
            brdiv.className = 'new-line';
            lista.appendChild(brdiv);
          }
        });

        tab.appendChild(lista);
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
  // turn "Abrasivos y Complementos" into "abrasivos-y-complementos"
  return String(name).toLowerCase().trim().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'');
}

function createImgWithFallback(basePath, exts = ['png']) {
  // returns an <img> element that tries basePath + ext in order using onerror
  const img = document.createElement('img');
  let tryIndex = 0;
  const tryNext = () => {
    if (tryIndex >= exts.length) return;
    img.src = `${basePath}.${exts[tryIndex]}`;
    tryIndex++;
  };
  img.addEventListener('error', () => {
    // try next extension if available
    if (tryIndex < exts.length) tryNext();
    else {
      // final fallback: leave broken image or set a transparent 1x1
      img.removeEventListener('error', arguments.callee);
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
