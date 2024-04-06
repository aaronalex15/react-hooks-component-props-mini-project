import {blogData} from "../data/blog";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);

const App = () => {
  const blogName = "The Power of React";
  const blogAbout = "Unwrapping the power of React and learning key concepts";
  const post = [
      {
        id: 1,
        title: "Components 101",
        date: "December 15, 2020",
        preview: "Setting up the building blocks of your site",
        minutes: 5,
      },
      {
        id: 2,
        title: "React Data Flow",
        date: "December 11, 2020",
        preview: "Passing props is never passé",
        minutes: 15,
      },
      {
        id: 3,
        title: "Function vs Class Components",
        preview: "React, meet OOJS.",
        minutes: 47,
      },
    ]


  return (
    <div>
      <Header name={blogName} />
      <About about ={blogAbout} />
      <ArticleList posts={post} />
      <Article id={1} title="Components 101" date= "December 15, 2020" preview= "Setting up the building blocks of your site" />
    </div>
  )
}

export default App;








