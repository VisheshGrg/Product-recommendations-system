import React from 'react';
import DishCard from './DishCard';

const pizza = [
  { image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZmZlZCUyMGNydXN0JTIwcGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', name: 'stuffed crust pepperoni pizza', description: 'Description of the dish' },
  { image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG93JTIwZmF0JTIwcGVwcGVyb25pJTIwcGl6emElMjBvbiUyMGElMjBmbGF0JTIwb3V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60', name: 'low fat pepperoni pizza on a flat out', description: 'Description of the dish' },
  { image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFjb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60', name: 'robyn s fish stick tacos', description: 'Description of the dish' },
  { image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWFzeSUyMGJyZWFkJTIwbWFjaGluZSUyMHBpenphJTIwY3J1c3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', name: 'easy bread machine pizza crust', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/472068575/photo/calzone.jpg?s=612x612&w=0&k=20&c=UDXhX5xw2m8i4uEN14pT6ltyYrs-jRM9WheHvBF-hLI=', name: 'pepperoni stromboli', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1297412394/photo/you-dont-have-to-go-to-pizzeria-anymore-you-can-bake-true-italian-neapolitan-pizza-at-home.jpg?s=612x612&w=0&k=20&c=m-j2AGpxbcvHPaoIMtF5ea8noKXgUwbUNcq27_lmwu0=', name: 'quick and easy six cheese tortellini bake', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/121306639/photo/italian-pasta-with-basil.jpg?s=612x612&w=0&k=20&c=nk8cjoroBeQN38FRzFHd3R9waVw4gs8Cn_6QwsaHJt8=', name: '5 layer italian dip', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/946957208/photo/cooked-homemade-red-pizza-with-sliced-tomato-bacon-and-mushrooms.jpg?s=612x612&w=0&k=20&c=tH1JTOKpu-n11AHZVj5qguplzSfrO0yVM1BRHgfLSXE=', name: 'super crispy thin pizza crust', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/540512780/photo/smoked-mexican-meat-pizza-in-clay-oven.jpg?s=612x612&w=0&k=20&c=bza68pK82YYDy2uAGXYv07nwJp2HqmKp6JQFmXrsM28=', name: 'linda s mexican pizza', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1521941244/photo/chicken-caesar-salad-with-croutons-and-parmesan-cheese.jpg?s=612x612&w=0&k=20&c=iKXOBZQzfaNF_Cn-tEl4aZ0il_6LjAdAO1ufvR2yc7U=', name: 'low carb chicken parmesan	', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/457519953/photo/pan-roasted-pork-tenderloin-with-spaetzle.jpg?s=612x612&w=0&k=20&c=Uh-saTE1BPGLUdbFXIJbKBf1u80RUQPNkhTp9cYM2uc=', name: 'brussels sprouts in garlic butter', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/477227352/photo/oven-pizza-oven-margherita-pizza.jpg?s=612x612&w=0&k=20&c=7xNJQt1IlfIrPsSR0_M_ytsJ4Tjo3p_VctIrwTTolD4=', name: 'pita pizza', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1150537177/photo/cauliflower-pizza-crust-with-zucchini-cream-cheese-and-spring-onion.jpg?s=612x612&w=0&k=20&c=Qz5y1DwY6mD8BRv498SCpE1ySVF-DtYt87n3JW3Eubs=', name: 'no dough pizza low carb cream cheese pizza crust', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1412492900/photo/hawaiian-pizza-with-raw-cherry-tomato-black-pepper-garlic-and-mushroom-isolated-on-wooden.jpg?s=612x612&w=0&k=20&c=gVXkJNA1y38Na1FAwp2iMyvVY6G9FtY32lBCiedyzm4=', name: 'sara s hawaiian pizza', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1354931128/photo/cheese-with-herbs-and-baguette-on-the-wooden-background-close-up.jpg?s=612x612&w=0&k=20&c=XxG24DpaXOqdduvI69toKI5eF3p_RdYB653akpZQna4=', name: 'incredibly delicious cheese garlic bread spread', description: 'Description of the dish' }
];

const pasta = [
  { image: 'https://media.istockphoto.com/id/955920780/photo/penne-pasta-in-tomato-sauce-with-chicken-tomatoes-decorated-with-basil-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=D0D1CY1bqyzgN6QX959_szRBX3UZ_LJx0vXK6E5MEZI=', name: 'voodoo chicken penne', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1334714239/photo/close-up-of-baked-macaroni-in-a-glass-dish.jpg?s=612x612&w=0&k=20&c=i5-wJ9_Xii2rObq1O54IwNYop4g95CV9BHA8E0One6c=', name: 'america s test kitchen skillet baked ziti', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/482964545/photo/arrabiata-pasta.jpg?s=612x612&w=0&k=20&c=-PGU3gilnAEq1EccWXzdIvG18y9LsvegUX6ggt9Nk7w=', name: 'penne arrabbiata	', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1385774369/photo/cooking-lasagna-bolognese-stock-photo.jpg?s=612x612&w=0&k=20&c=z6W33MDlhmHmfZuzts9uUbebUnle3wjuK9sp55ytcss=', name: 'pioneer woman chicken parmigiana	', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1130860324/photo/lasagna-with-gorgonzola-cheese-in-casserole.jpg?s=612x612&w=0&k=20&c=ScTw9WXNbMT119ThH976LS1k75FRYpicZDhV592KUUA=', name: 'blue cheese pasta', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1279174111/photo/seafood-tomato-sauce-pasta-linguine.jpg?s=612x612&w=0&k=20&c=72lK9E0j7kmnJoZqrmAbndwAnJn5EuB8188LipovecU=', name: 'emeril s shrimp and pasta in a spicy tomato ch...	', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/957333512/photo/italian-colored-tortellini-with-parmesan-and-sliced-sausages-close-up-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=3l_fKXw39ghJSNalIz_JhSi_RXe8BmkSapcREhjz46A=', name: 'kittencal s caesar tortellini salad', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/174683634/photo/tortellini-in-tomato-sauce.jpg?s=612x612&w=0&k=20&c=Jnqsjcdsp-_LS0doy6FhaFi1_tGftRirZByPTxHS8Yw=', name: 'tortellini bolognese	', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/621703030/photo/delicious-green-tagliatelle-isolated-on-white.jpg?s=612x612&w=0&k=20&c=pjtz7daBNsGIcHWixmsbY2a8yiWMeqWrbRu_A3g0xKs=', name: 'cajun shrimp alfredo	', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/498303420/photo/vegetable-ratatouille-baked-in-cast-iron-frying-pan-traditional-homemade.jpg?s=612x612&w=0&k=20&c=UGtZq4rhBdg-X2bA_cwp1qXJ-7JlqofCuMjUJgee6Nc=', name: 'oven fried eggplant aubergine	', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1006587840/photo/seafood-and-pasta-sicily-spaghetti.jpg?s=612x612&w=0&k=20&c=x-5moAextwaBjhz5sgU1Cn_6RIRDOWVLMEeBNVjxUxc=', name: 'pasta with oil and garlic sauce', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1434161133/photo/delicious-recipes-and-meals-ready-to-eat-that-are-spicy-and-tasty.jpg?s=612x612&w=0&k=20&c=Rj10q5YLbZNxTNG5pFy3WZz_zBHyAv0Mn3zXQzb-VyU=', name: 'bow ties with sausage tomato and cream', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1216815662/photo/delicious-sunny-spring-omelet-with-broccoli-and-chicken-fillet-healthy-food-good-nutrition.jpg?s=612x612&w=0&k=20&c=9qh9l4SNFaOqlAUwXEMJgbGSyEty-BaAD9fbCsMJ2YU=', name: 'oven denver omelet', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1054164268/photo/garlic-butter-sauteed-clams.jpg?s=612x612&w=0&k=20&c=Tfu2zK9XTm7xrxI3_t4NiDvoZ5ToiMh-rBCDwFsazN4=', name: 'hot buttered garlic noodles', description: 'Description of the dish' },
  { image: 'https://media.istockphoto.com/id/1325963177/photo/cajun-shrimp-and-sausage-pasta.jpg?s=612x612&w=0&k=20&c=Tzh36qSskhC1B6E5HnQBHoSqIaW-r5v6ejnhyFVC3X8=', name: 'penne russo a la vodka with basil cream sauce	', description: 'Description of the dish' }
]


function DishGrid({name}) {
  return (
    <div className="dish-grid">
      
      {name=="pizza" && pizza.map((dish, index) => (
        <DishCard key={index} dish={dish} />
      ))}
      {name=="pasta" && pasta.map((dish, index) => (
        <DishCard key={index} dish={dish} />
      ))}
    </div>
  );
}

export default DishGrid;
