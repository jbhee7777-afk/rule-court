// 경기장 그림과 대체 아이콘 (index.html에서 씀)
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // 종목 아이콘
  const ICON = {
    basketball: '<circle cx="24" cy="24" r="17" fill="#e8772e"/><g fill="none" stroke="#3a1f0d" stroke-width="2"><path d="M7 24h34M24 7v34"/><path d="M12 12c6 6 6 18 0 24M36 12c-6 6-6 18 0 24"/></g>',
    soccer: '<circle cx="24" cy="24" r="17" fill="#fff" stroke="#1d2433" stroke-width="2"/><path d="M24 17l6.6 4.8-2.5 7.8h-8.2l-2.5-7.8z" fill="#1d2433"/><g stroke="#1d2433" stroke-width="2" fill="none"><path d="M24 17V8M30.6 21.8l8.4-2.6M28.1 29.6l5.2 7.2M19.9 29.6l-5.2 7.2M17.4 21.8L9 19.2"/></g>',
    handball: '<circle cx="24" cy="24" r="17" fill="#f2c94c"/><g fill="none" stroke="#5a3d06" stroke-width="2"><path d="M9 17c10 4 20 4 30 0M9 31c10-4 20-4 30 0M24 7c-5 10-5 24 0 34"/></g>',
    flagfootball: '<ellipse cx="24" cy="24" rx="19" ry="11" transform="rotate(-30 24 24)" fill="#8a4b24"/><g stroke="#fff" stroke-width="2" fill="none"><path d="M17 28l14-8"/><path d="M20 22l2 3.5M23.5 20l2 3.5M27 18l2 3.5"/></g><path d="M36 30l6 10" stroke="#e4580b" stroke-width="4" stroke-linecap="round"/>',
    netball: '<path d="M24 20v24" stroke="#1d2433" stroke-width="3"/><ellipse cx="24" cy="15" rx="10" ry="4" fill="none" stroke="#e4580b" stroke-width="3"/><path d="M15 16l3 9h12l3-9" fill="none" stroke="#1d2433" stroke-width="1.5" stroke-dasharray="2 2"/><circle cx="35" cy="34" r="7" fill="#f2c94c"/>',
    floorball: '<path d="M10 6l18 30h10" fill="none" stroke="#1d2433" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17" cy="36" r="7" fill="#fff" stroke="#1d2433" stroke-width="2"/><g fill="#1d2433"><circle cx="15" cy="34" r="1.4"/><circle cx="19.5" cy="34" r="1.4"/><circle cx="17" cy="38.5" r="1.4"/></g>',
    dodgeball: '<circle cx="28" cy="24" r="14" fill="#d94848"/><path d="M20 15c4 6 4 12 0 18" fill="none" stroke="#fff" stroke-width="2"/><g stroke="#8a93a6" stroke-width="3" stroke-linecap="round"><path d="M4 18h8M2 25h9M5 32h7"/></g>',
    baseball: '<circle cx="24" cy="24" r="17" fill="#fff" stroke="#1d2433" stroke-width="2"/><g fill="none" stroke="#d63a3a" stroke-width="2"><path d="M13 11c5 7 5 19 0 26M35 11c-5 7-5 19 0 26"/><path d="M12 16l3 -1M13 21l3 0M13 27l3 0M12 32l3 1M36 16l-3 -1M35 21l-3 0M35 27l-3 0M36 32l-3 1"/></g>',
    kickball: '<circle cx="24" cy="21" r="15" fill="#d94848"/><path d="M12 14c8 3 16 3 24 0M12 28c8-3 16-3 24 0" fill="none" stroke="#fff" stroke-width="2"/><path d="M6 42h36" stroke="#1d2433" stroke-width="3" stroke-linecap="round"/><path d="M16 42l4-4h8l4 4z" fill="#fff" stroke="#1d2433" stroke-width="1.5"/>',
    teeball: '<circle cx="24" cy="12" r="8" fill="#f2c94c" stroke="#1d2433" stroke-width="1.5"/><path d="M22 20h4v16h-4z" fill="#1d2433"/><path d="M12 40h24l-4-4H16z" fill="#1d2433"/>',
    volleyball: '<circle cx="24" cy="24" r="17" fill="#fff" stroke="#1d2433" stroke-width="2"/><path d="M24 7c-2 9 2 16 12 21M24 24c-9 1-14 6-15 12M24 24c4-6 11-9 16-7" fill="none" stroke="#2f6bd8" stroke-width="3"/>',
    badminton: '<path d="M16 8l16 0-4 22h-8z" fill="#fff" stroke="#1d2433" stroke-width="1.8" stroke-linejoin="round"/><path d="M18.5 14h11M19.5 21h9M24 8v22" stroke="#1d2433" stroke-width="1.3"/><path d="M19 30h10v4a5 5 0 0 1-10 0z" fill="#e4580b"/>',
    tabletennis: '<circle cx="20" cy="20" r="13" fill="#d63a3a"/><path d="M29 29l9 9" stroke="#8a4b24" stroke-width="6" stroke-linecap="round"/><circle cx="38" cy="12" r="5" fill="#fff" stroke="#1d2433" stroke-width="1.5"/>',
    curling: '<ellipse cx="24" cy="32" rx="18" ry="8" fill="#7c8597"/><path d="M6 28v4c0 4.4 8 8 18 8s18-3.6 18-8v-4" fill="#5d6577"/><ellipse cx="24" cy="28" rx="18" ry="8" fill="#9aa3b5"/><path d="M20 26v-10h14" fill="none" stroke="#e4580b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  // 경기장 그림 (viewBox 0 0 400 240)
  const L = 'fill="none" stroke="var(--courtline)" stroke-width="2"';
  const mirror = g => g + '<g transform="translate(400 0) scale(-1 1)">' + g + '</g>';
  const COURT = {
    basketball: () => '<rect x="0" y="0" width="400" height="240" fill="var(--wood)"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (i * 20 + 10) + 'H400" stroke="var(--wood-2)" stroke-width="1"/>').join('') +
      '<rect x="8" y="8" width="384" height="224" ' + L + '/><path d="M200 8V232" ' + L + '/><circle cx="200" cy="120" r="22" ' + L + '/>' +
      mirror('<rect x="8" y="92" width="68" height="56" fill="var(--paint)" opacity=".55"/><rect x="8" y="92" width="68" height="56" ' + L + '/><circle cx="76" cy="120" r="22" ' + L + '/>' +
        '<path d="M8 24H44A100 100 0 0 1 44 216H8" ' + L + '/><path d="M20 108V132" stroke="var(--courtline)" stroke-width="3"/><circle cx="26" cy="120" r="5" fill="none" stroke="var(--accent)" stroke-width="2.5"/>'),
    soccer: () => '<rect x="0" y="0" width="400" height="240" fill="var(--grass)"/>' +
      Array.from({ length: 8 }, (_, i) => i % 2 ? '<rect x="' + (i * 50) + '" y="0" width="50" height="240" fill="var(--grass-2)"/>' : '').join('') +
      '<rect x="8" y="8" width="384" height="224" ' + L + '/><path d="M200 8V232" ' + L + '/><circle cx="200" cy="120" r="28" ' + L + '/><circle cx="200" cy="120" r="2.5" fill="var(--courtline)"/>' +
      mirror('<rect x="8" y="64" width="58" height="112" ' + L + '/><rect x="8" y="96" width="20" height="48" ' + L + '/><circle cx="48" cy="120" r="2.5" fill="var(--courtline)"/>' +
        '<path d="M66 100A26 26 0 0 1 66 140" ' + L + '/><rect x="1" y="106" width="7" height="28" fill="none" stroke="var(--courtline)" stroke-width="2.5"/>' +
        '<path d="M8 16A8 8 0 0 0 16 8M8 224A8 8 0 0 1 16 232" ' + L + '/>'),
    handball: () => '<rect x="0" y="0" width="400" height="240" fill="var(--area)" opacity=".85"/>' +
      '<rect x="8" y="8" width="384" height="224" ' + L + '/><path d="M200 8V232" ' + L + '/>' +
      mirror('<path d="M8 70A50 50 0 0 1 8 170Z" fill="var(--courtline)" opacity=".18"/><path d="M8 70A50 50 0 0 1 8 170" ' + L + '/><path d="M8 40A80 80 0 0 1 8 200" ' + L + ' stroke-dasharray="6 5"/>' +
        '<path d="M70 113V127" stroke="var(--courtline)" stroke-width="3"/><rect x="1" y="106" width="7" height="28" fill="none" stroke="var(--accent)" stroke-width="2.5"/>'),
    flag: () => '<rect x="0" y="0" width="400" height="240" fill="var(--grass)"/>' +
      '<rect x="8" y="8" width="40" height="224" fill="var(--area)" opacity=".55"/><rect x="352" y="8" width="40" height="224" fill="var(--net)" opacity=".55"/>' +
      '<rect x="8" y="8" width="384" height="224" ' + L + '/><path d="M48 8V232M352 8V232M200 8V232" ' + L + '/>' +
      '<path d="M68 8V232M332 8V232" ' + L + ' stroke-dasharray="4 6"/>' +
      '<path d="M300 8V232" stroke="var(--accent)" stroke-width="3" stroke-dasharray="10 6"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (48 + (i + 1) * 38) + ' 14v8M' + (48 + (i + 1) * 38) + ' 218v8" stroke="var(--courtline)" stroke-width="2"/>').join(''),
    netball: () => '<rect x="0" y="0" width="400" height="240" fill="var(--target)" opacity=".75"/>' +
      '<rect x="8" y="8" width="384" height="224" ' + L + '/><path d="M136 8V232M264 8V232" ' + L + '/><circle cx="200" cy="120" r="9" ' + L + '/>' +
      mirror('<path d="M8 66A54 54 0 0 1 8 174" ' + L + '/><circle cx="12" cy="120" r="5" fill="none" stroke="var(--accent)" stroke-width="2.5"/>'),
    floorball: () => '<rect x="0" y="0" width="400" height="240" fill="var(--field)" opacity=".8"/>' +
      '<rect x="8" y="8" width="384" height="224" rx="26" fill="none" stroke="var(--courtline)" stroke-width="4"/><path d="M200 8V232" ' + L + '/><circle cx="200" cy="120" r="3" fill="var(--courtline)"/>' +
      mirror('<rect x="14" y="80" width="58" height="80" ' + L + '/><rect x="22" y="104" width="22" height="32" ' + L + '/><rect x="24" y="110" width="7" height="20" fill="none" stroke="var(--accent)" stroke-width="2.5"/>' +
        '<path d="M120 8V232" ' + L + ' stroke-dasharray="3 6"/>'),
    dodge: () => '<rect x="0" y="0" width="400" height="240" fill="var(--wood)"/>' +
      '<rect x="4" y="4" width="392" height="232" ' + L + ' stroke-dasharray="5 5"/>' +
      '<rect x="40" y="36" width="320" height="168" fill="var(--wood-2)"/><rect x="40" y="36" width="320" height="168" ' + L + ' stroke-width="3"/><path d="M200 36V204" stroke="var(--accent)" stroke-width="3"/>',
    diamond: tee => '<rect x="0" y="0" width="400" height="240" fill="var(--grass)"/>' +
      '<path d="M200 210L389 27A260 260 0 0 0 11 27Z" fill="var(--grass-2)"/>' +
      '<path d="M200 222L272 150L200 80L128 150Z" fill="var(--dirt)"/><path d="M200 210L262 150L200 90L138 150Z" fill="var(--grass)"/>' +
      '<path d="M200 210L392 24M200 210L8 24" ' + L + '/><path d="M200 210L262 150L200 90L138 150Z" ' + L + '/>' +
      (tee ? '' : '<circle cx="200" cy="155" r="9" fill="var(--dirt)"/><rect x="195" y="153" width="10" height="3" fill="var(--courtline)"/>') +
      '<g fill="var(--courtline)"><rect x="256" y="144" width="12" height="12" transform="rotate(45 262 150)"/><rect x="194" y="84" width="12" height="12" transform="rotate(45 200 90)"/><rect x="132" y="144" width="12" height="12" transform="rotate(45 138 150)"/><path d="M194 206h12v5l-6 5-6-5z"/></g>' +
      '<g font-family="Jua, sans-serif" font-size="12" text-anchor="middle" fill="#fff" stroke="rgba(0,0,0,.45)" stroke-width="3" paint-order="stroke"><text x="288" y="154">1루</text><text x="200" y="74">2루</text><text x="112" y="154">3루</text><text x="228" y="226">홈</text></g>' +
      (tee ? '<path d="M179 189A30 30 0 0 1 221 189" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/><path d="M200 218v-10" stroke="var(--ink)" stroke-width="3"/><circle cx="200" cy="205" r="4" fill="var(--courtline)" stroke="var(--ink)" stroke-width="1.5"/>' : ''),
    volley: () => '<rect x="0" y="0" width="400" height="240" fill="var(--net)" opacity=".2"/><rect x="0" y="0" width="400" height="240" fill="var(--wood)" opacity=".55"/>' +
      '<rect x="40" y="40" width="320" height="160" fill="var(--net)" opacity=".7"/>' +
      '<rect x="40" y="40" width="320" height="160" ' + L + '/><path d="M147 40V200M253 40V200" ' + L + '/>' +
      '<path d="M200 26V214" stroke="var(--ink)" stroke-width="4"/><circle cx="200" cy="26" r="4" fill="var(--ink)"/><circle cx="200" cy="214" r="4" fill="var(--ink)"/>' +
      '<path d="M40 40H18M40 200H18M360 40H382M360 200H382" ' + L + ' stroke-dasharray="3 4"/>',
    badminton: () => '<rect x="0" y="0" width="400" height="240" fill="var(--field)" opacity=".75"/>' +
      '<rect x="20" y="38" width="360" height="164" ' + L + '/><path d="M20 50H380M20 190H380" ' + L + '/>' +
      '<path d="M147 38V202M253 38V202M40 38V202M360 38V202" ' + L + '/><path d="M20 120H147M253 120H380" ' + L + '/>' +
      '<path d="M200 28V212" stroke="var(--ink)" stroke-width="4"/>',
    table: () => '<rect x="0" y="0" width="400" height="240" fill="var(--sunk)"/>' +
      '<rect x="40" y="31" width="320" height="178" rx="3" fill="var(--tablet)"/><rect x="40" y="31" width="320" height="178" rx="3" fill="none" stroke="var(--courtline)" stroke-width="4"/>' +
      '<path d="M40 120H360" stroke="var(--courtline)" stroke-width="1.5"/><path d="M200 20V220" stroke="var(--ink)" stroke-width="5"/>',
    curling: () => '<rect x="0" y="0" width="400" height="240" fill="var(--wood)"/>' +
      '<rect x="8" y="60" width="384" height="120" fill="var(--sunk)"/><rect x="8" y="60" width="384" height="120" ' + L + '/>' +
      '<circle cx="330" cy="120" r="50" fill="var(--area)"/><circle cx="330" cy="120" r="34" fill="var(--courtline)"/><circle cx="330" cy="120" r="18" fill="var(--net)"/><circle cx="330" cy="120" r="6" fill="var(--courtline)"/>' +
      '<path d="M40 60V180" stroke="var(--ink)" stroke-width="2.5"/><path d="M210 60V180" stroke="var(--bad)" stroke-width="3.5"/><path d="M380 60V180" stroke="var(--ink)" stroke-width="2.5"/>'
  };
  window.COURTS = { ICON, COURT, esc };
})();
