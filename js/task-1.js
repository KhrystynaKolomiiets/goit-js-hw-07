const allCategories = document.querySelector('#categories');
const lengthCategories = allCategories.children.length;
console.log(`Number of categories: ${lengthCategories}`);
const categoriesTitles = document.querySelectorAll('h2');
categoriesTitles.forEach((title) => {
    console.log("Category:", title.textContent);
    console.log("Elements:", title.nextElementSibling.children.length);
});