const loadCategory = () => {
  const url = " https://taxi-kitchen-api.vercel.app/api/v1/categories";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCateogry(data.categories));
};

const displayCateogry = (categories) => {
  // 4 steps to show the data in the UI
  const catContainer = document.getElementById("category-container");
  catContainer.innerHTML = "";
  for (let cat of categories) {
    // Create html element
    const categoryCard = document.createElement("div");
    categoryCard.innerHTML = `
        <button class="btn justify-start btn-block shadow btn-category">
            <img
              src="${cat.categoryImg}"
              alt=""
              class="w-10"
            />${cat.categoryName}
          </button>
    `;
    catContainer.append(categoryCard);
  }
};
loadCategory();
