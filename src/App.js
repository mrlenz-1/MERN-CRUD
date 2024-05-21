//import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom';
import Library from './components/library/library';
import Header from './components/header/header';
import NotFound from './components/notfound/notfound';
import PostBook from './components/postBook/postBook';
import UpdateBook from './components/updateBook/updateBook';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Library></Library>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      <Route path="/book" element={<PostBook></PostBook>}></Route>
      <Route path="/book/:id" element={<UpdateBook></UpdateBook>}></Route>
    </Routes>
    </>
  );
}

export default App;
