import React from 'react'
import Header from './Components/Header'
import Center from './Components/Center/Center'
import Center2 from './Components/Center2/Center2'
import Center3 from './Components/Center3/Center3'
import Center4 from './Components/Center4/Center4'
import Accordion from './Components/Accordion/Accordion';
import "./App.css"
import End from './Components/End/End'


const accordionItems = [
  { title: 'What is Netflix?', content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There s always something new to discover, and new TV shows and movies are added every week' },
  { title: 'How much does Netflix cost?', content: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.' },
  { title: 'Where can I watch?', content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles .You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." },
  { title: 'How do I cancel?', content: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
  { title: 'What can I watch on Netflix?', content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
  { title: 'Is Netflix good for kids?', content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." },
  // Add more items as needed
];

const App = () => {
  return (
    <div className='main-div'>
      <Header/>
      <Center/>
      <Center2/>
      <Center3/>
      <Center4/>
      <hr/>
      <div className="App">
      <h1 className='A-txt1'>Frequently Asked Questions</h1>
      <Accordion items={accordionItems} />
      
       
      </div>
  
  <End/>
  
  </div> 
  )
}

export default App

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

