document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.getElementById('site-menu');
  if (!button || !menu) return;
  const close = () => {
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', '開啟導覽選單');
    button.textContent = '☰';
  };
  button.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? '關閉導覽選單' : '開啟導覽選單');
    button.textContent = open ? '×' : '☰';
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  window.addEventListener('resize', () => { if (window.innerWidth > 780) close(); });
});
