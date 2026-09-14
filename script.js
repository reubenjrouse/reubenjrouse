(function () {
  // ---------------------------------------------------------------------
  // Build the navigation model
  //
  // The page is a list of rows (top to bottom), each with a list of
  // items (top to bottom). Arrow keys move up/down within a row's
  // items, then on to the next/previous row.
  //
  //   Intro          -> 1 row, 1 item (the section)
  //   Work history   -> 1 row, 2 items (.entry)
  //   Education      -> 1 row, 1 item (.entry)
  //   Projects       -> 1 row, 2 items (.entry)
  //   Contact        -> 1 row, 1 item (the email link)
  //   Elsewhere      -> 1 row, 2 items (GitHub, LinkedIn)
  // ---------------------------------------------------------------------

  const topSections = Array.from(document.querySelectorAll('.js-section'));
  if (!topSections.length) return;

  function getSectionItems(section) {
    const entries = Array.from(section.querySelectorAll('.entry'));
    if (entries.length) {
      return entries.map((el) => ({ el, link: el.querySelector('a'), inline: false }));
    }

    const socialLinks = Array.from(section.querySelectorAll('.socials a'));
    if (socialLinks.length) {
      return socialLinks.map((a) => ({ el: a, link: a, inline: false }));
    }

    // A lone link (e.g. Contact's email) becomes the item itself, so the
    // highlight lands on just the link rather than the whole section.
    const singleLink = section.querySelector('a');
    if (singleLink) {
      return [{ el: singleLink, link: singleLink, inline: true }];
    }

    // No link and no sub-items: the whole section is the item (Intro).
    return [{ el: section, link: null, inline: false }];
  }

  const rows = topSections.map((section) => ({ items: getSectionItems(section) }));

  // Tag every item with the CSS hook it needs and make non-link items
  // focusable via script only (tabindex -1 keeps them out of Tab order;
  // links are already focusable, so they're left untouched).
  rows.forEach((row) => {
    row.items.forEach((item) => {
      item.el.classList.add(item.inline ? 'kbnav-inline' : 'kbnav-block');
      if (item.el.tagName !== 'A') item.el.setAttribute('tabindex', '-1');
    });
  });

  // ---------------------------------------------------------------------
  // Navigation state
  // ---------------------------------------------------------------------

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let rowIndex = -1; // -1 = nothing selected yet
  let itemIndex = 0;
  let activeEl = null;

  function currentItem() {
    return rows[rowIndex].items[itemIndex];
  }

  function applyActive() {
    if (activeEl) activeEl.classList.remove('is-active');

    const item = currentItem();
    activeEl = item.el;
    activeEl.classList.add('is-active');
    activeEl.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    activeEl.focus({ preventScroll: true });
  }

  function clearActive() {
    if (activeEl) activeEl.classList.remove('is-active');
    activeEl = null;
    rowIndex = -1;
    itemIndex = 0;
  }

  // ---------------------------------------------------------------------
  // Movement
  // ---------------------------------------------------------------------

  function moveVertical(delta) {
    if (rowIndex < 0) {
      rowIndex = 0;
      itemIndex = 0;
      applyActive();
      return;
    }

    const items = rows[rowIndex].items;
    const nextItemIndex = itemIndex + delta;

    if (nextItemIndex >= 0 && nextItemIndex < items.length) {
      itemIndex = nextItemIndex;
    } else {
      const nextRowIndex = rowIndex + delta;
      if (nextRowIndex < 0 || nextRowIndex >= rows.length) return; // at the edge

      rowIndex = nextRowIndex;
      itemIndex = delta > 0 ? 0 : rows[rowIndex].items.length - 1;
    }

    applyActive();
  }

  function jumpToRow(index) {
    if (index < 0 || index >= rows.length) return;
    rowIndex = index;
    itemIndex = 0;
    applyActive();
  }

  function openCurrent() {
    if (rowIndex < 0) return;
    const link = currentItem().link;
    if (link) link.click();
  }

  // ---------------------------------------------------------------------
  // Theme toggle
  // ---------------------------------------------------------------------

  function toggleTheme() {
    const root = document.documentElement;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = root.getAttribute('data-theme')
      ? root.getAttribute('data-theme') === 'dark'
      : systemPrefersDark;

    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // localStorage unavailable (private mode, etc.) - theme just won't persist.
    }
  }

  // ---------------------------------------------------------------------
  // Keyboard handler
  // ---------------------------------------------------------------------

  function isTypingTarget(el) {
    return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
  }

  document.addEventListener('keydown', (e) => {
    if (isTypingTarget(document.activeElement)) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'j':
        e.preventDefault();
        moveVertical(1);
        break;

      case 'ArrowUp':
      case 'k':
        e.preventDefault();
        moveVertical(-1);
        break;

      case 'Enter':
        if (rowIndex >= 0) {
          e.preventDefault();
          openCurrent();
        }
        break;

      case 'm':
      case 'M':
        e.preventDefault();
        toggleTheme();
        break;

      case 'Escape':
        clearActive();
        break;

      default:
        if (e.key >= '1' && e.key <= '9') {
          const index = Number(e.key) - 1;
          if (index < rows.length) {
            e.preventDefault();
            jumpToRow(index);
          }
        }
    }
  });
})();
