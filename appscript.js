  (() => {
    const home = document.getElementById('home');
    const tipsPage = document.getElementById('tips-page');
    const budgetPage = document.getElementById('budget-page');
    const modal = document.getElementById('modal');
    const modalDesc = document.getElementById('modal-desc');
    const modalTitle = document.getElementById('modal-title');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    const btnTips = document.getElementById('btn-tips');
    const btnBudget = document.getElementById('btn-budget');
    const btnBackFromTips = document.getElementById('btn-back-from-tips');
    const btnBackFromBudget = document.getElementById('btn-back-from-budget');
    const tipsList = document.getElementById('tips-list');

    const tipsData = [
      { title: "Tip 1", text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean. for tip 1 goes here. This is filler text for demonstration." },
      { title: "Tip 2", text: "TLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.his tip explains something important about the topic." },
      { title: "Tip 3", text: "Further info and Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.details about tip 3." },
      { title: "Tip 4", text: "Helpful guidancLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.e related to tip 4." },
      { title: "Tip 5", text: "Useful fLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.act or suggestion that tip 5 addresses." },
      { title: "Tip 6", text: "More Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.information about how to apply tip 6 effectively." },
      { title: "Tip 7", text: "Additional contextLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean. for tip 7." },
      { title: "Tip 8", text: "ClariLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.fication and advice related to tip 8." },
      { title: "Tip 9", text: "InsLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.ightful tip number 9 details." },
      { title: "Tip 10", text: "ImLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.portant considerations about tip 10." },
      { title: "Tip 11", text: "Best practiceLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.s and examples for tip 11." },
      { title: "Tip 12", text: "ImplemenLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.tation notes for tip 12." },
      { title: "Tip 13", text: "Warning anLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.d caution about tip 13." },
      { title: "Tip 14", text: "Encouraging Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.vice in tip 14." },
      { title: "Tip 15", text: "SummLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.ary and conclusion for tip 15." },
    ];

    function showSection(sectionToShow) {
      [home, tipsPage, budgetPage].forEach(section => {
        if (section === sectionToShow) {
          section.style.display = 'flex';
          section.setAttribute('aria-hidden', 'false');
          section.focus?.();
        } else {
          section.style.display = 'none';
          section.setAttribute('aria-hidden', 'true');
        }
      });
      closeModal();
    }

    showSection(home);

    function populateTips() {
      tipsList.innerHTML = '';
      tipsData.forEach(tip => {
        const btn = document.createElement('button');
        btn.className = 'tip-btn';
        btn.type = 'button';
        btn.textContent = tip.title;
        btn.setAttribute('aria-haspopup', 'dialog');
        btn.setAttribute('aria-controls', 'modal');
        btn.addEventListener('click', () => {
          openModal(tip.title, tip.text);
        });
        tipsList.appendChild(btn);
      });
    }

    function openModal(title, text) {
      modalTitle.textContent = title;
      modalDesc.textContent = text;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      modalCloseBtn.focus();
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (tipsPage.style.display === 'flex') {
        tipsList.querySelector('button.tip-btn')?.focus();
      } else {
        btnTips.focus();
      }
    }

    btnTips.addEventListener('click', () => {
      populateTips();
      showSection(tipsPage);
    });

    btnBudget.addEventListener('click', () => {
      showSection(budgetPage);
    });

    btnBackFromTips.addEventListener('click', () => {
      showSection(home);
    });

    btnBackFromBudget.addEventListener('click', () => {
      showSection(home);
    });

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

  })();