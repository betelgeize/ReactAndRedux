import Recipe from './Recipe'
import Summary from './Summary'
import Summary2 from './Summary2'
import Summary3 from './Summary3'
import Summary4 from './Summary4'

const Menu = ({recipes}) =>
	<article>
		<header>
			<h1>Delicious Recipes</h1>
		</header>
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
					<Summary3 {...newRecipeObj} /> {/*класс, через статические поля*/}
					<hr/>
				</section>
				})
			}
		</div>
	</article>
export default Menu
