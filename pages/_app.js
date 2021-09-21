import '../styles/style.scss'
import PostState from "../context/post/postState";

function MyApp({ Component, pageProps }) {
  return (
      <PostState>
        <Component {...pageProps} />
      </PostState>
  )
}

export default MyApp
