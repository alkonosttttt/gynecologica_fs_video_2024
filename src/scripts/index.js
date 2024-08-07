import '../styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  window.addEventListener('message', (event) => {
    if (event.data) {
      document.querySelectorAll('#creative_button').forEach((button) => {
        button.href = event.data;
        button.addEventListener('click', () => {
          window.parent.postMessage({ event: 'button_click', data: { message: true } }, '*');
        });
      });
      // document.querySelector('#creative_button').href = event.data;
      // document.querySelector('#creative_button').addEventListener('click', (e) => {
      //   window.parent.postMessage({ event: 'button_click', data: { message: true } }, '*');
      // });
    }
  });
});
