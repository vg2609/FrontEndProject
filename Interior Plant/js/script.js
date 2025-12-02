fetch("json/data.json")
  .then(res => res.json())
  .then(data => {
    const url = window.location.pathname;

    // HOME PAGE
    if (url.includes("index.html") || url.endsWith("/")) {
      const firstSet = data.slice(0, 8);
      const secondSet = data.slice(8);
      renderCards(firstSet, "cardSection1");
      renderCards(secondSet, "cardSection2");
    }

    // XL Indoor Page
    if (url.includes("xlIndoorIndex.html")) {
      const firstSet = data.slice(0, 8);
      const secondSet = data.slice(8);
      renderCards(firstSet, "cardSection1");
      renderCards(secondSet, "cardSection2");
    }

    // LARGE Indoor Page
    if (url.includes("largeIndoorIndex.html")) {
      const thirdSet = data.slice(0, 12); // Show 12 cards
      renderCards(thirdSet, "cardSection3");
    }
    // Small Indoor Page
     if (url.includes("smallIndoorIndex.html")) {
     const firstSet = data.slice(0, 8);
      const secondSet = data.slice(8);
      renderCards(firstSet, "cardSection1");
      renderCards(secondSet, "cardSection2");
    }
    //Plant care
      if (url.includes("plantcare.html")) {
      const fourthSet = data.slice(16, 24); // Show 12 cards
      renderCards(fourthSet, "cardSection4");
    }
  })
  .catch(err => console.error("Error loading JSON:", err));


function renderCards(plants, sectionId) {
  const container = document.getElementById(sectionId);
  container.innerHTML = "";

  plants.forEach(product => {
    container.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">₹${product.price}</p>
          <button class="card-button">Add to Basket</button>
        </div>
      </div>
    `;
  });
}


 function goToPage(link) {
    window.location.href = link;
  }
// document.addEventListener("DOMContentLoaded", function () {
//   fetch("../json/data.json") // ✅ Adjust path if needed
//     .then(res => res.json())
//     .then(data => {
//       const url = window.location.pathname.toLowerCase();

//       if (url.includes("index.html") || url.endsWith("/")) {
//         paginateCards(data.slice(0, 8), "cardSection1", "pagination1", 4);
//         paginateCards(data.slice(8), "cardSection2", "pagination2", 4);
//       }

//       if (url.includes("xlindoorindex.html")) {
//         paginateCards(data.slice(0, 8), "cardSection1", "pagination1", 4);
//         paginateCards(data.slice(8), "cardSection2", "pagination2", 4);
//       }

//       if (url.includes("largeindoorindex.html")) {
//         paginateCards(data.slice(0, 20), "cardSection3", "pagination3", 6); // adjust count as needed
//       }
//     })
    
//     .catch(err => console.error("Error loading JSON:", err));
// });

// function paginateCards(dataSet, sectionId, paginationId, cardsPerPage) {
//   let currentPage = 1;

//   function paginateData(page) {
//     const start = (page - 1) * cardsPerPage;
//     const end = start + cardsPerPage;
//     return dataSet.slice(start, end);
//   }

//   function renderPagination(totalItems) {
//     const pageCount = Math.ceil(totalItems / cardsPerPage);
//     const pagination = document.getElementById(paginationId);
//     pagination.innerHTML = "";

//     for (let i = 1; i <= pageCount; i++) {
//       const btn = document.createElement("button");
//       btn.textContent = i;
//       btn.className = "btn btn-outline-success";
//       if (i === currentPage) btn.classList.add("active");

//       btn.addEventListener("click", () => {
//         currentPage = i;
//         renderCards(paginateData(currentPage), sectionId);
//         renderPagination(dataSet.length);
//       });

//       pagination.appendChild(btn);
//     }
//   }

//   // Initial render
//   renderCards(paginateData(currentPage), sectionId);
//   renderPagination(dataSet.length);
// }

// function renderCards(plants, sectionId) {
//   const container = document.getElementById(sectionId);
//   if (!container) {
//     console.error("Missing container:", sectionId);
//     return;
//   }
//   container.innerHTML = "";

//   plants.forEach(product => {
//     container.innerHTML += `
//       <div class="card" style="width: 18rem;">
//         <img src="${product.img}" class="card-img-top" alt="${product.name}">
//         <div class="card-body">
//           <h5 class="card-title">${product.name}</h5>
//           <p class="card-text">₹${product.price}</p>
//           <button class="card-button">Add to Basket</button>
//         </div>
//       </div>
//     `;
//   });
// }
