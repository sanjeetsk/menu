import React,{useState} from "react";
import FilteredDish from "./Components/FilteredDish";
import DishList from "./Components/DishList";

const dishData = [
    {
      id: 1,
      title: 'Buttermilk Pancakes',
      category: 'breakfast',
      price: 15.99,
      img: 'https://tornadoughalli.com/wp-content/uploads/2021/12/BUTTERMILK-PANCAKE-RECIPE-3-1.jpg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'Diner Double',
      category: 'lunch',
      price: 13.99,
      img: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/12/Easy-Dinner-Ideas-1-1.jpg',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'Godzilla Milkshake',
      category: 'shakes',
      price: 6.99,
      img: 'https://www.howtocookthat.net/public_html/wp-content/uploads/2016/06/freakshakes-2-550x309.jpg',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'Country Delight',
      category: 'breakfast',
      price: 20.99,
      img: 'https://img.delicious.com.au/bQjDG77i/del/2021/07/spiced-peanut-butter-and-honey-pancakes-with-blackberry-cream-155151-2.jpg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'Egg Attack',
      category: 'lunch',
      price: 22.99,
      img: 'https://hips.hearstapps.com/hmg-prod/images/copycat-chipotle-burrito-bowl-index-641dd68b3263d.jpg?crop=0.647xw:0.647xh;0.171xw,0.160xh&resize=1200:*',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'Oreo Dream',
      category: 'shakes',
      price: 18.99,
      img: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/oreo-milkshake-recipe.jpg',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'Bacon Overflow',
      category: 'breakfast',
      price: 8.99,
      img: 'https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-f6d083e/sites/default/files/styles/taxonomy_1200/public/open-kitchen/categories/breakfast-peanut-butter-jelly-yogurt-bowl.jpg',
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'American Classic',
      category: 'lunch',
      price: 12.99,
      img: 'https://www.2foodtrippers.com/wp-content/uploads/2021/03/American-Food-Icons-Social-IMG.jpg',
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'Quarantine Buddy',
      category: 'shakes',
      price: 16.99,
      img: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2015_32/716996/fruit-smoothies-today-tease-1-150805.jpg',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]

const App = () =>{
    const [category, setCategory] = useState('All');
    const categories = ['All', 'breakfast', 'lunch', 'shakes'];

    return(
        <div id="main">
          <h1 style={{textAlign: "center"}}>Our Menu</h1>
          <FilteredDish
              categories={categories}
              activeCategory={category}
              setCategory={setCategory}
          />
          <DishList dishes={dishData} category={category}/>
        </div>
    )
}


export default App;
