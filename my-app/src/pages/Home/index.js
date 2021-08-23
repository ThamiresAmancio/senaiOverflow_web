import Header from "../../components/Header";
import { Main, FeedContainer, Post, GitsIcon, Profile} from "./styles";
import Coments from "../../components/coments";
import { FaLinkedin } from "react-icons/fa";



function Home(){

    const posts = [{
        author: {
            name: "Fulano",
        },
        created_at: "10/10/2021",
        title: "Este é um post sobre JS",
        description: "JS é uma linguagem de programação muito top",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        gist: "https://github.com.br/",
        categories: [
            "JS", "Back-end", "Express"
        ],
        coments: [
            {
                author: {
                    name: "Ciclano",
                },
                created_at: "11/10/2021",
                description: "Realmente JS é muito legal"
            }
        ]
    }];
         
    return (
        <>
            <Header />
            <Main>
                <Profile>
                    Profile

                    <img src ="https://avatars.githubusercontent.com/u/74717575?v=4"/>
                    <div>
                        <strong>Thamires Amâncio</strong>
                    </div>
                    <div>
                        <strong>RA:20272597</strong>
                    </div>
                    <div>
                         <strong>thamyamancio17@gmail.com</strong>
                    </div>
                    <div>
                    <GitsIcon/>
                    <FaLinkedin/>
                    </div>
                    
                </Profile>
                <FeedContainer >
                    {posts.map(post => <PostCard post={post} />)}
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard ({post}) {
    return (
        <Post>
        <header>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
            <div>
                <strong>
                    por {post.author.name}
                </strong>
                <p>
                    {post.created_at}
                </p>
                </div>
                {post.gist && <GitsIcon/>}
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
            <img src={post.image}/>
            <section>
                {post.categories.map(category => <p>{category}</p>)}
            </section>
        </main>
        <footer>
            <h2>Comentários</h2>
            {post.coments.map(coment => <Coments coment={coment}/>)}
        </footer>
    </Post>
    );
}


export default Home;