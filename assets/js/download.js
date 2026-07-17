// Architecture tab switcher for download page
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.arch-tab');
  const panels = document.querySelectorAll('.arch-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const arch = tab.dataset.arch;

      // Deactivate all
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      // Activate selected
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById('panel-' + arch);
      if (panel) panel.classList.add('active');
    });
  });
});
