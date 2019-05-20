import Recipe from './Recipe'
import Summary from './Summary'
import Summary2 from './Summary2'
import Summary3 from './Summary3'
import Summary4 from './Summary4'
import AddColorForm from './AddColorForm'
import AddColorForm2 from './AddColorForm2'
import StarRating from './StarRating'
import App from './App'
import MemberList from "./MemberList";
/*import Clock from "./Clock"*/

const logColor = (title, color) => {
	console.log(`New Color: ${title} | ${color}`);
	console.log(`TODO: add new ${title} and ${color} to the list`);
	console.log(`TODO: render UI with new Color`);
};

const Menu = ({recipes}) =>
	<article>
		{/*<Clock />*/}
		<MemberList />
		<App />
		<hr />
		<header>
			<h1>Delicious Recipes</h1>
		</header>
		<StarRating/>
		<hr />
		<AddColorForm onNewColor={logColor} />
		<AddColorForm2 onNewColor={logColor} />
		<div className="recipes">
			{recipes.map((recipe, i) => {
				const newRecipeObj = {
					name: recipe.name,
					ingredients: recipe.ingredients.length,
					steps: recipe.steps.length};
				return <section key={i}>
					<Summary {...newRecipeObj} />{/*класс, через prop-types*/}
					<Recipe {...recipe} />
					<Summary2 {...newRecipeObj} /> {/*функциональный объект, через prop-types*/}
					<Summary3 {...newRecipeObj} /> {/*функциональный объект, через значения по умолчанию*/}
					<Summary4 {...newRecipeObj} /> {/*класс, через статические поля*/}
					<hr/>
				</section>
				})
			}
		</div>
	</article>
export default Menu
