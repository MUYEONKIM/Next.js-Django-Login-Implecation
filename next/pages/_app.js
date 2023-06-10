// import '@/styles/globals.css'
import Footer from "../src/commons/layout/footer/footer"
import Navbar from "../src/commons/layout/navbar/navbar";
import { AuthProvider } from "../src/components/AuthContext/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <Navbar />
      <Component {...pageProps} />
      </AuthProvider>
       <Footer />
    </div>
  )
}
