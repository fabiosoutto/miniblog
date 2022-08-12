//CSS
import styles from './Search.module.css';

import { Link } from 'react-router-dom';

//Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

//Components
import PostDetail from '../../components/PostDetail';

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const {documents: posts} = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
        <h1>Pesquisar</h1>
        {posts && posts.length === 0 && (
            <div className={styles.noposts}>
            <p>Não foram encontrados post a partir de sua busca...</p>
            <Link to="/" className="btn btn-dark">
                Voltar
            </Link>
            </div>
        )}
        <div>
            {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        </div>
    </div>
  );
};

export default Search;