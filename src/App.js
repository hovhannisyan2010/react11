import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';

function App() {
  const arr = [
    {
      title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      text:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      title:"qui est esse",
      text:"est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",
      text:"et iusto sed quo iurevoluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
      title:"eum et est occaecati",
      text:"ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
    {
      title:"nesciunt quas odio",
      text:"repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
    },
    {
      title:"dolorem eum magni eos aperiam quia",
      text:"ut aspernatur corporis harum nihil quis provident sequi molitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
    },
    {
      title:"magnam facilis autem",
      text:"dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas"
    },
    {
      title:"dolorem dolore est ipsam",
      text:"dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae"
    },
  ]
  return (
    <div className="App">
      <Header/>
    
    <div className='parent'>
      {arr.map((e,i)=>{
        return <Card arr={e} id={i+1}/>
        
      })
      }
      </div>
    </div>
  );
}

export default App;
